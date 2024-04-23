"use client"

import { createAction } from '@reduxjs/toolkit';
import { SearchItem } from './types';

export const updateSearchItem = createAction<SearchItem>('manageMacrosSearchForm/updateSearchItem');
export const filterSearchItem = createAction<{ key: string, searchText: string }>('manageMacrosSearchForm/filterSearchItem');
export const setMesoCycleItems = createAction<Array<SearchItem>>('manageMacrosSearchForm/setMesoCycleItems');
export const setMicroCycleItems = createAction<Array<SearchItem>>('manageMacrosSearchForm/setMicroCycleItems');
export const setDayTypeItems = createAction<Array<SearchItem>>('manageMacrosSearchForm/setDayTypeItems');
export const setDayItems = createAction<Array<SearchItem>>('manageMacrosSearchForm/setDayItems');
export const setActivityTypeItems = createAction<Array<SearchItem>>('manageMacrosSearchForm/setActivityTypeItems');
export const setActivityNameItems = createAction<Array<SearchItem>>('manageMacrosSearchForm/setActivityNameItems');
export const setActivityStartTimeItems = createAction<Array<SearchItem>>('manageMacrosSearchForm/setActivityStartTimeItems');
export const setActivityEndTimeItems = createAction<Array<SearchItem>>('manageMacrosSearchForm/setActivityEndTimeItems');
