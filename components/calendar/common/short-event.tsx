"use client";

import { MouseEvent } from "react";
import { IEvent } from "@/redux/hooks/types/events";
import { usePopup, useTypedSelector, useModal } from "@/redux/hooks";
import { NextPage } from "next";
import { formatDate } from "@/lib/date";

interface IShortEventProps {
  event: IEvent;
  top: number;
}

const ShortEvent: NextPage<IShortEventProps> = ({ event, top }) => {
  const { openPopup } = usePopup();
  const { openModalEdit } = useModal();
  const { events } = useTypedSelector(({ events }) => events);

  const handleOpenModal = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    e.stopPropagation();
    const eventData = events.find((event) => event.id === event.id);
    openModalEdit({ eventData, eventId: event.id });
    // openPopup({
    //     x: clientX,
    //     y: clientY,
    //     eventId: event.id
    // });
  };

  const timeStart = formatDate(new Date(event.start), "hh:mm");
  const eventStyle = { top: `${top}px` };
  const eventCircleStyle = { background: event.color };

  return (
    <div
      className="flex items-center gap-1 pl-2 cursor-pointer"
      onClick={handleOpenModal}
      style={eventStyle}
    >
      <div style={eventCircleStyle} className="w-2 h-2 rounded-full"></div>
      <div className="text-xs">{timeStart}</div>
      <div className="text-xs font-bold">{event.title}</div>
    </div>
  );
};

ShortEvent.displayName = "ShortEvent";

export { ShortEvent };
