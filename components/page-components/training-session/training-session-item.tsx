"use client";

import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	CalendarIcon,
	ChevronsUpDown,
	CopyPlus,
	Delete,
	MoveDown,
	MoveUp,
} from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ExerciseItem from "./exercise-item";

const TrainingSessionItem = () => {
	const [isOpen, setIsOpen] = React.useState(true);
	return (
		<Collapsible
			className="border rounded-md"
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<Card>
				<CardHeader className="flex flex-row justify-between items-center">
					<CardTitle>Training Session</CardTitle>
					<div className="flex justify-end items-center gap-1">
						<Button className="h-8">Start Session</Button>
						<Button className="h-8">End Session</Button>
						<Button variant="ghost" className="w-9 h-8 p-0">
							<AlertDialog>
								<AlertDialogTrigger asChild>
									<Delete className="h-4 w-4" />
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>
											Are you absolutely sure?
										</AlertDialogTitle>
										<AlertDialogDescription>
											This action cannot be undone. This will permanently delete
											your account and remove your data from our servers.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>Cancel</AlertDialogCancel>
										<AlertDialogAction onClick={() => {}}>
											Continue
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</Button>
						<Button variant="ghost" className="w-9 h-8 p-0">
							<CopyPlus className="h-4 w-4" onClick={() => {}} />
						</Button>
						<Button variant="ghost" className="w-9 h-8 p-0">
							<MoveUp className="h-4 w-4" onClick={() => {}} />
						</Button>
						<Button variant="ghost" className="w-9 h-8 p-0">
							<MoveDown className="h-4 w-4" onClick={() => {}} />
						</Button>
						<CollapsibleTrigger asChild>
							<Button variant="ghost" className="w-9 h-8 p-0">
								<ChevronsUpDown className="h-4 w-4" />
							</Button>
						</CollapsibleTrigger>
					</div>
				</CardHeader>
				<CardContent>
					<CollapsibleContent>
						<div className="flex">
							<div className="grow flex flex-col gap-1">
								<ExerciseItem />
								<ExerciseItem />
							</div>
						</div>
					</CollapsibleContent>
				</CardContent>
			</Card>
		</Collapsible>
	);
};

export default TrainingSessionItem;
