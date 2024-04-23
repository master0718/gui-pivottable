"use client"

import { IEvent } from "@/redux/hooks/types/events";
import { getSortedEvents } from "@/lib/helpers/get-sorted-events";

export const getSortedDayEvents = (dayEvents: IEvent[]) => {
    let maxEventsInDay = 0;

    const sortedDayEvents = getSortedEvents(dayEvents);

    if (maxEventsInDay < sortedDayEvents.length) {
        maxEventsInDay = sortedDayEvents.length;
    }

    return { sortedDayEvents, maxEventsInDay };
}