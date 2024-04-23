"use client";

import * as React from "react";
import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { NextPage } from "next";
import { useActions, useTypedSelector } from "@/redux/hooks";
import { ExercisesSearchService } from "@/service/training/exercises-search-service";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getExercisesAddSearchForm } from "@/redux/features/exercises-add-search-form/reducer";
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
import { ExercisesWorksetList } from "./exercises-workset-list";
import { ExercisesTrainingSessionList } from "./exercises-training-session-list";
import { ScrollArea } from "@/components/ui/scroll-area";
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

import {
  CalendarIcon,
  ChevronsUpDown,
  CopyPlus,
  Delete,
  MoveDown,
  MoveUp,
} from "lucide-react";

interface IExercisesAddProps {}

const ExercisesAdd: NextPage<{
  props: IExercisesAddProps;
  module: string;
}> = ({ props, module }) => {
  const items = ["Training", "Create period", "Exercises to day"];

  const {
    setMesoCycleItems,
    setMicroCycleItems,
    setDayTypeItems,
    setDayItems,
  } = useActions(module);

  const exercisesAddSearchForm = useTypedSelector(getExercisesAddSearchForm);

  const exercisesSearchService = ExercisesSearchService.getInstance("token");

  // call api which get all meso cycles
  const loadMesoCycleItems = () => {
    const mesoCycleItems = exercisesSearchService.getMesoCycleItems();
    setMesoCycleItems(mesoCycleItems);
  };

  // call api which get all micro cycles
  const loadMicroCycleItems = () => {
    const microCycleItems = exercisesSearchService.getMicroCycleItems();
    setMicroCycleItems(microCycleItems);
  };

  // call api which get all day types
  const loadDayTypeItems = () => {
    const dayTypeItems = exercisesSearchService.getDayTypeItems();
    setDayTypeItems(dayTypeItems);
  };

  // call api which get all days
  const loadDayItems = () => {
    const dayItems = exercisesSearchService.getDayItems();
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
        <CardTitle>Exercises to day</CardTitle>
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
                  <SelectFilter
                    props={exercisesAddSearchForm.mesoCycleField}
                    module={module}
                  />
                  <SelectFilter
                    props={exercisesAddSearchForm.microCycleField}
                    module={module}
                  />
                  <SelectFilter
                    props={exercisesAddSearchForm.dayTypeField}
                    module={module}
                  />
                  <SelectFilter
                    props={exercisesAddSearchForm.dayField}
                    module={module}
                  />
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
                        <Button className="h-8">Add exercise</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[80%]">
                        <DialogHeader>
                          <DialogTitle>Add exercise pop-up</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="h-[500px]">
                          <div className="grid gap-4 border">
                            <div className="flex items-center justify-between border-b px-4">
                              <h2 className="text-md font-semibold">
                                Name: {"Squat"}
                              </h2>
                              <h2 className="text-md font-semibold">
                                Exercises details
                              </h2>
                              <div className="flex items-center justify-end">
                                <Button variant="ghost" className="w-9 h-8 p-0">
                                  <Delete className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" className="w-9 h-8 p-0">
                                  <CopyPlus className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" className="w-9 h-8 p-0">
                                  <MoveUp className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" className="w-9 h-8 p-0">
                                  <MoveDown className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center justify-start gap-4 px-4">
                              <Button className="h-8">
                                Generate warmup-sets
                              </Button>
                              <Input
                                className="h-8 w-48"
                                value={"1RM"}
                                readOnly
                              />
                            </div>
                            <div className="flex items-center justify-start gap-4 px-4">
                              <Input
                                className="h-8 w-48"
                                value={"Warmup sets"}
                                readOnly
                              />
                            </div>
                            <div className="flex items-center justify-start gap-4 px-4">
                              <ExercisesWorksetList />
                            </div>
                            <div className="flex items-center justify-start px-4 py-4">
                              <Button className="h-8">Add new work set</Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between px-4 pt-4">
                            <Button className="h-8">Add new exercise</Button>
                            <Button type="submit" className="h-8">
                              Drop-down with all the exercises from list db
                            </Button>
                          </div>
                          <DialogHeader className="pt-4">
                            <DialogTitle>Training session</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="flex items-center justify-start gap-4 px-4">
                              <ExercisesTrainingSessionList />
                            </div>
                          </div>
                          <DialogFooter className="flex justify-between">
                            <Button className="h-8">
                              Reset training session
                            </Button>
                            <Button className="h-8">Revert change</Button>
                            <Button type="submit" className="h-8">
                              Add session to selected
                            </Button>
                          </DialogFooter>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                    <Button className="h-8">Edit exercise</Button>
                  </div>
                </div>
              </CardHeader>
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
                  <Button className="h-8">Revert change</Button>
                  <Button className="h-8">Save the change</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

ExercisesAdd.displayName = "ExercisesAdd";

export { ExercisesAdd };
