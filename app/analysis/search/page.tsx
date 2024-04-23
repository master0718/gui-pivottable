"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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

const SearchAnalysis = () => {
	return (
		<div className="container mx-auto px-4 py-4 h-full flex flex-col mb-10 relative gap-2">
			<Card>
				<CardContent className="mt-6">
					<Tabs defaultValue="training-session">
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="training-session">
								Training session DD-MM-YY
							</TabsTrigger>
							<TabsTrigger value="comment">
								Comments and other details
							</TabsTrigger>
						</TabsList>
						<TabsContent value="training-session">
							<Table className="border">
								<TableHeader>
									<TableRow>
										<TableHead className="text-center border h-8">
											Hour
										</TableHead>
										<TableHead className="text-center border h-8">
											Exercise
										</TableHead>
										<TableHead className="text-center border h-8">
											Warmup set
										</TableHead>
										<TableHead className="text-center border h-8">
											Weight
										</TableHead>
										<TableHead className="text-center border h-8">
											Rest time
										</TableHead>
										<TableHead className="text-center border h-8">
											View Video
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
									</TableRow>
									<TableRow>
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
									</TableRow>
									<TableRow>
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
									</TableRow>
									<TableRow>
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
									</TableRow>
								</TableBody>
							</Table>
						</TabsContent>
						<TabsContent value="comment" />
					</Tabs>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="mt-6">
					<Tabs defaultValue="item">
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="item">Item Nutry Facts</TabsTrigger>
							<TabsTrigger value="comment">
								Item Preparation & Alergy & Comments
							</TabsTrigger>
						</TabsList>
						<TabsContent value="item">
							<Table className="border">
								<TableHeader>
									<TableRow>
										<TableHead className="text-center border h-8">
											Hour
										</TableHead>
										<TableHead className="text-center border h-8">
											Exercise
										</TableHead>
										<TableHead className="text-center border h-8">
											Warmup set
										</TableHead>
										<TableHead className="text-center border h-8">
											Weight
										</TableHead>
										<TableHead className="text-center border h-8">
											Rest time
										</TableHead>
										<TableHead className="text-center border h-8">
											View details
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
									</TableRow>
									<TableRow>
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
									</TableRow>
									<TableRow>
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
									</TableRow>
									<TableRow>
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
									</TableRow>
									<TableRow>
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
										<TableCell className="text-center border h-8" />
									</TableRow>
								</TableBody>
							</Table>
						</TabsContent>
						<TabsContent value="comment" />
					</Tabs>
				</CardContent>
			</Card>
		</div>
	);
};

export default SearchAnalysis;
