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
  trainingDay: string;
};

const data: Day[] = [
  {
    id: 1,
    mesoCycle: "Meso 1",
    microCycle: "Micro A",
    trainingDay: "1/3/2022",
  },
  {
    id: 2,
    mesoCycle: "Meso 1",
    microCycle: "Micro A",
    trainingDay: "1/4/2022",
  },
  {
    id: 3,
    mesoCycle: "Meso 1",
    microCycle: "Micro A",
    trainingDay: "1/5/2022",
  },
  {
    id: 4,
    mesoCycle: "Meso 1",
    microCycle: "Micro A",
    trainingDay: "1/6/2022",
  },
  {
    id: 5,
    mesoCycle: "Meso 1",
    microCycle: "Micro A",
    trainingDay: "1/7/2022",
  },
  {
    id: 6,
    mesoCycle: "Meso 1",
    microCycle: "Micro A",
    trainingDay: "1/8/2022",
  },
  {
    id: 7,
    mesoCycle: "Meso 1",
    microCycle: "Micro A",
    trainingDay: "1/9/2022",
  },
  {
    id: 8,
    mesoCycle: "Meso 2",
    microCycle: "Micro B",
    trainingDay: "1/9/2022",
  },
  {
    id: 9,
    mesoCycle: "Meso 2",
    microCycle: "Micro B",
    trainingDay: "1/11/2022",
  },
  {
    id: 10,
    mesoCycle: "Meso 2",
    microCycle: "Micro B",
    trainingDay: "1/12/2022",
  },
  {
    id: 11,
    mesoCycle: "Meso 2",
    microCycle: "Micro B",
    trainingDay: "1/13/2022",
  },
  {
    id: 12,
    mesoCycle: "Meso 2",
    microCycle: "Micro B",
    trainingDay: "1/14/2022",
  },
  {
    id: 13,
    mesoCycle: "Meso 2",
    microCycle: "Micro B",
    trainingDay: "1/15/2022",
  },
  {
    id: 14,
    mesoCycle: "Meso 2",
    microCycle: "Micro B",
    trainingDay: "1/16/2022",
  },
  {
    id: 15,
    mesoCycle: "Meso 3",
    microCycle: "Micro C",
    trainingDay: "1/17/2022",
  },
  {
    id: 16,
    mesoCycle: "Meso 3",
    microCycle: "Micro C",
    trainingDay: "1/18/2022",
  },
  {
    id: 17,
    mesoCycle: "Meso 3",
    microCycle: "Micro C",
    trainingDay: "1/19/2022",
  },
  {
    id: 18,
    mesoCycle: "Meso 3",
    microCycle: "Micro C",
    trainingDay: "1/20/2022",
  },
  {
    id: 19,
    mesoCycle: "Meso 3",
    microCycle: "Micro C",
    trainingDay: "1/21/2022",
  },
  {
    id: 20,
    mesoCycle: "Meso 3",
    microCycle: "Micro C",
    trainingDay: "1/22/2022",
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
    accessorKey: "trainingDay",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Training Day
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("trainingDay")}</div>,
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
