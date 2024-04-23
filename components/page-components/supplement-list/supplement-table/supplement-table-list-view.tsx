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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

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
import { ScrollArea } from "@/components/ui/scroll-area";

interface ISupplementTableListViewProps {}

export type Day = {
  id: number;
  mesoCycle: string;
  microCycle: string;
  day: string;
  date: string;
  meal: string;
  macros: string;
};

const data: Day[] = [
  {
    id: 2,
    mesoCycle: "Cycle 1",
    microCycle: "Week 1",
    day: "Tuesday",
    date: "5/7/2022",
    meal: "Grilled Chicken Salad",
    macros: "Protein: 30g, Carbs: 15g, Fat: 10g",
  },
  {
    id: 3,
    mesoCycle: "Cycle 1",
    microCycle: "Week 1",
    day: "Wednesday",
    date: "12/9/2023",
    meal: "Salmon with Roasted Vegetables",
    macros: "Protein: 25g, Carbs: 20g, Fat: 15g",
  },
  {
    id: 4,
    mesoCycle: "Cycle 1",
    microCycle: "Week 1",
    day: "Thursday",
    date: "8/2/2023",
    meal: "Quinoa Stir-Fry",
    macros: "Protein: 20g, Carbs: 30g, Fat: 8g",
  },
  {
    id: 5,
    mesoCycle: "Cycle 1",
    microCycle: "Week 1",
    day: "Friday",
    date: "10/11/2022",
    meal: "Grilled Steak with Sweet Potato Mash",
    macros: "Protein: 35g, Carbs: 25g, Fat: 18g",
  },
  {
    id: 6,
    mesoCycle: "Cycle 1",
    microCycle: "Week 1",
    day: "Saturday",
    date: "7/4/2022",
    meal: "Vegetable Omelette",
    macros: "Protein: 20g, Carbs: 10g, Fat: 12g",
  },
  {
    id: 7,
    mesoCycle: "Cycle 1",
    microCycle: "Week 1",
    day: "Sunday",
    date: "6/1/2023",
    meal: "Turkey Chili",
    macros: "Protein: 22g, Carbs: 28g, Fat: 10g",
  },
  {
    id: 8,
    mesoCycle: "Cycle 1",
    microCycle: "Week 1",
    day: "Monday",
    date: "3/5/2022",
    meal: "Baked Salmon with Asparagus",
    macros: "Protein: 27g, Carbs: 10g, Fat: 15g",
  },
  {
    id: 9,
    mesoCycle: "Cycle 1",
    microCycle: "Week 2",
    day: "Tuesday",
    date: "9/12/2023",
    meal: "Chicken and Vegetable Stir-Fry",
    macros: "Protein: 28g, Carbs: 25g, Fat: 12g",
  },
  {
    id: 10,
    mesoCycle: "Cycle 1",
    microCycle: "Week 2",
    day: "Wednesday",
    date: "2/8/2023",
    meal: "Shrimp Pasta",
    macros: "Protein: 24g, Carbs: 35g, Fat: 10g",
  },
  {
    id: 11,
    mesoCycle: "Cycle 1",
    microCycle: "Week 2",
    day: "Thursday",
    date: "11/10/2022",
    meal: "Grilled Chicken with Quinoa Salad",
    macros: "Protein: 32g, Carbs: 20g, Fat: 10g",
  },
];

export const columns: ColumnDef<Day>[] = [
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
    accessorKey: "mesoCycle",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Meso cycle
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("mesoCycle")}</div>,
  },
  {
    accessorKey: "microCycle",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Micro cycle
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("microCycle")}</div>,
  },
  {
    accessorKey: "day",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Day
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("day")}</div>,
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
    accessorKey: "meal",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Meal
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("meal")}</div>,
  },
  {
    accessorKey: "macros",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Macros
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("macros")}</div>,
  },
];

const SupplementTableListView: NextPage<
  ISupplementTableListViewProps
> = ({}) => {
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
        <ScrollArea className="h-[600px]">
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
            <TableBody className="h-72 overflow-y-auto">
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
        </ScrollArea>
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

SupplementTableListView.displayName = "SupplementTableListView";

export { SupplementTableListView };
