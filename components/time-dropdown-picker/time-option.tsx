"use client";

import { NextPage } from "next";
import { formatDifferenceOfTwoTimes } from "@/lib/date";

interface ITimeOptionProps {
    hours: string;
    mins: string;
    index: number;
    selectedOptionId: number;
    isToday: boolean;
    isFullDay: boolean;
    timeFrom: string;
    locale: string;
    setSelectedOptionId: (optionId: number) => void;
    selectTime: (time: string) => void;
    closeOptions: () => void;
}

const TimeOption: NextPage<ITimeOptionProps> = ({
    hours,
    mins,
    index,
    selectedOptionId,
    isToday,
    isFullDay,
    timeFrom,
    locale,
    setSelectedOptionId,
    selectTime,
    closeOptions
}) => {

    const time = `${hours}:${mins}`;

    const handleSelectOption = () => {
        selectTime(time);
        closeOptions();
    }

    const onMouseEnterSelectOption = () => setSelectedOptionId(index);

    return (
        <div
            className="cursor-pointer text-xs w-full p-1 hover:bg-accent rounded-sm"
            key={`${hours}-${mins}-${index}`}
            onMouseDown={handleSelectOption}
            aria-selected={selectedOptionId === index}
            onMouseEnter={onMouseEnterSelectOption}
        >
            {time}
        </div>
    )

}

TimeOption.displayName = "TimeOption";

export { TimeOption };