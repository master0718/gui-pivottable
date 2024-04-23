"use client";

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


const Comments = () => {
    return (
        <div className="flex-2 flex flex-col items-center border-2 border-black">
            <div className="flex justify-between w-full border-dotted border-b p-1">
                <div className="flex items-center">
                    <Label className="font-bold">Comments</Label>
                </div>
                <div className="flex justify-end">
                </div>
            </div>
            <div className="grow w-full flex h-64">
                <Textarea placeholder="Type your comments here." />
            </div>
        </div>
    );
}

export default Comments;