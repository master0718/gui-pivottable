"use client"

import { createAction } from '@reduxjs/toolkit';
import { SearchItem } from './types';

export const updateSearchItem = createAction<SearchItem>('overviewSearchForm/updateSearchItem');
export const filterSearchItem = createAction<{ key: string, searchText: string }>('overviewSearchForm/filterSearchItem');
export const setMesoCycleItems = createAction<Array<SearchItem>>('overviewSearchForm/setMesoCycleItems');
export const setMicroCycleItems = createAction<Array<SearchItem>>('overviewSearchForm/setMicroCycleItems');
export const setDayItems = createAction<Array<SearchItem>>('overviewSearchForm/setDayItems');
