"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MealsAdd } from "@/components/page-components/meals-add/meals-add";
import { ActivitiesAdd } from "@/components/page-components/activities-add/activities-add";
import { ExercisesAdd } from "@/components/page-components/exercises-add/exercises-add";
import { ManageMacros } from "@/components/page-components/manage-macros/manage-macros";
import { Overview } from "@/components/page-components/overview/overview";
import { PeriodStructure } from "@/components/page-components/period-structure/period-structure";

const CreatePeriod = () => {
  return (
    <div className="container mx-auto px-4 py-4 h-full flex flex-col mb-10 relative">
      <Tabs defaultValue="structure">
        <TabsList className="mr-auto">
          <TabsTrigger value="structure">Structure Macro Cycle</TabsTrigger>
          <TabsTrigger value="activities">Manage activities</TabsTrigger>
          <TabsTrigger value="macros">Manage macros</TabsTrigger>
          <TabsTrigger value="meals">Meals to day</TabsTrigger>
          <TabsTrigger value="exercises">Exercises to day</TabsTrigger>
          <TabsTrigger value="overview">Overview and activation</TabsTrigger>
        </TabsList>
        <TabsContent value="structure">
          <PeriodStructure />
        </TabsContent>
        <TabsContent value="activities">
          <ActivitiesAdd props={{}} module={"activitiesAddSearchForm"} />
        </TabsContent>
        <TabsContent value="macros">
          <ManageMacros props={{}} module={"manageMacrosSearchForm"} />
        </TabsContent>
        <TabsContent value="meals">
          <MealsAdd />
        </TabsContent>
        <TabsContent value="exercises">
          <ExercisesAdd props={{}} module={"exercisesAddSearchForm"} />
        </TabsContent>
        <TabsContent value="overview">
          <Overview props={{}} module={"overviewSearchForm"} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreatePeriod;
