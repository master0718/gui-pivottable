"use client";

import { IEvent } from "@/redux/hooks/types/events";

export const getPositionYForDayEvents = (dayEvents: IEvent[], prevEventsIds: string[]) => {
  const eventsPositionY: string[] = [];
  let count = 0;
  
  dayEvents.forEach(event => {
    const indxEvent = prevEventsIds.indexOf(event.id);

    if (indxEvent >= 0) {
      eventsPositionY[indxEvent] = event.id;
    } else {
      while(count in eventsPositionY) {
        count++;
      }

      eventsPositionY[count] = event.id;
      count++;
    }
  });
  
  return eventsPositionY;
}