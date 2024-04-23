"use client"

import { createAction } from '@reduxjs/toolkit';
import { SearchItem } from './types';

export const updateSearchItem = createAction<SearchItem>('supplementListSearchForm/updateSearchItem');
export const filterSearchItem = createAction<{ key: string, searchText: string }>('supplementListSearchForm/filterSearchItem');
export const setMesoCycleItems = createAction<Array<SearchItem>>('supplementListSearchForm/setMesoCycleItems');
export const setMicroCycleItems = createAction<Array<SearchItem>>('supplementListSearchForm/setMicroCycleItems');
export const setDayTypeItems = createAction<Array<SearchItem>>('supplementListSearchForm/setDayTypeItems');
export const setDayItems = createAction<Array<SearchItem>>('supplementListSearchForm/setDayItems');
export const setActivityTypeItems = createAction<Array<SearchItem>>('supplementListSearchForm/setActivityTypeItems');
export const setActivityNameItems = createAction<Array<SearchItem>>('supplementListSearchForm/setActivityNameItems');
export const setActivityStartTimeItems = createAction<Array<SearchItem>>('supplementListSearchForm/setActivityStartTimeItems');
export const setActivityEndTimeItems = createAction<Array<SearchItem>>('supplementListSearchForm/setActivityEndTimeItems');
export const setMealTargetMacroItems = createAction<Array<SearchItem>>('supplementListSearchForm/setMealTargetMacroItems');
