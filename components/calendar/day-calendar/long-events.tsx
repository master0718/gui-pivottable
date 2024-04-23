"use client"

import { getSortedDayEvents } from "@/lib/helpers/get-sorted-day-events";
import { IEvent } from "@/redux/hooks/types/events"
import { NextPage } from "next";
import { LongEventSlot } from "./long-event-slot";
import { IMonthDay } from "@/redux/hooks/types/date";

interface ILongEventsProps {
    day: IMonthDay;
    events: IEvent[];
}

const LongEvents: NextPage<ILongEventsProps> = ({
    day,
    events
}) => {

    const isEventsEmpty = events.length === 0;
    const { sortedDayEvents, maxEventsInDay } = getSortedDayEvents(events);
    const slotsHeight = maxEventsInDay * 30;

    const longEventsStyle = {
        height: `${slotsHeight}px`,
        paddingRight: `${slotsHeight <= 96 ? 10 : 0}px`,
        overflow: slotsHeight === 0 ? 'inherit' : 'auto',
    }

    return (
        <div className="flex" style={longEventsStyle}>
            <LongEventSlot
                isEventsEmpty={isEventsEmpty}
                dayEvents={sortedDayEvents}
                day={day}
                slotHeight={slotsHeight}
            />
        </div>
    )
}

LongEvents.displayName = "LongEvents";
export { LongEvents };