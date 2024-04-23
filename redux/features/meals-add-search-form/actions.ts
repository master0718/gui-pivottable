"use client"

import { createAction } from '@reduxjs/toolkit';
import { SearchItem } from './types';

export const updateSearchItem = createAction<SearchItem>('mealsAddSearchForm/updateSearchItem');
export const filterSearchItem = createAction<{key: string, searchText: string}>('mealsAddSearchForm/filterSearchItem');
export const setMesoCycleItems = createAction<Array<SearchItem>>('mealsAddSearchForm/setMesoCycleItems');
export const setMicroCycleItems = createAction<Array<SearchItem>>('mealsAddSearchForm/setMicroCycleItems');
export const setDayTypeItems = createAction<Array<SearchItem>>('mealsAddSearchForm/setDayTypeItems');
export const setDayItems = createAction<Array<SearchItem>>('mealsAddSearchForm/setDayItems');
export const setActivityTypeItems = createAction<Array<SearchItem>>('mealsAddSearchForm/setActivityTypeItems');
export const setActivityNameItems = createAction<Array<SearchItem>>('mealsAddSearchForm/setActivityNameItems');
export const setActivityStartTimeItems = createAction<Array<SearchItem>>('mealsAddSearchForm/setActivityStartTimeItems');
export const setActivityEndTimeItems = createAction<Array<SearchItem>>('mealsAddSearchForm/setActivityEndTimeItems');
