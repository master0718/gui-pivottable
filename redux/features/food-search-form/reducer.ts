"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/redux/store"
import { FoodSearchForm, SearchItem } from "./types"

const initialState: FoodSearchForm = {
    searchingForField: {
        title: "Select what are you searching for",
        items: [
            { key: "SEARCHING_FOR", id: 1, label: "Products", status: 0 },
            { key: "SEARCHING_FOR", id: 2, label: "Recipes", status: 0 },
            { key: "SEARCHING_FOR", id: 3, label: "Meals", status: 0 },
        ]
    },
    categoryField: {
        key: "CATEGORY",
        title: "Category",
        placeholder: "Search by Category",
        items: []
    },
    subCategoryField: {
        key: "SUB_CATEGORY",
        title: "Sub-Category",
        placeholder: "Search by Sub-Category",
        items: []
    },
    itemNameField: {
        key: "ITEM_NAME",
        title: "Item name",
        placeholder: "Search by Item",
        items: []
    },
    macroField: {
        key: "MACRO",
        title: "Macros",
        placeholder: "Search by Macros",
        items: []
    },
    ingredientField: {
        key: "INGREDIENT",
        title: "Ingredients",
        placeholder: "Search by Ingredients",
        items: []
    },
    formField: {
        key: "FORM",
        title: "Form",
        placeholder: "Search by Form",
        items: []
    },
    tagField: {
        key: "TAG",
        title: "Tags",
        placeholder: "Search by Tags",
        items: []
    },
    categoryItems: [],
    subCategoryItems: [],
    itemNameItems: [],
    macroItems: [],
    ingredientItems: [],
    formItems: [],
    tagItems: [],
}

export const foodSearchFormSlice = createSlice({
    name: "foodSearchForm",
    initialState: initialState,
    reducers: {
        // Update Searching for items' status
        updateSearchItem: (state, action: PayloadAction<SearchItem>) => {
            const searchItem = action.payload;
            switch (searchItem.key) {
                case "SEARCHING_FOR":
                    state.searchingForField = {
                        ...state.searchingForField,
                        items: state.searchingForField.items.map((item) => {
                            if (item.id === searchItem.id) {
                                return { ...item, status: searchItem.status };
                            }
                            return item;
                        })
                    }
                    break;
                case "CATEGORY":
                    state.categoryField = {
                        ...state.categoryField,
                        items: state.categoryField.items.map((item) => {
                            if (item.id === searchItem.id) {
                                return { ...item, status: searchItem.status };
                            }
                            return item;
                        })
                    }
                    break;
                case "SUB_CATEGORY":
                    state.subCategoryField = {
                        ...state.subCategoryField,
                        items: state.subCategoryField.items.map((item) => {
                            if (item.id === searchItem.id) {
                                return { ...item, status: searchItem.status };
                            }
                            return item;
                        })
                    }
                    break;
                case "ITEM_NAME":
                    state.itemNameField = {
                        ...state.itemNameField,
                        items: state.itemNameField.items.map((item) => {
                            if (item.id === searchItem.id) {
                                return { ...item, status: searchItem.status };
                            }
                            return item;
                        })
                    }
                    break;
                case "MACRO":
                    state.macroField = {
                        ...state.macroField,
                        items: state.macroField.items.map((item) => {
                            if (item.id === searchItem.id) {
                                return { ...item, status: searchItem.status };
                            }
                            return item;
                        })
                    }
                    break;
                case "INGREDIENT":
                    state.ingredientField = {
                        ...state.ingredientField,
                        items: state.ingredientField.items.map((item) => {
                            if (item.id === searchItem.id) {
                                return { ...item, status: searchItem.status };
                            }
                            return item;
                        })
                    }
                    break;
                case "FORM":
                    state.formField = {
                        ...state.formField,
                        items: state.formField.items.map((item) => {
                            if (item.id === searchItem.id) {
                                return { ...item, status: searchItem.status };
                            }
                            return item;
                        })
                    }
                    break;
                case "TAG":
                    state.tagField = {
                        ...state.tagField,
                        items: state.tagField.items.map((item) => {
                            if (item.id === searchItem.id) {
                                return { ...item, status: searchItem.status };
                            }
                            return item;
                        })
                    }
                    break;
                default:
                    break;
            }
        },

        // Filter search items by label
        filterSearchItem: (state, action: PayloadAction<{ key: string, searchText: string }>) => {

            const { key, searchText } = action.payload;
            switch (key) {
                case "CATEGORY":
                    const categoryItems = state.categoryItems.map((categoryItem) => {
                        const matchingItem = state.categoryField.items.find((item) => item.id === categoryItem.id);
                        if (matchingItem) {
                            categoryItem.status = matchingItem.status;
                        }
                        return categoryItem;
                    });
                    const filteredCategoryItems = categoryItems.filter((categoryItem) =>
                        categoryItem.label.includes(searchText)
                    );
                    state.categoryField = {
                        ...state.categoryField,
                        items: filteredCategoryItems
                    }
                    break;
                case "SUB_CATEGORY":
                    const subCategoryItems = state.subCategoryItems.map((subCategoryItem) => {
                        const matchingItem = state.subCategoryField.items.find((item) => item.id === subCategoryItem.id);
                        if (matchingItem) {
                            subCategoryItem.status = matchingItem.status;
                        }
                        return subCategoryItem;
                    });
                    const filteredSubCategoryItems = subCategoryItems.filter((subCategoryItem) =>
                        subCategoryItem.label.includes(searchText)
                    );
                    state.subCategoryField = {
                        ...state.subCategoryField,
                        items: filteredSubCategoryItems
                    }
                    break;
                case "ITEM_NAME":
                    const itemNameItems = state.itemNameItems.map((itemNameItem) => {
                        const matchingItem = state.itemNameField.items.find((item) => item.id === itemNameItem.id);
                        if (matchingItem) {
                            itemNameItem.status = matchingItem.status;
                        }
                        return itemNameItem;
                    });
                    const filteredItemNameItems = itemNameItems.filter((itemNameItem) =>
                        itemNameItem.label.includes(searchText)
                    );
                    state.itemNameField = {
                        ...state.itemNameField,
                        items: filteredItemNameItems
                    }
                    break;
                case "MACRO":
                    const macroItems = state.macroItems.map((macroItem) => {
                        const matchingItem = state.macroField.items.find((item) => item.id === macroItem.id);
                        if (matchingItem) {
                            macroItem.status = matchingItem.status;
                        }
                        return macroItem;
                    });
                    const filteredMacroItems = macroItems.filter((macroItem) =>
                        macroItem.label.includes(searchText)
                    );
                    state.macroField = {
                        ...state.itemNameField,
                        items: filteredMacroItems
                    }
                    break;
                case "INGREDIENT":
                    const ingredientItems = state.ingredientItems.map((ingredientItem) => {
                        const matchingItem = state.ingredientField.items.find((item) => item.id === ingredientItem.id);
                        if (matchingItem) {
                            ingredientItem.status = matchingItem.status;
                        }
                        return ingredientItem;
                    });
                    const filteredIngredientItems = ingredientItems.filter((ingredientItem) =>
                        ingredientItem.label.includes(searchText)
                    );
                    state.ingredientField = {
                        ...state.ingredientField,
                        items: filteredIngredientItems
                    }
                    break;
                case "FORM":
                    const formItems = state.formItems.map((formItem) => {
                        const matchingItem = state.formField.items.find((item) => item.id === formItem.id);
                        if (matchingItem) {
                            formItem.status = matchingItem.status;
                        }
                        return formItem;
                    });
                    const filteredFormItems = formItems.filter((formItem) =>
                        formItem.label.includes(searchText)
                    );
                    state.formField = {
                        ...state.formField,
                        items: filteredFormItems
                    }
                    break;
                case "TAG":
                    const tagItems = state.tagItems.map((tagItem) => {
                        const matchingItem = state.tagField.items.find((item) => item.id === tagItem.id);
                        if (matchingItem) {
                            tagItem.status = matchingItem.status;
                        }
                        return tagItem;
                    });
                    const filteredTagItems = tagItems.filter((tagItem) =>
                        tagItem.label.includes(searchText)
                    );
                    state.tagField = {
                        ...state.tagField,
                        items: filteredTagItems
                    }
                    break;
                default:
                    break;
            }
        },

        // get all categories and set the initial state
        setCategoryItems: (state, action: PayloadAction<Array<SearchItem>>) => {
            state.categoryItems = action.payload;
            state.categoryField = {
                ...state.categoryField,
                items: action.payload
            }
        },

        // get all sub categories and set the initial state
        setSubCategoryItems: (state, action: PayloadAction<Array<SearchItem>>) => {
            state.subCategoryItems = action.payload;
            state.subCategoryField = {
                ...state.subCategoryField,
                items: action.payload
            }
        },

        // get all item names and set the initial state
        setItemNameItems: (state, action: PayloadAction<Array<SearchItem>>) => {
            state.itemNameItems = action.payload;
            state.itemNameField = {
                ...state.itemNameField,
                items: action.payload
            }
        },

        // get all macros and set the initial state
        setMacroItems: (state, action: PayloadAction<Array<SearchItem>>) => {
            state.macroItems = action.payload;
            state.macroField = {
                ...state.macroField,
                items: action.payload
            }
        },

        // get all ingredients and set the initial state
        setIngredientItems: (state, action: PayloadAction<Array<SearchItem>>) => {
            state.ingredientItems = action.payload;
            state.ingredientField = {
                ...state.ingredientField,
                items: action.payload
            }
        },

        // get all forms and set the initial state
        setFormItems: (state, action: PayloadAction<Array<SearchItem>>) => {
            state.formItems = action.payload;
            state.formField = {
                ...state.formField,
                items: action.payload
            }
        },

        // get all tags and set the initial state
        setTagItems: (state, action: PayloadAction<Array<SearchItem>>) => {
            state.tagItems = action.payload;
            state.tagField = {
                ...state.tagField,
                items: action.payload
            }
        },
    },
})

// selectors
export const getFoodSearchForm = (state: RootState) => state.foodSearchForm

export const { reducer } = foodSearchFormSlice