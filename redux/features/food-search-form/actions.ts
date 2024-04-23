"use client"

import { createAction } from '@reduxjs/toolkit';
import { SearchItem } from './types';

export const updateSearchItem = createAction<SearchItem>('foodSearchForm/updateSearchItem');
export const filterSearchItem = createAction<{ key: string, searchText: string }>('foodSearchForm/filterSearchItem');
export const setCategoryItems = createAction<Array<SearchItem>>('foodSearchForm/setCategoryItems');
export const setSubCategoryItems = createAction<Array<SearchItem>>('foodSearchForm/setSubCategoryItems');
export const setItemNameItems = createAction<Array<SearchItem>>('foodSearchForm/setItemNameItems');
export const setMacroItems = createAction<Array<SearchItem>>('foodSearchForm/setMacroItems');
export const setIngredientItems = createAction<Array<SearchItem>>('foodSearchForm/setIngredientItems');
export const setFormItems = createAction<Array<SearchItem>>('foodSearchForm/setFormItems');
export const setTagItems = createAction<Array<SearchItem>>('foodSearchForm/setTagItems');
