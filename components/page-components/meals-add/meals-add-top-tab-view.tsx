"use client";

import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { SelectFilter } from "@/components/search-filter/select-filter";
import { useActions, useTypedSelector } from "@/redux/hooks";
import { DayMealsSearchService } from "@/service/training/day-meals-search-service";
import { getMealsAddSearchForm } from "@/redux/features/meals-add-search-form/reducer";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Folder, List, ListTree } from "lucide-react";
import { DaysTableTabView } from "./days-table/days-table-tab-view";
import { DaysTableListView } from "./days-table/days-table-list-view";
import { DaysTableTreeView } from "./days-table/days-table-tree-view";
import { MealsDetail } from "./meals-detail/meals-detail";
import { DailyNutritionFacts } from "./meals-detail/daily-nutrition-facts";

interface IMealsAddTopTabViewProps {

}

const MealsAddTopTabView: NextPage<{ props: IMealsAddTopTabViewProps, module: string }> = ({
    props,
    module
}) => {

    const [tabState, setTabState] = useState("search");

    const {
        setMesoCycleItems,
        setMicroCycleItems,
        setDayTypeItems,
        setDayItems,
        setActivityTypeItems,
        setActivityNameItems,
        setActivityStartTimeItems,
        setActivityEndTimeItems
    } = useActions(module);

    const mealsAddSearchForm = useTypedSelector(getMealsAddSearchForm);

    const dayMealsSearchService = DayMealsSearchService.getInstance("token");

    // call api which get all meso cycles
    const loadMesoCycleItems = () => {
        const mesoCycleItems = dayMealsSearchService.getMesoCycleItems();
        setMesoCycleItems(mesoCycleItems);
    }

    // call api which get all micro cycles
    const loadMicroCycleItems = () => {
        const microCycleItems = dayMealsSearchService.getMicroCycleItems();
        setMicroCycleItems(microCycleItems);
    }

    // call api which get all day types
    const loadDayTypeItems = () => {
        const dayTypeItems = dayMealsSearchService.getDayTypeItems();
        setDayTypeItems(dayTypeItems);
    }

    // call api which get all days
    const loadDayItems = () => {
        const dayItems = dayMealsSearchService.getDayItems();
        setDayItems(dayItems);
    }

    // call api which get all activity types
    const loadActivityTypeItems = () => {
        const activityTypeItems = dayMealsSearchService.getActivityTypeItems();
        setActivityTypeItems(activityTypeItems);
    }

    // call api which get all activity names
    const loadActivityNameItems = () => {
        const activityNameItems = dayMealsSearchService.getActivityNameItems();
        setActivityNameItems(activityNameItems);
    }

    // call api which get all activity start times
    const loadActivityStartTimeItems = () => {
        const activityStartTimeItems = dayMealsSearchService.getActivityStartTimeItems();
        setActivityStartTimeItems(activityStartTimeItems);
    }

    // call api which get all activity end times
    const loadActivityEndTimeItems = () => {
        const activityEndTimeItems = dayMealsSearchService.getActivityEndTimeItems();
        setActivityEndTimeItems(activityEndTimeItems);
    }

    useEffect(() => {
        loadMesoCycleItems();
        loadMicroCycleItems();
        loadDayTypeItems();
        loadDayItems();
        loadActivityTypeItems();
        loadActivityNameItems();
        loadActivityStartTimeItems();
        loadActivityEndTimeItems();
    }, []);

    return (
        <div className="flex flex-col w-full">
            <div className="flex-none w-96 flex gap-4">
                <Button variant="outline" className={`rounded-b-none border-b-0 ${tabState === "search" ? "bg-[hsl(var(--accent))]" : ""}`} onClick={() => setTabState("search")}>Search</Button>
                <Button variant="outline" className={`rounded-b-none border-b-0 ${tabState === "add" ? "bg-[hsl(var(--accent))]" : ""}`} onClick={() => setTabState("add")}>Add Meals</Button>
            </div>
            <div className="grow border p-2">
                {tabState === "search" && (
                    <div className="w-full flex space-x-4">
                        <div className="flex-none w-80 flex flex-col">
                            <Button className="h-8">{"Click Here to Search"}</Button>
                            <div className="flex flex-col gap-4 p-4 border rounded-sm mt-4">
                                <SelectFilter props={mealsAddSearchForm.mesoCycleField} module={module} />
                                <SelectFilter props={mealsAddSearchForm.microCycleField} module={module} />
                                <SelectFilter props={mealsAddSearchForm.dayTypeField} module={module} />
                                <SelectFilter props={mealsAddSearchForm.dayField} module={module} />
                                <SelectFilter props={mealsAddSearchForm.activityTypeField} module={module} />
                                <SelectFilter props={mealsAddSearchForm.activityNameField} module={module} />
                                <SelectFilter props={mealsAddSearchForm.activityStartTimeField} module={module} />
                                <SelectFilter props={mealsAddSearchForm.activityNameField} module={module} />
                            </div>
                        </div>
                        <div className="grow flex flex-col">
                            <Tabs defaultValue="tab-view" className="">
                                <TabsList className="w-96 flex gap-4 justify-start">
                                    <TabsTrigger value="tab-view" className="flex gap-1">
                                        <span>Tab View</span>
                                        <Folder />
                                    </TabsTrigger>
                                    <TabsTrigger value="list-view" className="flex gap-1">
                                        <span>List View</span>
                                        <List />
                                    </TabsTrigger>
                                    <TabsTrigger value="tree-view" className="flex gap-1">
                                        <span>Tree View</span>
                                        <ListTree />
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="tab-view">
                                    <DaysTableTabView />
                                </TabsContent>
                                <TabsContent value="list-view">
                                    <DaysTableListView />
                                </TabsContent>
                                <TabsContent value="tree-view">
                                    <DaysTableTreeView viewMode="top" />
                                </TabsContent>
                            </Tabs>
                            <div className="flex justify-between items-center">
                                <Button variant="outline">Save the change</Button>
                                <Button variant="outline">Revert change</Button>
                                <Button variant="outline">Delete from days</Button>
                            </div>
                        </div>
                    </div>
                )}
                {tabState === "add" && (
                    <div className="flex flex-col gap-4 border">
                        <div className="p-4">
                            <DailyNutritionFacts viewMode="left" />
                        </div>
                        <div className="p-4">
                            <div className="border rounded-sm p-2">
                                <Tabs defaultValue="pre-workout" className="">
                                    <TabsList className="w-full text-center">
                                        <TabsTrigger value="pre-workout" className="flex gap-1">
                                            <span>Pre-workout</span>
                                        </TabsTrigger>
                                        <TabsTrigger value="post-workout" className="flex gap-1">
                                            <span>Post-workout</span>
                                        </TabsTrigger>
                                        <TabsTrigger value="dinner" className="flex gap-1">
                                            <span>Dinner</span>
                                        </TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="pre-workout">
                                        <MealsDetail viewMode="top" />
                                    </TabsContent>
                                    <TabsContent value="post-workout">
                                        <MealsDetail viewMode="top" />
                                    </TabsContent>
                                    <TabsContent value="dinner">
                                        <MealsDetail viewMode="top" />
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

MealsAddTopTabView.displayName = "MealsAddTopTabView";
export { MealsAddTopTabView };