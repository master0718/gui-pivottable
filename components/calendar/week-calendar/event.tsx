"use client";

import { usePopup, useTypedSelector, useModal } from "@/redux/hooks";
import { NextPage } from "next";
import { MouseEvent } from "react";

interface IEventProps {
  height: number;
  top: number;
  title: string;
  time: string;
  color: string;
  id: string;
  width: string;
  left: string;
}

const Event: NextPage<IEventProps> = ({
  height,
  top,
  title,
  time,
  color,
  id,
  width,
  left,
}) => {
  const { openPopup } = usePopup();
  const { openModalEdit } = useModal();
  const { events } = useTypedSelector(({ events }) => events);

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

  const eventStyle = {
    height: height > 0 ? height : "auto",
    top,
    background: color,
    width,
    left,
    borderTop: "4px solid " + darkenColorHex(),
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const eventData = events.find((event) => event.id === id);
    openModalEdit({ eventData, eventId: id });
    // const { clientX, clientY } = e;
    // openPopup({ x: clientX, y: clientY, eventId: id });
  };

  return (
    <div
      style={eventStyle}
      className="rounded-sm absolute border z-10"
      onClick={handleClick}
    >
      <div className="text-xs p-1 truncate">{time}</div>
      <div className="pl-1 truncate">{title}</div>
    </div>
  );
};

Event.displayName = "Event";
export { Event };
