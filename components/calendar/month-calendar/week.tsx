"use client";

import { checkDateIsEqual } from "@/lib/date";
import { getPositionYForWeekEvents, getSortedEvents, getSortedWeekEvents } from "@/lib/helpers";
import { IMonthDay, TMonth } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { NextPage } from "next";
import { Day } from "./day";

interface IWeekProps {
    weekDays: IMonthDay[];
    shortEvents: IEvent[];
    longEvents: IEvent[];
    selectedMonth: TMonth;
}

const Week: NextPage<IWeekProps> = ({
    weekDays,
    shortEvents,
    longEvents,
    selectedMonth,
}) => {

    const { sortedWeekEvents } = getSortedWeekEvents(weekDays, longEvents);
    const weekEventsPositionY = getPositionYForWeekEvents(sortedWeekEvents);

    return (
        <div className="flex min-h-[200px] border-t">
            {weekDays.map((day, index) => {

                const startDateOfDay = day.date;

                const dayShortEvents = shortEvents.filter((event) => {
                    const startDateEvent = new Date(event.start);
                    return checkDateIsEqual(startDateEvent, startDateOfDay);
                })

                const sortedDayShortEvents = getSortedEvents(dayShortEvents);

                return (
                    <Day
                        key={`${day.monthIndex}-${day.dayNumber}`}
                        day={day}
                        selectedMonth={selectedMonth}
                        dayShortEvents={sortedDayShortEvents}
                        dayLongEvents={sortedWeekEvents[index]}
                        dayEventsPositionY={weekEventsPositionY[index]}
                        weekDays={weekDays}
                        dayOfWeek={index}
                    />
                );
            })}
        </div>
    );
}

Week.displayName = "Week"

export { Week };