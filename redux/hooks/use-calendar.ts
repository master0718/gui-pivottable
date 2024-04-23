"use client";

import React from "react";
import { IDirections, IModes } from "./types/date";
import { checkDateIsEqual, createDate, createMonth, createWeek, getCalendarDaysOfMonth, getCalendarDaysOfYear, getMonthsNames, getWeekDaysNames } from '@/lib/date'

interface UseCalendarParams {
    locale?: string;
    selectedDate: Date;
    firstWeekDayNumber?: number;
    defaultMode?: IModes;
}

const getYearsInterval = (year: number) => {
    const startYear = Math.floor(year / 10) * 10;
    return [...Array(10)].map((_, index) => startYear + index);
}

export const useCalendar = ({
    locale = 'default',
    selectedDate: date,
    firstWeekDayNumber = 2,
    defaultMode = 'week'
}: UseCalendarParams) => {
    const [mode, setMode] = React.useState<IModes>(defaultMode);
    const [selectedDay, setSelectedDay] = React.useState(createDate({ date }));
    const [selectedWeek, setSelectedWeek] = React.useState(createWeek({ date: selectedDay.date, locale }));
    const [selectedMonth, setSelectedMonth] = React.useState(
        createMonth({ date: new Date(selectedDay.year, selectedDay.monthIndex), locale })
    );
    const [selectedYear, setSelectedYear] = React.useState(selectedDay.year);
    const [selectedYearsInterval, setSelectedYearsInterval] = React.useState(getYearsInterval(selectedDay.year));

    const monthsNames = React.useMemo(() => getMonthsNames(selectedDay.date, locale), [selectedDay]);
    const weekDaysNames = React.useMemo(() => getWeekDaysNames(firstWeekDayNumber, locale), []);
    const weekDays = React.useMemo(() => selectedWeek.createWeekDays(), [selectedWeek.dayNumber, selectedYear, selectedMonth.monthIndex]);
    const displayedDate = React.useMemo(() => {
        if (mode === 'year') {
            return `${selectedYear}`;
        }
        if (mode === 'month') {
            return `${monthsNames[selectedMonth.monthIndex].month} ${selectedYear}`;
        }
        if (mode === 'day') {
            return `${monthsNames[selectedMonth.monthIndex].month} ${selectedDay.dayNumber}, ${selectedYear}`;
        }
        return selectedWeek.displayedMonth;
    }, [selectedYear, selectedMonth.monthIndex, selectedWeek.dayNumber, mode, selectedDay]);

    const calendarDaysOfMonth = React.useMemo(() => {
        return mode !== 'month' ? [] : getCalendarDaysOfMonth({ year: selectedYear, monthIndex: selectedMonth.monthIndex, firstWeekDayNumber })
    }, [selectedYear, selectedMonth.monthIndex, mode]);

    const calendarDaysOfYear = React.useMemo(() => {
        if (mode !== 'year') {
            return [];
        }

        return getCalendarDaysOfYear({ year: selectedYear, firstWeekDayNumber });
    }, [selectedYear, mode]);

    const onChangeState = (date: Date) => {
        const { year, monthIndex } = createDate({ date });
        const isCurrentYear = year === selectedYear;
        const isCurrentMonth = monthIndex === selectedMonth.monthIndex;

        !isCurrentYear && setSelectedYear(year);
        !(isCurrentYear && isCurrentMonth) && setSelectedMonth(createMonth({ date, locale }));
        !checkDateIsEqual(date, selectedWeek.date) && setSelectedWeek(createWeek({ date, locale }));
        !checkDateIsEqual(date, selectedDay.date) && setSelectedDay(createDate({ date }));
    }

    const onClickArrow = (direction: IDirections) => {
        if (direction === 'today') {
            return onChangeState(new Date());
        }

        if (mode === 'year') {
            const year = selectedYear + (direction === 'left' ? -1 : 1);
            return onChangeState(new Date(year, 0, 1));
        }

        if (mode === 'month') {
            const month = selectedMonth.monthIndex + (direction === 'left' ? -1 : 1);
            return onChangeState(new Date(selectedMonth.year, month, 1));
        }

        if (mode === 'week') {
            const dayNumber = selectedWeek.dayNumber + (direction === 'left' ? -7 : 7);
            const newSelectedWeekDate = new Date(selectedWeek.year, selectedWeek.monthIndex, dayNumber);
            return onChangeState(newSelectedWeekDate);
        }

        if (mode === 'list') {
            const dayNumber = selectedWeek.dayNumber + (direction === 'left' ? -7 : 7);
            const newSelectedWeekDate = new Date(selectedWeek.year, selectedWeek.monthIndex, dayNumber);
            return onChangeState(newSelectedWeekDate);
        }

        if (mode === 'day') {
            const dayNumber = selectedDay.dayNumber + (direction === 'left' ? -1 : 1);
            const newSelectedWeekDate = new Date(selectedDay.year, selectedDay.monthIndex, dayNumber);
            return onChangeState(newSelectedWeekDate);
        }

        if (mode === 'years') {
            const years = selectedYearsInterval[0] + (direction === 'left' ? -10 : 10);
            return setSelectedYearsInterval(getYearsInterval(years));
        }

        if (mode === 'months') {
            const year = selectedYear + (direction === 'left' ? -1 : 1);
            if (!selectedYearsInterval.includes(year)) {
                setSelectedYearsInterval(getYearsInterval(year));
            }
            return setSelectedYear(year);
        }
    };

    const setSelectedMonthByIndex = (monthIndex: number) => {
        setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
    }

    return {
        state: {
            mode,
            calendarDaysOfMonth,
            calendarDaysOfYear,
            displayedDate,
            weekDaysNames,
            weekDays,
            monthsNames,
            selectedDay,
            selectedMonth,
            selectedYear,
            selectedYearsInterval
        },
        functions: {
            onClickArrow,
            setMode,
            setSelectedDay,
            setSelectedYear,
            onChangeState,
            setSelectedMonthByIndex,
            setSelectedYearsInterval
        }
    };
}