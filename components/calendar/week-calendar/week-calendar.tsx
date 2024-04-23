"use client"

import { getEventsInterval, getLongEvents, getShortEvents } from "@/lib/helpers";
import { useTypedSelector } from "@/redux/hooks";
import { IMonthDay, IWeekDay } from "@/redux/hooks/types/date";
import { NextPage } from "next";
import { LongEvents } from "./long-events";
import { Navigation } from "./navigation";
import { Sidebar } from "./sidebar";
import { Week } from "./week";

interface IWeekCalendarProps {
    weekDays: IMonthDay[];
    weekDaysNames: IWeekDay[];
}

const WeekCalendar: NextPage<IWeekCalendarProps> = ({
    weekDays,
    weekDaysNames
}) => {

    const { events } = useTypedSelector(({ events }) => events);

    const weekEvents = getEventsInterval(weekDays, events);
    const shortEvents = getShortEvents(weekEvents);
    const longEvents = getLongEvents(weekEvents);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex">
                <div className="flex-none w-20 border-b"></div>
                <div className="grow flex flex-col">
                    <Navigation
                        weekDays={weekDays}
                        weekDaysNames={weekDaysNames}
                    />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex-none w-20 border-b h-full flex flex-col items-center min-h-[40px]">
                    <span className="m-auto text-xs">All-Day</span>
                </div>
                <div className="grow border-l border-b py-1 min-h-[40px]">
                    <LongEvents
                        weekDays={weekDays}
                        events={longEvents}
                    />
                </div>
            </div>
            <div className="flex">
                <Sidebar />
                <Week
                    events={shortEvents}
                    weekDays={weekDays}
                />
            </div>
        </div>
    )
}

WeekCalendar.displayName = "WeekCalendar";

export { WeekCalendar };