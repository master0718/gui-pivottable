"use client"

import { createAction } from '@reduxjs/toolkit';
import { SearchItem } from './types';

export const updateSearchItem = createAction<SearchItem>('foodListSearchForm/updateSearchItem');
export const filterSearchItem = createAction<{ key: string, searchText: string }>('foodListSearchForm/filterSearchItem');
export const setMesoCycleItems = createAction<Array<SearchItem>>('foodListSearchForm/setMesoCycleItems');
export const setMicroCycleItems = createAction<Array<SearchItem>>('foodListSearchForm/setMicroCycleItems');
export const setDayTypeItems = createAction<Array<SearchItem>>('foodListSearchForm/setDayTypeItems');
export const setDayItems = createAction<Array<SearchItem>>('foodListSearchForm/setDayItems');
export const setActivityTypeItems = createAction<Array<SearchItem>>('foodListSearchForm/setActivityTypeItems');
export const setActivityNameItems = createAction<Array<SearchItem>>('foodListSearchForm/setActivityNameItems');
export const setActivityStartTimeItems = createAction<Array<SearchItem>>('foodListSearchForm/setActivityStartTimeItems');
export const setActivityEndTimeItems = createAction<Array<SearchItem>>('foodListSearchForm/setActivityEndTimeItems');
export const setMealTargetMacroItems = createAction<Array<SearchItem>>('foodListSearchForm/setMealTargetMacroItems');
