"use client";

import { shmoment } from "@/lib/date";
import { IModalCreateEventOptions } from "@/redux/features/modals/types";
import { useActions, useModal } from "@/redux/hooks";
import { NextPage } from "next";
import { getMapEventValues } from "@/lib/helpers";
import { ModalFormEvent } from "./modal-form-event";

const ModalCreateEvent: NextPage<IModalCreateEventOptions> = ({
    selectedDate,
    type = 'event'
}) => {
    const { createEvent } = useActions('events');
    const { closeModalCreate } = useModal();
    const endDate = shmoment(selectedDate).add('hours', 1).result();

    const defaultEventValues = getMapEventValues({
        title: '',
        description: '',
        startDate: selectedDate,
        endDate,
        type
    });

    return (
        <ModalFormEvent
            textSendButton="Create"
            textSendingButton="Creating"
            defaultEventValues={defaultEventValues}
            closeModal={closeModalCreate}
            handlerSubmit={createEvent}
        />
    )
}

ModalCreateEvent.displayName = "ModalCreateEvent";

export { ModalCreateEvent };