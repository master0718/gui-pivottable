"use client";

import React, { FC, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CalendarHeaderOption } from "./calendar-header-option";
import { NextPage } from "next";

interface ICalendarHeaderOptionGroupProps {
    options: string[];
    onChangeOption: (option: string) => void;
    selectedOption: string;
}

const CalendarHeaderOptionGroup: NextPage<ICalendarHeaderOptionGroupProps> = ({
    options,
    onChangeOption,
    selectedOption
}) => {
    return (
        <div className="flex items-center gap-1">
            {options.map((option) => (
                <CalendarHeaderOption key={option} option={option} onChangeOption={onChangeOption} selected={option === selectedOption} />
            ))}
        </div>
    );
}

CalendarHeaderOptionGroup.displayName = "CalendarHeaderOptionGroup"

export { CalendarHeaderOptionGroup };
