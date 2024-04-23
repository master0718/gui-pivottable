"use client";

import { IMonthDay } from "@/redux/hooks/types/date";
import { getCalendarDaysOfMonth } from "./get-calendar-days-of-month";

interface IGetCalendarDaysOfYearParams {
  year: number;
  firstWeekDayNumber?: number;
}

export const getCalendarDaysOfYear = ({
  year,
  firstWeekDayNumber = 2
}: IGetCalendarDaysOfYearParams): IMonthDay[][] => {
  return (
    Array.from({ length: 12 }).map((_, i) => (
      getCalendarDaysOfMonth({ year, monthIndex: i, firstWeekDayNumber, totalDays: 42 })
    ))
  )
}