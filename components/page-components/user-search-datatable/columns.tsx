"use client";

import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import type { UserItem } from "./data/schema";
import { statuses } from "./data/data";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

export const columns: ColumnDef<UserItem>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<div className="flex justify-center space-x-2">
				<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && true)
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
				className="translate-y-[2px]"
			/>
			</div>
		),
		meta: {
			width: "w-16",
		},
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
				className="translate-y-[2px]"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	
	{
		accessorKey: "userName",
		header: ({ column }) => (
			<div className="flex flex-col items-center p-1">
				<DataTableColumnHeader column={column} title="User name" />
				<Input
					className="h-8"
					type="text"
					onChange={(e) => column.setFilterValue(e.target.value)}
				/>
			</div>
		),
		cell: ({ row }) => {
			return (
				<div className="flex justify-center space-x-2">
					<span className="truncate font-medium">
						{row.getValue("userName")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "firstName",
		header: ({ column }) => (
			<div className="flex flex-col items-center p-1">
				<DataTableColumnHeader column={column} title="First Name" />
				<Input
					className="h-8"
					type="text"
					onChange={(e) => column.setFilterValue(e.target.value)}
				/>
			</div>
		),
		cell: ({ row }) => {
			return (
				<div className="flex justify-center space-x-2">
					<span className="truncate font-medium">
						{row.getValue("firstName")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "lastName",
		header: ({ column }) => (
			<div className="flex flex-col items-center p-1">
				<DataTableColumnHeader column={column} title="Last name" />
				<Input
					className="h-8"
					type="text"
					onChange={(e) => column.setFilterValue(e.target.value)}
				/>
			</div>
		),
		cell: ({ row }) => {
			return (
				<div className="flex justify-center space-x-2">
					<span className="truncate font-medium">
						{row.getValue("lastName")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<div className="flex flex-col items-center p-1">
				<DataTableColumnHeader column={column} title="Status" />
				<DataTableFacetedFilter
					column={column}
					title="Status"
					options={statuses}
				/>
			</div>
		),
		cell: ({ row }) => {
			const status = statuses.find(
				(status) => status.value === row.getValue("status"),
			);

			if (!status) {
				return null;
			}

			return (
				<div className="flex justify-center items-center">
					<span>{status.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		id: "actions",
		header: () => <div className="flex justify-center space-x-2">Action</div>,
    meta: {
      width: "w-24",
    },
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
];
