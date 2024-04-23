"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { categories, subCategories } from "./data/data";
import type { StockItem } from "./data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<StockItem>[] = [
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
					<span className="max-w-[300px] truncate font-medium">
						{row.getValue("name")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "category",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Category" />
		),
		cell: ({ row }) => {
			const category = categories.find(
				(category) => category.value === row.getValue("category"),
			);

			if (!category) {
				return null;
			}

			return (
				<div className="flex justify-center items-center">
					<span>{category.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "subCategory",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Sub-category" />
		),
		cell: ({ row }) => {
			const subCategory = subCategories.find(
				(subCategory) => subCategory.value === row.getValue("subCategory"),
			);

			if (!subCategory) {
				return null;
			}

			return (
				<div className="flex justify-center items-center">
					<span>{subCategory.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "unit",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Unit" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex justify-center space-x-2">
					<span className="max-w-[100px] truncate font-medium">
						{row.getValue("unit")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "quantity",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Quantity" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex justify-center space-x-2">
					<span className="max-w-[100px] truncate font-medium">
						{row.getValue("quantity")}
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
