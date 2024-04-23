"use client";

import { MouseEvent } from "react";
import { IEvent } from "@/redux/hooks/types/events";
import { usePopup, useTypedSelector, useModal } from "@/redux/hooks";
import { NextPage } from "next";
import { formatDate } from "@/lib/date";
import styles from "./long-event.module.css";
import { cn } from "@/lib/utils";

interface ILongEventProps {
  event: IEvent;
  width: number;
  top: number;
  color: string;
  isShowEvent: boolean;
  isMovingToNext: boolean;
  isMovingFromPrev: boolean;
}

const LongEvent: NextPage<ILongEventProps> = ({
  event,
  width,
  top,
  color,
  isShowEvent,
  isMovingToNext,
  isMovingFromPrev,
}) => {
  const { openPopup } = usePopup();
  const { openModalEdit } = useModal();
  const { events } = useTypedSelector(({ events }) => events);
  const eventStyle = {
    width: `calc(${width}% - 2%)`,
    top: `${top}px`,
    opacity: isShowEvent ? 1 : 0,
    zIndex: isShowEvent ? 1 : -1,
  };

  const eventContainerStyle = { background: color };
  const arrowLeftStyle = { borderRightColor: color };
  const arrowRightStyle = { borderLeftColor: color };

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

  const darkenColorHex = () => {
    const [r, g, b] = color.match(/\d+/g).map(Number);

    const hexR = Math.max(0, r - 100)
      .toString(16)
      .padStart(2, "0");
    const hexG = Math.max(0, g - 100)
      .toString(16)
      .padStart(2, "0");
    const hexB = Math.max(0, b - 100)
      .toString(16)
      .padStart(2, "0");

    const hexColor = `#${hexR}${hexG}${hexB}`;

    return hexColor;
  };

  const darkenLeftStyle = { borderLeft: "4px solid " + darkenColorHex() };

  return (
    <div
      style={eventStyle}
      onClick={handleOpenModal}
      className="px-[10px] cursor-pointer"
    >
      <div
        style={
          isMovingFromPrev
            ? { ...eventContainerStyle }
            : { ...eventContainerStyle, ...darkenLeftStyle }
        }
        className="relative h-[22px] text-xs leading-6 pl-2"
      >
        {event.title}
        {event.type === "event" &&
          `, ${formatDate(new Date(event.start), "hh:mm")}`}
        {isMovingFromPrev && (
          <div
            style={arrowLeftStyle}
            className={cn(styles.arrow, styles.left)}
          ></div>
        )}
        {isMovingToNext && (
          <div
            style={arrowRightStyle}
            className={cn(styles.arrow, styles.right)}
          ></div>
        )}
      </div>
    </div>
  );
};

LongEvent.displayName = "LongEvent";

export { LongEvent };
