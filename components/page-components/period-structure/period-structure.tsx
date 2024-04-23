"use client";

import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MesoCycleStructure } from "./meso-cycle-structure";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IPeriodStructureProps {}

export interface IMicroCycleStructure {
  id: number;
  isExpand: boolean;
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  order: number;
}

export interface IMesoCycleStructure {
  id: number;
  isExpand: boolean;
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  microCycles: IMicroCycleStructure[];
  order: number;
}

const mesoCyclesSample: IMesoCycleStructure[] = [
  {
    id: 1,
    isExpand: true,
    name: "MesoCycle 1",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-09-15"),
    description: "This is the first mesocycle",
    order: 1,
    microCycles: [
      {
        id: 1,
        isExpand: true,
        name: "MicroCycle 1",
        startDate: new Date("2023-09-01"),
        endDate: new Date("2023-09-05"),
        description: "This is the first microcycle in MesoCycle 1",
        order: 1,
      },
      {
        id: 2,
        isExpand: true,
        name: "MicroCycle 2",
        startDate: new Date("2023-09-06"),
        endDate: new Date("2023-09-10"),
        description: "This is the second microcycle in MesoCycle 1",
        order: 2,
      },
      {
        id: 3,
        isExpand: true,
        name: "MicroCycle 3",
        startDate: new Date("2023-09-11"),
        endDate: new Date("2023-09-15"),
        description: "This is the third microcycle in MesoCycle 1",
        order: 3,
      },
    ],
  },
  {
    id: 2,
    isExpand: false,
    name: "MesoCycle 2",
    startDate: new Date("2023-09-16"),
    endDate: new Date("2023-09-30"),
    description: "This is the second mesocycle",
    order: 2,
    microCycles: [
      {
        id: 4,
        isExpand: true,
        name: "MicroCycle 1",
        startDate: new Date("2023-09-16"),
        endDate: new Date("2023-09-20"),
        description: "This is the first microcycle in MesoCycle 2",
        order: 1,
      },
      {
        id: 5,
        isExpand: false,
        name: "MicroCycle 2",
        startDate: new Date("2023-09-21"),
        endDate: new Date("2023-09-25"),
        description: "This is the second microcycle in MesoCycle 2",
        order: 2,
      },
      {
        id: 6,
        isExpand: false,
        name: "MicroCycle 3",
        startDate: new Date("2023-09-26"),
        endDate: new Date("2023-09-30"),
        description: "This is the third microcycle in MesoCycle 2",
        order: 3,
      },
    ],
  },
  {
    id: 3,
    isExpand: false,
    name: "MesoCycle 3",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2023-10-15"),
    description: "This is the third mesocycle",
    order: 3,
    microCycles: [
      {
        id: 7,
        isExpand: true,
        name: "MicroCycle 1",
        startDate: new Date("2023-10-01"),
        endDate: new Date("2023-10-05"),
        description: "This is the first microcycle in MesoCycle 3",
        order: 1,
      },
      {
        id: 8,
        isExpand: false,
        name: "MicroCycle 2",
        startDate: new Date("2023-10-06"),
        endDate: new Date("2023-10-10"),
        description: "This is the second microcycle in MesoCycle 3",
        order: 2,
      },
      {
        id: 9,
        isExpand: false,
        name: "MicroCycle 3",
        startDate: new Date("2023-10-11"),
        endDate: new Date("2023-10-15"),
        description: "This is the third microcycle in MesoCycle 3",
        order: 3,
      },
    ],
  },
];

const PeriodStructure: NextPage<IPeriodStructureProps> = ({}) => {
  const [mesoCycles, setMesoCycles] =
    useState<IMesoCycleStructure[]>(mesoCyclesSample);
  const [sortedMesoCycles, setSortedMesoCycles] = useState([]);
  const items = ["Training", "Create period", "Structure Micro Cycle"];

  useEffect(() => {
    const updatedSortedMesoCycles = mesoCycles.slice().sort((a, b) => {
      return a.order - b.order;
    });
    setSortedMesoCycles(updatedSortedMesoCycles);
  }, [mesoCycles]);

  const deleteMesoCycle = (id: number) => {
    const updatedMesoCycles = mesoCycles.filter(
      (mesoCycle) => mesoCycle.id !== id
    );
    setMesoCycles(updatedMesoCycles);
  };

  const duplicateMesoCycle = (id: number) => {
    const updatedMesoCycles = [...mesoCycles];

    const mesoCycleToDuplicate = updatedMesoCycles.find(
      (mesoCycle) => mesoCycle.id === id
    );

    if (mesoCycleToDuplicate) {
      const duplicatedMesoCycle = { ...mesoCycleToDuplicate };
      duplicatedMesoCycle.id =
        Math.max(...updatedMesoCycles.map((mesoCycle) => mesoCycle.id)) + 1;

      updatedMesoCycles.push(duplicatedMesoCycle);

      setMesoCycles(updatedMesoCycles);
    }
  };

  const deleteMicroCycle = (mesoCycleId: number, microCycleId: number) => {
    const mesoCycleToUpdate = mesoCyclesSample.find(
      (mesoCycle) => mesoCycle.id === mesoCycleId
    );

    if (mesoCycleToUpdate) {
      const updatedMicroCycles = mesoCycleToUpdate.microCycles.filter(
        (microCycle) => microCycle.id !== microCycleId
      );

      mesoCycleToUpdate.microCycles = updatedMicroCycles;

      const updatedMesoCycles = mesoCyclesSample.map((mesoCycle) =>
        mesoCycle.id === mesoCycleId ? mesoCycleToUpdate : mesoCycle
      );

      setMesoCycles(updatedMesoCycles);
    }
  };

  const duplicateMicroCycle = (mesoCycleId: number, microCycleId: number) => {
    const mesoCycleToUpdate = mesoCyclesSample.find(
      (mesoCycle) => mesoCycle.id === mesoCycleId
    );

    if (mesoCycleToUpdate) {
      const microCycleToDuplicate = mesoCycleToUpdate.microCycles.find(
        (microCycle) => microCycle.id === microCycleId
      );

      if (microCycleToDuplicate) {
        const duplicatedMicroCycle = { ...microCycleToDuplicate };

        duplicatedMicroCycle.id =
          Math.max(
            ...mesoCycleToUpdate.microCycles.map((microCycle) => microCycle.id)
          ) + 1;

        mesoCycleToUpdate.microCycles.push(duplicatedMicroCycle);

        const updatedMesoCycles = mesoCyclesSample.map((mesoCycle) =>
          mesoCycle.id === mesoCycleId ? mesoCycleToUpdate : mesoCycle
        );

        setMesoCycles(updatedMesoCycles);
      }
    }
  };

  const updateMesoCycleOrder = (mesoCycleId: number, direction: string) => {
    const mesoCycleToMove = mesoCycles.find(
      (mesoCycle) => mesoCycle.id === mesoCycleId
    );

    if (mesoCycleToMove) {
      const currentOrder = mesoCycleToMove.order;

      const targetOrder =
        direction === "up" ? currentOrder - 1 : currentOrder + 1;
      const targetMesoCycle = mesoCycles.find(
        (mesoCycle) => mesoCycle.order === targetOrder
      );

      if (targetMesoCycle) {
        mesoCycleToMove.order = targetOrder;
        targetMesoCycle.order = currentOrder;

        const updatedMesoCycles = mesoCycles
          .slice()
          .sort((a, b) => a.order - b.order);
        setMesoCycles(updatedMesoCycles);
      }
    }
  };

  const updateMicroCycleOrder = (
    mesoCycleId: number,
    microCycleId: number,
    direction: string
  ) => {
    const mesoCycleToUpdate = mesoCycles.find(
      (mesoCycle) => mesoCycle.id === mesoCycleId
    );

    if (mesoCycleToUpdate) {
      let microCycleToSwapWith = null;
      const selectedMicroCycle = mesoCycleToUpdate.microCycles.find(
        (microCycle) => microCycle.id === microCycleId
      );

      if (selectedMicroCycle) {
        const selectedOrder = selectedMicroCycle.order;
        const swapOrder =
          direction === "up" ? selectedOrder - 1 : selectedOrder + 1;

        microCycleToSwapWith = mesoCycleToUpdate.microCycles.find(
          (microCycle) => microCycle.order === swapOrder
        );

        if (microCycleToSwapWith) {
          selectedMicroCycle.order = swapOrder;
          microCycleToSwapWith.order = selectedOrder;

          mesoCycleToUpdate.microCycles.sort((a, b) => a.order - b.order);

          setMesoCycles([...mesoCycles]);

          return;
        }
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Structure Macro Cycle</CardTitle>
        <Breadcrumb items={items} />
      </CardHeader>
      <CardContent className="space-y-2">
        {sortedMesoCycles.map((mesoCycle, index) => (
          <MesoCycleStructure
            key={index}
            mesoCycleStructure={mesoCycle}
            deleteMesoCycle={deleteMesoCycle}
            duplicateMesoCycle={duplicateMesoCycle}
            deleteMicroCycle={deleteMicroCycle}
            duplicateMicroCycle={duplicateMicroCycle}
            updateMesoCycleOrder={updateMesoCycleOrder}
            updateMicroCycleOrder={updateMicroCycleOrder}
          />
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="h-8">Add new Meso Cycle</Button>
      </CardFooter>
    </Card>
  );
};

PeriodStructure.displayName = "PeriodStructure";

export { PeriodStructure };
