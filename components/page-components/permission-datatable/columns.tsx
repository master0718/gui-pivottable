"use client";

import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";

import { Switch } from "@/components/ui/switch";

import type { PermissionItem } from "./data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<PermissionItem>[] = [
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
	},
	{
		accessorKey: "admin",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Admin" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<Switch checked={row.getValue("admin") === "Allow"} />
				</div>
			);
		},
	},
	{
		accessorKey: "coach",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Coach" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<Switch checked={row.getValue("coach") === "Allow"} />
				</div>
			);
		},
	},
	{
		accessorKey: "athlete",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Athlete" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<Switch checked={row.getValue("athlete") === "Allow"} />
				</div>
			);
		},
	},
	{
		accessorKey: "assistant",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Assistant" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<Switch checked={row.getValue("assistant") === "Allow"} />
				</div>
			);
		},
	},
];
