"use client";

import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { NextPage } from "next";

import {
  GalleryHorizontal,
  GalleryHorizontalEnd,
  GalleryVerticalEnd,
} from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { MealsAddScrollView } from "./meals-add-scroll-view";
import { MealsAddTopTabView } from "./meals-add-top-tab-view";
import { MealsAddLeftTabView } from "./meals-add-left-tab-view";

interface IMealsAddProps {}

const MealsAdd: NextPage<IMealsAddProps> = ({}) => {
  const items = ["Training", "Create period", "Meals to day"];
  const [viewMode, setViewMode] = useState("scroll");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Meals To Day</CardTitle>
        <div className="flex justify-between items-start">
          <Breadcrumb items={items} />
          <Tabs defaultValue="scroll" className="">
            <TabsList className="w-full flex gap-4 justify-start">
              <TabsTrigger value="scroll" onClick={() => setViewMode("scroll")}>
                <GalleryHorizontal className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger
                value="top-tab"
                onClick={() => setViewMode("top-tab")}
              >
                <GalleryVerticalEnd className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger
                value="left-tab"
                onClick={() => setViewMode("left-tab")}
              >
                <GalleryHorizontalEnd className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {viewMode === "scroll" && (
          <MealsAddScrollView props={{}} module={"mealsAddSearchForm"} />
        )}
        {viewMode === "top-tab" && (
          <MealsAddTopTabView props={{}} module={"mealsAddSearchForm"} />
        )}
        {viewMode === "left-tab" && (
          <MealsAddLeftTabView props={{}} module={"mealsAddSearchForm"} />
        )}
      </CardContent>
    </Card>
  );
};

MealsAdd.displayName = "MealsAdd";

export { MealsAdd };
