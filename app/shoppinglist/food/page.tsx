"use client";

import React from "react";
import { useActions } from "@/redux/hooks/use-actions";
import { useTypedSelector } from "@/redux/hooks/use-typed-selector";
import { useEffect } from "react";

import { FoodListSearchService } from "@/service/food-list/food-list-search-service";
import { getFoodListSearchForm } from "@/redux/features/food-list-search-form/reducer";

import { FoodTableTabView } from "@/components/page-components/food-list/food-table/food-table-tab-view";
import { FoodTableListView } from "@/components/page-components/food-list/food-table/food-table-list-view";
import { FoodTableTreeView } from "@/components/page-components/food-list/food-table/food-table-tree-view";
import { FoodListPopupTable } from "@/components/page-components/food-list/food-list-popup-table";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SelectFilter } from "@/components/search-filter/select-filter";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Folder, List, ListTree } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PrepareFood = () => {
  const {
    setMesoCycleItems,
    setMicroCycleItems,
    setDayTypeItems,
    setDayItems,
    setActivityTypeItems,
    setActivityNameItems,
    setActivityStartTimeItems,
    setActivityEndTimeItems,
    setMealTargetMacroItems,
  } = useActions("foodListSearchForm");

  const foodListSearchForm = useTypedSelector(getFoodListSearchForm);

  const foodListSearchService = FoodListSearchService.getInstance("token");
  // call api which get all meso cycles
  const loadMesoCycleItems = () => {
    const mesoCycleItems = foodListSearchService.getMesoCycleItems();
    setMesoCycleItems(mesoCycleItems);
  };

  // call api which get all micro cycles
  const loadMicroCycleItems = () => {
    const microCycleItems = foodListSearchService.getMicroCycleItems();
    setMicroCycleItems(microCycleItems);
  };

  // call api which get all day types
  const loadDayTypeItems = () => {
    const dayTypeItems = foodListSearchService.getDayTypeItems();
    setDayTypeItems(dayTypeItems);
  };

  // call api which get all days
  const loadDayItems = () => {
    const dayItems = foodListSearchService.getDayItems();
    setDayItems(dayItems);
  };

  // call api which get all activity types
  const loadActivityTypeItems = () => {
    const activityTypeItems = foodListSearchService.getActivityTypeItems();
    setActivityTypeItems(activityTypeItems);
  };

  // call api which get all activity names
  const loadActivityNameItems = () => {
    const activityNameItems = foodListSearchService.getActivityNameItems();
    setActivityNameItems(activityNameItems);
  };

  // call api which get all activity start times
  const loadActivityStartTimeItems = () => {
    const activityStartTimeItems =
      foodListSearchService.getActivityStartTimeItems();
    setActivityStartTimeItems(activityStartTimeItems);
  };

  // call api which get all activity end times
  const loadActivityEndTimeItems = () => {
    const activityEndTimeItems =
      foodListSearchService.getActivityEndTimeItems();
    setActivityEndTimeItems(activityEndTimeItems);
  };

  // call api which get all meal target macro items
  const loadMealTargetMacroItems = () => {
    const mealTargetMacroItems =
      foodListSearchService.getMealTargetMacroItems();
    setMealTargetMacroItems(mealTargetMacroItems);
  };

  useEffect(() => {
    loadMesoCycleItems();
    loadMicroCycleItems();
    loadDayTypeItems();
    loadDayItems();
    loadActivityTypeItems();
    loadActivityNameItems();
    loadActivityStartTimeItems();
    loadActivityEndTimeItems();
    loadMealTargetMacroItems();
  }, []);

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex md:shrink-0 justify-between h-full gap-4 mt-4">
        <Card className="lg:block flex-none w-80">
          <CardHeader className="p-2">
            <Button className="h-8">{"Click Here to Search"}</Button>
          </CardHeader>
          <CardContent className="flex flex-col hidden lg:block p-2">
            <div className="flex flex-col gap-2">
              <SelectFilter
                props={foodListSearchForm.mesoCycleField}
                module={"foodListSearchForm"}
              />
              <SelectFilter
                props={foodListSearchForm.microCycleField}
                module={"foodListSearchForm"}
              />
              <SelectFilter
                props={foodListSearchForm.dayTypeField}
                module={"foodListSearchForm"}
              />
              <SelectFilter
                props={foodListSearchForm.dayField}
                module={"foodListSearchForm"}
              />
              <SelectFilter
                props={foodListSearchForm.activityTypeField}
                module={"foodListSearchForm"}
              />
              <SelectFilter
                props={foodListSearchForm.activityNameField}
                module={"foodListSearchForm"}
              />
              <SelectFilter
                props={foodListSearchForm.activityStartTimeField}
                module={"foodListSearchForm"}
              />
              <SelectFilter
                props={foodListSearchForm.activityNameField}
                module={"foodListSearchForm"}
              />
              <SelectFilter
                props={foodListSearchForm.mealTargetMacroField}
                module={"foodListSearchForm"}
              />
            </div>
          </CardContent>
        </Card>
        <div className="flex-2 flex flex-col">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox id="select-all" />
                  <Label htmlFor="select-all">Select all</Label>
                </div>
                <div className="flex justify-end gap-2">
                  <Button className="h-8">{"Deselect"}</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="h-8">View food list</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[80%]">
                      <DialogHeader>
                        <DialogTitle>Food list</DialogTitle>
                      </DialogHeader>
                      <FoodListPopupTable />
                      <div className="flex items-center justify-end gap-1">
                        <Button className="h-8">Save</Button>
                        <Button className="h-8">Cancel</Button>
                        <Button className="h-8">Undo</Button>
                        <Button className="h-8">Set as Prepared</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
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
                  <FoodTableTabView />
                </TabsContent>
                <TabsContent value="list-view">
                  <FoodTableListView />
                </TabsContent>
                <TabsContent value="tree-view">
                  <FoodTableTreeView viewMode="scroll" />
                </TabsContent>
              </Tabs>
              <div className="flex justify-between items-center">
                <Button className="h-8">Save the change</Button>
                <div className="flex justify-end items-center gap-1">
                  <Button className="h-8">Revert change</Button>
                  <Button className="h-8">Delete from days</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrepareFood;
