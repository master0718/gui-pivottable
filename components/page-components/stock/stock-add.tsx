"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const AddStock = () => {
	const itemsToAdd = [
		{
			id: 1,
			name: "Item 1",
			category: "Category 1",
			subCategory: "Sub-category 1",
			unit: "kg",
			quantityToAdd: 100,
		},
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Add products and dishes to stock</CardTitle>
			</CardHeader>
			<CardContent>
				<Table className="border">
					<TableHeader>
						<TableRow>
							<TableHead className="h-8 border p-1 text-center">Name</TableHead>
							<TableHead className="h-8 border p-1 text-center">
								Category
							</TableHead>
							<TableHead className="h-8 border p-1 text-center">
								Sub-category
							</TableHead>
							<TableHead className="h-8 border p-1 text-center">Unit</TableHead>
							<TableHead className="h-8 border p-1 text-center">
								Quantity to add to stock
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{itemsToAdd.map((itemToAdd) => (
							<TableRow key={itemToAdd.id}>
								<TableCell className="h-8 border p-1 text-center">
									{itemToAdd.name}
								</TableCell>
								<TableCell className="h-8 border p-1 text-center">
									{itemToAdd.category}
								</TableCell>
								<TableCell className="h-8 border p-1 text-center">
									{itemToAdd.subCategory}
								</TableCell>
								<TableCell className="h-8 border p-1 text-center">
									{itemToAdd.unit}
								</TableCell>
								<TableCell className="h-8 border p-1 text-center">
									{itemToAdd.quantityToAdd}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};

export default AddStock;
