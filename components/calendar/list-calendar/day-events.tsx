"use client"

import { checkIsToday } from "@/lib/date";
import { IMonthDay, IWeekDay } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { NextPage } from "next";
import { DayEventSlot } from "./day-event-slot";

interface IDayEventsProps {
    events: IEvent[];
    weekDay: IMonthDay;
    weekDaysName: IWeekDay;
}

const DayEvents: NextPage<IDayEventsProps> = ({
    events,
    weekDay,
    weekDaysName
}) => {
    const { dayNumber, date } = weekDay;
    const isTodayDay = checkIsToday(date);
    return (
        <div className="flex">
            <div className="flex-none w-48 flex flex-col items-center">
                <span className={`${isTodayDay ? "text-sky-600" : ""}`}>
                    {weekDaysName.dayShort}
                </span>
                <span className={`${isTodayDay ? "bg-sky-600 text-white" : ""} w-10 h-10 leading-10 text-center text-xl rounded-full `}>
                    {dayNumber}
                </span>
            </div>
            <div className="grow flex flex-col gap-2">
                {events.map((event, index) => {
                    return (
                        <DayEventSlot
                            key={index}
                            event={event}
                        />
                    );
                })}
            </div>
        </div>
    )
}

DayEvents.displayName = "DayEvents";

export { DayEvents };