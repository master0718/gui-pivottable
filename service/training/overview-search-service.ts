"use client";

import { HttpService } from "../httpservice"

export class OverviewSearchService extends HttpService {

	private static classInstance?: OverviewSearchService;

	constructor(token?: string) {
		super('http://localhost:8080', token);
	}

	public static getInstance(token?: string) {
		if (!this.classInstance) {
			this.classInstance = new OverviewSearchService(token);
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

	// get all days on page load
	public getDayItems = () => {
		// this.instance.get("/category/listAll").then(response => {
		//     if (response) {
		//         return response.data;
		//     }
		// })
		const searchItems = [
			{ key: "DAY", id: 1, label: "Day 1", status: 0 },
			{ key: "DAY", id: 2, label: "Day 2", status: 0 },
			{ key: "DAY", id: 4, label: "Day 3", status: 0 },
			{ key: "DAY", id: 5, label: "Day 4", status: 0 },
			{ key: "DAY", id: 6, label: "Day 5", status: 0 },
			{ key: "DAY", id: 7, label: "Day 6", status: 0 },
			{ key: "DAY", id: 8, label: "Day 7", status: 0 },
		];
		return searchItems
	}

}