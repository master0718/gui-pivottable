"use client";
import { Label } from "@/components/ui/label";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import WorkSet from "./work-set";

const ExerciseDetails = () => {
	return (
		<div className="flex gap-2 items-start">
			<div className="flex-none w-48 flex flex-col gap-2 p-2">
				<div className="border flex flex-col gap-2 p-2 items-center">
					<Label className="font-bold">Work / Rest Time</Label>
					<Label className="font-bold">0:30</Label>
				</div>
				<ScrollArea className="h-72 w-full rounded-md border">
					<div className="p-4">
						<div className="text-sm">Warmup set 1</div>
						<Separator className="my-2" />
						<div className="text-sm">Warmup set 2</div>
						<Separator className="my-2" />
						<div className="text-sm">Warmup set 3</div>
						<Separator className="my-2" />
						<div className="text-sm">Warmup set 4</div>
						<Separator className="my-2" />
						<div className="text-sm">Warmup set 5</div>
						<Separator className="my-2" />
						<div className="text-sm">Warmup set 6</div>
						<Separator className="my-2" />
						<div className="text-sm">Warmup set 7</div>
						<Separator className="my-2" />
						<div className="text-sm">Work set 1</div>
						<Separator className="my-2" />
						<div className="text-sm">Work set 2</div>
						<Separator className="my-2" />
						<div className="text-sm">Work set 3</div>
						<Separator className="my-2" />
					</div>
				</ScrollArea>
			</div>
			<div className="grow flex flex-col gap-2">
				<WorkSet />
				<WorkSet />
				<WorkSet />
			</div>
		</div>
	);
};

export default ExerciseDetails;
