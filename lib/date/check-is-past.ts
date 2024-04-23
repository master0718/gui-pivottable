"use client";

import { checkIsToday } from "./check-is-today";

export const checkIsPast = (date:Date) => {
    const today = new Date();

    return (today.getTime() > date.getTime()) && !checkIsToday(date);
}