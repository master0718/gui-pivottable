"use client"

import { createDate } from "@/lib/date";
import { getEventsInterval, getLongEvents, getShortEvents, getSortedEvents, getStyledForLongEvent } from "@/lib/helpers";
import { useClickOutside, useModal, useTypedSelector } from "@/redux/hooks";
import { NextPage } from "next";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { LongEvent } from "@/components/calendar/common/long-event";
import { ShortEvent } from "@/components/calendar/common/short-event";

interface IModalDayInfoProps {
    selectedDate: Date;
}

const ModalDayInfo: NextPage<IModalDayInfoProps> = ({
    selectedDate
}) => {
    const { closeModalDayInfo } = useModal();
    const modalRef = useRef<HTMLDivElement>();

    const { events } = useTypedSelector(({ events }) => events);
    const selectedDay = createDate({ date: selectedDate });

    const dayEvents = getEventsInterval([selectedDay], events);

    const dayLongEvents = getLongEvents(dayEvents);
    const dayShortEvents = getShortEvents(dayEvents);

    const daySortedLongEvents = getSortedEvents(dayLongEvents);
    const daySortedShortEvents = getSortedEvents(dayShortEvents);

    const modalContentHeight = dayEvents.length * 24;
    const modalContentStyle = { height: modalContentHeight > 0 ? modalContentHeight : 'auto' };

    const handleCloseModal = () => closeModalDayInfo();

    useClickOutside(modalRef, handleCloseModal);

    return (
        <div className="">
            <div className="" ref={modalRef}>
                <Button onClick={handleCloseModal}>
                    <X />
                </Button>
            </div>
            <div className="">
                <div className="">{selectedDay.dayShort}</div>
                <div className="">{selectedDay.dayNumber}</div>
            </div>
            <div className="" style={modalContentStyle}>
                {dayEvents.length === 0 && (
                    <div className="">There are no events scheduled on this day.</div>
                )}
                {daySortedLongEvents.map((event, indx) => {
                    const { isMovingToNext, isMovingFromPrev } = getStyledForLongEvent([selectedDay], selectedDay, event);
                    const top = indx * 24;

                    return (
                        <LongEvent
                            key={event.id}
                            event={event}
                            width={102}
                            top={top}
                            color={event.color}
                            isShowEvent={true}
                            isMovingToNext={isMovingToNext}
                            isMovingFromPrev={isMovingFromPrev}
                        />
                    )
                })}
                {daySortedShortEvents.map((event, indx) => {
                    const top = (daySortedLongEvents.length + indx) * 24;

                    return (
                        <ShortEvent
                            key={event.id}
                            event={event}
                            top={top}
                        />
                    )
                })}
            </div>
        </div>
    )
}

ModalDayInfo.displayName = "ModalDayInfo";

export { ModalDayInfo };