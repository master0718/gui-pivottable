"use client";

import {
	Card,
	CardContent,
	CardHeader,
	CardDescription,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
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
import { Button } from "@/components/ui/button";

const ImportStock = () => {
	const itemsToAdd = [
		{
			id: 1,
			name: "Item 1",
			category: "Category 1",
			subCategory: "Sub-category 1",
			unit: "kg",
			currentQuantity: 10,
			quantityToAdd: 100,
			quantityAfterImport: 110,
		},
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Import products and dishes in stock</CardTitle>
				<div className="flex justify-end gap-2">
					<Button className="h-8">{"Browse File"}</Button>
					<Button className="h-8">{"Preview the result of import"}</Button>
				</div>
				<CardDescription>
					Review below the list of items to be imported and click on the
					[Import] button if all is well
				</CardDescription>
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
								Current quantity in stock
							</TableHead>
							<TableHead className="h-8 border p-1 text-center">
								New quantity from file
							</TableHead>
							<TableHead className="h-8 border p-1 text-center">
								New stock after import
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
									{itemToAdd.currentQuantity}
								</TableCell>
								<TableCell className="h-8 border p-1 text-center">
									{itemToAdd.quantityToAdd}
								</TableCell>
								<TableCell className="h-8 border p-1 text-center">
									{itemToAdd.quantityAfterImport}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button className="h-8">{"Cancel"}</Button>
				<Button className="h-8">{"Import"}</Button>
			</CardFooter>
		</Card>
	);
};

export default ImportStock;
