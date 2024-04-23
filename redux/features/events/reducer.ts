"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/redux/store"
import { IEventsState } from "./types"
import { deleteEvent, getEvents, updateEvent, createEvent } from "./actions"

const initialState: IEventsState = {
    events: []
}

export const eventsSlice = createSlice({
    name: "events",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getEvents, (state, { payload }) => {
                state.events = payload
            })
            .addCase(updateEvent, (state, { payload }) => {
                const { eventId, updatedEvent } = payload;
                state.events = state.events.map(event => event.id === eventId ? { ...event, updatedEvent } : event);
            })
            .addCase(deleteEvent, (state, { payload }) => {
                const { eventId } = payload;
                state.events = state.events.filter(event => event.id !== eventId);
            })
            .addCase(createEvent, (state, { payload }) => {
                payload = {
                    ...payload,
                    id: new Date().getTime().toString()
                }
                state.events = [...state.events, payload]
            })
    },
    reducers: {

    }
})

export const { reducer } = eventsSlice