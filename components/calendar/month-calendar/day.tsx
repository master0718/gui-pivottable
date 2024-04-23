"use client";

import { useModal } from "@/redux/hooks";
import { IMonthDay, TMonth } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { NextPage } from "next";
import { createDate, getNextStartMinutes, shmoment, checkIsToday } from "@/lib/date"
import { getStyledForLongEvent } from "@/lib/helpers";
import { LongEvent } from "@/components/calendar/common/long-event";
import { ShortEvent } from "@/components/calendar/common/short-event";

interface IDayProps {
    weekDays: IMonthDay[];
    day: IMonthDay;
    selectedMonth: TMonth;
    dayShortEvents: IEvent[];
    dayLongEvents: IEvent[];
    dayEventsPositionY: string[];
    dayOfWeek: number;
}

const Day: NextPage<IDayProps> = ({
    weekDays,
    day,
    selectedMonth,
    dayShortEvents,
    dayLongEvents,
    dayEventsPositionY,
    dayOfWeek
}) => {

    const { openModalCreate } = useModal();

    const handleCreateEvent = () => {
        const { hours, minutes } = createDate({ date: new Date() });
        const startMins = getNextStartMinutes(minutes);
        const selectedDate = shmoment(day.date).add('hours', hours).add('minutes', minutes + startMins).result();

        openModalCreate({ selectedDate, type: 'event' });
    }

    return (
        <div className={`flex-1 
            ${dayOfWeek < 6 ? "border-r" : ""} 
            ${day.monthIndex !== selectedMonth.monthIndex ? "bg-accent" : ""} pb-10`}
            onClick={handleCreateEvent}>
            <div className="flex justify-end">
                <a className={`p-1 rounded-full h-7 w-7 text-center leading-5
                    ${checkIsToday(day.date) ? "bg-blue-500 text-white" : ""}
                `}>
                    {day.dayNumber}
                </a>
            </div>
            <div className="flex flex-col gap-1">
                {dayEventsPositionY.map((eventId, index) => {
                    const event = dayLongEvents.find(event => event.id === eventId);
                    const { width, isShowEvent, isMovingFromPrev, isMovingToNext } = getStyledForLongEvent(weekDays, day, event);
                    const top = index * 24;

                    return (
                        <LongEvent
                            key={event.id || index}
                            event={event}
                            width={width}
                            top={top}
                            color={event.color}
                            isShowEvent={isShowEvent}
                            isMovingToNext={isMovingToNext}
                            isMovingFromPrev={isMovingFromPrev}
                        />
                    );
                })}
                {(
                    dayShortEvents.map((event, index) => {
                        const top = (dayEventsPositionY.length + index) * 24;
                        return (
                            <ShortEvent
                                key={event.id}
                                event={event}
                                top={top}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );

}

Day.displayName = "Day"

export { Day };