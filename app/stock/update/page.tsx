"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddStock from "@/components/page-components/stock/stock-add";
import ImportStock from "@/components/page-components/stock/stock-import";

const UpdateStock = () => {
  return (
    <div className="container mx-auto px-4 h-full">
      <div className="md:shrink-0 justify-between h-full gap-1 mt-4">
        <Tabs defaultValue="add">
          <TabsList className="mr-auto">
            <TabsTrigger value="add">Add</TabsTrigger>
            <TabsTrigger value="import">Import</TabsTrigger>
          </TabsList>
          <TabsContent value="add">
            <AddStock />
          </TabsContent>
          <TabsContent value="import">
            <ImportStock />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UpdateStock;
