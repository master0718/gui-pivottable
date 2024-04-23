"use client";

import { IWeekDay } from "@/redux/hooks/types/date";
import { NextPage } from "next";

interface INavigationProps {
    weekDaysNames: IWeekDay[];
}

const Navigation: NextPage<INavigationProps> = ({ weekDaysNames }) => {
    return (
        <div className="flex w-full h-10 items-center">
            {weekDaysNames.map((day, index) => {
                return (
                    <div key={index} className={`flex-1 h-full text-center border-b-0 ${index === weekDaysNames.length - 1 ? '' : 'border-r'}`}>
                        <span className="text-xs font-bold">{day.dayShort}</span>
                    </div>
                )
            })}
        </div>
    )
}

Navigation.displayName = "Navigation"

export { Navigation };