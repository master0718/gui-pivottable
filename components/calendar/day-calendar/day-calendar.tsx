"use client";

import { shmoment } from "@/lib/date";
import { getEventsDay, getLongEvents, getShortEvents } from "@/lib/helpers";
import { useTypedSelector } from "@/redux/hooks";
import { TDate } from "@/redux/hooks/types/date";
import { NextPage } from "next";
import { LongEvents } from "./long-events";
import { Sidebar } from "./sidebar";
import { Day } from "./day";

interface IDayCalendarProps {
    selectedDay: TDate;
}

const DayCalendar: NextPage<IDayCalendarProps> = ({ selectedDay }) => {
    const { events } = useTypedSelector(({ events }) => events);

    const dayEvents = getEventsDay(selectedDay, events);
    const shortEvents = getShortEvents(dayEvents);
    const longEvents = getLongEvents(dayEvents);

    const nextDay = shmoment(selectedDay.date).add('days', 1).result();

    // getting all events from the current day we will render
    const prevDayEvents = shortEvents.filter((event) => {
        const eventStartDate = new Date(event.start);
        const eventEndDate = new Date((event.end));

        return selectedDay.date.getTime() <= eventEndDate.getTime() &&
            selectedDay.date.getTime() > eventStartDate.getTime();
    });

    const nextDayEvents = shortEvents.filter((event) => {
        const eventStartDate = new Date(event.start);
        const eventEndDate = new Date(event.end);

        return nextDay.getTime() > eventStartDate.getTime() &&
            nextDay.getTime() <= eventEndDate.getTime();
    });

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex items-center">
                <div className="flex-none w-20 border-b h-full flex flex-col items-center min-h-[40px]">
                    <span className="m-auto text-xs">All-Day</span>
                </div>
                <div className="grow border-l border-b py-1 min-h-[40px]">
                    <LongEvents
                        day={selectedDay}
                        events={longEvents}
                    />
                </div>
            </div>
            <div className="flex">
                <Sidebar />
                <Day
                    key={selectedDay.dayNumber}
                    dayEvents={shortEvents}
                    prevDayEvents={prevDayEvents}
                    nextDayEvents={nextDayEvents}
                    dayData={selectedDay}
                />
            </div>
        </div>
    )

}

DayCalendar.displayName = "DayCalendar";
export { DayCalendar };