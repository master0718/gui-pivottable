"use client"

import { shmoment } from "@/lib/date";
import { IMonthDay } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { NextPage } from "next";
import { Day } from "./day";

interface IWeekProps {
    events: IEvent[];
    weekDays: IMonthDay[];
}

const Week: NextPage<IWeekProps> = ({
    events,
    weekDays
}) => {
    return (
        <div className="flex flex-1">
            {weekDays.map((day) => {

                const nextDay = shmoment(day.date).add('days', 1).result();

                // getting all events from the current day we will render
                const dayEvents = events?.filter((event) => {
                    const eventStartDate = new Date(event.start);
                    const eventEndDate = new Date(event.end);

                    return eventStartDate.getTime() > day.date.getTime() &&
                        eventEndDate.getTime() < nextDay.getTime();
                });

                const prevDayEvents = events.filter((event) => {
                    const eventStartDate = new Date(event.start);
                    const eventEndDate = new Date((event.end));

                    return day.date.getTime() <= eventEndDate.getTime() &&
                        day.date.getTime() > eventStartDate.getTime();
                });

                const nextDayEvents = events.filter((event) => {
                    const eventStartDate = new Date(event.start);
                    const eventEndDate = new Date(event.end);

                    return nextDay.getTime() > eventStartDate.getTime() &&
                        nextDay.getTime() <= eventEndDate.getTime();
                });

                return (
                    <Day
                        key={day.dayNumber}
                        dayEvents={dayEvents}
                        prevDayEvents={prevDayEvents}
                        nextDayEvents={nextDayEvents}
                        dayData={day}
                    />
                )
            })}
        </div>
    )
}

Week.displayName = "Week";
export { Week };