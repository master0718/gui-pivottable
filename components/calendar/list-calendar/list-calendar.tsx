"use client"

import { getEventsInterval } from "@/lib/helpers";
import { useTypedSelector } from "@/redux/hooks";
import { IMonthDay, IWeekDay } from "@/redux/hooks/types/date"
import { NextPage } from "next";
import { getSortedWeekEvents } from "@/lib/helpers";
import { DayEvents } from "./day-events";

interface IListCalendarProps {
    weekDays: IMonthDay[];
    weekDaysNames: IWeekDay[];
}

const ListCalendar: NextPage<IListCalendarProps> = ({
    weekDays,
    weekDaysNames,
}) => {

    const { events } = useTypedSelector(({ events }) => events);

    const { sortedWeekEvents, maxEventsInWeek } = getSortedWeekEvents(weekDays, events);


    return (
        <div className="flex flex-col w-full h-full gap-2 p-4">
            {sortedWeekEvents.map((dayEvents, index) => {
                return (
                    dayEvents.length !== 0 &&
                    <DayEvents
                        key={index}
                        events={dayEvents} 
                        weekDay={weekDays[index]}
                        weekDaysName={weekDaysNames[index]}
                    />
                )
            })}
        </div>
    )
}

ListCalendar.displayName = "ListCalendar";
export { ListCalendar };