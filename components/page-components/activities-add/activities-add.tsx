"use client";

import * as React from "react";
import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { NextPage } from "next";
import { useActions, useTypedSelector } from "@/redux/hooks";
import { ActivitiesSearchService } from "@/service/training/activities-search-service";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getActivitiesAddSearchForm } from "@/redux/features/activities-add-search-form/reducer";
import { DaysTableTabView } from "./days-table/days-table-tab-view";
import { DaysTableListView } from "./days-table/days-table-list-view";
import { DaysTableTreeView } from "./days-table/days-table-tree-view";
import { useEffect } from "react";
import { Folder, List, ListTree } from "lucide-react";
import { SelectFilter } from "@/components/search-filter/select-filter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TimeInputPicker } from "@/components/time-input-picker/time-input-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IActivitiesAddProps {}

const ActivitiesAdd: NextPage<{
  props: IActivitiesAddProps;
  module: string;
}> = ({ props, module }) => {
  const items = ["Training", "Create period", "Manage activities"];
  const [startTime, setStartTime] = React.useState<Date>();
  const [endTime, setEndTime] = React.useState<Date>();

  const { setMesoCycleItems, setMicroCycleItems, setDayTypeItems, setDayItems } = useActions(module);

  const activitiesAddSearchForm = useTypedSelector(getActivitiesAddSearchForm);

  const activitiesSearchService = ActivitiesSearchService.getInstance("token");

  // call api which get all meso cycles
  const loadMesoCycleItems = () => {
    const mesoCycleItems = activitiesSearchService.getMesoCycleItems();
    setMesoCycleItems(mesoCycleItems);
  };

  // call api which get all micro cycles
  const loadMicroCycleItems = () => {
    const microCycleItems = activitiesSearchService.getMicroCycleItems();
    setMicroCycleItems(microCycleItems);
  };

  // call api which get all day types
  const loadDayTypeItems = () => {
    const dayTypeItems = activitiesSearchService.getDayTypeItems();
    setDayTypeItems(dayTypeItems);
  };

  // call api which get all days
  const loadDayItems = () => {
    const dayItems = activitiesSearchService.getDayItems();
    setDayItems(dayItems);
  };

  useEffect(() => {
    loadMesoCycleItems();
    loadMicroCycleItems();
    loadDayTypeItems();
    loadDayItems();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage activities</CardTitle>
        <div className="flex justify-between items-start">
          <Breadcrumb items={items} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[700px] overflow-auto whitespace-nowrap">
          <div className="flex space-x-4">
            <Card className="flex-none w-80">
              <CardHeader className="p-2">
                <Button className="h-8">{"Click Here to Search"}</Button>
              </CardHeader>
              <CardContent className="flex flex-col p-2">
                <div className="flex flex-col gap-4">
                  <SelectFilter props={activitiesAddSearchForm.mesoCycleField} module={module} />
                  <SelectFilter props={activitiesAddSearchForm.microCycleField} module={module} />
                  <SelectFilter props={activitiesAddSearchForm.dayTypeField} module={module} />
                  <SelectFilter props={activitiesAddSearchForm.dayField} module={module} />
                </div>
              </CardContent>
            </Card>
            <Card className="flex-grow">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="select-all" />
                    <Label htmlFor="select-all">Select all</Label>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="h-8">Add activity</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Add activity pop-up</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Activity Name
                            </Label>
                            <Input id="name" value="" className="col-span-3 h-8" onChange={() => {}} />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Type" className="text-right">
                              Activity Type
                            </Label>
                            <Select>
                              <SelectTrigger className="col-span-3 h-8">
                                <SelectValue placeholder="Select a fruit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Activity Type</SelectLabel>
                                  <SelectItem value="strengthTraining">Strength Training</SelectItem>
                                  <SelectItem value="gpp">GPP</SelectItem>
                                  <SelectItem value="activeRecovery">Active Recovery</SelectItem>
                                  <SelectItem value="meal">Meal</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Type" className="text-right">
                              Start time
                            </Label>
                            <TimeInputPicker setDate={setStartTime} date={startTime} />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Type" className="text-right">
                              End time
                            </Label>
                            <TimeInputPicker setDate={setEndTime} date={endTime} />
                          </div>
                        </div>
                        <DialogFooter className="flex justify-between">
                          <Button className="h-8">Reset activity details</Button>
                          <Button type="submit" className="h-8">
                            Add activity to the selected days
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="h-8">Edit activity</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Edit activity pop-up</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Activity Name
                            </Label>
                            <Input id="name" value="" className="col-span-3 h-8" onChange={() => {}} />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Type" className="text-right">
                              Activity Type
                            </Label>
                            <Select>
                              <SelectTrigger className="col-span-3 h-8">
                                <SelectValue placeholder="Select a fruit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Activity Type</SelectLabel>
                                  <SelectItem value="strengthTraining">Strength Training</SelectItem>
                                  <SelectItem value="gpp">GPP</SelectItem>
                                  <SelectItem value="activeRecovery">Active Recovery</SelectItem>
                                  <SelectItem value="meal">Meal</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Type" className="text-right">
                              Start time
                            </Label>
                            <TimeInputPicker setDate={setStartTime} date={startTime} />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Type" className="text-right">
                              End time
                            </Label>
                            <TimeInputPicker setDate={setEndTime} date={endTime} />
                          </div>
                        </div>
                        <DialogFooter className="flex justify-between">
                          <Button className="h-8">Reset activity details</Button>
                          <Button type="submit" className="h-8">
                            Add activity to the selected days
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button className="h-8">Delete activity</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col p-2 pt-0">
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

ActivitiesAdd.displayName = "ActivitiesAdd";

export { ActivitiesAdd };
