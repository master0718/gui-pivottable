"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/redux/store"
import { OverviewSearchForm, SearchItem } from "./types"

const initialState: OverviewSearchForm = {
	mesoCycleField: {
		key: "MESO_CYCLE",
		title: "MesoCycles",
		placeholder: "Filter by MesoCycle",
		items: []
	},
	microCycleField: {
		key: "MICRO_CYCLE",
		title: "MicroCycles",
		placeholder: "Filter by MicroCycle",
		items: []
	},
	dayField: {
		key: "DAY",
		title: "Day",
		placeholder: "Filter by training day",
		items: []
	},
	mesoCycleItems: [],
	microCycleItems: [],
	dayItems: [],
}

export const overviewSearchFormSlice = createSlice({
	name: "overviewSearchForm",
	initialState: initialState,
	reducers: {
		// Update Searching for items' status
		updateSearchItem: (state, action: PayloadAction<SearchItem>) => {
			const searchItem = action.payload;

			switch (searchItem.key) {
				case "MESO_CYCLE":
					state.mesoCycleField = {
						...state.mesoCycleField,
						items: state.mesoCycleField.items.map((item) => {
							if (item.id === searchItem.id) {
								return { ...item, status: searchItem.status };
							}
							return item;
						})
					}
					break;
				case "MICRO_CYCLE":
					state.microCycleField = {
						...state.microCycleField,
						items: state.microCycleField.items.map((item) => {
							if (item.id === searchItem.id) {
								return { ...item, status: searchItem.status };
							}
							return item;
						})
					}
					break;
				case "DAY":
					state.dayField = {
						...state.dayField,
						items: state.dayField.items.map((item) => {
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
				case "MESO_CYCLE":
					const mesoCycleItems = state.mesoCycleItems.map((mesoCycleItem) => {
						const matchingItem = state.mesoCycleField.items.find((item) => item.id === mesoCycleItem.id);
						if (matchingItem) {
							mesoCycleItem.status = matchingItem.status;
						}
						return mesoCycleItem;
					});
					const filteredMesoCycleItems = mesoCycleItems.filter((mesoCycleItem) =>
						mesoCycleItem.label.includes(searchText)
					);
					state.mesoCycleField = {
						...state.mesoCycleField,
						items: filteredMesoCycleItems
					}
					break;

				case "MICRO_CYCLE":
					const microCycleItems = state.microCycleItems.map((microCycleItem) => {
						const matchingItem = state.microCycleField.items.find((item) => item.id === microCycleItem.id);
						if (matchingItem) {
							microCycleItem.status = matchingItem.status;
						}
						return microCycleItem;
					});
					const filteredMicroCycleItems = microCycleItems.filter((microCycleItem) =>
						microCycleItem.label.includes(searchText)
					);
					state.microCycleField = {
						...state.microCycleField,
						items: filteredMicroCycleItems
					}
					break;

				case "DAY":
					const dayItems = state.dayItems.map((dayItem) => {
						const matchingItem = state.dayField.items.find((item) => item.id === dayItem.id);
						if (matchingItem) {
							dayItem.status = matchingItem.status;
						}
						return dayItem;
					});
					const filteredDayItems = dayItems.filter((dayItem) =>
						dayItem.label.includes(searchText)
					);
					state.dayField = {
						...state.dayField,
						items: filteredDayItems
					}
					break;

				default:
					break;

			}
		},

		// get all MesoCycles and set the initial state
		setMesoCycleItems: (state, action: PayloadAction<Array<SearchItem>>) => {
			state.mesoCycleItems = action.payload;
			state.mesoCycleField = {
				...state.mesoCycleField,
				items: action.payload
			}
		},

		// get all MicroCycles and set the initial state
		setMicroCycleItems: (state, action: PayloadAction<Array<SearchItem>>) => {
			state.microCycleItems = action.payload;
			state.microCycleField = {
				...state.microCycleField,
				items: action.payload
			}
		},

		// get all days and set the initial state
		setDayItems: (state, action: PayloadAction<Array<SearchItem>>) => {
			state.dayItems = action.payload;
			state.dayField = {
				...state.dayField,
				items: action.payload
			}
		},
	}
});

// selectors
export const getOverviewSearchForm = (state: RootState) => state.overviewSearchForm

export const { reducer } = overviewSearchFormSlice;