"use client"

import { TDate } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { shmoment } from "@/lib/date";

import { checkIsEventsShowInCurrentInterval } from "./check-is-events-show-in-current-interval"

export const getEventsDay = (day: TDate, events: IEvent[]) => {
    const eventsDay = events.filter((event) => {
        const startInterval = shmoment(day.date).result();
        const endInterval = shmoment(day.date).add('hours', 23).add('minutes', 59).result();

        const eventStartDate = new Date(event.start);
        const eventEndDate = new Date(event.end);

        return checkIsEventsShowInCurrentInterval(startInterval, endInterval, eventStartDate, eventEndDate);
    });

    return eventsDay;
}