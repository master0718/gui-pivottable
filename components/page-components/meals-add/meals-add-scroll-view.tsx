"use client";

import { SelectFilter } from "@/components/search-filter/select-filter"
import { Button } from "@/components/ui/button"
import { getMealsAddSearchForm } from "@/redux/features/meals-add-search-form/reducer"
import { useActions, useTypedSelector } from "@/redux/hooks"
import { DayMealsSearchService } from "@/service/training/day-meals-search-service"
import { NextPage } from "next"
import { useEffect } from "react"
import { Folder, List, ListTree } from "lucide-react"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { DaysTableTabView } from "./days-table/days-table-tab-view"
import { DaysTableListView } from "./days-table/days-table-list-view"
import { DaysTableTreeView } from "./days-table/days-table-tree-view"
import { DailyNutritionFacts } from "./meals-detail/daily-nutrition-facts"
import { MealsDetail } from "./meals-detail/meals-detail"

interface IMealsAddScrollViewProps {

}

const MealsAddScrollView: NextPage<{ props: IMealsAddScrollViewProps, module: string }> = ({
    props,
    module
}) => {

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
        <div className="w-full h-[700px] overflow-auto whitespace-nowrap">
            <div className="flex space-x-4">
                <Card className="flex-none w-80">
                    <CardHeader className="p-2">
                        <Button className="h-8">{"Click Here to Search"}</Button>
                    </CardHeader>
                    <CardContent className="flex flex-col p-2">
                        <div className="flex flex-col gap-4">
                            <SelectFilter props={mealsAddSearchForm.mesoCycleField} module={module} />
                            <SelectFilter props={mealsAddSearchForm.microCycleField} module={module} />
                            <SelectFilter props={mealsAddSearchForm.dayTypeField} module={module} />
                            <SelectFilter props={mealsAddSearchForm.dayField} module={module} />
                            <SelectFilter props={mealsAddSearchForm.activityTypeField} module={module} />
                            <SelectFilter props={mealsAddSearchForm.activityNameField} module={module} />
                            <SelectFilter props={mealsAddSearchForm.activityStartTimeField} module={module} />
                            <SelectFilter props={mealsAddSearchForm.activityNameField} module={module} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-[800px]">
                    <CardContent className="flex flex-col p-2">
                        <Tabs defaultValue="tab-view" className="">
                            <TabsList className="mr-auto">
                                <TabsTrigger value="tab-view">
                                    Tab View
                                    <Folder className="h-4 w-4 ml-1" />
                                </TabsTrigger>
                                <TabsTrigger value="list-view">
                                    List View
                                    <List className="h-4 w-4 ml-1" />
                                </TabsTrigger>
                                <TabsTrigger value="tree-view">
                                    Tree View
                                    <ListTree className="h-4 w-4 ml-1" />
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="tab-view">
                                <DaysTableTabView />
                            </TabsContent>
                            <TabsContent value="list-view">
                                <DaysTableListView />
                            </TabsContent>
                            <TabsContent value="tree-view">
                                <DaysTableTreeView viewMode="scroll" />
                            </TabsContent>
                        </Tabs>
                        <div className="flex justify-between items-center">
                            <Button className="h-8">Save the change</Button>
                            <Button className="h-8">Revert change</Button>
                            <Button className="h-8">Delete from days</Button>
                        </div>
                    </CardContent>

                </Card>
                <Card>
                    <CardContent className="p-2">
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <DailyNutritionFacts viewMode="scroll" />
                            </div>
                            <div className="flex-2 py-2">
                                <Card>
                                    <CardContent className="p-2">
                                        <Tabs defaultValue="pre-workout">
                                            <TabsList className="mx-auto">
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
                                                <MealsDetail viewMode="scroll" />
                                            </TabsContent>
                                            <TabsContent value="post-workout">
                                                <MealsDetail viewMode="scroll" />
                                            </TabsContent>
                                            <TabsContent value="dinner">
                                                <MealsDetail viewMode="scroll" />
                                            </TabsContent>
                                        </Tabs>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div >
    );
}

MealsAddScrollView.displayName = "MealsAddScrollView";
export { MealsAddScrollView };