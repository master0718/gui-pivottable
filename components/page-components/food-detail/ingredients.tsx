"use client";

import { NextPage } from "next";
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

interface IIngredientsProps {
    parentType: string
}

const getLabelContent = (parentType: string): string => {
    if (parentType === 'food') {
        return 'List of ingredients';
    } else if (parentType === 'dish') {
        return 'List of dish ingredients';
    } else {
        return 'List of product ingredients';
    }
};

const Ingredients: NextPage<IIngredientsProps> = ({
    parentType
}) => {

    const labelContent = getLabelContent(parentType);

    return (
        <div className="flex-1 flex flex-col items-center border-2 border-black">
            <div className="flex justify-between w-full border-dotted border-b p-1">
                <div className="flex items-center">
                    <Label className="font-bold">{labelContent}</Label>
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
                            <span className="pl-2 text-xs">I1</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I2</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I3</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I4</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I5</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I6</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I7</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I8</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I9</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I10</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I11</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I12</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I13</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I14</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full border-b">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I15</span>
                        </div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                        <div className="flex-1 border-dotted border-l pl-1"></div>
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="flex-2 flex items-center">
                            <span className="pl-2 text-xs">I16</span>
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

export default Ingredients;