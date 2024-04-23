"use client";

import { IEvent } from "@/redux/hooks/types/events";

export const getSortedEvents = (events: IEvent[]) => {
  const sortedEvents = events.sort((prevEvent, nextEvent) => {
    const prevEventDate = new Date(prevEvent.start);
    const nextEventDate = new Date(nextEvent.start);
    return prevEventDate.getTime() - nextEventDate.getTime();
  });

  return sortedEvents;
}