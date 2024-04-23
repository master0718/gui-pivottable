import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";

interface ICalendarHeaderOptionProps {
    option: string;
    onChangeOption: (option: string) => void;
    selected: boolean;
}

const CalendarHeaderOption: NextPage<ICalendarHeaderOptionProps> = ({
    option,
    onChangeOption,
    selected
}) => {
    const onOptionClicked = () => {
        onChangeOption(option);
    };

    return (
        <>
            <Button onClick={onOptionClicked} className={`h-8 border ${selected ? "bg-white text-black" : ""}`}>
                {option}
            </Button>
        </>
    );
}

CalendarHeaderOption.displayName = "CalendarHeaderOption"

export { CalendarHeaderOption };