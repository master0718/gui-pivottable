"use client";

import React from "react";
import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/page-components/exercise-view-datatable/data-table";

import { columns } from "@/components/page-components/exercise-view-datatable/columns";

const SearchExercises = () => {
  const [exerciseItems, setExerciseItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const exerciseItemsData = [
          {
            id: "1",
            name: "Exercise 1",
          },
          {
            id: "2",
            name: "Exercise 2",
          },
          {
            id: "3",
            name: "Exercise 3",
          },
        ];
        setExerciseItems(exerciseItemsData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex flex-col mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Search exercises overview</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable data={exerciseItems} columns={columns} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="h-8">{"Type here the name of the exercise"}</Button>
            <Button className="h-8">{"Add Exercise"}</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SearchExercises;
