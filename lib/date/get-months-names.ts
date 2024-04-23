"use client";

import { IMonth } from '@/redux/hooks/types/date';
import { createDate } from './create-date';

export const getMonthsNames = (d: Date = new Date(), locale: string = 'defalut') => {
  const monthsNames: IMonth[] = Array.from({ length: 12 });

  monthsNames.forEach((_, i) => {
    const { month, monthIndex, monthShort, date } = createDate({
      locale,
      date: new Date(d.getFullYear(), d.getMonth() + i, 1)
    });

    monthsNames[monthIndex] = { month, monthIndex, monthShort, date };
  });

  return monthsNames;
};
