"use client";

import { TEventTypes } from "@/redux/hooks/types/events";
import { IValidatorData } from "@/redux/hooks/use-validator/types";

export interface IModalValues extends IValidatorData {
    title: string;
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;
    description: string;
    isLongEvent: boolean;
    color: string;
}

export interface IMapEventValues {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    type?: TEventTypes;
    color?: string;
}