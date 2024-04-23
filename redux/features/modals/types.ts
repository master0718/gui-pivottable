"use client"

import { TEventTypes, TPartialEvent } from "@/redux/hooks/types/events";

export interface IModalsState {
    isOpenModalEditEvent: boolean;
    isOpenModalCreateEvent: boolean;
    isOpenModalDayInfoEvents: boolean;
    modalCreateEventOptions: IModalCreateEventOptions | null;
    modalEditEventOptions: IModalEditEventOptions | null;
    selectedDate: Date | null;
}

export interface IModalCreateEventOptions {
    selectedDate: Date;
    type?: TEventTypes;
}

export interface IModalEditEventOptions {
    eventData: TPartialEvent;
    eventId: string;
}