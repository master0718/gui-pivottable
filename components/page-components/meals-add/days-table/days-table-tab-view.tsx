"use client"

import { NextPage } from "next";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { useTypedSelector } from "@/redux/hooks";
import { getMealsAddSearchForm } from "@/redux/features/meals-add-search-form/reducer";
import { getTabItemsToShow } from "@/lib/helpers";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TabViewTable } from "./tab-view/tab-view-table";

interface IDaysTableTabViewProps {

}

const DaysTableTabView: NextPage<IDaysTableTabViewProps> = ({

}) => {

    const mealsAddSearchForm = useTypedSelector(getMealsAddSearchForm);
    const defaultTabCountToShow = 4;

    const mesoCycleItems = getTabItemsToShow(mealsAddSearchForm.mesoCycleField.items, defaultTabCountToShow);
    const microCycleItems = getTabItemsToShow(mealsAddSearchForm.microCycleField.items, defaultTabCountToShow);

    return (
        <div className="flex flex-col space-y-1">
            <Tabs defaultValue="0" className="">
                <TabsList className="flex gap-4 justify-start">
                    {
                        mesoCycleItems.itemsToShow.map((mesoCycleItem, index) => {
                            return (
                                <TabsTrigger key={index} value={index.toString()}>
                                    {mesoCycleItem.label}
                                </TabsTrigger>
                            )
                        })
                    }
                    {
                        mesoCycleItems.itemsToMore.length > 0 && (
                            <TabsTrigger value="tab-view">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        {
                                            mesoCycleItems.itemsToMore.map((mesoCycleItem, index) => (
                                                <DropdownMenuItem key={index}>
                                                    {mesoCycleItem.label}
                                                </DropdownMenuItem>
                                            ))
                                        }
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TabsTrigger>
                        )
                    }
                </TabsList>
            </Tabs>
            <Tabs defaultValue="0" className="">
                <TabsList className="w-full flex gap-4 justify-start">
                    {
                        microCycleItems.itemsToShow.map((microCycleItem, index) => {
                            return (
                                <TabsTrigger key={index} value={index.toString()}>
                                    <span>{microCycleItem.label}</span>
                                </TabsTrigger>
                            )
                        })
                    }
                    {
                        microCycleItems.itemsToMore.length > 0 && (
                            <TabsTrigger value="more">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        {
                                            microCycleItems.itemsToMore.map((microCycleItem, index) => (
                                                <DropdownMenuItem key={index}>
                                                    {microCycleItem.label}
                                                </DropdownMenuItem>
                                            ))
                                        }
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TabsTrigger>
                        )
                    }
                </TabsList>
            </Tabs>
            <TabViewTable />
        </div>
    )
}

DaysTableTabView.displayName = "DaysTableTabView";
export { DaysTableTabView };