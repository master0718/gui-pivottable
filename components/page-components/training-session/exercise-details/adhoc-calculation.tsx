"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const AdhocCalculation = () => {
	return (
		<div className="flex items-start justify-between px-36 py-8 gap-16">
			<div className="flex-1 flex flex-col gap-4">
				<Button className="h-8">RPE estimation</Button>
				<Button className="h-8">Fatigue %</Button>
				<Button className="h-8">Intensity increase</Button>
				<Button className="h-8">Volume increase</Button>
				<Button className="h-8">Backoff sets</Button>
			</div>
			<div className="flex-1 border h-[200px]" />
		</div>
	);
};

export default AdhocCalculation;
