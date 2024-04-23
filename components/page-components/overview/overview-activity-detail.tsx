"use client";

import * as React from "react";
import { NextPage } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type ActivitySubItem = {
  name: string;
  summary: string;
  nutritionalData: string;
};

export type Activity = {
  type: string;
  items: ActivitySubItem[];
};

interface IOverviewActivityDetailProps {
  activityDetail: Activity;
}

const OverviewActivityDetail: NextPage<IOverviewActivityDetailProps> = ({
  activityDetail,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="border-b w-full">
        <h2 className="text-center">{activityDetail.type}</h2>
      </div>
      <ScrollArea className="h-48 overflow-x-scroll">
        <div className="flex items-center justify-start">
          {activityDetail.items.map((activitySubItem, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-[300px] border-b border-r min-h-36 gap-2"
              >
                <div className="p-1 border-b">
                  <h3>{activitySubItem.name}</h3>
                </div>
                <div className="p-1">
                  <Tabs defaultValue="summary">
                    <TabsList>
                      <TabsTrigger value="summary">Summary</TabsTrigger>
                      <TabsTrigger value="nutritionalData">
                        Nutritional data
                      </TabsTrigger>
                      <TabsTrigger value="more">More</TabsTrigger>
                    </TabsList>
                    <TabsContent value="summary">
                      {activitySubItem.summary}
                    </TabsContent>
                    <TabsContent value="nutritionalData">
                      {activitySubItem.nutritionalData}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

OverviewActivityDetail.displayName = "OverviewActivityDetail";

export { OverviewActivityDetail };
