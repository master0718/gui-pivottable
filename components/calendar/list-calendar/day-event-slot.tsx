"use client"

import { IEvent } from "@/redux/hooks/types/events"
import { NextPage } from "next";
import { formatDate } from "@/lib/date";

interface IDayEventSlotProps {
    event: IEvent;
}

const DayEventSlot: NextPage<IDayEventSlotProps> = ({
    event
}) => {

    const darkenColorHex = () => {
        const [r, g, b] = event.color.match(/\d+/g).map(Number);

        const hexR = Math.max(0, r - 100).toString(16).padStart(2, "0");
        const hexG = Math.max(0, g - 100).toString(16).padStart(2, "0");
        const hexB = Math.max(0, b - 100).toString(16).padStart(2, "0");

        const hexColor = `#${hexR}${hexG}${hexB}`;

        return hexColor;
    }

    const eventSlotStyle = {
        border: `1px solid ${darkenColorHex()}`,
        borderLeft: `4px solid ${darkenColorHex()}`
    }

    const colorStyle = {
        color: darkenColorHex()
    }

    return (
        <div className="flex flex-col gap-2 p-2" style={eventSlotStyle}>
            {event.type === 'long-event' && (
                <span className="text-xs" style={colorStyle}>ALL-DAY</span>
            )}
            {event.type === 'event' && (
                <span className="text-xs" style={colorStyle}>{`${formatDate(new Date(event.start), 'hh:mm')} - ${formatDate(new Date(event.end), 'hh:mm')}`}</span>
            )}
            <span className="text-lg font-bold">{event.title}</span>
            <span className="text-sm text-gray-500">{event.description}</span>
        </div>
    )
}

DayEventSlot.displayName = "DayEventSlot";
export { DayEventSlot };