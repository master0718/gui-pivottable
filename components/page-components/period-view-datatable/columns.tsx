"use client";

import React, { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import type { PeriodItem } from "./data/schema";
import { statuses } from "./data/data";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export const columns: ColumnDef<PeriodItem>[] = [
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
		accessorKey: "macroCycleName",
		header: ({ column }) => (
			<div className="flex flex-col items-center p-1">
				<DataTableColumnHeader column={column} title="Macro cycle name" />
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
						{row.getValue("macroCycleName")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "description",
		header: ({ column }) => (
			<div className="flex flex-col items-center">
				<DataTableColumnHeader column={column} title="Description" />
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
						{row.getValue("description")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "duration",
		header: ({ column }) => (
			<div className="flex flex-col items-center">
				<DataTableColumnHeader column={column} title="Duration" />
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
						{row.getValue("duration")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "startDate",
		header: ({ column }) => {
			const [date, setDate] = useState<Date>();
			return (
				<div className="flex flex-col items-center">
					<DataTableColumnHeader column={column} title="Start date" />
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={"outline"}
								className={cn(
									"justify-start text-left font-normal h-8 w-36",
									!date && "text-muted-foreground",
								)}
							>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{date ? format(date, "yyyy-MM-dd") : <span></span>}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="start">
							<Calendar
								mode="single"
								selected={date}
								onSelect={(selectedDate: Date) => {
									setDate(selectedDate);
									column.setFilterValue(format(selectedDate, "yyyy-MM-dd"));
								}}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>
			);
		},
		cell: ({ row }) => {
			return (
				<div className="flex justify-center space-x-2">
					<span className="truncate font-medium">
						{row.getValue("startDate")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "endDate",
		header: ({ column }) => {
			const [date, setDate] = useState<Date>();
			return (
				<div className="flex flex-col items-center">
					<DataTableColumnHeader column={column} title="End date" />
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={"outline"}
								className={cn(
									"justify-start text-left font-normal h-8 w-36",
									!date && "text-muted-foreground",
								)}
							>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{date ? format(date, "yyyy-MM-dd") : <span></span>}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="start">
							<Calendar
								mode="single"
								selected={date}
								onSelect={(selectedDate: Date) => {
									setDate(selectedDate);
									column.setFilterValue(format(selectedDate, "yyyy-MM-dd"));
								}}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>
			);
		},
		cell: ({ row }) => {
			return (
				<div className="flex justify-center space-x-2">
					<span className="truncate font-medium">
						{row.getValue("endDate")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "numberOfMesoCycles",
		header: ({ column }) => (
			<div className="flex flex-col items-center">
				<DataTableColumnHeader column={column} title="Nr. of Meso Cycles" />
				<Input
					className="h-8"
					type="number"
					onChange={(e) => column.setFilterValue(e.target.value)}
				/>
			</div>
		),
		cell: ({ row }) => {
			return (
				<div className="flex justify-center space-x-2">
					<span className="truncate font-medium">
						{row.getValue("numberOfMesoCycles")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "numberOfMicroCycles",
		header: ({ column }) => (
			<div className="flex flex-col items-center">
				<DataTableColumnHeader column={column} title="Nr. of Micro Cycles" />
				<Input
					className="h-8"
					type="number"
					onChange={(e) => column.setFilterValue(e.target.value)}
				/>
			</div>
		),
		cell: ({ row }) => {
			return (
				<div className="flex justify-center space-x-2">
					<span className="truncate font-medium">
						{row.getValue("numberOfMicroCycles")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<div className="flex flex-col items-center">
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
