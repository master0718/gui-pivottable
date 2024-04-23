"use client"

// Select what are you searching for
export type SearchItem = {
    key: string;
    id: number;
    label: string;
    status: number;
    comparator?: number;
    value?: number;
}

// SelectFilterField
export interface SelectFilterField {
    key: string;
    title: string;
    placeholder: string;
    items: Array<SearchItem>;
}

export interface ShoppingListSearchForm {
    mesoCycleField: SelectFilterField;
    microCycleField: SelectFilterField;
    dayTypeField: SelectFilterField;
    dayField: SelectFilterField;
    activityTypeField: SelectFilterField;
    activityNameField: SelectFilterField;
    activityStartTimeField: SelectFilterField;
    activityEndTimeField: SelectFilterField;
    mealTargetMacroField: SelectFilterField;

    mesoCycleItems: Array<SearchItem>;
    microCycleItems: Array<SearchItem>;
    dayTypeItems: Array<SearchItem>;
    dayItems: Array<SearchItem>;
    activityTypeItems: Array<SearchItem>;
    activityNameItems: Array<SearchItem>;
    activityStartTimeItems: Array<SearchItem>;
    activityEndTimeItems: Array<SearchItem>;
    mealTargetMacroItems: Array<SearchItem>;
}