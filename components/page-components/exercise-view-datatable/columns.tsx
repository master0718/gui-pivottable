"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import type { ExerciseItem } from "./data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<ExerciseItem>[] = [
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
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Name" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex justify-center space-x-2">
					<span className="truncate font-medium">
						{row.getValue("name")}
					</span>
				</div>
			);
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
