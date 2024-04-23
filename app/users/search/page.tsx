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
import { DataTable } from "@/components/page-components/user-search-datatable/data-table";
import { columns } from "@/components/page-components/user-search-datatable/columns";

const SearchUsers = () => {
	const [userItems, setUserItems] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userItemData = [
					{
						id: "1",
						userName: "john_doe",
						firstName: "John",
						lastName: "Doe",
						profile: "admin",
						status: "ACTIVE",
					},
					{
						id: "2",
						userName: "jane_smith",
						firstName: "Jane",
						lastName: "Smith",
						profile: "coach",
						status: "INACTIVE",
					},
					{
						id: "3",
						userName: "mike_johnson",
						firstName: "Mike",
						lastName: "Johnson",
						profile: "athlete",
						status: "ACTIVE",
					},
					{
						id: "4",
						userName: "dennis_johnson",
						firstName: "Mike",
						lastName: "Johnson",
						profile: "athlete",
						status: "ACTIVE",
					},
				];
				setUserItems(userItemData);
			} catch (error) {
				console.error("Error fetching users:", error);
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
							<CardTitle>Search User</CardTitle>
						</CardHeader>
						<CardContent>
							<DataTable data={userItems} columns={columns} />
						</CardContent>
						<CardFooter className="flex justify-end">
							<Button className="h-8">{"Add User"}</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default SearchUsers;
