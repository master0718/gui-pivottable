"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";

interface INumberInputProps {
	label: string;
	value: number;
	unit: string;
}

const NumberInput: NextPage<INumberInputProps> = ({ label, value, unit }) => {
	const [inputValue, setInputValue] = useState(value);

	const plusValue = () => {
		setInputValue(inputValue + 1);
	};

	const minusValue = () => {
		setInputValue(inputValue - 1);
	};
	return (
		<div className="flex w-[300px] h-16 items-center gap-2">
			<Label className="flex-none w-24">{label}</Label>
			<div className="grow h-16 flex items-center">
				<div className="grow h-full border border-r-0">
					<Input
						className="w-full h-full border-0"
						type="text"
						value={inputValue}
						readOnly
					/>
				</div>
				<div className="flex-none w-16 flex flex-col items-center h-full border">
					<div
						onClick={plusValue}
						className="flex-1 border-b w-full flex flex-col items-center bg-gray-400 cursor-pointer"
					>
						<Plus className="m-auto h-4 w-4 font-bold" />
					</div>
					<div
						onClick={minusValue}
						className="flex-1 w-full flex flex-col items-center bg-gray-400 cursor-pointer"
					>
						<Minus className="m-auto h-4 w-4 font-bold" />
					</div>
				</div>
			</div>
			<Label className="flex-none w-8">{unit}</Label>
		</div>
	);
};

NumberInput.displayName = "NumberInput";

export { NumberInput };
