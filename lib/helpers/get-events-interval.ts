"use client";

import { IMonthDay } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { shmoment } from "@/lib/date";
import { checkIsEventsShowInCurrentInterval } from './check-is-events-show-in-current-interval';

export const getEventsInterval = (daysInterval: IMonthDay[], events: IEvent[]) => {
  const eventsInterval = events.filter((event) => {
    const firstDayInInterval = daysInterval[0];
    const lastDayInInterval = shmoment(daysInterval[daysInterval.length - 1].date).add('hours', 23).add('minutes', 59).result();
    const eventStartDate = new Date(event.start);
    const eventEndDate = new Date(event.end);
    
    return checkIsEventsShowInCurrentInterval(firstDayInInterval.date, lastDayInInterval, eventStartDate, eventEndDate);
  });

  return eventsInterval;
}