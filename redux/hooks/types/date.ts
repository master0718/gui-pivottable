"use client";

import { createDate, createMonth, createWeek, getDay } from "@/lib/date";

export type TDate = ReturnType<typeof createDate>;
export type TWeek = ReturnType<typeof createWeek>;
export type TMonth = ReturnType<typeof createMonth>;

export interface IWeekDay {
    day: TDate['day'];
    dayShort: TDate['dayShort'];
}

export interface IMonth {
    month: TDate['month'];
    monthShort: TDate['monthShort'];
    monthIndex: TDate['monthIndex'];
    date: TDate['date'];
}

export type IMonthDay = ReturnType<typeof getDay>;

export type IModes = "week" | "month" | "months" | "year" | "years" | "day" | "list";

export type IDirections = "left" | "right" | "today";