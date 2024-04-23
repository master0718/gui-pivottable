"use client";

import { Label } from "@/components/ui/label"

const Fats = () => {
    return (
        <div className="flex-1 flex flex-col items-center border-2 border-black lg:border-r-0">
            <div className="flex justify-between w-full border-dotted border-b p-1">
                <div className="flex items-center">
                    <Label className="font-bold">Fats</Label>
                </div>
                <div className="flex justify-end">
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
                    <span className="pl-2 text-xs">Fat (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Cholesterol (mg)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Monounsaturated (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Omega-3 (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Omega-6 (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Phytosterol (mg)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Polyunsaturated (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Saturated (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
            <div className="flex justify-between w-full border-b">
                <div className="flex-2 flex items-center">
                    <span className="pl-2 text-xs">Trans-Fats (g)</span>
                </div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
                <div className="flex-1 border-dotted border-l pl-1"></div>
            </div>
        </div>
    );
}

export default Fats;