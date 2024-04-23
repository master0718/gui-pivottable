"use client";

import { Label } from "@/components/ui/label"

const Carbohydrates = () => {
    return (
        <div className="flex-1 flex flex-col items-center border-2 border-black lg:border-r-0">
            <div className="flex justify-between w-full border-dotted border-b p-1">
                <div className="flex items-center">
                    <Label className="font-bold">Carbohydrates</Label>
                </div>
                <div className="flex justify-end">
                </div>
            </div>
            <div className="grow flex flex-col w-full">
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
                        <span className="pl-2 text-xs">Carbs (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
                <div className="flex justify-between w-full border-b">
                    <div className="flex-2 flex items-center">
                        <span className="pl-2 text-xs">Fiber (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
                <div className="flex justify-between w-full border-b">
                    <div className="flex-2 flex items-center">
                        <span className="pl-2 text-xs">Fructose (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
                <div className="flex justify-between w-full border-b">
                    <div className="flex-2 flex items-center">
                        <span className="pl-2 text-xs">Galactose (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
                <div className="flex justify-between w-full border-b">
                    <div className="flex-2 flex items-center">
                        <span className="pl-2 text-xs">Glucose (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
                <div className="flex justify-between w-full border-b">
                    <div className="flex-2 flex items-center">
                        <span className="pl-2 text-xs">Lactose (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
                <div className="flex justify-between w-full border-b">
                    <div className="flex-2 flex items-center">
                        <span className="pl-2 text-xs">Maltose (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
                <div className="flex justify-between w-full border-b">
                    <div className="flex-2 flex items-center">
                        <span className="pl-2 text-xs">Net Carbs (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
                <div className="flex justify-between w-full border-b">
                    <div className="flex-2 flex items-center">
                        <span className="pl-2 text-xs">Starch (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
                <div className="flex justify-between w-full border-b">
                    <div className="flex-2 flex items-center">
                        <span className="pl-2 text-xs">Sucrose (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
                <div className="flex justify-between w-full border-b">
                    <div className="flex-2 flex items-center">
                        <span className="pl-2 text-xs">Sugars (g)</span>
                    </div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                    <div className="flex-1 border-dotted border-l pl-1"></div>
                </div>
            </div>
        </div>
    );
}

export default Carbohydrates;