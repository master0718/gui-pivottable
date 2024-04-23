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

const PlateCalculator = () => {
	return (
		<div className="mx-auto w-[400px] my-8">
			<Table className="border">
				<TableHeader>
					<TableRow>
						<TableHead colSpan={5} className="text-center h-8 font-bold">
							Plates calculator
						</TableHead>
					</TableRow>
					<TableRow>
						<TableHead colSpan={5} className="text-center h-8">
							Weight (245)
						</TableHead>
					</TableRow>
					<TableRow>
						<TableHead colSpan={2} className="text-center h-8 border-r">
							Left side
						</TableHead>
						<TableHead className="text-center h-8 border-r">Bar</TableHead>
						<TableHead colSpan={2} className="text-center h-8 border-r">
							Right side
						</TableHead>
					</TableRow>
					<TableRow>
						<TableHead className="text-center h-8 border-r">Nr.</TableHead>
						<TableHead className="text-center h-8 border-r">Weight</TableHead>
						<TableHead className="text-center h-8 border-r">20</TableHead>
						<TableHead className="text-center h-8 border-r">Nr.</TableHead>
						<TableHead className="text-center h-8 border-r">Weight</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="text-center h-8 p-1 border-r">2</TableCell>
						<TableCell className="text-center h-8 p-1 border-r">50</TableCell>
						<TableCell className="text-center h-8 p-1 border-r" rowSpan={3} />
						<TableCell className="text-center h-8 p-1 border-r">2</TableCell>
						<TableCell className="text-center h-8 p-1 border-r">50</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-center h-8 p-1 border-r">2</TableCell>
						<TableCell className="text-center h-8 p-1 border-r">10</TableCell>
						<TableCell className="text-center h-8 p-1 border-r">2</TableCell>
						<TableCell className="text-center h-8 p-1 border-r">10</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="text-center h-8 p-1 border-r">1</TableCell>
						<TableCell className="text-center h-8 p-1 border-r">2.5</TableCell>
						<TableCell className="text-center h-8 p-1 border-r">1</TableCell>
						<TableCell className="text-center h-8 p-1 border-r">2.5</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};

export default PlateCalculator;
