"use client";

import React from "react";
import { Button } from "@/components/ui/button";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const PreviousValues = () => {
	return (
		<div className="flex items-start justify-between px-8 py-8 gap-16">
			<div className="flex-none w-64 flex flex-col gap-4">
				<Button className="h-8">Same exercise</Button>
				<Button className="h-8">Same training sequence</Button>
				<Button className="h-8">All exercise variations</Button>
			</div>
			<div className="grow">
				<Table className="border">
					<TableHeader>
						<TableRow>
							<TableHead className="p-1 text-center font-bold border">
								Date
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								Day
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								Exercise name
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								Type of set
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								Type of set
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								Reps
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								Weight
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								RPE
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								Speed
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								HR
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								Volume
							</TableHead>
							<TableHead className="p-1 text-center font-bold border">
								1RM
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
						</TableRow>
						<TableRow>
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
						</TableRow>
						<TableRow>
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
							<TableCell className="h-8 p-1 text-center border" />
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default PreviousValues;
