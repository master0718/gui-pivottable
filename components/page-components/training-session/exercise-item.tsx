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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExerciseDetails from "./exercise-details/exercise-details";
import AdhocCalculation from "./exercise-details/adhoc-calculation";
import PreviousValues from "./exercise-details/previous-values";

const ExerciseItem = () => {
	const [isOpen, setIsOpen] = React.useState(true);
	return (
		<Collapsible
			className="border rounded-md"
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<Card>
				<CardHeader className="flex flex-row justify-between items-center p-1">
					<CardTitle>Exercises 1</CardTitle>
					<div className="flex justify-end items-center gap-1">
						<Button className="h-8">Start Exercise</Button>
						<Button className="h-8">End Exercise</Button>
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
				<CardContent className="p-2">
					<CollapsibleContent>
						<Tabs defaultValue="exercise-details">
							<TabsList className="">
								<TabsTrigger value="exercise-details">
									Exercise details
								</TabsTrigger>
								<TabsTrigger value="ad-hoc">Ad hoc calculations</TabsTrigger>
								<TabsTrigger value="previous-values">
									Previous values
								</TabsTrigger>
							</TabsList>
							<TabsContent value="exercise-details">
								<ExerciseDetails />
							</TabsContent>
							<TabsContent value="ad-hoc">
								<AdhocCalculation />
							</TabsContent>
							<TabsContent value="previous-values">
								<PreviousValues />
							</TabsContent>
						</Tabs>
					</CollapsibleContent>
				</CardContent>
			</Card>
		</Collapsible>
	);
};

export default ExerciseItem;
