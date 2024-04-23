"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Textarea } from "@/components/ui/textarea";

const SetDetails = () => {
	return (
		<div className="flex items-start gap-8">
			<div className="grow">
				<Tabs defaultValue="target">
					<TabsList className="">
						<TabsTrigger value="target">Target</TabsTrigger>
						<TabsTrigger value="execution">Execution</TabsTrigger>
					</TabsList>
					<TabsContent className="h-24" value="target">
						<Table className="border">
							<TableHeader>
								<TableRow>
									<TableHead className="h-8 font-bold text-center border">
										Type of set
									</TableHead>
									<TableHead className="h-8 font-bold text-center border">
										Reps
									</TableHead>
									<TableHead className="h-8 font-bold text-center border">
										Weight
									</TableHead>
									<TableHead className="h-8 font-bold text-center border">
										RPE
									</TableHead>
									<TableHead className="h-8 font-bold text-center border">
										Speed
									</TableHead>
									<TableHead className="h-8 font-bold text-center border">
										HR
									</TableHead>
									<TableHead className="h-8 font-bold text-center border">
										Volume
									</TableHead>
									<TableHead className="h-8 font-bold text-center border">
										1RPM
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="h-8 p-1 border text-center">
										Warm-up
									</TableCell>
									<TableCell className="h-8 p-1 border text-center">
										3
									</TableCell>
									<TableCell className="h-8 p-1 border text-center">
										100
									</TableCell>
									<TableCell className="h-8 p-1 border text-center">
										50
									</TableCell>
									<TableCell className="h-8 p-1 border text-center">
										7
									</TableCell>
									<TableCell className="h-8 p-1 border text-center" />
									<TableCell className="h-8 p-1 border text-center">
										calc.
									</TableCell>
									<TableCell className="h-8 p-1 border text-center">
										calc.
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TabsContent>
					<TabsContent className="h-24" value="execution" />
				</Tabs>
			</div>
			<div className="flex-none w-64">
				<Tabs defaultValue="comment">
					<TabsList className="">
						<TabsTrigger value="comment">Comment</TabsTrigger>
					</TabsList>
					<TabsContent value="comment">
						<Textarea placeholder="Type your comment here." />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default SetDetails;
