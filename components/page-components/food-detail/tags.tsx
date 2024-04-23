"use client";

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Tags = () => {
    return (
        <div className="flex-1 flex flex-col items-center border-2 border-black lg:border-r-0">
            <div className="flex justify-between w-full border-dotted border-b p-1">
                <div className="flex items-center">
                    <Label className="font-bold">Tags</Label>
                </div>
                <div className="border-dotted border-l flex items-center space-x-2">
                    <Checkbox className="text-xs" id="select-all" />
                    <Label htmlFor="select-all">
                        Select all
                    </Label>
                </div>
            </div>
            <div className="grow border-black border-b w-full">

            </div>
            <div className="flex justify-between w-full p-1">
                <Button className="text-xs h-6">Delete Selected</Button>
                <Button className="text-xs h-6">Unlink Selected</Button>
                <Button className="text-xs h-6">Add New</Button>
            </div>
        </div>
    );
}

export default Tags;