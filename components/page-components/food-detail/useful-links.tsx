"use client";

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

const UsefulLinks = () => {
    return (
        <div className="flex-1 flex flex-col items-center border-2 border-black">
            <div className="flex justify-between w-full border-dotted border-b p-1">
                <div className="flex items-center">
                    <Label className="font-bold">Useful links</Label>
                </div>
                <div className="border-dotted border-l flex items-center space-x-2">
                    <Checkbox id="select-all" />
                    <Label htmlFor="select-all">
                        Select all
                    </Label>
                </div>
            </div>
            <ScrollArea className="grow flex flex-col border-black border-b w-full h-64">
                <></>
            </ScrollArea>
            <div className="flex justify-between w-full p-1">
                <Button className="text-xs h-6">Delete Selected</Button>
                <Button className="text-xs h-6">Unlink Selected</Button>
                <Button className="text-xs h-6">Add New</Button>
            </div>
        </div>
    );
}

export default UsefulLinks;