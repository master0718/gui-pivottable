"use client";

import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";

import { Switch } from "@/components/ui/switch";

import type { AssistanceItem } from "./data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<AssistanceItem>[] = [
	{
		accessorKey: "menu",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Menu" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="truncate font-medium">{row.getValue("menu")}</span>
				</div>
			);
		},
		meta: {
			rowSpan: 2,
		},
	},
	{
		accessorKey: "subMenu",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Sub-menu" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="truncate font-medium">
						{row.getValue("subMenu")}
					</span>
				</div>
			);
		},
		meta: {
			rowSpan: 2,
		},
	},
	{
		accessorKey: "action",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Action" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="truncate font-medium">{row.getValue("action")}</span>
				</div>
			);
		},
		meta: {
			rowSpan: 2,
		},
	},
	{
		accessorKey: "role",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Role" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="truncate font-medium">{row.getValue("role")}</span>
				</div>
			);
		},
		meta: {
			rowSpan: 2,
		},
	},
	{
		header: "User assisting other users",
		columns: [
			{
				accessorKey: "user1",
				header: ({ column }) => (
					<DataTableColumnHeader column={column} title="User 1" />
				),
				cell: ({ row }) => {
					return (
						<div className="flex space-x-2">
							<Switch checked={row.getValue("user1") === "Allow"} />
						</div>
					);
				},
			},
			{
				accessorKey: "user2",
				header: ({ column }) => (
					<DataTableColumnHeader column={column} title="User 2" />
				),
				cell: ({ row }) => {
					return (
						<div className="flex space-x-2">
							<Switch checked={row.getValue("user2") === "Allow"} />
						</div>
					);
				},
			},
			{
				accessorKey: "user3",
				header: ({ column }) => (
					<DataTableColumnHeader column={column} title="User 3" />
				),
				cell: ({ row }) => {
					return (
						<div className="flex space-x-2">
							<Switch checked={row.getValue("user3") === "Allow"} />
						</div>
					);
				},
			},
		],
	},
];
