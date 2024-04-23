"use client";

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

const Protein = () => {
    return (
        <div className="flex-1 flex flex-col items-center border-2 border-black">
            <div className="flex justify-between w-full border-dotted border-b p-1">
                <div className="flex items-center">
                    <Label className="font-bold">Protein</Label>
                </div>
                <div className="border-dotted border-l flex items-center space-x-2">
                    <Checkbox id="select-all" />
                    <Label htmlFor="select-all">
                        Select all
                    </Label>
                </div>
            </div>
            <ScrollArea className="grow flex flex-col border-black border-b w-full h-64">
                <>
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
                            <span className="pl-2 text-xs">Protein (g)</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">BCAA Total</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">BCAA Valine</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">BCAA Leucine</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">BCAA Iso-Leucine</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">Creatine</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                </>
            </ScrollArea>
            <div className="flex justify-between w-full p-1">
                <Button className="text-xs h-6">Delete Selected</Button>
                <Button className="text-xs h-6">Unlink Selected</Button>
                <Button className="text-xs h-6">Add New</Button>
            </div>
        </div >
    );
}

export default Protein;