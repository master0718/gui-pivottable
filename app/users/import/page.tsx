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
import Link from "next/link";

const ImportUsers = () => {
	return (
		<div className="container mx-auto px-4 h-full">
			<div className="flex md:shrink-0 justify-between h-full gap-1 mt-4">
				<div className="flex-2 flex flex-col">
					<Card>
						<CardHeader>
							<CardTitle>Import User</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col items start gap-2">
							<div className="flex justify-start gap-1">
								<Button className="h-8">{"Browse"}</Button>
								<Button className="h-8">
									{"Preview the result of import"}
								</Button>
							</div>
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
										<TableHead className="text-center border">Rights</TableHead>
										<TableHead className="text-center border">Assist</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="border text-center">
											<Input type="text" className="w-full h-full" />
										</TableCell>
										<TableCell className="border text-center">
											<Input type="text" className="w-full h-full" />
										</TableCell>
										<TableCell className="border text-center">
											<Input type="text" className="w-full h-full" />
										</TableCell>
										<TableCell className="border text-center">
											<Select>
												<SelectTrigger className="w-full h-full">
													<SelectValue placeholder="Select a profile" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectItem value="admin">Admin</SelectItem>
														<SelectItem value="coach">Coach</SelectItem>
														<SelectItem value="athlete">Athlete</SelectItem>
														<SelectItem value="assistant">Assistant</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</TableCell>
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
									<TableRow>
										<TableCell className="border text-center">
											<Input type="text" className="w-full h-full" />
										</TableCell>
										<TableCell className="border text-center">
											<Input type="text" className="w-full h-full" />
										</TableCell>
										<TableCell className="border text-center">
											<Input type="text" className="w-full h-full" />
										</TableCell>
										<TableCell className="border text-center">
											<Select>
												<SelectTrigger className="w-full h-full">
													<SelectValue placeholder="Select a profile" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectItem value="admin">Admin</SelectItem>
														<SelectItem value="coach">Coach</SelectItem>
														<SelectItem value="athlete">Athlete</SelectItem>
														<SelectItem value="assistant">Assistant</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</TableCell>
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
									<TableRow>
										<TableCell className="border text-center">
											<Input type="text" className="w-full h-full" />
										</TableCell>
										<TableCell className="border text-center">
											<Input type="text" className="w-full h-full" />
										</TableCell>
										<TableCell className="border text-center">
											<Input type="text" className="w-full h-full" />
										</TableCell>
										<TableCell className="border text-center">
											<Select>
												<SelectTrigger className="w-full h-full">
													<SelectValue placeholder="Select a profile" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectItem value="admin">Admin</SelectItem>
														<SelectItem value="coach">Coach</SelectItem>
														<SelectItem value="athlete">Athlete</SelectItem>
														<SelectItem value="assistant">Assistant</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</TableCell>
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
						<CardFooter className="flex justify-start gap-1">
							<Button className="h-8">{"Import"}</Button>
							<Button className="h-8">{"Cancel"}</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ImportUsers;
