"use client"

import { checkIsToday, shmoment } from "@/lib/date";
import { getStyledByPositionXForEvent, getStyledByPostionYForEvent } from "@/lib/helpers";
import { useModal } from "@/redux/hooks";
import { IEvent } from "@/redux/hooks/types/events";
import { NextPage } from "next";
import { MouseEvent, useRef, useState } from "react";
import { TimeLine } from "./time-line";
import { Event } from "./event";

interface IHourProps {
    dataHour: number;
    dateDay: Date;
    hourEvents: IEvent[];
    dayEvents: IEvent[];
}

const Hour: NextPage<IHourProps> = ({
    dataHour,
    dateDay,
    hourEvents,
    dayEvents
}) => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const timeSlotRef = useRef<HTMLDivElement>();
    const isCurrentHour = dataHour === currentDate.getHours();
    const { openModalCreate } = useModal();

    const handleCreateEvent = (e: MouseEvent<HTMLDivElement>) => {
        const { top } = timeSlotRef.current.getBoundingClientRect();
        const offsetY = e.pageY - top;

        const mins = Math.floor(offsetY / 30) * 30;
        const selectedDate = shmoment(dateDay).add('hours', dataHour).add('minutes', mins).result();

        openModalCreate({ selectedDate });
    }

    return (
        <div
            className="h-[60px] relative border-b after:content-[''] after:h-px after:absolute after:left-[-8px] after:w-2 after:top-[-1px] after:bg-[hsl(var(--border))]"
            data-time={dataHour + 1}
            onClick={handleCreateEvent}
            ref={timeSlotRef}
        >
            {(checkIsToday(dateDay) && isCurrentHour) && (
                <TimeLine currentDate={currentDate} setCurrentDate={setCurrentDate} />
            )}
            {/* if no events in the current hour nothing will render here */}
            {hourEvents.map((event) => {
                const { id, title, color } = event;

                const { eventHeight, offsetTop, time } = getStyledByPostionYForEvent(event, dateDay);
                const { left, width } = getStyledByPositionXForEvent(dayEvents, event);

                return (
                    <Event
                        key={id}
                        height={eventHeight}
                        top={offsetTop}
                        time={time}
                        title={title}
                        color={color}
                        id={id}
                        left={left}
                        width={width}
                    />
                )
            })}
        </div>
    )
}

Hour.displayName = "Hour";
export { Hour };