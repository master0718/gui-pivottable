"use client"

// Select what are you searching for
export type SearchItem = {
    key: string;
    id: number;
    label: string;
    status: number;
}

// Select what are you searching for
export interface SearchingForField {
    title: string;
    items: Array<SearchItem>;
}

// SelectFilterField
export interface SelectFilterField {
    key: string;
    title: string;
    placeholder: string;
    items: Array<SearchItem>;
}


export interface FoodSearchForm {
    // Select what are you searching for
    searchingForField: SearchingForField;
    // Category
    categoryField: SelectFilterField;
    // Sub Category
    subCategoryField: SelectFilterField;
    // Item name
    itemNameField: SelectFilterField;
    // Macros
    macroField: SelectFilterField;
    // Ingredients
    ingredientField: SelectFilterField;
    // Form
    formField: SelectFilterField;
    // Tags
    tagField: SelectFilterField;

    // Category items from db
    categoryItems: Array<SearchItem>;
    // Sub Category items from db
    subCategoryItems: Array<SearchItem>;
    // Item name items from db
    itemNameItems: Array<SearchItem>;
    // Macro items from db
    macroItems: Array<SearchItem>;
    // Ingredient items from db
    ingredientItems: Array<SearchItem>;
    // Form items from db
    formItems: Array<SearchItem>;
    // Tag items from db
    tagItems: Array<SearchItem>;
}