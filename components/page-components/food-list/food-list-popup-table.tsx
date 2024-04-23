"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NextPage } from "next";

interface IFoodListPopupTableProps {}

export type FoodListItem = {
  id: number;
  dishName: string;
  category: string;
  tags: string;
  date: string;
  daysFromNow: number;
  dayType: string;
  mealType: string;
  comments: string;
  status: string;
  viewDetails: string;
};

const data: FoodListItem[] = [
  {
    id: 1,
    dishName: "Grilled Salmon",
    category: "Seafood",
    tags: "Healthy, Dinner",
    date: "2024-03-11",
    daysFromNow: 0,
    dayType: "Weekday",
    mealType: "Dinner",
    comments: "Marinated in lemon and herbs",
    status: "Available",
    viewDetails: "https://example.com/grilled-salmon",
  },
  {
    id: 2,
    dishName: "Vegetable Stir-Fry",
    category: "Vegetarian",
    tags: "Vegan, Quick Meal",
    date: "2024-03-12",
    daysFromNow: 1,
    dayType: "Weekday",
    mealType: "Dinner",
    comments: "Fresh vegetables with soy sauce",
    status: "Available",
    viewDetails: "https://example.com/vegetable-stir-fry",
  },
  {
    id: 3,
    dishName: "Chicken Parmesan",
    category: "Poultry",
    tags: "Italian, Comfort Food",
    date: "2024-03-13",
    daysFromNow: 2,
    dayType: "Weekday",
    mealType: "Dinner",
    comments: "Breaded chicken with marinara sauce and cheese",
    status: "Available",
    viewDetails: "https://example.com/chicken-parmesan",
  },
  {
    id: 4,
    dishName: "Quinoa Salad",
    category: "Salad",
    tags: "Healthy, Lunch",
    date: "2024-03-14",
    daysFromNow: 3,
    dayType: "Weekday",
    mealType: "Lunch",
    comments: "Quinoa with mixed greens and balsamic vinaigrette",
    status: "Available",
    viewDetails: "https://example.com/quinoa-salad",
  },
  {
    id: 5,
    dishName: "Spaghetti Carbonara",
    category: "Pasta",
    tags: "Italian, Dinner",
    date: "2024-03-15",
    daysFromNow: 4,
    dayType: "Weekday",
    mealType: "Dinner",
    comments: "Creamy pasta with bacon and Parmesan cheese",
    status: "Available",
    viewDetails: "https://example.com/spaghetti-carbonara",
  },
  {
    id: 6,
    dishName: "Banana Bread",
    category: "Bakery",
    tags: "Baking, Snack",
    date: "2024-03-16",
    daysFromNow: 5,
    dayType: "Weekday",
    mealType: "Snack",
    comments: "Moist and delicious banana bread",
    status: "Available",
    viewDetails: "https://example.com/banana-bread",
  },
];

export const columns: ColumnDef<FoodListItem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "dishName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dish name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("dishName")}</div>,
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "tags",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tags
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("tags")}</div>,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
  },
  {
    accessorKey: "daysFromNow",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Days from now
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("daysFromNow")}</div>,
  },
  {
    accessorKey: "dayType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type of day
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("dayType")}</div>,
  },
  {
    accessorKey: "mealType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type of meal
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("mealType")}</div>,
  },
  {
    accessorKey: "comments",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Comments
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("comments")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
  {
    accessorKey: "viewDetails",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          View Details
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("viewDetails")}</div>,
  },
];

const FoodListPopupTable: NextPage<IFoodListPopupTableProps> = ({}) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="h-8">
                      <div className="flex justify-center items-center">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getSortedRowModel().rows?.length ? (
              table.getSortedRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="h-8 py-2">
                      <div className="flex justify-center items-center">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      </div>
    </div>
  );
};

FoodListPopupTable.displayName = "FoodListPopupTable";

export { FoodListPopupTable };
