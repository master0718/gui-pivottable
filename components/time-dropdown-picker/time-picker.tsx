"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { NextPage } from "next";
import { generateDaysRange, generateTimesForDay } from "@/lib/date";
import { getOptionIndex } from "@/lib/helpers/get-option-index";
import { useClickOutside } from "@/redux/hooks";
import { parseTimeString } from "@/lib/helpers/parse-time-string";
import { TimeInput } from "./time-input";
import { TimeOption } from "./time-option";
import { ScrollArea } from "@/components/ui/scroll-area"

interface ITimePickerProps {
    timeFrom: string;
    selectedTime: string;
    isFullDay?: boolean;
    error?: string;
    isToday?: boolean;
    locale?: string;
    selectTime: (time: string) => void;
}

const TimePicker: NextPage<ITimePickerProps> = ({
    timeFrom,
    selectedTime,
    isFullDay = false,
    isToday = false,
    locale = 'default',
    selectTime
}) => {
    const [timeValue, setTimeValue] = useState(selectedTime);
    const [isOpen, setIsOpen] = useState(false);

    const times = useMemo(() => (
        generateTimesForDay((isFullDay || !isToday) ? '00:00' : timeFrom, isFullDay)
    ), [timeFrom, isFullDay, isToday]);

    const [selectedOptionId, setSelectedOptionId] = useState(getOptionIndex(times, timeValue));

    const timePickerRef = useRef<HTMLDivElement>();
    const optionContainerRef = useRef<HTMLInputElement>();

    const openOptions = () => setIsOpen(true);
    const closeOptions = () => setIsOpen(false);

    const onSelectTime = (hours: string, mins: string, withClose: boolean = false) => {
        const time = `${hours}:${mins}`;
        setTimeValue(time);
        selectTime(time);
        withClose && closeOptions();
    }

    const scrollToOption = (optionId: number) => {
        if (!Number.isInteger(optionId) || optionId < 0) {
            return;
        }

        const heightOption = optionContainerRef.current.children[0].getBoundingClientRect().height;
        const heightContainer = optionContainerRef.current.getBoundingClientRect().height;
        const positionY = heightOption * optionId - (heightContainer / 2 - heightOption / 2);
        optionContainerRef.current.scrollTo(0, positionY);
    }

    useClickOutside(timePickerRef, closeOptions);

    useEffect(() => {
        if (isOpen) {
            scrollToOption(selectedOptionId);
        }
    }, [isOpen]);

    useEffect(() => {
        const { time } = parseTimeString(selectedTime);
        const optionIndex = getOptionIndex(times, time);

        setSelectedOptionId(optionIndex);
        setTimeValue(time);
    }, [selectedTime]);

    return (
        <div className="w-16" ref={timePickerRef}>
            <TimeInput
                timeValue={timeValue}
                times={times}
                selectedOptionId={selectedOptionId}
                openOptions={openOptions}
                setTimeValue={setTimeValue}
                onSelectTime={onSelectTime}
                setSelectedOptionId={setSelectedOptionId}
                scrollToOption={scrollToOption}
                selectTime={selectTime}
                closeOptions={closeOptions}
                onFocus={openOptions}
            />
            {isOpen && (
                <div className="fixed z-50">
                    <ScrollArea className="h-36 w-20 p-2 border rounded-sm bg-white" ref={optionContainerRef}>
                        {times.map(([hours, mins], index) => (
                            <TimeOption
                                key={`${hours}-${mins}-${index}`}
                                hours={hours}
                                mins={mins}
                                index={index}
                                selectedOptionId={selectedOptionId}
                                setSelectedOptionId={setSelectedOptionId}
                                selectTime={selectTime}
                                closeOptions={closeOptions}
                                isToday={isToday}
                                isFullDay={isFullDay}
                                timeFrom={timeFrom}
                                locale={locale}
                            />
                        ))}
                    </ScrollArea>
                </div>
            )}
        </div>
    );
}

TimePicker.displayName = "TimePicker";

export { TimePicker };