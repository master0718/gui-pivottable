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
import { Button } from "@/components/ui/button";
import { OverviewActivityDetail } from "./overview-activity-detail";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NextPage } from "next";

interface IOverviewListProps {}

export type ActivitySubItem = {
  name: string;
  summary: string;
  nutritionalData: string;
};

export type Activity = {
  type: string;
  items: ActivitySubItem[];
};

export type Overview = {
  id: number;
  activityName: string;
  startTime: string;
  endTime: string;
  activityDetails: Activity;
};

const data: Overview[] = [
  {
    id: 1,
    activityName: "Morning Workout",
    startTime: "8:00 AM",
    endTime: "9:00 AM",
    activityDetails: {
      type: "Workout",
      items: [
        {
          name: "Warm-up",
          summary: "Stretching exercises to warm up the body",
          nutritionalData: "Calories burned: 50",
        },
        {
          name: "Cardio",
          summary: "Running on the treadmill",
          nutritionalData: "Calories burned: 200",
        },
        {
          name: "Strength Training",
          summary: "Weight lifting and resistance exercises",
          nutritionalData: "Calories burned: 150",
        },
      ],
    },
  },
  {
    id: 2,
    activityName: "Afternoon Yoga",
    startTime: "4:00 PM",
    endTime: "5:00 PM",
    activityDetails: {
      type: "Yoga",
      items: [
        {
          name: "Sun Salutation",
          summary: "Dynamic sequence to energize the body",
          nutritionalData: "Calories burned: 100",
        },
        {
          name: "Asanas",
          summary: "Various yoga poses for flexibility",
          nutritionalData: "Calories burned: 80",
        },
        {
          name: "Meditation",
          summary: "Mindfulness practice for relaxation",
          nutritionalData: "Calories burned: 20",
        },
      ],
    },
  },
  {
    id: 3,
    activityName: "Evening Walk",
    startTime: "6:00 PM",
    endTime: "7:00 PM",
    activityDetails: {
      type: "Walk",
      items: [
        {
          name: "Stroll in the Park",
          summary: "Enjoying nature while walking",
          nutritionalData: "Calories burned: 120",
        },
        {
          name: "Brisk Walking",
          summary: "Walking at a faster pace for cardio",
          nutritionalData: "Calories burned: 180",
        },
        {
          name: "Cool Down",
          summary: "Gentle walking to cool down",
          nutritionalData: "Calories burned: 50",
        },
      ],
    },
  },
  {
    id: 4,
    activityName: "Swimming",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    activityDetails: {
      type: "Swimming",
      items: [
        {
          name: "Freestyle",
          summary: "Swimming freestyle strokes",
          nutritionalData: "Calories burned: 250",
        },
        {
          name: "Breaststroke",
          summary: "Swimming breaststroke",
          nutritionalData: "Calories burned: 220",
        },
        {
          name: "Backstroke",
          summary: "Swimming backstroke",
          nutritionalData: "Calories burned: 200",
        },
      ],
    },
  },
  {
    id: 5,
    activityName: "Cycling",
    startTime: "7:00 AM",
    endTime: "8:00 AM",
    activityDetails: {
      type: "Cycling",
      items: [
        {
          name: "Road Cycling",
          summary: "Cycling on roads",
          nutritionalData: "Calories burned: 300",
        },
        {
          name: "Mountain Biking",
          summary: "Cycling on mountain trails",
          nutritionalData: "Calories burned: 350",
        },
      ],
    },
  },
];

export const columns: ColumnDef<Overview>[] = [
  {
    accessorKey: "activityName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Activity
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("activityName")}</div>,
  },
  {
    accessorKey: "startTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Start time
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("startTime")}</div>,
  },
  {
    accessorKey: "endTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          End time
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("endTime")}</div>,
  },
  {
    accessorKey: "activityDetails",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Active Details
        </Button>
      );
    },
    cell: ({ row }) => (
      <OverviewActivityDetail
        activityDetail={row.getValue("activityDetails") as Activity}
      />
    ),
  },
];

const OverviewList: NextPage<IOverviewListProps> = ({}) => {
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
                  className="border-x-0"
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      key={cell.id}
                      className={`h-8 p-0 border-b ${
                        index === row.getVisibleCells().length - 1
                          ? ""
                          : "border-r"
                      }`}
                    >
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
                  className="h-24 text-center border"
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

OverviewList.displayName = "OverviewList";

export { OverviewList };
