"use client";

import { useActions, useClickOutside, useTypedSelector } from "@/redux/hooks";
import { NextPage } from "next";
import { useRef } from "react";
import { usePopup, useModal } from "@/redux/hooks";
import { useWindowSize } from "@/redux/hooks/use-window-size";
import { Button } from "@/components/ui/button";
import { Trash, Pencil } from "lucide-react";

interface IPopupProps {
  x: number;
  y: number;
  eventId: string;
}

const Popup: NextPage<IPopupProps> = ({ x, y, eventId }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const { events } = useTypedSelector(({ events }) => events);
  const { deleteEvent } = useActions("popups");
  const { closePopup } = usePopup();
  const { openModalEdit } = useModal();
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const getPopupStyle = () => {
    let popupHeight = 86;
    let popupWidth = 108;

    if (!!popupRef.current) {
      const { height, width } = getComputedStyle(popupRef.current);
      popupHeight = parseFloat(height);
      popupWidth = parseFloat(width);
    }

    const x2 = windowWidth - x - popupWidth;
    const y2 = windowHeight - y - popupHeight;

    const offsetX = x2 < 0 ? x - popupWidth : x;
    const offsetY = y2 < 0 ? y - popupHeight : y;

    const left = offsetX < 0 ? 0 : offsetX;
    const top = offsetY < 0 ? 0 : offsetY;

    return {
      left,
      top,
    };
  };

  const handleClosePopup = () => closePopup();

  useClickOutside(popupRef, handleClosePopup);

  const onDelete = () => {
    deleteEvent({ eventId });
    closePopup();
  };

  const handleOpenEditEventModal = () => {
    const eventData = events.find((event) => event.id === eventId);
    openModalEdit({ eventData, eventId: eventId });
    closePopup();
  };

  return (
    <div
      className="absolute flex flex-col z-10 border rounded-sm"
      ref={popupRef}
      style={getPopupStyle()}
    >
      <Button
        variant="outline"
        className="flex gap-2 justify-start items-center border-0"
        onClick={handleOpenEditEventModal}
      >
        <Pencil className="w-4 h-4" />
        <span>Edit</span>
      </Button>
      <Button
        variant="outline"
        className="flex gap-2 justify-start items-center border-0"
        onClick={onDelete}
      >
        <Trash className="w-4 h-4" />
        <span>Delete</span>
      </Button>
    </div>
  );
};

Popup.displayName = "Popup";

export { Popup };
