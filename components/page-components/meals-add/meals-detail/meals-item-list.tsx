"use client"

import { NextPage } from "next"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

interface IMealsItemListProps {

}

const MealsItemList: NextPage<IMealsItemListProps> = ({

}) => {
    return (
        <Card>
            <CardContent className="p-2">
                <div className="w-[500px] flex flex-col mt-10 border border-b-0 rounded-sm">
                    <div className="flex border-b">
                        <div className="flex-1 text-center pl-1">
                            <span className="text-xs font-bold">Item#</span>
                        </div>
                        <div className="flex-2 text-center border-l pl-1">
                            <span className="text-xs font-bold">Item name</span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <span className="text-xs font-bold">Amount</span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <span className="text-xs font-bold">Carbs</span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <span className="text-xs font-bold">Fat</span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <span className="text-xs font-bold">Protein</span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <span className="text-xs font-bold">Edit</span>
                        </div>
                    </div>
                    <div className="flex border-b arrow-start-div1">
                        <div className="flex-1 text-right pl-1">
                            <span className="text-xs italic">1</span>
                        </div>
                        <div className="flex-2 text-left border-l pl-1">
                            <span className="text-xs italic">Chicken Tandori</span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs italic"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs italic"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs italic"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs italic"></span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                    </div>
                    <div className="flex border-b arrow-start-div2 bg-yellow-300">
                        <div className="flex-1 text-right pl-1">
                            <span className="text-xs">1.1</span>
                        </div>
                        <div className="flex-2 text-left border-l pl-1">
                            <span className="text-xs">Chicken</span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs">250</span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <Switch id="edit-mode" />
                        </div>
                    </div>
                    <div className="flex border-b">
                        <div className="flex-1 text-right pl-1">
                            <span className="text-xs">1.2</span>
                        </div>
                        <div className="flex-2 text-left border-l pl-1">
                            <span className="text-xs">Rice</span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <Switch id="edit-mode" />
                        </div>
                    </div>
                    <div className="flex border-b">
                        <div className="flex-1 text-right pl-1">
                            <span className="text-xs">1.3</span>
                        </div>
                        <div className="flex-2 text-left border-l pl-1">
                            <span className="text-xs">Tandori sauce</span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <Switch id="edit-mode" />
                        </div>
                    </div>
                    <div className="flex border-b">
                        <div className="flex-1 text-right pl-1">
                            <span className="text-xs">2</span>
                        </div>
                        <div className="flex-2 text-left border-l pl-1">
                            <span className="text-xs">Cottage cheese</span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <Switch id="edit-mode" />
                        </div>
                    </div>
                    <div className="flex border-b">
                        <div className="flex-1 text-right pl-1">
                            <span className="text-xs">3</span>
                        </div>
                        <div className="flex-2 text-left border-l pl-1">
                            <span className="text-xs">Protein bar</span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-right border-l pl-1">
                            <span className="text-xs"></span>
                        </div>
                        <div className="flex-1 text-center border-l pl-1">
                            <Switch id="edit-mode" />
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-between p-2">
                <Button className="h-8">Add Item</Button>
                <Button className="h-8">Save</Button>
                <Button className="h-8">Delete</Button>
            </CardFooter>
        </Card>
    )
}

MealsItemList.displayName = "MealsItemList";

export { MealsItemList };