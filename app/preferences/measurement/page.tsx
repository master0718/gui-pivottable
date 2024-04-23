"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Measurement = () => {
	return (
		<div className="container mx-auto px-4 h-full">
			<div className="flex md:shrink-0 justify-between h-full gap-1 mt-4">
				<div className="flex-2 flex flex-col">
					<Card>
						<CardContent className="mt-4">
							<div className="flex items-start gap-2">
								<div className="flex-none w-96 flex flex-col gap-2">
									<div className="flex flex-col border">
										<div className="border-b text-center p-1">
											<Label className="font-bold text-base">
												Unit Scale Selection
											</Label>
										</div>
										<div className="flex flex-col gap-2 pb-2">
											<div className="border-b text-center p-1">
												<Label className="font-bold">General Data</Label>
											</div>
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">Weight</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="Kg">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="Kg" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="Kg">Kg</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">Mass</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="Kg">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="Kg" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="Kg">Kg</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">
														BasalMetabolic Range
													</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="Kcal">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="Kcal" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="Kcal">Kcal</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">
														Daily Calories Intake
													</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="Kcal/24 hrs">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="Kcal/24 hrs" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="Kcal/24 hrs">
																	Kcal/24 hrs
																</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">Temparature</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="C">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="C" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="C">C</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">Humidity</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="%">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="%" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="%">%</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">Pressure</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="Bar">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="Bar" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="Bar">Bar</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col border gap-2">
										<div className="border-b text-center p-1">
											<Label className="font-bold text-base">
												Segmented Data
											</Label>
										</div>
										<div className="flex flex-col gap-2 pb-2">
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">Fat</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="Kg">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="Kg" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="Kg">Kg</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">Muscle Mass</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="Kg">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="Kg" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="Kg">Kg</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col border gap-2">
										<div className="border-b text-center p-1">
											<Label className="font-bold text-base">Size</Label>
										</div>
										<div className="flex flex-col gap-2 pb-2">
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">Weight</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="Kg">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="Kg" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="Kg">Kg</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
											<div className="flex items-center">
												<div className="flex-1 pl-1">
													<Label className="text-xs">Other Measurements</Label>
												</div>
												<div className="flex-1 pr-1">
													<Select value="Cm">
														<SelectTrigger className="w-full h-8">
															<SelectValue defaultValue="Cm" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="Cm">Cm</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="grow flex flex-col">
									<div className="border text-center p-1">
										<Label className="font-bold text-base">
											Increment Settings
										</Label>
									</div>
									<div className="flex items-start gap-2">
										<div className="flex-1 flex flex-col border border-t-0">
											<div className="border-b text-center p-1">
												<Label className="font-bold">General Data</Label>
											</div>
											<div className="border-b flex flex-col gap-2 py-2">
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Weight</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={5}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Mass (Body Fat)</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={2}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Body Fat Range</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={4}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Free Fat Mass</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={3}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">
															Visceral Fat Range
														</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Mass (Body Water)</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={5}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Muscle Mass</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={2}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Bone Mass</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={7}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">
															BasalMetabolic Range
														</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={2}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">
															Daily Calorie Intake
														</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Metabolic Age</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={4}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Physique Rating</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={2}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Temparature</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={9}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Humidity</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={6}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Pressure</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">
															Percentage (Body Fat)
														</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={4}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">
															Percentage (Body Water)
														</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={3}
															readOnly
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 flex flex-col border border-t-0">
											<div className="border-b text-center p-1">
												<Label className="font-bold">Segmented Data</Label>
											</div>
											<div className="border-b flex flex-col gap-2 py-2">
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Fat (Left)</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={2}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">
															Muscle Mass (Left)
														</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={2}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Fat (Right)</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={3}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">
															Muscle Mass (Right)
														</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={2}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Fat (Hip)</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Muscle Mass (Hip)</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Fat (Left Leg)</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">
															Muscle Mass (Left Leg)
														</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Fat (Right Leg)</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">
															Muscle Mass (Right Leg)
														</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 flex flex-col border border-t-0">
											<div className="border-b text-center p-1">
												<Label className="font-bold">Size</Label>
											</div>
											<div className="border-b flex flex-col gap-2 py-2">
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">
															Height (Removable)
														</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={2}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Neck</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Up Arm Left</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={5}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Forearm Left</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={4}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Waist</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={5}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Thigh Left</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={4}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Calf Left</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={11}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Calf Right</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={4}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Thigh Right</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={3}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Hip</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={2}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Forearm Right</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Up Arm Right</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Chest</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={1}
															readOnly
														/>
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex-1 pl-1">
														<Label className="text-xs">Weight</Label>
													</div>
													<div className="flex-1 pr-1">
														<Input
															type="text"
															className="h-8 w-full"
															value={10}
															readOnly
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Measurement;
