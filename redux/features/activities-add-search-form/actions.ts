"use client"

import { createAction } from '@reduxjs/toolkit';
import { SearchItem } from './types';

export const updateSearchItem = createAction<SearchItem>('activitiesAddSearchForm/updateSearchItem');
export const filterSearchItem = createAction<{ key: string, searchText: string }>('activitiesAddSearchForm/filterSearchItem');
export const setMesoCycleItems = createAction<Array<SearchItem>>('activitiesAddSearchForm/setMesoCycleItems');
export const setMicroCycleItems = createAction<Array<SearchItem>>('activitiesAddSearchForm/setMicroCycleItems');
export const setDayTypeItems = createAction<Array<SearchItem>>('activitiesAddSearchForm/setDayTypeItems');
export const setDayItems = createAction<Array<SearchItem>>('activitiesAddSearchForm/setDayItems');
export const setActivityTypeItems = createAction<Array<SearchItem>>('activitiesAddSearchForm/setActivityTypeItems');
export const setActivityNameItems = createAction<Array<SearchItem>>('activitiesAddSearchForm/setActivityNameItems');
export const setActivityStartTimeItems = createAction<Array<SearchItem>>('activitiesAddSearchForm/setActivityStartTimeItems');
export const setActivityEndTimeItems = createAction<Array<SearchItem>>('activitiesAddSearchForm/setActivityEndTimeItems');
