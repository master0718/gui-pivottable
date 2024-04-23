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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserProfile = () => {
	return (
		<div className="container mx-auto px-4 h-full">
			<div className="flex md:shrink-0 justify-between h-full gap-1 mt-4">
				<div className="flex-2 flex flex-col">
					<Card>
						<CardContent className="mt-4">
							<Tabs defaultValue="personal-info">
								<TabsList>
									<TabsTrigger value="personal-info">Personal info</TabsTrigger>
									<TabsTrigger value="password">Change password</TabsTrigger>
									<TabsTrigger value="default-values">
										Default values
									</TabsTrigger>
								</TabsList>
								<TabsContent value="personal-info">
									<Card>
										<CardContent className="mt-4">
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
														<TableHead className="text-center border">
															Profile
														</TableHead>
														<TableHead className="text-center border">
															Rights
														</TableHead>
														<TableHead className="text-center border">
															Assist
														</TableHead>
													</TableRow>
												</TableHeader>
												<TableBody>
													<TableRow>
														<TableCell className="border text-center" />
														<TableCell className="border text-center" />
														<TableCell className="border text-center" />
														<TableCell className="border text-center" />
														<TableCell className="border text-center">
															<Button className="h-8">
																<Link href="/users/permission">Go detail</Link>
															</Button>
														</TableCell>
														<TableCell className="border text-center">
															<Button className="h-8">
																<Link href="/users/assistance">Go detail</Link>
															</Button>
														</TableCell>
													</TableRow>
												</TableBody>
											</Table>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="password">
									<Card className="w-[400px]">
										<CardContent className="space-y-2 mt-4">
											<div className="space-y-1">
												<Label htmlFor="current">Current password</Label>
												<Input id="current" type="password" />
											</div>
											<div className="space-y-1">
												<Label htmlFor="new">New password</Label>
												<Input id="new" type="password" />
											</div>
											<div className="space-y-1">
												<Label htmlFor="repeat">Repeat new password</Label>
												<Input id="repeat" type="password" />
											</div>
										</CardContent>
										<CardFooter className="flex justify-between">
											<Button className="h-8">Save</Button>
											<Button className="h-8">Cancel</Button>
										</CardFooter>
									</Card>
								</TabsContent>
								<TabsContent value="default-values">
									<Card className="w-[400px]">
										<CardContent className="space-y-2 mt-4">
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
										<CardFooter className="flex justify-between">
											<Button className="h-8">Save</Button>
											<Button className="h-8">Cancel</Button>
										</CardFooter>
									</Card>
								</TabsContent>
							</Tabs>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
