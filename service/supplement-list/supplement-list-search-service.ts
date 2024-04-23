"use client";

import { HttpService } from "../httpservice"

export class SupplementListSearchService extends HttpService {

	private static classInstance?: SupplementListSearchService;

	constructor(token?: string) {
		super('http://localhost:8080', token);
	}

	public static getInstance(token?: string) {
		if (!this.classInstance) {
			this.classInstance = new SupplementListSearchService(token);
		}
		return this.classInstance;
	}

	// get all meso cycles on page load
	public getMesoCycleItems = () => {
		// this.instance.get("/category/listAll").then(response => {
		//     if (response) {
		//         return response.data;
		//     }
		// })
		const searchItems = [
			{ key: "MESO_CYCLE", id: 1, label: "Meso Cycle 1", status: 0 },
			{ key: "MESO_CYCLE", id: 2, label: "Meso Cycle 2", status: 0 },
			{ key: "MESO_CYCLE", id: 3, label: "Meso Cycle 3", status: 0 },
			{ key: "MESO_CYCLE", id: 4, label: "Meso Cycle 4", status: 0 },
			{ key: "MESO_CYCLE", id: 5, label: "Meso Cycle 5", status: 0 },
			{ key: "MESO_CYCLE", id: 6, label: "Meso Cycle 6", status: 0 },
			{ key: "MESO_CYCLE", id: 7, label: "Meso Cycle 7", status: 0 },
			{ key: "MESO_CYCLE", id: 8, label: "Meso Cycle 8", status: 0 },
		];
		return searchItems
	}

	// get all micro cycles on page load
	public getMicroCycleItems = () => {
		// this.instance.get("/category/listAll").then(response => {
		//     if (response) {
		//         return response.data;
		//     }
		// })
		const searchItems = [
			{ key: "MICRO_CYCLE", id: 1, label: "Micro Cycle 1", status: 0 },
			{ key: "MICRO_CYCLE", id: 2, label: "Micro Cycle 2", status: 0 },
			{ key: "MICRO_CYCLE", id: 3, label: "Micro Cycle 3", status: 0 },
			{ key: "MICRO_CYCLE", id: 4, label: "Micro Cycle 4", status: 0 },
			{ key: "MICRO_CYCLE", id: 5, label: "Micro Cycle 5", status: 0 },
			{ key: "MICRO_CYCLE", id: 6, label: "Micro Cycle 6", status: 0 },
			{ key: "MICRO_CYCLE", id: 7, label: "Micro Cycle 7", status: 0 },
			{ key: "MICRO_CYCLE", id: 8, label: "Micro Cycle 8", status: 0 },
		];
		return searchItems
	}

	// get all day types on page load
	public getDayTypeItems = () => {
		// this.instance.get("/category/listAll").then(response => {
		//     if (response) {
		//         return response.data;
		//     }
		// })
		const searchItems = [
			{ key: "DAY_TYPE", id: 1, label: "Day of the week 1", status: 0 },
			{ key: "DAY_TYPE", id: 2, label: "Day of the week 2", status: 0 },
			{ key: "DAY_TYPE", id: 3, label: "Day of the week 3", status: 0 },
		];
		return searchItems
	}

	// get all days on page load
	public getDayItems = () => {
		const searchItems = [
			{ key: "DAY", id: 1, label: "Day of the week 1", status: 0 },
			{ key: "DAY", id: 2, label: "Day of the week 2", status: 0 },
			{ key: "DAY", id: 3, label: "Day of the week 3", status: 0 },
		];
		return searchItems
	}

	// get all activity types on page load
	public getActivityTypeItems = () => {
		// this.instance.get("/category/listAll").then(response => {
		//     if (response) {
		//         return response.data;
		//     }
		// })
		const searchItems = [
			{ key: "ACTIVITY_TYPE", id: 1, label: "Activity type 1", status: 0 },
			{ key: "ACTIVITY_TYPE", id: 2, label: "Activity type 2", status: 0 },
			{ key: "ACTIVITY_TYPE", id: 3, label: "Activity type 3", status: 0 },
		];
		return searchItems
	}

	// get all activity names on page load
	public getActivityNameItems = () => {
		// this.instance.get("/category/listAll").then(response => {
		//     if (response) {
		//         return response.data;
		//     }
		// })
		const searchItems = [
			{ key: "ACTIVITY_NAME", id: 1, label: "Activity name 1", status: 0 },
			{ key: "ACTIVITY_NAME", id: 2, label: "Activity name 2", status: 0 },
			{ key: "ACTIVITY_NAME", id: 3, label: "Activity name 3", status: 0 },
		];
		return searchItems
	}

	// get all activity start times on page load
	public getActivityStartTimeItems = () => {
		// this.instance.get("/category/listAll").then(response => {
		//     if (response) {
		//         return response.data;
		//     }
		// })
		const searchItems = [
			{ key: "ACTIVITY_STARTTIME", id: 1, label: "Time 1", status: 0 },
			{ key: "ACTIVITY_STARTTIME", id: 2, label: "Time 2", status: 0 },
			{ key: "ACTIVITY_STARTTIME", id: 3, label: "Time 3", status: 0 },
		];
		return searchItems
	}

	// get all activity end times on page load
	public getActivityEndTimeItems = () => {
		// this.instance.get("/category/listAll").then(response => {
		//     if (response) {
		//         return response.data;
		//     }
		// })
		const searchItems = [
			{ key: "ACTIVITY_ENDTIME", id: 1, label: "Time 1", status: 0 },
			{ key: "ACTIVITY_ENDTIME", id: 2, label: "Time 2", status: 0 },
			{ key: "ACTIVITY_ENDTIME", id: 3, label: "Time 3", status: 0 },
		];
		return searchItems
	}

	// get all activity end times on page load
	public getMealTargetMacroItems = () => {
		// this.instance.get("/category/listAll").then(response => {
		//     if (response) {
		//         return response.data;
		//     }
		// })
		const searchItems = [
			{ key: "MEAL_TARGET_MACRO", id: 1, label: "Calories", status: 0, comparator: 0, value: 0 },
			{ key: "MEAL_TARGET_MACRO", id: 2, label: "Protein", status: 0, comparator: 0, value: 0 },
			{ key: "MEAL_TARGET_MACRO", id: 3, label: "Fat", status: 0, comparator: 0, value: 0 },
			{ key: "MEAL_TARGET_MACRO", id: 4, label: "Carbs", status: 0, comparator: 0, value: 0 },
			{ key: "MEAL_TARGET_MACRO", id: 5, label: "Omega", status: 0, comparator: 0, value: 0 },
		];
		return searchItems
	}

}