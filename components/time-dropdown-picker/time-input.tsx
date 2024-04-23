"use client"

import { KeyboardEvent } from "react";
import { getOptionIndex } from "@/lib/helpers/get-option-index";
import { parseTimeString } from "@/lib/helpers/parse-time-string";
import { useThrottle } from "@/redux/hooks";
import { NextPage } from "next";
import { ChangeEvent, useRef } from "react";
import { Input } from "@/components/ui/input";

interface ITimeInputProps {
    timeValue: string;
    times: [string, string][];
    selectedOptionId: number;
    setTimeValue: (timeValue: string) => void;
    onSelectTime: (hours: string, mins: string, withClose?: boolean) => void;
    setSelectedOptionId: (optionIndex: number) => void;
    scrollToOption: (optionId?: number) => void;
    selectTime: (time: string) => void;
    openOptions: () => void;
    closeOptions: () => void;
    onFocus: () => void;
}

const keyboardDelay = 40;

const TimeInput: NextPage<ITimeInputProps> = ({
    timeValue,
    times,
    selectedOptionId,
    setTimeValue,
    setSelectedOptionId,
    scrollToOption,
    openOptions,
    closeOptions,
    selectTime,
    onFocus
}) => {
    const inputRef = useRef<HTMLInputElement>();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { time } = parseTimeString(e.target.value);
        const optionIndex = getOptionIndex(times, time);

        setTimeValue(e.target.value);
        setSelectedOptionId(optionIndex);
    }

    const parseTimeValue = () => {
        const { time } = parseTimeString(timeValue);
        console.log(time);

        selectTime(time);
        closeOptions();
    }

    const changeDateByDirection = (direction: 'up' | 'down') => {
        let newIndex: number;

        if (direction === 'down') {
            newIndex = Number.isInteger(selectedOptionId) ? (selectedOptionId + 1) % times.length : Math.ceil(selectedOptionId);
        }

        if (direction === 'up') {
            if (Number.isInteger(selectedOptionId)) {
                newIndex = (selectedOptionId - 1) >= 0 ? (selectedOptionId - 1) : times.length - 1;
            } else {
                newIndex = Math.floor(selectedOptionId);
            }
        }

        const [hours, mins] = times[newIndex];
        const time = `${hours}:${mins}`;
        selectTime(time);
        scrollToOption(newIndex);
    }

    const onKeyDown = useThrottle((e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'Enter': {
                inputRef.current.blur();
                break;
            }

            case 'ArrowDown': {
                e.preventDefault();
                changeDateByDirection('down');
                break;
            }

            case 'ArrowUp': {
                e.preventDefault();
                changeDateByDirection('up');
                break;
            }
        }
    }, keyboardDelay);

    return (
        <Input 
            className=""
            onClick={openOptions}
            onKeyDown={onKeyDown}
            onChange={onChange}
            value={timeValue}
            onFocus={onFocus}
            ref = {inputRef}
        />
    )
}

TimeInput.displayName = "TimeInput";
export { TimeInput };