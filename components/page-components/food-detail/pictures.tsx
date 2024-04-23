"use client";

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Pictures = () => {
    return (
        <div className="flex-1 flex flex-col items-center border-2 border-black lg:border-r-0">
            <div className="flex justify-between w-full border-dotted border-b p-1">
                <div className="flex items-center">
                    <Label className="font-bold">Pictures</Label>
                </div>
                <div className="border-dotted border-l flex items-center space-x-2">
                    <Checkbox id="select-all" />
                    <Label htmlFor="select-all">
                        Select all
                    </Label>
                </div>
            </div>
            <div className="grow border-black border-b w-full flex h-64">
                <div className="flex-3 h-full border-t border-black border-r-0">

                </div>
                <div className="flex-1 h-full flex flex-col">
                    <div className="flex-1 border border-black border-r-0 border-b-0"></div>
                    <div className="flex-1 border border-black border-r-0 border-b-0"></div>
                </div>
            </div>
            <div className="flex justify-between w-full p-1">
                <Button className="text-xs h-6">Delete Selected</Button>
                <Button className="text-xs h-6">Unlink Selected</Button>
                <Button className="text-xs h-6">Add New</Button>
            </div>
        </div>
    );
}

export default Pictures;