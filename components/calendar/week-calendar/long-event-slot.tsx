"use client";

import { getStyledForLongEvent } from "@/lib/helpers";
import { useModal } from "@/redux/hooks";
import { IMonthDay } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { NextPage } from "next";
import { LongEvent } from "../common/long-event";

interface ILongEventSlotProps {
    isEventsEmpty: boolean;
    dayEvents: IEvent[];
    weekDays: IMonthDay[];
    day: IMonthDay;
    dayEventsPositionY: string[];
    slotHeight?: number;
}

const LongEventSlot: NextPage<ILongEventSlotProps> = ({
    isEventsEmpty,
    dayEvents,
    weekDays,
    day,
    dayEventsPositionY,
    slotHeight
}) => {
    const { openModalCreate } = useModal();

    const handleOpenModalCreateEvent = () => {
        openModalCreate({ selectedDate: day.date, type: 'long-event' });
    }

    const slotStyle = { height: `${slotHeight}px` };

    return (
        <div 
            className={`flex-1 flex flex-col gap-1 ${isEventsEmpty ? 'empty' : ''}`}
            style={slotStyle}
            onClick={handleOpenModalCreateEvent}
        >
            {dayEvents.map((event) => {

                const {width, isShowEvent, isMovingFromPrev, isMovingToNext} = getStyledForLongEvent(weekDays, day, event);

                const top = dayEventsPositionY.indexOf(event.id) * 24;

                return (
                    <LongEvent
                        key={event.id}
                        event={event}
                        width={width}
                        top={top}
                        color={event.color}
                        isShowEvent={isShowEvent}
                        isMovingFromPrev={isMovingFromPrev}
                        isMovingToNext={isMovingToNext}
                    />
                )
            })}
        </div>
    )
}

LongEventSlot.displayName = "LongEventSlot";

export { LongEventSlot }