"use client"

import { createAction } from '@reduxjs/toolkit';
import { SearchItem } from './types';

export const updateSearchItem = createAction<SearchItem>('exercisesAddSearchForm/updateSearchItem');
export const filterSearchItem = createAction<{ key: string, searchText: string }>('exercisesAddSearchForm/filterSearchItem');
export const setMesoCycleItems = createAction<Array<SearchItem>>('exercisesAddSearchForm/setMesoCycleItems');
export const setMicroCycleItems = createAction<Array<SearchItem>>('exercisesAddSearchForm/setMicroCycleItems');
export const setDayTypeItems = createAction<Array<SearchItem>>('exercisesAddSearchForm/setDayTypeItems');
export const setDayItems = createAction<Array<SearchItem>>('exercisesAddSearchForm/setDayItems');
export const setActivityTypeItems = createAction<Array<SearchItem>>('exercisesAddSearchForm/setActivityTypeItems');
export const setActivityNameItems = createAction<Array<SearchItem>>('exercisesAddSearchForm/setActivityNameItems');
export const setActivityStartTimeItems = createAction<Array<SearchItem>>('exercisesAddSearchForm/setActivityStartTimeItems');
export const setActivityEndTimeItems = createAction<Array<SearchItem>>('exercisesAddSearchForm/setActivityEndTimeItems');
