"use client";

import { getStyledForDayLongEvent } from "@/lib/helpers/get-styled-for-day-long-event";
import { useModal } from "@/redux/hooks";
import { IMonthDay } from "@/redux/hooks/types/date";
import { IEvent } from "@/redux/hooks/types/events";
import { NextPage } from "next";
import { LongEvent } from "@/components/calendar/common/long-event";

interface ILongEventSlotProps {
    isEventsEmpty: boolean;
    dayEvents: IEvent[];
    day: IMonthDay;
    slotHeight?: number;
}

const LongEventSlot: NextPage<ILongEventSlotProps> = ({
    isEventsEmpty,
    dayEvents,
    day,
    slotHeight
}) => {

    const { openModalCreate } = useModal();
    const handleOpenModalCreateEvent = () => {
        openModalCreate({ selectedDate: day.date, type: 'long-event' });
    }

    const slotStyle = { height: `${slotHeight}px` };

    return (
        <div
            className={`flex flex-col gap-1 w-full ${isEventsEmpty ? 'empty' : ''}`}
            style={slotStyle}
            onClick={handleOpenModalCreateEvent}
        >
            {dayEvents.map((event, index) => {
                const { width, isShowEvent, isMovingFromPrev, isMovingToNext } = getStyledForDayLongEvent(day, event);
                const top = index * 24;

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

export { LongEventSlot };