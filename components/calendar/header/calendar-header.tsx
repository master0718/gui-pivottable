"use client";

import React, { FC } from 'react';
import { IDirections, IModes, TDate } from '@/redux/hooks/types/date'
import { useModal } from '@/redux/hooks';
import { createDate, getNextStartMinutes, shmoment } from '@/lib/date';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CalendarHeaderOptionGroup } from './calendar-header-option-group';
import { NextPage } from 'next';

interface ICalendarHeaderProps {
    onClickArrow: (direction: IDirections) => void;
    displayedDate: string;
    onChangeOption: (option: IModes) => void;
    selectedOption: string;
    selectedDay: TDate;
}

const modes = ['day', 'week', 'month', 'list'];

const CalendarHeader: NextPage<ICalendarHeaderProps> = ({
    onClickArrow,
    displayedDate,
    onChangeOption,
    selectedOption,
    selectedDay
}) => {
    const {
        isOpenModalCreateEvent,
        isOpenModalDayInfoEvents,
        isOpenModalEditEvent,
        openModalCreate
    } = useModal();

    const isBtnCreateEventDisable = isOpenModalCreateEvent || isOpenModalDayInfoEvents || isOpenModalEditEvent;

    const changeToPrev = () => onClickArrow('left');
    const changeToNext = () => onClickArrow('right');
    const changeToToday = () => onClickArrow('today');

    const handleOpenModal = () => {
        const date = new Date();
        const { hours, minutes } = createDate({ date: date });
        const startMins = getNextStartMinutes(minutes);
        const selectedDate = shmoment(selectedDay.date)
            .set('hours', hours)
            .set('minutes', startMins + minutes)
            .result();

        openModalCreate({ selectedDate });
    }

    return (
        <>
            <div className='flex h-14'>
                <div className='flex-none w-72 p-1 border border-r-0 border-b-0 hidden lg:block'>
                    <Button className='w-full h-8 mt-2' onClick={handleOpenModal} disabled={isBtnCreateEventDisable}>
                        <Plus className='h-4 w-4' />Event Record
                    </Button>
                </div>
                <div className='grow border flex p-1 justify-between items-center border-b-0'>
                    <div className='flex justify-start gap-1 items-center'>
                        <Button className='h-8 w-8 p-0' onClick={changeToPrev}>
                            <ChevronLeft className='h-4 w-4' />
                        </Button>
                        <Button className='h-8 w-8 p-0' onClick={changeToNext}>
                            <ChevronRight className='h-4 w-4' />
                        </Button>
                        <Button className='ml-2 h-8' onClick={changeToToday}>
                            Today
                        </Button>
                    </div>
                    <div>
                        <Label>{displayedDate}</Label>
                    </div>
                    <div className='flex justify-end'>
                        <CalendarHeaderOptionGroup
                            onChangeOption={onChangeOption}
                            options={modes}
                            selectedOption={selectedOption}
                        />
                    </div>
                </div>
            </div>
        </>
    );

};

CalendarHeader.displayName = "CalendarHeader"

export { CalendarHeader };