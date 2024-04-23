"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormSchema = z.object({
	displayMode: z.enum(["light", "dark"]),
});

const DisplayMode = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {}

	return (
		<div className="container mx-auto px-4 h-full">
			<div className="flex md:shrink-0 justify-between h-full gap-1 mt-4">
				<div className="flex-2 flex flex-col">
					<Card>
						<CardContent className="mt-4">
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="w-2/3 space-y-6"
								>
									<FormField
										control={form.control}
										name="displayMode"
										render={({ field }) => (
											<FormItem className="space-y-3">
												<FormLabel>Display mode</FormLabel>
												<FormControl>
													<RadioGroup
														onValueChange={field.onChange}
														defaultValue={field.value}
														className="flex flex-row space-x-1"
													>
														<FormItem className="flex items-center space-x-3 space-y-0">
															<FormControl>
																<RadioGroupItem value="light" />
															</FormControl>
															<FormLabel className="font-normal">
																Light
															</FormLabel>
														</FormItem>
														<FormItem className="flex items-center space-x-3 space-y-0">
															<FormControl>
																<RadioGroupItem value="dark" />
															</FormControl>
															<FormLabel className="font-normal">
																Dark
															</FormLabel>
														</FormItem>
													</RadioGroup>
												</FormControl>
											</FormItem>
										)}
									/>
								</form>
							</Form>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default DisplayMode;
