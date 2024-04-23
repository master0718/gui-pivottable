"use client";

import { formatDate } from "@/lib/date";
import { IMapEventValues, IModalValues } from "@/components/modals/types";
import { colors } from "@/components/color-picker/colors";

export const getMapEventValues = ({
    title,
    description,
    startDate,
    endDate,
    type,
    color = colors[0]
}: IMapEventValues) : IModalValues => {
    return {
        title,
        startDate,
        endDate,
        startTime: formatDate(startDate, `hh:mm`),
        endTime: formatDate(endDate, `hh:mm`),
        description,
        isLongEvent: type === 'long-event',
        color
    }
}