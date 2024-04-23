"use client";

import { NextPage } from "next";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { setMicroCycleItems } from "@/redux/features/meals-add-search-form/actions";
import { Button } from "@/components/ui/button";

export type Day = {
  id: number;
  day: string;
  date: string;
  meal: string;
  macros: string;
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

interface IFoodTableTreeViewProps {
  viewMode: string;
}

const FoodTableTreeView: NextPage<IFoodTableTreeViewProps> = ({
  viewMode,
}) => {
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
              day: "Monday",
              date: "January 1, 2022",
              meal: "Meal detail",
              macros: "Protein: 80g",
            },
            {
              id: 112,
              day: "Monday",
              date: "January 1, 2022",
              meal: "Meal detail",
              macros: "Protein: 80g",
            },
            {
              id: 113,
              day: "Monday",
              date: "January 1, 2022",
              meal: "Meal detail",
              macros: "Protein: 80g",
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
              day: "Tuesday",
              date: "January 2, 2022",
              meal: "Meal detail",
              macros: "Protein: 70g",
            },
            {
              id: 122,
              day: "Tuesday",
              date: "January 2, 2022",
              meal: "Meal detail",
              macros: "Protein: 70g",
            },
            {
              id: 123,
              day: "Tuesday",
              date: "January 2, 2022",
              meal: "Meal detail",
              macros: "Protein: 70g",
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
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
            },
            {
              id: 132,
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
            },
            {
              id: 133,
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
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
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal 1",
              macros: "Protein: 85g",
            },
            {
              id: 212,
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
            },
            {
              id: 213,
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
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
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
            },
            {
              id: 222,
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
            },
            {
              id: 223,
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
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
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
            },
            {
              id: 312,
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
            },
            {
              id: 313,
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
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
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
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
              day: "Wednesday",
              date: "January 3, 2022",
              meal: "Meal detail",
              macros: "Protein: 85g",
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
              <span className="text-sm font-medium">Day</span>
            </div>
            <div className="flex-1 text-center p-2 border-l text-muted-foreground">
              <span className="text-sm font-medium">Date</span>
            </div>
            <div className="flex-1 text-center p-2 border-l text-muted-foreground">
              <span className="text-sm font-medium">Meal</span>
            </div>
            <div className="flex-1 text-center p-2 border-l text-muted-foreground">
              <span className="text-sm font-medium">Macros</span>
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
                <div className="flex-1 text-center border-b border-l h-8 p-1"></div>
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
                    <div className="flex-1 text-center border-b border-l h-8 p-1"></div>
                    <div className="flex-1 text-center border-b border-l h-8 p-1"></div>
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
                          <span className="text-sm">{day.day}</span>
                        </div>
                        <div className="flex-1 text-center border-b h-8 border-l p-1">
                          <span className="text-sm">{day.date}</span>
                        </div>
                        <div className="flex-1 text-center border-b h-8 border-l p-1">
                          <span className="text-sm">{day.meal}</span>
                        </div>
                        <div className="flex-1 text-center border-b h-8 border-l p-1">
                          <span className="text-sm">{day.macros}</span>
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

FoodTableTreeView.displayName = "FoodTableTreeView";
export { FoodTableTreeView };
