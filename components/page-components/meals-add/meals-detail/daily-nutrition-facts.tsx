"use client";

import { NextPage } from "next"
import { DailyNutritionFactsDelta } from "./daily-nutrition-facts-delta"
import { DailyNutritionFactsTarget } from "./daily-nutrition-facts-target"
import { DailyNutritionFactsTotal } from "./daily-nutrition-facts-total"

interface IDailyNutritionFactsProps {
    viewMode: string;
}

const DailyNutritionFacts: NextPage<IDailyNutritionFactsProps> = ({
    viewMode
}) => {
    return (
        <div className="flex">
            <div className="flex-1">
                <DailyNutritionFactsTarget viewMode={viewMode} />
            </div>
            <div className="flex-none w-[100px]">
                <DailyNutritionFactsDelta />
            </div>
            <div className="flex-1">
                <DailyNutritionFactsTotal viewMode={viewMode} />
            </div>
        </div>
    )
}

DailyNutritionFacts.displayName = "DailyNutritionFacts";

export { DailyNutritionFacts };