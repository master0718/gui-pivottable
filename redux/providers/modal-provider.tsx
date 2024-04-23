"use client"

import React, { ReactNode, FC } from "react"
import { useModal } from "../hooks"
import { ModalCreateEvent } from "@/components/modals/modal-create-event"
import { ModalEditEvent } from "@/components/modals/modal-edit-event"
import { ModalDayInfo } from "@/components/modals/modal-day-info"

export function ModalProvider({ children }) {
    const {
        isOpenModalCreateEvent,
        isOpenModalEditEvent,
        isOpenModalDayInfoEvents,
        selectedDate,
        modalEditEventOptions,
        modalCreateEventOptions
    } = useModal();

    return (
        <>
            {isOpenModalCreateEvent && (
                <ModalCreateEvent {...modalCreateEventOptions} />
            )}
            {isOpenModalEditEvent && (
                <ModalEditEvent {...modalEditEventOptions} />
            )}
            {isOpenModalDayInfoEvents && (
                <ModalDayInfo selectedDate={selectedDate} />
            )}
            {children}
        </>
    );
};