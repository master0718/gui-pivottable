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

interface IDaysTableListViewProps {}

export type Day = {
  id: number;
  mesoCycle: string;
  microCycle: string;
  day: string;
  date: string;
  activity: string;
};

const data: Day[] = [
  {
    id: 1,
    mesoCycle: "MesoCycle 1",
    microCycle: "MicroCycle 1",
    day: "Day 1",
    date: "2024-03-01",
    activity: "Activity 1",
  },
  {
    id: 2,
    mesoCycle: "MesoCycle 1",
    microCycle: "MicroCycle 1",
    day: "Day 2",
    date: "2024-03-02",
    activity: "Activity 2",
  },
  {
    id: 3,
    mesoCycle: "MesoCycle 1",
    microCycle: "MicroCycle 1",
    day: "Day 3",
    date: "2024-03-03",
    activity: "Activity 3",
  },
  {
    id: 4,
    mesoCycle: "MesoCycle 1",
    microCycle: "MicroCycle 2",
    day: "Day 1",
    date: "2024-03-04",
    activity: "Activity 4",
  },
  {
    id: 5,
    mesoCycle: "MesoCycle 1",
    microCycle: "MicroCycle 2",
    day: "Day 2",
    date: "2024-03-05",
    activity: "Activity 5",
  },
  {
    id: 6,
    mesoCycle: "MesoCycle 1",
    microCycle: "MicroCycle 2",
    day: "Day 3",
    date: "2024-03-06",
    activity: "Activity 6",
  },
  {
    id: 7,
    mesoCycle: "MesoCycle 2",
    microCycle: "MicroCycle 1",
    day: "Day 1",
    date: "2024-03-07",
    activity: "Activity 7",
  },
  {
    id: 8,
    mesoCycle: "MesoCycle 2",
    microCycle: "MicroCycle 1",
    day: "Day 2",
    date: "2024-03-08",
    activity: "Activity 8",
  },
  {
    id: 9,
    mesoCycle: "MesoCycle 2",
    microCycle: "MicroCycle 1",
    day: "Day 3",
    date: "2024-03-09",
    activity: "Activity 9",
  },
  {
    id: 10,
    mesoCycle: "MesoCycle 2",
    microCycle: "MicroCycle 2",
    day: "Day 1",
    date: "2024-03-10",
    activity: "Activity 10",
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
    accessorKey: "activity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Activity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("activity")}</div>,
  },
];

const DaysTableListView: NextPage<IDaysTableListViewProps> = ({}) => {
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

DaysTableListView.displayName = "DaysTableListView";

export { DaysTableListView };
