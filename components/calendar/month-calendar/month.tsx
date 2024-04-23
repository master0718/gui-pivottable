"use client";

import { IMonthDay, TMonth } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { NextPage } from 'next';
import { Week } from './week';

interface IMonthProps {
    calendarDaysOfMonth: IMonthDay[];
    selectedMonth: TMonth;
    shortEvents: IEvent[];
    longEvents: IEvent[];
}

const Month: NextPage<IMonthProps> = ({
    calendarDaysOfMonth,
    selectedMonth,
    shortEvents,
    longEvents
}) => {
    const countRows = calendarDaysOfMonth.length / 7;

    const weeksDays = Array.from({ length: countRows }).map((_, i) => calendarDaysOfMonth.slice(i * 7, (i + 1) * 7));

    return (
        <div className="flex flex-col">
            {weeksDays.map((weekDays, i) => {
                return (
                    <Week
                        key={i}
                        weekDays={weekDays}
                        selectedMonth={selectedMonth}
                        shortEvents={shortEvents}
                        longEvents={longEvents}
                    />
                );
            })}
        </div>
    );
}

Month.displayName = "Month"

export { Month };