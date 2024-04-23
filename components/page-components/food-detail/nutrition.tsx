"use client";

import { Label } from "@/components/ui/label"

const Nutrition = () => {
    return (
        <div className="flex-1 flex flex-col items-center border-2 border-black lg:border-r-0">
            <div className="flex justify-between w-full border-dotted border-b p-1">
                <div className="flex items-center">
                    <Label className="font-bold">Nutrition Facts - Overview</Label>
                </div>
                <div className="flex items-center">
                    <Label className="font-bold">in stock</Label>
                </div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 text-xs"></div>
                <div className="flex-1 border-dotted border-l pl-1 flex items-center">
                    <span className="text-xs">Quantity</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1 flex items-center">
                    <span className="text-xs">UM</span>
                </div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Serving size</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Adjusted serving size</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">&nbsp;</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b border-black">
                <div className="flex-2 font-bold flex items-center">
                    <span className="pl-1 text-xs">General information</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Calories (kcal)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-4 text-xs">from Carbs</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-4 text-xs">from Fat</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-4 text-xs">from Protein</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Fiber</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Alchol (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">&nbsp;</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b border-black">
                <div className="flex-2 font-bold flex items-center">
                    <span className="pl-1 text-xs">Macros</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Carbs (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Fat (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Protein (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">&nbsp;</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
        </div>
    )
}

export default Nutrition;