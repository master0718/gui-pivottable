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
import { Separator } from "@/components/ui/separator";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import SetDetails from "./set-details";
import PlateCalculator from "./plate-calculator";

const WorkSet = () => {
	const [isOpen, setIsOpen] = React.useState(true);
	return (
		<Collapsible
			className="border rounded-md"
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<Card>
				<CardHeader className="flex flex-row justify-between items-center p-1">
					<div className="flex justify-start items-center gap-2">
						<CardTitle>Set 6</CardTitle>
						<Separator orientation="vertical" className="h-8" />
						<Label>Warmup set 6</Label>
					</div>
					<div className="flex justify-end items-center gap-1">
						<Button className="h-8">Start Set</Button>
						<Button className="h-8">End Set</Button>
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
						<Tabs defaultValue="set-details">
							<TabsList className="">
								<TabsTrigger value="set-details">Set details</TabsTrigger>
								<TabsTrigger value="plate-calculator">
									Plate calculator
								</TabsTrigger>
								<TabsTrigger value="cues-reminder">Cues & Reminder</TabsTrigger>
								<TabsTrigger value="video">Video</TabsTrigger>
							</TabsList>
							<TabsContent className="ml-16" value="set-details">
								<SetDetails />
							</TabsContent>
							<TabsContent className="ml-16" value="plate-calculator">
								<PlateCalculator />
							</TabsContent>
							<TabsContent className="ml-16" value="cues-reminder" />
							<TabsContent className="ml-16" value="video" />
						</Tabs>
					</CollapsibleContent>
				</CardContent>
			</Card>
		</Collapsible>
	);
};

export default WorkSet;
