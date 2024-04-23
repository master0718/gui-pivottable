"use client";

import { IEvent } from "@/redux/hooks/types/events";
import { getPositionYForDayEvents } from "./get-position-y-for-day-events";

export const getPositionYForWeekEvents = (sortedWeekEvents: IEvent[][]) => {
  const eventsPositionY = sortedWeekEvents.reduce((eventsPositionY, dayEvents, index) => {
    const prevEventsPositionY = !!eventsPositionY[index - 1] ? eventsPositionY[index - 1] : [];
    const eventsDayPositionY = getPositionYForDayEvents(dayEvents, prevEventsPositionY);
    
    eventsPositionY.push(eventsDayPositionY);

    return eventsPositionY;
  }, [] as string[][]);

  return eventsPositionY;
}