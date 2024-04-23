"use client"

import { IEvent, IEventCreate, TPartialEvent } from '@/redux/hooks/types/events';
import { createAction } from '@reduxjs/toolkit';

export const getEvents = createAction<IEvent[]>('events/get-events');
export const createEvent = createAction<IEvent>('events/create-event');
export const updateEvent = createAction<{ eventId: string, updatedEvent: TPartialEvent }>('events/update-event');
export const deleteEvent = createAction<{eventId: string}>('events/delete-event');