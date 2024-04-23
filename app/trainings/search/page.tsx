"use client";

import React from "react";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/page-components/period-view-datatable/data-table";
import { columns } from "@/components/page-components/period-view-datatable/columns";

const SearchPeriod = () => {
  const [periodItems, setPeriodItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const periodItemsData = [
          {
            id: "1",
            macroCycleName: "Macro cycle 1",
            description: "This is macro cycle 1",
            duration: "1 month",
            startDate: "2024-02-10",
            endDate: "2024-03-09",
            numberOfMesoCycles: "3",
            numberOfMicroCycles: "3",
            status: "ACTIVE",
          },
          {
            id: "2",
            macroCycleName: "Macro cycle 2",
            description: "This is macro cycle 2",
            duration: "1 month",
            startDate: "2024-01-10",
            endDate: "2024-02-09",
            numberOfMesoCycles: "5",
            numberOfMicroCycles: "5",
            status: "HISTORY",
          },
          {
            id: "3",
            macroCycleName: "Macro cycle 3",
            description: "This is macro cycle 3",
            duration: "1 month",
            startDate: "2024-03-10",
            endDate: "2024-04-09",
            numberOfMesoCycles: "3",
            numberOfMicroCycles: "3",
            status: "DRAFT",
          },
        ];
        setPeriodItems(periodItemsData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex md:shrink-0 justify-between h-full gap-1 mt-4">
        <div className="flex-2 flex flex-col">
          <Card>
            <CardHeader>
              <CardTitle>Search periods overview</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable data={periodItems} columns={columns} />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="h-8">{"Add Period"}</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SearchPeriod;
