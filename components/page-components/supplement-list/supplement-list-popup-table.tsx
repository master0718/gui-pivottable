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
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { NextPage } from "next";

interface ISupplementListPopupTableProps {}

export type SupplementListItem = {
  id: number;
  name: string;
  items: SupplementItem[];
};

export type SupplementItem = {
  id: number;
  name: string;
  quantity: number;
};

const SupplementListPopupTable: NextPage<
  ISupplementListPopupTableProps
> = ({}) => {
  const data: SupplementListItem[] = [
    {
      id: 1,
      name: "After waking up",
      items: [
        { id: 1, name: "Vitamin C", quantity: 1 },
        { id: 2, name: "Vitamin D", quantity: 2 },
        { id: 3, name: "Vitamin B12", quantity: 1 },
      ],
    },
    {
      id: 2,
      name: "During breakfast",
      items: [
        { id: 4, name: "Whey Protein", quantity: 1 },
        { id: 5, name: "Plant-Based Protein", quantity: 1 },
      ],
    },
    {
      id: 3,
      name: "30 min Pre-workout",
      items: [
        { id: 6, name: "Omega-3 Fish Oil Capsules", quantity: 1 },
        { id: 7, name: "Cod Liver Oil", quantity: 1 },
      ],
    },
    {
      id: 4,
      name: "With postworkout meal",
      items: [
        { id: 8, name: "Calcium", quantity: 1 },
        { id: 9, name: "Iron", quantity: 1 },
      ],
    },
    {
      id: 5,
      name: "With Diner",
      items: [
        { id: 8, name: "Calcium", quantity: 1 },
        { id: 9, name: "Iron", quantity: 1 },
      ],
    },
    {
      id: 6,
      name: "Before going to bed",
      items: [
        { id: 8, name: "Calcium", quantity: 1 },
        { id: 9, name: "Iron", quantity: 1 },
      ],
    },
  ];
  return (
    <div className="w-full flex items-start gap-2">
      {data.map((supplementListItem, index) => (
        <Table key={index} className="border">
          <TableCaption>{`${supplementListItem.id}: ${supplementListItem.name}`}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[12px]">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supplementListItem.items.map((supplementItem, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {supplementItem.id}
                </TableCell>
                <TableCell className="h-8">{supplementItem.name}</TableCell>
                <TableCell className="h-8">{supplementItem.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ))}
    </div>
  );
};

SupplementListPopupTable.displayName = "SupplementListPopupTable";

export { SupplementListPopupTable };
