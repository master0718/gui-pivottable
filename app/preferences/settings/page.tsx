"use client";

import React from "react";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TechnicalSettings = () => {
	return (
		<div className="container mx-auto px-4 h-full">
			<div className="flex md:shrink-0 justify-between h-full gap-1 mt-4">
				<div className="flex-2 flex flex-col">
					<Card>
						<CardHeader>
							<CardTitle>Technical settings</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2 mt-4 w-[400px]">
							<div className="space-y-1">
								<Label htmlFor="value1">Value 1</Label>
								<Input id="value1" type="text" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="value2">Value 2</Label>
								<Input id="value2" type="text" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="value3">Value 3</Label>
								<Input id="value3" type="text" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="value4">Value 4</Label>
								<Input id="value4" type="text" />
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default TechnicalSettings;
