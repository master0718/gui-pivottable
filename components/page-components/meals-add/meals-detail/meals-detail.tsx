"use client";

import { NextPage } from "next";
import { useEffect } from "react";
import { DishNutritionFacts } from "./dish-nutrition-facts";
import { MealsItemList } from "./meals-item-list";
import { MealsNutritionFacts } from "./meals-nutrition-facts";

interface IMealsDetailProps {
    viewMode: string;
}

const MealsDetail: NextPage<IMealsDetailProps> = ({
    viewMode
}) => {

    const createArrow = (startClassName: string, endClassName: string, color: string) => {
        const div1 = document.querySelector(startClassName) as HTMLElement;
        const div2 = document.querySelector(endClassName) as HTMLElement;

        // Calculate the positions and angles for the arrow
        const x1 = div1.offsetLeft + div1.offsetWidth;
        const y1 = div1.offsetTop + div1.offsetHeight / 2;
        const x2 = div2.offsetLeft;
        const y2 = div2.offsetTop + div2.offsetHeight / 2;
        const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        // Create a new arrow element and apply the calculated angle

        const arrow = document.createElement('div');
        arrow.classList.add('arrow');
        arrow.style.left = x1 + 'px';
        arrow.style.top = y1 + 'px';
        arrow.style.transform = `rotate(${angle}deg)`;
        arrow.style.position = 'absolute';
        arrow.style.width = distance + 'px';
        arrow.style.height = '2px';
        arrow.style.backgroundColor = color;
        arrow.style.transformOrigin = 'left center';
        const detailContainer = document.querySelector('.detail-container') as HTMLElement;
        detailContainer.appendChild(arrow);
    }

    useEffect(() => {
        // createArrow(".arrow-start-div1", ".arrow-end-div1", "hsl(var(--foreground))");
        // createArrow(".arrow-start-div2", ".arrow-end-div2", "yellow");
        // createArrow(".arrow-start-div2", ".arrow-end-div3", "yellow");
    }, []);
    return (
        <div className={`flex ${viewMode === 'scroll' ? "" : "flex-col"} gap-4 detail-container relative`}>
            <div className="flex">
                <MealsNutritionFacts viewMode={viewMode} />
            </div>
            <div className="flex w-full justify-between gap-32 items-start">
                <MealsItemList />
                <DishNutritionFacts />
            </div>
        </div>
    )
}

MealsDetail.displayName = "MealsDetail";

export { MealsDetail };