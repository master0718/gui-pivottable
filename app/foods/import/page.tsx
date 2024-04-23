import React from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import FoodItem from "@/components/page-components/food-search/food-item";

const ImportFoods = () => {
	return (
		<div className="container mx-auto px-4 h-full">
			<div className="flex md:shrink-0 justify-between h-full gap-1 my-4">
				<div className="flex-2 flex flex-col">
					<Card>
						<CardHeader>
							<CardTitle>
								Import food (whether products, dish receipes or meals)
							</CardTitle>
							<div className="flex justify-end gap-2">
								<Button className="h-8">{"Browse File"}</Button>
								<Button className="h-8">
									{"Preview the result of import"}
								</Button>
								<Button className="h-8">
									{"Import selected and update product list"}
								</Button>
							</div>
							<CardDescription>
								Review below the list of products to be imported and click on
								the [Import selected and update product list] button if all is
								well
							</CardDescription>
							<div className="flex justify-between items-center">
								<div className="flex items-center space-x-2">
									<Checkbox id="select-all" />
									<Label htmlFor="select-all">Select all</Label>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-4 mt-4">
								<FoodItem />
								<FoodItem />
							</div>
						</CardContent>
						<CardFooter>
							<Button className="h-8">
								{"Import selected and update product list"}
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ImportFoods;
