"use client";

import {
  checkDateIsEqual,
  getDateTime,
  getDifferenceInTimeFromTwoTimes,
  getDifferenceOfTwoDates,
  shmoment,
} from "@/lib/date";
import { createEventSchema } from "@/lib/validation-schemas";
import { useClickOutside, useForm } from "@/redux/hooks";
import { TPartialEvent } from "@/redux/hooks/types/events";
import { TSubmitHandler } from "@/redux/hooks/use-form/type";
import { NextPage } from "next";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { IModalValues } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { TimePicker } from "@/components/time-dropdown-picker/time-picker";
import { ColorPicker } from "@/components/color-picker/color-picker";
import { Textarea } from "@/components/ui/textarea";

interface IModalFormEventProps {
  textSendButton: string;
  textSendingButton: string;
  defaultEventValues: IModalValues;
  closeModal: () => void;
  handlerSubmit: (eventData: TPartialEvent) => void;
}

const ModalFormEvent: NextPage<IModalFormEventProps> = ({
  textSendButton,
  textSendingButton,
  defaultEventValues,
  closeModal,
  handlerSubmit,
}) => {
  const modalRef = useRef<HTMLDivElement>();

  const { values, handleChange, handleSubmit, setValue, errors, submitting } =
    useForm<IModalValues>({
      defaultValues: defaultEventValues,
      rules: createEventSchema,
    });

  const isValid = Object.keys(errors).length === 0;

  const onSelectStartDate = (date: Date) => {
    if (values.isLongEvent) {
      const { minutes } = getDifferenceOfTwoDates(
        values.startDate,
        values.endDate
      );
      const newEndDate = shmoment(date).add("minutes", minutes).result();

      setValue("endDate", newEndDate);
      setValue("startDate", date);
      return;
    }

    const oldStartDate = getDateTime(values.startDate, values.startTime);
    const newStartDate = getDateTime(date, values.startTime);
    const { minutes } = getDifferenceOfTwoDates(oldStartDate, values.endDate);
    const newEndDate = shmoment(newStartDate).add("minutes", minutes).result();

    setValue("endDate", newEndDate);
    setValue("startDate", newStartDate);
  };

  const onSelectEndDate = (date: Date) => {
    const endTime = values.isLongEvent ? "23:59" : values.endTime;
    setValue("endDate", getDateTime(date, endTime));
  };

  const onSelectStartTime = (time: string) => {
    const [startHours, startMins] = time.split(":");
    const { hours, minutes } = getDifferenceOfTwoDates(
      values.startDate,
      values.endDate
    );
    const restHourFromDiff = +startMins + (minutes % 60) >= 60 ? 1 : 0;

    const newEndMins = ((+startMins + minutes) % 60)
      .toString()
      .padStart(2, "0");
    const newEndHours = (
      (+startHours + Math.floor(hours) + restHourFromDiff) %
      24
    )
      .toString()
      .padStart(2, "0");

    const newEndTime = `${newEndHours}:${newEndMins}`;
    const newEndDate = shmoment(getDateTime(values.startDate, time))
      .add("minutes", minutes)
      .result();

    setValue("startTime", time);
    setValue("endTime", newEndTime);
    setValue("endDate", newEndDate);
    setValue("startDate", getDateTime(values.startDate, time));
  };

  const onSelectEndTime = (time: string) => {
    const isDatesEqual = checkDateIsEqual(values.startDate, values.endDate);
    const { minutes } =
      isDatesEqual || !!errors.endDate
        ? getDifferenceInTimeFromTwoTimes(values.startTime, time)
        : getDifferenceOfTwoDates(
            values.startDate,
            getDateTime(values.endDate, time)
          );
    const newEndDate = shmoment(getDateTime(values.startDate, values.startTime))
      .add("minutes", minutes)
      .result();

    setValue("endTime", time);
    setValue("endDate", newEndDate);
  };

  const onChangeColor = (color: string) => setValue("color", color);

  const onToggleIsLongEvent = () => {
    const isLongEvent = !values.isLongEvent;
    const startTime = isLongEvent ? "00:00" : values.startTime;
    const endTime = isLongEvent ? "23:59" : values.endTime;

    setValue("isLongEvent", isLongEvent);
    setValue("startDate", getDateTime(values.startDate, startTime));
    setValue("endDate", getDateTime(values.endDate, endTime));
  };

  const onSubmit: TSubmitHandler<IModalValues> = async (data) => {
    const newEvent: TPartialEvent = {
      title: data.title,
      description: data.description,
      start: data.startDate.toString(),
      end: data.endDate.toString(),
      type: data.isLongEvent ? "long-event" : "event",
      color: data.color,
    };

    await handlerSubmit(newEvent);
    closeModal();
  };

  // useClickOutside(modalRef, closeModal);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-40 bg-[hsl(var(--foreground))] z-40 opacity-60"></div>
      <div className="fixed top-0 left-0 w-full h-full z-40 z-40 flex justify-center items-center">
        <div
          className="relative w-2/4 border p-4 rounded-sm bg-[hsl(var(--background))] z-50"
          ref={modalRef}
        >
          <Button
            variant="outline"
            className="absolute top-1 right-1 flex items-center p-2 space-x-2 rounded"
            onClick={closeModal}
          >
            <X />
          </Button>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-2xl font-bold">Create New Event</h1>
            <Input
              placeholder="Title"
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
            />
            <div className="flex items-center gap-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[220px] justify-start text-left font-normal",
                      !values.startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {values.startDate ? (
                      format(values.startDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={values.startDate}
                    onSelect={onSelectStartDate}
                  />
                </PopoverContent>
              </Popover>
              {values.isLongEvent === false && (
                <div className="flex items-center">
                  <TimePicker
                    timeFrom="00:00"
                    selectedTime={values.startTime}
                    selectTime={onSelectStartTime}
                    isFullDay
                  />
                  <span>-</span>
                  <TimePicker
                    timeFrom={values.startTime}
                    selectedTime={values.endTime}
                    selectTime={onSelectEndTime}
                    isToday={checkDateIsEqual(values.startDate, values.endDate)}
                  />
                </div>
              )}
              {values.isLongEvent && <div>-</div>}
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[220px] justify-start text-left font-normal",
                        !values.endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {values.endDate ? (
                        format(values.endDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={values.endDate}
                      onSelect={onSelectEndDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Checkbox
                id="select-all-day"
                name="type"
                onClick={onToggleIsLongEvent}
                checked={values.isLongEvent}
              />
              <label
                htmlFor="select-all-day"
                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                All day
              </label>
            </div>
            <div className="">
              <ColorPicker
                selectedColor={values.color}
                onChangeColor={onChangeColor}
              />
            </div>
            <div className="">
              <Textarea
                name="description"
                placeholder="Description"
                className=""
                onChange={handleChange}
                value={values.description}
              />
            </div>
            <Button
              variant="outline"
              type="submit"
              className=""
              disabled={submitting || !isValid}
            >
              {submitting ? textSendingButton : textSendButton}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

ModalFormEvent.displayName = "ModalFormEvent";

export { ModalFormEvent };
