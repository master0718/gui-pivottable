"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { NumberInput } from "@/components/number-input/number-input";
import { Textarea } from "@/components/ui/textarea";

const AddTrackBody = () => {
	return (
		<div className="container mx-auto px-4 py-4 h-full flex flex-col mb-10 relative gap-2">
			<Card>
				<CardContent className="p-4">
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">Left Arm</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Fat"} value={10} unit={"%"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Muscle Mass"} value={16} unit={"Kg"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">Right Arm</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Fat"} value={30} unit={"%"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Muscle Mass"} value={52} unit={"Kg"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">Hip</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Fat"} value={27} unit={"%"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Muscle Mass"} value={5} unit={"Kg"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">Left Leg</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Fat"} value={21} unit={"%"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Muscle Mass"} value={28} unit={"Kg"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">Right Leg</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Fat"} value={12} unit={"%"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Muscle Mass"} value={9} unit={"Kg"} />
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="p-4">
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-start gap-2">
							<div className="flex-1">
								<NumberInput label={"Height"} value={171} unit={"Cm"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Weight"} value={56} unit={"Kg"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-1">
								<NumberInput label={"Neck"} value={0} unit={"Cm"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Chest"} value={34} unit={"Cm"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-1">
								<NumberInput label={"Up. Arm Left"} value={55} unit={"Cm"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Up. Arm Right"} value={5} unit={"Cm"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-1">
								<NumberInput label={"Forearm Left"} value={54} unit={"Cm"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Forearm Right"} value={0} unit={"Cm"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-1">
								<NumberInput label={"Waist"} value={34} unit={"Cm"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Hip"} value={0} unit={"Cm"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-1">
								<NumberInput label={"Thigh Left"} value={23} unit={"Cm"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Thigh Right"} value={23} unit={"Cm"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-1">
								<NumberInput label={"Calf Left"} value={12} unit={"Cm"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Calf Right"} value={56} unit={"Cm"} />
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="p-4">
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">Weight</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Weight"} value={60} unit={"Kg"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"BMI"} value={16} unit={""} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">Body Fat</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Percentage"} value={48} unit={"%"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Mass"} value={16} unit={"Kg"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">{""}</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Body Fat Range"} value={24} unit={"%"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Fat Free Mass"} value={0} unit={"Kg"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">{""}</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Fat"} value={21} unit={"%"} />
							</div>
							<div className="flex-1" />
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">Body Water</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Percentage"} value={42} unit={"%"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Mass"} value={50} unit={"Kg"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">Other</Label>
							</div>
							<div className="flex-1">
								<NumberInput label={"Muscle Mass"} value={12} unit={"Kg"} />
							</div>
							<div className="flex-1">
								<NumberInput label={"Bone Mass"} value={49} unit={"Kg"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">Current Condition</Label>
							</div>
							<div className="flex-1">
								<NumberInput
									label={"BasalMetabolic Range"}
									value={0}
									unit={"Kcal"}
								/>
							</div>
							<div className="flex-1">
								<NumberInput label={"Metabolic Age"} value={32} unit={"Yrs"} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">{""}</Label>
							</div>
							<div className="flex-1">
								<NumberInput
									label={"Daily Calorie Intake"}
									value={23}
									unit={"Kcal/day"}
								/>
							</div>
							<div className="flex-1">
								<NumberInput label={"Physique Rating"} value={2} unit={""} />
							</div>
						</div>
						<div className="flex justify-between items-start gap-2">
							<div className="flex-none w-48">
								<Label className="font-bold">
									{"Environmental Conditions"}
								</Label>
							</div>
							<div className="flex-1 flex flex-col gap-2">
								<NumberInput label={"Temparature"} value={27} unit={"C"} />
								<NumberInput label={"Humidity"} value={24} unit={"%"} />
								<NumberInput label={"Pressure"} value={5} unit={"Bar"} />
							</div>
							<div className="flex-1 flex flex-col">
								<Label>Comment</Label>
								<Textarea className="w-full h-48" />
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default AddTrackBody;
