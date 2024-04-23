"use client";

import React from "react";
import { useEffect, useState } from "react";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/page-components/permission-datatable/data-table";
import { columns } from "@/components/page-components/permission-datatable/columns";

const PermissionView = () => {
	const [permissionItems, setPermissionItems] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const permissionItemsData = [
					{
						id: "1",
						menu: "Manage_exercise_list",
						subMenu: "excercises",
						action: "Search",
						role: "MANAGE_EXERCISE_LIST_EXERCISES_SEARCH",
						admin: "Allow",
						coach: "Allow",
						athlete: "Allow",
						assistant: "Disallow",
					},
					{
						id: "2",
						menu: "Manage_exercise_list",
						subMenu: "excercises",
						action: "Add",
						role: "MANAGE_EXERCISE_LIST_EXERCISES_ADD",
						admin: "Allow",
						coach: "Allow",
						athlete: "Allow",
						assistant: "Disallow",
					},
					{
						id: "3",
						menu: "Manage_exercise_list",
						subMenu: "excercises",
						action: "Import",
						role: "MANAGE_EXERCISE_LIST_EXERCISES_IMPORT",
						admin: "Allow",
						coach: "Allow",
						athlete: "Allow",
						assistant: "Disallow",
					},
				];
				setPermissionItems(permissionItemsData);
			} catch (error) {
				console.error("Error fetching tasks:", error);
			}
		};

		fetchData();
	}, []);
	return (
		<div className="container mx-auto px-4 h-full">
			<div className="flex md:shrink-0 justify-between h-full gap-1 mt-4">
				<div className="flex-2 flex flex-col">
					<Card>
						<CardHeader>
							<CardTitle>Permissions</CardTitle>
						</CardHeader>
						<CardContent>
							<DataTable data={permissionItems} columns={columns} />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default PermissionView;
