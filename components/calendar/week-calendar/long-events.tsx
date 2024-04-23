"use client"

import { getPositionYForWeekEvents, getSortedWeekEvents } from "@/lib/helpers";
import { IMonthDay } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { NextPage } from "next";
import { LongEventSlot } from "./long-event-slot";

interface ILongEventsProps {
    weekDays: IMonthDay[];
    events: IEvent[];
}

const LongEvents: NextPage<ILongEventsProps> = ({
    weekDays,
    events
}) => {

    const isEventsEmpty = events.length === 0;
    const { sortedWeekEvents, maxEventsInWeek } = getSortedWeekEvents(weekDays, events);
    const weekEventsPositionY = getPositionYForWeekEvents(sortedWeekEvents);

    const slotsHeight = maxEventsInWeek * 30;

    const longEventsStyle = {
        height: `${slotsHeight}px`,
        paddingRight: `${slotsHeight <= 96 ? 10 : 0}px`,
        overflow: slotsHeight === 0 ? 'inherit' : 'auto'
    }

    return (
        <div className="flex" style={longEventsStyle}>
            {sortedWeekEvents.map((dayEvents, index) => {
                return (
                    <LongEventSlot
                        key={weekDays[index].dayNumber}
                        isEventsEmpty={isEventsEmpty}
                        dayEvents={dayEvents}
                        day={weekDays[index]}
                        weekDays={weekDays}
                        dayEventsPositionY={weekEventsPositionY[index]}
                        slotHeight={slotsHeight}
                    />
                )
            })}
        </div>
    )

}

LongEvents.displayName = "LongEvents";

export { LongEvents };