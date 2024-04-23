"use client";

import { NextPage } from "next";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { setMicroCycleItems } from "@/redux/features/meals-add-search-form/actions";
import { Button } from "@/components/ui/button";

export type Day = {
  id: number;
  trainingDay: string;
};

export type MicroCycle = {
  id: number;
  name: string;
  days: Day[];
  isOpen: boolean;
};

export type MesoCycle = {
  id: number;
  name: string;
  microCycles: MicroCycle[];
  isOpen: boolean;
};

const TreeData: MesoCycle[] = [];

interface IDaysTableTreeViewProps {
  viewMode: string;
}

const DaysTableTreeView: NextPage<IDaysTableTreeViewProps> = ({ viewMode }) => {
  const [treeData, setTreeData] = useState<MesoCycle[]>([
    {
      id: 1,
      name: "MesoCycle 1",
      microCycles: [
        {
          id: 11,
          name: "MicroCycle 1",
          days: [
            {
              id: 111,
              trainingDay: "1/1/2022",
            },
            {
              id: 112,
              trainingDay: "1/2/2022",
            },
            {
              id: 113,
              trainingDay: "1/3/2022",
            },
          ],
          isOpen: false,
        },
        {
          id: 12,
          name: "MicroCycle 2",
          days: [
            {
              id: 121,
              trainingDay: "1/4/2022",
            },
            {
              id: 122,
              trainingDay: "1/5/2022",
            },
            {
              id: 123,
              trainingDay: "1/6/2022",
            },
          ],
          isOpen: false,
        },
        {
          id: 13,
          name: "MicroCycle 3",
          days: [
            {
              id: 131,
              trainingDay: "1/7/2022",
            },
            {
              id: 132,
              trainingDay: "1/8/2022",
            },
            {
              id: 133,
              trainingDay: "1/9/2022",
            },
          ],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
    {
      id: 2,
      name: "MesoCycle 2",
      microCycles: [
        {
          id: 21,
          name: "MicroCycle 1",
          days: [
            {
              id: 211,
              trainingDay: "1/10/2022",
            },
            {
              id: 212,
              trainingDay: "1/11/2022",
            },
            {
              id: 213,
              trainingDay: "1/12/2022",
            },
          ],
          isOpen: false,
        },
        {
          id: 22,
          name: "MicroCycle 2",
          days: [
            {
              id: 221,
              trainingDay: "1/13/2022",
            },
            {
              id: 222,
              trainingDay: "1/14/2022",
            },
            {
              id: 223,
              trainingDay: "1/15/2022",
            },
          ],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
    {
      id: 3,
      name: "MesoCycle 3",
      microCycles: [
        {
          id: 31,
          name: "MicroCycle 1",
          days: [
            {
              id: 311,
              trainingDay: "1/16/2022",
            },
            {
              id: 312,
              trainingDay: "1/17/2022",
            },
            {
              id: 313,
              trainingDay: "1/18/2022",
            },
          ],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
    {
      id: 4,
      name: "MesoCycle 4",
      microCycles: [
        {
          id: 41,
          name: "MicroCycle 1",
          days: [
            {
              id: 411,
              trainingDay: "1/19/2022",
            },
          ],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
    {
      id: 5,
      name: "MesoCycle 5",
      microCycles: [
        {
          id: 51,
          name: "MicroCycle 1",
          days: [
            {
              id: 511,
              trainingDay: "1/20/2022",
            },
          ],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
  ]);

  return (
    <div className="w-full">
      <ScrollArea
        className={`h-[600px] ${
          viewMode === "scroll" ? "w-full" : ""
        } rounded-md border`}
      >
        <div className="flex flex-col w-full">
          <div className="flex items-center border-b">
            <div className="flex-1 text-center p-2">
              <Checkbox />
            </div>
            <div className="flex-1 text-center p-2 border-l text-muted-foreground">
              <span className="text-sm font-medium">Meso Cycle</span>
            </div>
            <div className="flex-1 text-center p-2 border-l text-muted-foreground">
              <span className="text-sm font-medium">Micro Cycle</span>
            </div>
            <div className="flex-1 text-center p-2 border-l text-muted-foreground">
              <span className="text-sm font-medium">Training Day</span>
            </div>
          </div>
          {treeData.map((mesoCycle, index) => (
            <div key={`mesoCycle-${index}`}>
              <div className="flex items-center">
                <div className="flex-1 flex justify-center items-center text-center border-b h-8 p-1">
                  <Checkbox />
                </div>
                <div className={`flex-1 text-center border-l border-b h-8 p-1`}>
                  <span className="text-sm">{mesoCycle.name}</span>
                </div>
                <div className="flex-1 text-center border-b border-l h-8 p-1"></div>
                <div className="flex-1 text-center border-b border-l h-8 p-1"></div>
              </div>
              {mesoCycle.microCycles.map((microCycle, microIndex) => (
                <div key={`microCycle-${microIndex}`}>
                  <div className="flex items-center">
                    <div className="flex-1 flex justify-center items-center text-center border-b h-8 p-1">
                      <Checkbox />
                    </div>
                    <div className="flex-1 text-center border-l h-8 p-1"></div>
                    <div
                      className={`flex-1 text-center border-b border-l h-8 p-1`}
                    >
                      <span className="text-sm">{microCycle.name}</span>
                    </div>
                    <div className="flex-1 text-center border-b border-l h-8 p-1"></div>
                  </div>
                  {microCycle.days.map((day, dayIndex) => (
                    <div key={`day-${dayIndex}`}>
                      <div className="flex items-center">
                        <div className="flex-1 flex justify-center items-center text-center border-b h-8 p-1">
                          <Checkbox />
                        </div>
                        <div
                          className={`flex-1 text-center h-8 border-l p-1 ${
                            dayIndex === microCycle.days.length - 1 &&
                            microIndex === mesoCycle.microCycles.length - 1
                              ? "border-b"
                              : ""
                          }`}
                        ></div>
                        <div
                          className={`flex-1 text-center h-8 border-l p-1 ${
                            dayIndex === microCycle.days.length - 1
                              ? "border-b"
                              : ""
                          }`}
                        ></div>
                        <div className="flex-1 text-center border-b h-8 border-l p-1">
                          <span className="text-sm">{day.trainingDay}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground"></div>
        
      </div>
    </div>
  );
};

DaysTableTreeView.displayName = "DaysTableTreeView";
export { DaysTableTreeView };
