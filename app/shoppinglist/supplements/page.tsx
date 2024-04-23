"use client";

import React from "react";
import { useActions } from "@/redux/hooks/use-actions";
import { useTypedSelector } from "@/redux/hooks/use-typed-selector";
import { useEffect } from "react";

import { SupplementListSearchService } from "@/service/supplement-list/supplement-list-search-service";
import { getSupplementListSearchForm } from "@/redux/features/supplement-list-search-form/reducer";

import { SupplementTableTabView } from "@/components/page-components/supplement-list/supplement-table/supplement-table-tab-view";
import { SupplementTableListView } from "@/components/page-components/supplement-list/supplement-table/supplement-table-list-view";
import { SupplementTableTreeView } from "@/components/page-components/supplement-list/supplement-table/supplement-table-tree-view";
import { SupplementListPopupTable } from "@/components/page-components/supplement-list/supplement-list-popup-table";

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

const PrepareSupplements = () => {
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
  } = useActions("supplementListSearchForm");

  const supplementListSearchForm = useTypedSelector(
    getSupplementListSearchForm
  );

  const supplementListSearchService =
    SupplementListSearchService.getInstance("token");
  // call api which get all meso cycles
  const loadMesoCycleItems = () => {
    const mesoCycleItems = supplementListSearchService.getMesoCycleItems();
    setMesoCycleItems(mesoCycleItems);
  };

  // call api which get all micro cycles
  const loadMicroCycleItems = () => {
    const microCycleItems = supplementListSearchService.getMicroCycleItems();
    setMicroCycleItems(microCycleItems);
  };

  // call api which get all day types
  const loadDayTypeItems = () => {
    const dayTypeItems = supplementListSearchService.getDayTypeItems();
    setDayTypeItems(dayTypeItems);
  };

  // call api which get all days
  const loadDayItems = () => {
    const dayItems = supplementListSearchService.getDayItems();
    setDayItems(dayItems);
  };

  // call api which get all activity types
  const loadActivityTypeItems = () => {
    const activityTypeItems =
      supplementListSearchService.getActivityTypeItems();
    setActivityTypeItems(activityTypeItems);
  };

  // call api which get all activity names
  const loadActivityNameItems = () => {
    const activityNameItems =
      supplementListSearchService.getActivityNameItems();
    setActivityNameItems(activityNameItems);
  };

  // call api which get all activity start times
  const loadActivityStartTimeItems = () => {
    const activityStartTimeItems =
      supplementListSearchService.getActivityStartTimeItems();
    setActivityStartTimeItems(activityStartTimeItems);
  };

  // call api which get all activity end times
  const loadActivityEndTimeItems = () => {
    const activityEndTimeItems =
      supplementListSearchService.getActivityEndTimeItems();
    setActivityEndTimeItems(activityEndTimeItems);
  };

  // call api which get all meal target macro items
  const loadMealTargetMacroItems = () => {
    const mealTargetMacroItems =
      supplementListSearchService.getMealTargetMacroItems();
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
                props={supplementListSearchForm.mesoCycleField}
                module={"supplementListSearchForm"}
              />
              <SelectFilter
                props={supplementListSearchForm.microCycleField}
                module={"supplementListSearchForm"}
              />
              <SelectFilter
                props={supplementListSearchForm.dayTypeField}
                module={"supplementListSearchForm"}
              />
              <SelectFilter
                props={supplementListSearchForm.dayField}
                module={"supplementListSearchForm"}
              />
              <SelectFilter
                props={supplementListSearchForm.activityTypeField}
                module={"supplementListSearchForm"}
              />
              <SelectFilter
                props={supplementListSearchForm.activityNameField}
                module={"supplementListSearchForm"}
              />
              <SelectFilter
                props={supplementListSearchForm.activityStartTimeField}
                module={"supplementListSearchForm"}
              />
              <SelectFilter
                props={supplementListSearchForm.activityNameField}
                module={"supplementListSearchForm"}
              />
              <SelectFilter
                props={supplementListSearchForm.mealTargetMacroField}
                module={"supplementListSearchForm"}
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
                      <Button className="h-8">View supplement list</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[80%]">
                      <DialogHeader>
                        <DialogTitle>Supplement list</DialogTitle>
                      </DialogHeader>
                      <SupplementListPopupTable />
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
                  <SupplementTableTabView />
                </TabsContent>
                <TabsContent value="list-view">
                  <SupplementTableListView />
                </TabsContent>
                <TabsContent value="tree-view">
                  <SupplementTableTreeView viewMode="scroll" />
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

export default PrepareSupplements;
