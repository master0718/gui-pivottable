"use client";

import React from "react";
import TrainingSessionItem from "@/components/page-components/training-session/training-session-item";

const TrainingSession = () => {
	return (
		<div className="container mx-auto px-4 py-4 h-full flex flex-col mb-10 relative">
			<TrainingSessionItem />
		</div>
	);
};

export default TrainingSession;
