"use client"

// Select what are you searching for
export type SearchItem = {
    key: string;
    id: number;
    label: string;
    status: number;
}

// SelectFilterField
export interface SelectFilterField {
    key: string;
    title: string;
    placeholder: string;
    items: Array<SearchItem>;
}

export interface ExercisesAddSearchForm {
    mesoCycleField: SelectFilterField;
    microCycleField: SelectFilterField;
    dayTypeField: SelectFilterField;
    dayField: SelectFilterField;

    mesoCycleItems: Array<SearchItem>;
    microCycleItems: Array<SearchItem>;
    dayTypeItems: Array<SearchItem>;
    dayItems: Array<SearchItem>;
}