"use client";

import { IEvent } from "@/redux/hooks/types/events";
import { getDifferenceOfTwoDates } from "@/lib/date";

export const getLongEvents = (events: IEvent[]) => {
  const longEvents = events.filter(({ start, end, type }) => {
    const { days } = getDifferenceOfTwoDates(new Date(start), new Date(end));
    return type === 'long-event' || days >= 1;
  });
  
  return longEvents;
}