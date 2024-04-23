"use client";

import * as React from "react";
import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { NextPage } from "next";
import { useActions, useTypedSelector } from "@/redux/hooks";
import { ManageMacrosSearchService } from "@/service/training/manage-macros-search-service";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getManageMacrosSearchForm } from "@/redux/features/manage-macros-search-form/reducer";
import { DaysTableTabView } from "./days-table/days-table-tab-view";
import { DaysTableListView } from "./days-table/days-table-list-view";
import { DaysTableTreeView } from "./days-table/days-table-tree-view";
import { useEffect } from "react";
import { Folder, List, ListTree } from "lucide-react";
import { SelectFilter } from "@/components/search-filter/select-filter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface IManageMacrosProps {}

const ManageMacros: NextPage<{
  props: IManageMacrosProps;
  module: string;
}> = ({ props, module }) => {
  const items = ["Training", "Create period", "Manage macros"];

  const {
    setMesoCycleItems,
    setMicroCycleItems,
    setDayTypeItems,
    setDayItems,
    setActivityTypeItems,
    setActivityNameItems,
    setActivityStartTimeItems,
    setActivityEndTimeItems,
  } = useActions(module);

  const manageMacrosSearchForm = useTypedSelector(getManageMacrosSearchForm);

  const manageMacrosSearchService =
    ManageMacrosSearchService.getInstance("token");

  // call api which get all meso cycles
  const loadMesoCycleItems = () => {
    const mesoCycleItems = manageMacrosSearchService.getMesoCycleItems();
    setMesoCycleItems(mesoCycleItems);
  };

  // call api which get all micro cycles
  const loadMicroCycleItems = () => {
    const microCycleItems = manageMacrosSearchService.getMicroCycleItems();
    setMicroCycleItems(microCycleItems);
  };

  // call api which get all day types
  const loadDayTypeItems = () => {
    const dayTypeItems = manageMacrosSearchService.getDayTypeItems();
    setDayTypeItems(dayTypeItems);
  };

  // call api which get all days
  const loadDayItems = () => {
    const dayItems = manageMacrosSearchService.getDayItems();
    setDayItems(dayItems);
  };

  // call api which get all activity types
  const loadActivityTypeItems = () => {
    const activityTypeItems = manageMacrosSearchService.getActivityTypeItems();
    setActivityTypeItems(activityTypeItems);
  };

  // call api which get all activity names
  const loadActivityNameItems = () => {
    const activityNameItems = manageMacrosSearchService.getActivityNameItems();
    setActivityNameItems(activityNameItems);
  };

  // call api which get all activity start times
  const loadActivityStartTimeItems = () => {
    const activityStartTimeItems =
      manageMacrosSearchService.getActivityStartTimeItems();
    setActivityStartTimeItems(activityStartTimeItems);
  };

  // call api which get all activity end times
  const loadActivityEndTimeItems = () => {
    const activityEndTimeItems =
      manageMacrosSearchService.getActivityEndTimeItems();
    setActivityEndTimeItems(activityEndTimeItems);
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
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage macros</CardTitle>
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
                    props={manageMacrosSearchForm.mesoCycleField}
                    module={module}
                  />
                  <SelectFilter
                    props={manageMacrosSearchForm.microCycleField}
                    module={module}
                  />
                  <SelectFilter
                    props={manageMacrosSearchForm.dayTypeField}
                    module={module}
                  />
                  <SelectFilter
                    props={manageMacrosSearchForm.dayField}
                    module={module}
                  />
                  <SelectFilter
                    props={manageMacrosSearchForm.activityTypeField}
                    module={module}
                  />
                  <SelectFilter
                    props={manageMacrosSearchForm.activityNameField}
                    module={module}
                  />
                  <SelectFilter
                    props={manageMacrosSearchForm.activityStartTimeField}
                    module={module}
                  />
                  <SelectFilter
                    props={manageMacrosSearchForm.activityNameField}
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
                        <Button className="h-8">Add macros to day</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[1000px]">
                        <DialogHeader>
                          <DialogTitle>Add macros to day</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <ScrollArea className="h-[600px] rounded-md border">
                            <div className="w-[950px] overflow-x-auto">
                              <Table className="border">
                                <TableHeader>
                                  <TableRow>
                                    <TableHead colSpan={3} className="border">
                                      Add macros pop-up
                                    </TableHead>
                                    <TableHead colSpan={4} className="border">
                                      Breakfast
                                    </TableHead>
                                    <TableHead colSpan={4} className="border">
                                      Post-Training
                                    </TableHead>
                                    <TableHead colSpan={4} className="border">
                                      ... Dinner
                                    </TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow>
                                    <TableCell rowSpan={6} className="border">
                                      Protein
                                    </TableCell>
                                    <TableCell rowSpan={3} className="border">
                                      Quantity
                                    </TableCell>
                                    <TableCell className="border">g</TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of meal
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of daily
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell rowSpan={3} className="border">
                                      Calories
                                    </TableCell>
                                    <TableCell className="border">
                                      kcal
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of meal
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of daily
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell rowSpan={6} className="border">
                                      Carbs
                                    </TableCell>
                                    <TableCell rowSpan={3} className="border">
                                      Quantity
                                    </TableCell>
                                    <TableCell className="border">g</TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of meal
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of daily
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell rowSpan={3} className="border">
                                      Calories
                                    </TableCell>
                                    <TableCell className="border">
                                      kcal
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of meal
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of daily
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell rowSpan={6} className="border">
                                      Fat
                                    </TableCell>
                                    <TableCell rowSpan={3} className="border">
                                      Quantity
                                    </TableCell>
                                    <TableCell className="border">g</TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of meal
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of daily
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell rowSpan={3} className="border">
                                      Calories
                                    </TableCell>
                                    <TableCell className="border">
                                      kcal
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of meal
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border">
                                      % of daily
                                    </TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                    <TableCell
                                      colSpan={4}
                                      className="border"
                                    ></TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      colSpan={3}
                                      rowSpan={2}
                                      className="border"
                                    ></TableCell>
                                    <TableCell className="border">
                                      Protein
                                    </TableCell>
                                    <TableCell className="border">
                                      Carbs
                                    </TableCell>
                                    <TableCell className="border">
                                      Fat
                                    </TableCell>
                                    <TableCell className="border">
                                      Calories
                                    </TableCell>
                                    <TableCell className="border">
                                      Protein
                                    </TableCell>
                                    <TableCell className="border">
                                      Carbs
                                    </TableCell>
                                    <TableCell className="border">
                                      Fat
                                    </TableCell>
                                    <TableCell className="border">
                                      Calories
                                    </TableCell>
                                    <TableCell className="border">
                                      Protein
                                    </TableCell>
                                    <TableCell className="border">
                                      Carbs
                                    </TableCell>
                                    <TableCell className="border">
                                      Fat
                                    </TableCell>
                                    <TableCell className="border">
                                      Calories
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                    <TableCell className="border"></TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                          </ScrollArea>
                        </div>
                        <DialogFooter className="flex justify-between">
                          <Button className="h-8">Reset macros details</Button>
                          <Button type="submit" className="h-8">
                            Add macros details
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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
                  <Button className="h-8">Save the change</Button>
                  <div className="flex justify-end items-center gap-2">
                    <Button className="h-8">Revert change</Button>
                    <Button className="h-8">Delete from Days</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

ManageMacros.displayName = "ManageMacros";

export { ManageMacros };
