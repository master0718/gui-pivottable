"use client";

import { SearchItem } from "@/redux/features/meals-add-search-form/types";

export const getTabItemsToShow = (items: Array<SearchItem>, defaultTabCountToShow: number) => {

    if (defaultTabCountToShow >= items.length) {
        return {
            itemsToShow: items,
            itemsToMore: []
        }; // Return all items
    } else {
        // Return a slice of the items array up to the specified count
        return {
            itemsToShow: items.slice(0, defaultTabCountToShow),
            itemsToMore: items.slice(defaultTabCountToShow)
        };
    }
}