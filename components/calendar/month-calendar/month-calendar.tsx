"use client"

import { WheelEvent } from 'react';
import { useTypedSelector } from '@/redux/hooks';
import { IWeekDay, IMonthDay, IDirections, TMonth } from "@/redux/hooks/types/date";
import { getEventsInterval, getLongEvents, getShortEvents } from "@/lib/helpers"
import { NextPage } from 'next';
import { useThrottle } from '@/redux/hooks/use-throttle';
import { Navigation } from './navigation';
import { Month } from './month';

interface IMonthCalendarProps {
    weekDaysNames: IWeekDay[];
    calendarDaysOfMonth: IMonthDay[];
    selectedMonth: TMonth;
    onClickArrow: (direction: IDirections) => void;
}

const MonthCalendar: NextPage<IMonthCalendarProps> = ({
    weekDaysNames,
    calendarDaysOfMonth,
    selectedMonth,
    onClickArrow
}) => {
    const { events } = useTypedSelector(({ events }) => events);

    const monthEvents = getEventsInterval(calendarDaysOfMonth, events);
    const shortEvents = getShortEvents(monthEvents);
    const longEvents = getLongEvents(monthEvents);

    const changeMonth = useThrottle((e: WheelEvent<HTMLElement>) => {
        const { deltaY } = e;
        const direction = deltaY > 0 ? 'right' : 'left';
        onClickArrow(direction);
    }, 300);

    return (
        <div className="flex flex-col w-full">
            <Navigation weekDaysNames={weekDaysNames} />
            <Month
                calendarDaysOfMonth={calendarDaysOfMonth}
                selectedMonth={selectedMonth}
                shortEvents={shortEvents}
                longEvents={longEvents}
            />
        </div>
    )
}

MonthCalendar.displayName = "MonthCalendar"

export { MonthCalendar };