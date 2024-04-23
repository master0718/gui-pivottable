"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { SlidersHorizontal } from "lucide-react";
import type { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface DataTableAddColumnProps<TData> {
	table: Table<TData>;
}

export function DataTableAddColumn<TData>({
	table,
}: DataTableAddColumnProps<TData>) {
	return <Button className="h-8">Add new user</Button>;
}
