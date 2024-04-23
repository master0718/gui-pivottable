"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/redux/store"
import { ManageMacrosSearchForm, SearchItem } from "./types"

const initialState: ManageMacrosSearchForm = {
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
	dayTypeField: {
		key: "DAY_TYPE",
		title: "Type of day",
		placeholder: "Filter by training day",
		items: []
	},
	dayField: {
		key: "DAY",
		title: "Day",
		placeholder: "Filter by training day",
		items: []
	},
	activityTypeField: {
		key: "ACTIVITY_TYPE",
		title: "Activity type",
		placeholder: "Filter by Activity type",
		items: []
	},
	activityNameField: {
		key: "ACTIVITY_NAME",
		title: "Activity name",
		placeholder: "Filter by Activity name",
		items: []
	},
	activityStartTimeField: {
		key: "ACTIVITY_STARTTIME",
		title: "Activity - Start time",
		placeholder: "Filter by start time",
		items: []
	},
	activityEndTimeField: {
		key: "ACTIVITY_ENDTIME",
		title: "Activity - End time",
		placeholder: "Filter by end time",
		items: []
	},
	mesoCycleItems: [],
	microCycleItems: [],
	dayTypeItems: [],
	dayItems: [],
	activityTypeItems: [],
	activityNameItems: [],
	activityStartTimeItems: [],
	activityEndTimeItems: [],
}

export const manageMacrosSearchFormSlice = createSlice({
	name: "manageMacrosSearchForm",
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
				case "DAY_TYPE":
					state.dayTypeField = {
						...state.dayTypeField,
						items: state.dayTypeField.items.map((item) => {
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
				case "ACTIVITY_TYPE":
					state.activityTypeField = {
						...state.activityTypeField,
						items: state.activityTypeField.items.map((item) => {
							if (item.id === searchItem.id) {
								return { ...item, status: searchItem.status };
							}
							return item;
						})
					}
					break;
				case "ACTIVITY_NAME":
					state.activityNameField = {
						...state.activityNameField,
						items: state.activityNameField.items.map((item) => {
							if (item.id === searchItem.id) {
								return { ...item, status: searchItem.status };
							}
							return item;
						})
					}
					break;
				case "ACTIVITY_STARTTIME":
					state.activityStartTimeField = {
						...state.activityStartTimeField,
						items: state.activityStartTimeField.items.map((item) => {
							if (item.id === searchItem.id) {
								return { ...item, status: searchItem.status };
							}
							return item;
						})
					}
					break;
				case "ACTIVITY_ENDTIME":
					state.activityEndTimeField = {
						...state.activityEndTimeField,
						items: state.activityEndTimeField.items.map((item) => {
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

				case "DAY_TYPE":
					const dayTypeItems = state.dayTypeItems.map((dayTypeItem) => {
						const matchingItem = state.dayTypeField.items.find((item) => item.id === dayTypeItem.id);
						if (matchingItem) {
							dayTypeItem.status = matchingItem.status;
						}
						return dayTypeItem;
					});
					const filteredDayTypeItems = dayTypeItems.filter((dayTypeItem) =>
						dayTypeItem.label.includes(searchText)
					);
					state.dayTypeField = {
						...state.dayTypeField,
						items: filteredDayTypeItems
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

				case "ACTIVITY_TYPE":
					const activityTypeItems = state.activityTypeItems.map((activityTypeItem) => {
						const matchingItem = state.activityTypeField.items.find((item) => item.id === activityTypeItem.id);
						if (matchingItem) {
							activityTypeItem.status = matchingItem.status;
						}
						return activityTypeItem;
					});
					const filteredActivityTypeItems = activityTypeItems.filter((activityTypeItem) =>
						activityTypeItem.label.includes(searchText)
					);
					state.activityTypeField = {
						...state.activityTypeField,
						items: filteredActivityTypeItems
					}
					break;

				case "ACTIVITY_NAME":
					const activityNameItems = state.activityNameItems.map((activityNameItem) => {
						const matchingItem = state.activityNameField.items.find((item) => item.id === activityNameItem.id);
						if (matchingItem) {
							activityNameItem.status = matchingItem.status;
						}
						return activityNameItem;
					});
					const filteredActivityNameItems = activityNameItems.filter((activityNameItem) =>
						activityNameItem.label.includes(searchText)
					);
					state.activityNameField = {
						...state.activityNameField,
						items: filteredActivityNameItems
					}
					break;

				case "ACTIVITY_STARTTIME":
					const activityStartTimeItems = state.activityStartTimeItems.map((activityStartTimeItem) => {
						const matchingItem = state.activityStartTimeField.items.find((item) => item.id === activityStartTimeItem.id);
						if (matchingItem) {
							activityStartTimeItem.status = matchingItem.status;
						}
						return activityStartTimeItem;
					});
					const filteredActivityStartTimeItems = activityStartTimeItems.filter((activityStartTimeItem) =>
						activityStartTimeItem.label.includes(searchText)
					);
					state.activityStartTimeField = {
						...state.activityStartTimeField,
						items: filteredActivityStartTimeItems
					}
					break;

				case "ACTIVITY_ENDTIME":
					const activityEndTimeItems = state.activityEndTimeItems.map((activityEndTimeItem) => {
						const matchingItem = state.activityEndTimeField.items.find((item) => item.id === activityEndTimeItem.id);
						if (matchingItem) {
							activityEndTimeItem.status = matchingItem.status;
						}
						return activityEndTimeItem;
					});
					const filteredActivityEndTimeItems = activityEndTimeItems.filter((activityEndTimeItem) =>
						activityEndTimeItem.label.includes(searchText)
					);
					state.activityEndTimeField = {
						...state.activityEndTimeField,
						items: filteredActivityEndTimeItems
					}
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

		// get all Day types and set the initial state
		setDayTypeItems: (state, action: PayloadAction<Array<SearchItem>>) => {
			state.dayTypeItems = action.payload;
			state.dayTypeField = {
				...state.dayTypeField,
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

		// get all Activity types and set the initial state
		setActivityTypeItems: (state, action: PayloadAction<Array<SearchItem>>) => {
			state.activityTypeItems = action.payload;
			state.activityTypeField = {
				...state.activityTypeField,
				items: action.payload
			}
		},

		// get all Activity names and set the initial state
		setActivityNameItems: (state, action: PayloadAction<Array<SearchItem>>) => {
			state.activityNameItems = action.payload;
			state.activityNameField = {
				...state.activityNameField,
				items: action.payload
			}
		},

		// get all Activity start times and set the initial state
		setActivityStartTimeItems: (state, action: PayloadAction<Array<SearchItem>>) => {
			state.activityStartTimeItems = action.payload;
			state.activityStartTimeField = {
				...state.activityStartTimeField,
				items: action.payload
			}
		},

		// get all Activity end times and set the initial state
		setActivityEndTimeItems: (state, action: PayloadAction<Array<SearchItem>>) => {
			state.activityEndTimeItems = action.payload;
			state.activityEndTimeField = {
				...state.activityEndTimeField,
				items: action.payload
			}
		},
	}
});

// selectors
export const getManageMacrosSearchForm = (state: RootState) => state.manageMacrosSearchForm

export const { reducer } = manageMacrosSearchFormSlice;