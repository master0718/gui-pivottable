"use client";

import * as React from "react";
import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { NextPage } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useActions, useTypedSelector } from "@/redux/hooks";
import { getOverviewSearchForm } from "@/redux/features/overview-search-form/reducer";
import { OverviewSearchService } from "@/service/training/overview-search-service";
import { getTabItemsToShow } from "@/lib/helpers";
import { MoreHorizontal } from "lucide-react";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OverviewList } from "./overview-list";

interface IOverviewProps {}

const Overview: NextPage<{
  props: IOverviewProps;
  module: string;
}> = ({ props, module }) => {
  const items = ["Training", "Create period", "Overview"];

  const {
    setMesoCycleItems,
    setMicroCycleItems,
    setDayTypeItems,
    setDayItems,
  } = useActions(module);

  const overviewSearchService = OverviewSearchService.getInstance("token");

  const overviewSearchForm = useTypedSelector(getOverviewSearchForm);
  const defaultTabCountToShow = 6;

  const mesoCycleItems = getTabItemsToShow(
    overviewSearchForm.mesoCycleField.items,
    defaultTabCountToShow
  );
  const microCycleItems = getTabItemsToShow(
    overviewSearchForm.microCycleField.items,
    defaultTabCountToShow
  );
  const dayItems = getTabItemsToShow(
    overviewSearchForm.dayField.items,
    defaultTabCountToShow
  );

  // call api which get all meso cycles
  const loadMesoCycleItems = () => {
    const mesoCycleItems = overviewSearchService.getMesoCycleItems();
    setMesoCycleItems(mesoCycleItems);
  };

  // call api which get all micro cycles
  const loadMicroCycleItems = () => {
    const microCycleItems = overviewSearchService.getMicroCycleItems();
    setMicroCycleItems(microCycleItems);
  };

  // call api which get all days
  const loadDayItems = () => {
    const dayItems = overviewSearchService.getDayItems();
    setDayItems(dayItems);
  };

  useEffect(() => {
    loadMesoCycleItems();
    loadMicroCycleItems();
    loadDayItems();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview and activation</CardTitle>
        <div className="flex justify-between items-start">
          <Breadcrumb items={items} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-1">
          <Tabs defaultValue="0" className="">
            <TabsList className="flex gap-4 justify-start">
              {mesoCycleItems.itemsToShow.map((mesoCycleItem, index) => {
                return (
                  <TabsTrigger key={index} value={index.toString()}>
                    {mesoCycleItem.label}
                  </TabsTrigger>
                );
              })}
              {mesoCycleItems.itemsToMore.length > 0 && (
                <TabsTrigger value="tab-view">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {mesoCycleItems.itemsToMore.map(
                        (mesoCycleItem, index) => (
                          <DropdownMenuItem key={index}>
                            {mesoCycleItem.label}
                          </DropdownMenuItem>
                        )
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TabsTrigger>
              )}
            </TabsList>
          </Tabs>
          <Tabs defaultValue="0" className="">
            <TabsList className="w-full flex gap-4 justify-start">
              {microCycleItems.itemsToShow.map((microCycleItem, index) => {
                return (
                  <TabsTrigger key={index} value={index.toString()}>
                    <span>{microCycleItem.label}</span>
                  </TabsTrigger>
                );
              })}
              {microCycleItems.itemsToMore.length > 0 && (
                <TabsTrigger value="more">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {microCycleItems.itemsToMore.map(
                        (microCycleItem, index) => (
                          <DropdownMenuItem key={index}>
                            {microCycleItem.label}
                          </DropdownMenuItem>
                        )
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TabsTrigger>
              )}
            </TabsList>
          </Tabs>
          <Tabs defaultValue="0" className="">
            <TabsList className="w-full flex gap-4 justify-start">
              {dayItems.itemsToShow.map((dayItem, index) => {
                return (
                  <TabsTrigger key={index} value={index.toString()}>
                    <span>{dayItem.label}</span>
                  </TabsTrigger>
                );
              })}
              {dayItems.itemsToMore.length > 0 && (
                <TabsTrigger value="more">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {dayItems.itemsToMore.map((dayItem, index) => (
                        <DropdownMenuItem key={index}>
                          {dayItem.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TabsTrigger>
              )}
            </TabsList>
          </Tabs>
        </div>
        <div className="mt-4">
          <OverviewList />
        </div>
      </CardContent>
    </Card>
  );
};

Overview.displayName = "Overview";
export { Overview };
