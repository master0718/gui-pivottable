"use client";

import { IMonthDay } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { shmoment } from "@/lib/date";
import { checkIsEventsShowInCurrentInterval } from './check-is-events-show-in-current-interval';
import { getSortedEvents } from "./get-sorted-events";

export const getSortedWeekEvents = (weekDays: IMonthDay[], weekEvents: IEvent[]) => {
  let maxEventsInWeek = 0;

  const sortedWeekEvents = weekDays.map((day) => {
    const dayEvents = weekEvents.filter(event => {
      const startDate = new Date(event.start);
      const endDate = new Date(event.end);
      const nextDay = shmoment(day.date).add('hours', 23).add('minutes', 59).result();
  
      return checkIsEventsShowInCurrentInterval(day.date, nextDay, startDate, endDate);
    });

    
    const sortedDayEvents = getSortedEvents(dayEvents);

    if (maxEventsInWeek < sortedDayEvents.length) {
      maxEventsInWeek = sortedDayEvents.length;
    }

    return sortedDayEvents;
  });

  return { sortedWeekEvents, maxEventsInWeek }
}