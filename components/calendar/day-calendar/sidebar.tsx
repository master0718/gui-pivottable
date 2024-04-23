"use client"

import { NextPage } from "next";

const Sidebar: NextPage = () => {
    const hours = Array(24).fill(0).map((_, index) => index);

    return (
        <div className="flex-none w-20 flex flex-col items-center">
            {hours.map((hour) => {
                const formattedHour = hour.toString().padStart(2, '0');

                return (
                    <div className="items-center h-[60px] text-right pr-[8px] relative w-12" key={hour}>
                        <span className="text-[10px] mr-1 block relative top-[-6px]">{hour > 0 && `${formattedHour}:00`}</span>
                    </div>
                )
            })}
        </div>
    )
}

Sidebar.displayName = "Sidebar";
export { Sidebar };