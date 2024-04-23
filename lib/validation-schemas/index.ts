"use client"

import { IRules } from "@/redux/hooks/use-validator/types"

export const createEventSchema: IRules = {
    title: {
        isRequired: true
    },
    startDate: {
        isRequired: true
    },
    endDate: {
        isRequired: true,
        isDateInFeature: 'startDate'
    },
    startTime: {
        maxLength: 5,
        isNumberWithColon: true,
    },
    endTime: {
        maxLength: 5,
        isNumberWithColon: true,
    }
}