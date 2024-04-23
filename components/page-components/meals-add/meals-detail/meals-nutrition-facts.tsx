"use client";

import { NextPage } from "next";
import { MealsNutritionFactsDelta } from "./meals-nutrition-facts-delta";
import { MealsNutritionFactsTarget } from "./meals-nutrition-facts-target";
import { MealsNutritionFactsTotal } from "./meals-nutrition-facts-total";

interface IMealsNutritionFactsProps {
    viewMode: string;
}

const MealsNutritionFacts: NextPage<IMealsNutritionFactsProps> = ({
    viewMode
}) => {
    return (
        <div className="flex w-full">
            <div className="flex-1">
                <MealsNutritionFactsTarget viewMode={viewMode} />
            </div>
            <div className="flex-none w-[100px]">
                <MealsNutritionFactsDelta />
            </div>
            <div className="flex-1">
                <MealsNutritionFactsTotal viewMode={viewMode} />
            </div>
        </div>
    )
}

MealsNutritionFacts.displayName = "MealsNutritionFacts";

export { MealsNutritionFacts };