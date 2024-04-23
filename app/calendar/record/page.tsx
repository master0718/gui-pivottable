"use client";

import React from "react";
import { useCalendar } from "@/redux/hooks/use-calendar";
import { CalendarHeader } from "@/components/calendar/header/calendar-header";
import { MonthCalendar } from "@/components/calendar/month-calendar/month-calendar";
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label";
import { colors, eventCategories } from "@/components/color-picker/colors";
import { Target } from "lucide-react";
import { WeekCalendar } from "@/components/calendar/week-calendar/week-calendar";
import { DayCalendar } from "@/components/calendar/day-calendar/day-calendar";
import { ListCalendar } from "@/components/calendar/list-calendar/list-calendar";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import { useModal } from '@/redux/hooks';
import { createDate, getNextStartMinutes, shmoment } from '@/lib/date';


const RecordDailyEvents = () => {
  const { state, functions } = useCalendar({ selectedDate: new Date() });

  const [isOpenSidebarPopup, setIsOpenSidebarPopup] = React.useState(false);

  const toggleSidebarPopup = () => {
    setIsOpenSidebarPopup(!isOpenSidebarPopup);
  }

  const {
    isOpenModalCreateEvent,
    isOpenModalDayInfoEvents,
    isOpenModalEditEvent,
    openModalCreate
  } = useModal();

  const handleOpenModal = () => {
    const date = new Date();
    const { hours, minutes } = createDate({ date: date });
    const startMins = getNextStartMinutes(minutes);
    const selectedDate = shmoment(state.selectedDay.date)
      .set('hours', hours)
      .set('minutes', startMins + minutes)
      .result();

    openModalCreate({ selectedDate });
  }

  const isBtnCreateEventDisable = isOpenModalCreateEvent || isOpenModalDayInfoEvents || isOpenModalEditEvent;

  return (
    <>
      <div className="container mx-auto px-4 h-full flex flex-col mb-10 relative">
        <div className="absolute lg:hidden top-16">
          <Button className="h-8" onClick={() => toggleSidebarPopup()}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <CalendarHeader
          onClickArrow={functions.onClickArrow}
          displayedDate={state.displayedDate}
          onChangeOption={functions.setMode}
          selectedOption={state.mode}
          selectedDay={state.selectedDay} />
        <div className='grow flex'>
          <div className='flex-none w-72 p-1 border border-r-0 flex-col gap-8 hidden lg:flex'>
            <Calendar
              mode="single"
              selected={state.selectedDay.date}
              onSelect={functions.onChangeState}
            />
            <div className="flex flex-col pl-4 gap-4">
              <Label>My Calendar</Label>
              {colors.map((color, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Target style={{ color: color }} />
                  <Label>{eventCategories[index]}</Label>
                </div>
              ))}
            </div>
            <div className="flex flex-col pl-4 gap-4">
              <Label>Upcoming events</Label>
              <div className="flex flex-col border-l-2 border-sky-700 h-10 w-full pl-2">
                <h1 className="font-bold">asdfasdfasdf</h1>
                <span className="text-xs ">asdfaeqwbrebqwenrbksadbfabsdflkasdf</span>
              </div>
              <div className="flex flex-col border-l-2 border-sky-700 h-10 w-full pl-2">
                <h1 className="font-bold">asdfasdsdfgfasdf</h1>
                <span className="text-xs ">asdfaeqwenrbksadbfabsdflkasdf</span>
              </div>
            </div>
          </div>
          <div className='grow border flex justify-between items-center'>
            {state.mode === 'month' && (
              <MonthCalendar
                weekDaysNames={state.weekDaysNames}
                calendarDaysOfMonth={state.calendarDaysOfMonth}
                selectedMonth={state.selectedMonth}
                onClickArrow={functions.onClickArrow}
              />
            )}
            {state.mode === 'week' && (
              <WeekCalendar
                weekDays={state.weekDays}
                weekDaysNames={state.weekDaysNames}
              />
            )}
            {state.mode === 'day' && (
              <DayCalendar
                selectedDay={state.selectedDay}
              />
            )}
            {state.mode === 'list' && (
              <ListCalendar
                weekDays={state.weekDays}
                weekDaysNames={state.weekDaysNames}
              />
            )}
          </div>
        </div>
        <div
          id="calendar-sidebar-overlay"
          className={`fixed top-0 left-0 w-full h-full bg-[hsl(var(--foreground))] opacity-60 z-40 ${isOpenSidebarPopup ? '' : 'hidden'} lg:hidden`}
          onClick={() => setIsOpenSidebarPopup(false)}
        ></div>
        <div
          id="calendar-sidebar-modal"
          className={`absolute top-0 left-2 rounded-sm border bg-[hsl(var(--background))] z-50 ${isOpenSidebarPopup ? '' : 'hidden'}`}
        >
          <Button variant="outline" className="absolute top-1 right-1 flex items-center p-2 space-x-2 rounded" onClick={() => setIsOpenSidebarPopup(false)}>
            <X />
          </Button>
          {/* Modal content here */}
          <div className="p-4">
            <div className='flex-none w-72 p-1 border flex flex-col gap-8 mt-8'>
              <Button variant='outline' className='w-full h-full' onClick={handleOpenModal} disabled={isBtnCreateEventDisable}>
                <Plus />Event Record
              </Button>
              <Calendar
                mode="single"
                selected={state.selectedDay.date}
                onSelect={functions.onChangeState}
              />
              <div className="flex flex-col pl-4 gap-4">
                <Label>My Calendar</Label>
                {colors.map((color, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Target style={{ color: color }} />
                    <Label>{eventCategories[index]}</Label>
                  </div>
                ))}
              </div>
              <div className="flex flex-col pl-4 gap-4">
                <Label>Upcoming events</Label>
                <div className="flex flex-col border-l-2 border-sky-700 h-10 w-full pl-2">
                  <h1 className="font-bold">asdfasdfasdf</h1>
                  <span className="text-xs ">asdfaeqwbrebqwenrbksadbfabsdflkasdf</span>
                </div>
                <div className="flex flex-col border-l-2 border-sky-700 h-10 w-full pl-2">
                  <h1 className="font-bold">asdfasdsdfgfasdf</h1>
                  <span className="text-xs ">asdfaeqwenrbksadbfabsdflkasdf</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordDailyEvents;