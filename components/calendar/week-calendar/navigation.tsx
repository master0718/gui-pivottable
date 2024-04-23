"use client"

import { checkIsPast, checkIsToday } from "@/lib/date";
import { useModal } from "@/redux/hooks";
import { IMonthDay, IWeekDay } from "@/redux/hooks/types/date";
import { NextPage } from "next";

interface INavigationProps {
    weekDays: IMonthDay[];
    weekDaysNames: IWeekDay[];
}

const Navigation: NextPage<INavigationProps> = ({
    weekDays,
    weekDaysNames
}) => {
    const { openModalCreate } = useModal();

    return (
        <div className="flex border-b">
            {weekDays.map((dayDate, i) => {

                const { dayNumber, year, monthIndex, date } = dayDate;

                const uniqueKey = `${year}-${monthIndex}-${dayNumber}`;

                const isPastDay = checkIsPast(date);
                const isTodayDay = checkIsToday(date);

                return (
                    <div className="flex-1 flex flex-col items-center border-l p-1" key={uniqueKey} onClick={() => openModalCreate({ selectedDate: dayDate.date, type: 'long-event' })}>
                        <span className={`${isTodayDay ? "text-sky-600" : ""}`}>
                            {weekDaysNames[i].dayShort}
                        </span>
                        <span className={`${isTodayDay ? "bg-sky-600 text-white" : ""} ${isPastDay ? "text-gray-400" : ""} w-10 h-10 leading-10 text-center text-xl rounded-full `}>
                            {dayNumber}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

Navigation.displayName = "Navigation";

export { Navigation };