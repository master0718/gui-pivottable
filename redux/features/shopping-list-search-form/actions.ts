"use client"

import { createAction } from '@reduxjs/toolkit';
import { SearchItem } from './types';

export const updateSearchItem = createAction<SearchItem>('shoppingListSearchForm/updateSearchItem');
export const filterSearchItem = createAction<{ key: string, searchText: string }>('shoppingListSearchForm/filterSearchItem');
export const setMesoCycleItems = createAction<Array<SearchItem>>('shoppingListSearchForm/setMesoCycleItems');
export const setMicroCycleItems = createAction<Array<SearchItem>>('shoppingListSearchForm/setMicroCycleItems');
export const setDayTypeItems = createAction<Array<SearchItem>>('shoppingListSearchForm/setDayTypeItems');
export const setDayItems = createAction<Array<SearchItem>>('shoppingListSearchForm/setDayItems');
export const setActivityTypeItems = createAction<Array<SearchItem>>('shoppingListSearchForm/setActivityTypeItems');
export const setActivityNameItems = createAction<Array<SearchItem>>('shoppingListSearchForm/setActivityNameItems');
export const setActivityStartTimeItems = createAction<Array<SearchItem>>('shoppingListSearchForm/setActivityStartTimeItems');
export const setActivityEndTimeItems = createAction<Array<SearchItem>>('shoppingListSearchForm/setActivityEndTimeItems');
export const setMealTargetMacroItems = createAction<Array<SearchItem>>('shoppingListSearchForm/setMealTargetMacroItems');
