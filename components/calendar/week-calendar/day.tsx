"use client"

import { IMonthDay } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { NextPage } from "next";
import { Hour } from './hour';

interface IDayProps {
    dayEvents: IEvent[];
    prevDayEvents: IEvent[];
    nextDayEvents: IEvent[];
    dayData: IMonthDay;
}

const Day: NextPage<IDayProps> = ({
    dayEvents,
    prevDayEvents,
    nextDayEvents,
    dayData
}) => {
    const hours = Array(24).fill(0).map((_, index) => index);

    return (
        <div className="flex-1 relative border-l" data-day={dayData.dayNumber}>
            {hours.map((hour) => {

                // getting all events from the day we will render
                const currentHourEvents = dayEvents?.filter(
                    (event) => new Date(event.start).getHours() === hour
                );

                const eventsFromPrevDay = prevDayEvents.filter((_) => 0 === hour);

                const eventsToNextDay = nextDayEvents.filter(
                    (event) => new Date(event.start).getHours() === hour
                );

                const allDayEvents = [
                    ...prevDayEvents,
                    ...dayEvents,
                    ...nextDayEvents,
                ];

                const hoursEvents = [
                    ...currentHourEvents,
                    ...eventsFromPrevDay,
                    ...eventsToNextDay
                ];

                return (
                    <Hour
                        key={`${dayData.dayNumber}-${hour}`}
                        dataHour={hour}
                        dateDay={dayData.date}
                        hourEvents={hoursEvents}
                        dayEvents={allDayEvents}
                    />
                )
            })}
        </div>
    )
}

Day.displayName = "Day";
export { Day };