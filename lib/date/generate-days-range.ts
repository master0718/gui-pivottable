"use client";

import { IMonthDay } from "@/redux/hooks/types/date";
import { getDay } from "./get-day";

interface GenerateDaysRangeParams {
    year: number;
    monthIndex: number;
    dayFrom: number;
    countDays: number;
    locale?: string;
}

export const generateDaysRange = (params: GenerateDaysRangeParams): IMonthDay[] => {
    const { year, monthIndex, dayFrom, countDays } = params;
    const locale = params?.locale ?? 'default';

    const days = Array(countDays).fill(dayFrom).map((dayFrom, i) => getDay({ year, monthIndex, dayNumber: dayFrom + i, locale }));

    return days;
}