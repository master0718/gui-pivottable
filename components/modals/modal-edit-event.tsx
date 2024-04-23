"use client";

import { getMapEventValues } from "@/lib/helpers";
import { IModalEditEventOptions } from "@/redux/features/modals/types";
import { useActions, useModal } from "@/redux/hooks";
import { IEvent, TPartialEvent } from "@/redux/hooks/types/events";
import { NextPage } from "next";
import { ModalFormEvent } from "./modal-form-event";

const ModalEditEvent: NextPage<IModalEditEventOptions> = ({
  eventData,
  eventId
}) => {
  const { updateEvent } = useActions('events');
  const { closeModalEdit } = useModal();
  const startDate = new Date(eventData.start);
  const endDate = new Date(eventData.end);

  const defaultEventValues = getMapEventValues({
    title: eventData.title,
    description: eventData.description,
    startDate,
    endDate,
    type: eventData.type,
    color: eventData.color
  });

  const onUpdateEvent = (event: TPartialEvent) => updateEvent({ eventId: eventId, updatedEvent: event });

  return (
    <ModalFormEvent
      textSendButton="Edit"
      textSendingButton="Editing"
      defaultEventValues={defaultEventValues}
      handlerSubmit={onUpdateEvent}
      closeModal={closeModalEdit}
    />
  )
}

ModalEditEvent.displayName = "ModalEditEvent";

export { ModalEditEvent };