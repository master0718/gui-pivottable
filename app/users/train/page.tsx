"use client";

import React from "react";
import { useEffect, useState } from "react";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const TrainUsers = () => {
	return (
		<div className="container mx-auto px-4 h-full">
			<div className="flex md:shrink-0 justify-between h-full gap-1 mt-4">
				<div className="flex-2 flex flex-col">
					<Card>
						<CardHeader>
							<CardTitle>Train user</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col items start gap-2">
							<Table className="border">
								<TableHeader>
									<TableRow>
										<TableHead className="text-center border">
											User name
										</TableHead>
										<TableHead className="text-center border">
											First name
										</TableHead>
										<TableHead className="text-center border">
											Last name
										</TableHead>
										<TableHead className="text-center border">Status</TableHead>
										<TableHead className="text-center border">Train</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="border text-center" />
										<TableCell className="border text-center" />
										<TableCell className="border text-center" />
										<TableCell className="border text-center" />
										<TableCell className="border text-center">
											<Button className="h-8">Go detail</Button>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="border text-center" />
										<TableCell className="border text-center" />
										<TableCell className="border text-center" />
										<TableCell className="border text-center" />
										<TableCell className="border text-center">
											<Button className="h-8">Go detail</Button>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="border text-center" />
										<TableCell className="border text-center" />
										<TableCell className="border text-center" />
										<TableCell className="border text-center" />
										<TableCell className="border text-center">
											<Button className="h-8">Go detail</Button>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default TrainUsers;
