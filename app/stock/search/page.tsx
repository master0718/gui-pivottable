"use client"

import { useEffect, useState } from 'react'
import React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/page-components/stock-view-datatable/data-table"

import { columns } from "@/components/page-components/stock-view-datatable/columns"


const SearchStock = () => {
  const [stockItems, setStockItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const stockItemsData = [
          {
            "id": "1",
            "name": "Product 1",
            "category": "1",
            "subCategory": "1",
            "unit": "Piece",
            "quantity": "10"
          },
          {
            "id": "2",
            "name": "Product 2",
            "category": "2",
            "subCategory": "2",
            "unit": "Piece",
            "quantity": "20"
          },
          {
            "id": "3",
            "name": "Product 3",
            "category": "3",
            "subCategory": "3",
            "unit": "Piece",
            "quantity": "30"
          },
          {
            "id": "4",
            "name": "Product 4",
            "category": "1",
            "subCategory": "1",
            "unit": "Piece",
            "quantity": "40"
          },
          {
            "id": "5",
            "name": "Product 5",
            "category": "2",
            "subCategory": "2",
            "unit": "Piece",
            "quantity": "50"
          },
          {
            "id": "6",
            "name": "Product 6",
            "category": "3",
            "subCategory": "3",
            "unit": "Piece",
            "quantity": "60"
          },
          {
            "id": "7",
            "name": "Product 7",
            "category": "1",
            "subCategory": "1",
            "unit": "Piece",
            "quantity": "70"
          },
          {
            "id": "8",
            "name": "Product 8",
            "category": "2",
            "subCategory": "2",
            "unit": "Piece",
            "quantity": "80"
          },
          {
            "id": "9",
            "name": "Product 9",
            "category": "3",
            "subCategory": "3",
            "unit": "Piece",
            "quantity": "90"
          },
          {
            "id": "10",
            "name": "Product 10",
            "category": "1",
            "subCategory": "1",
            "unit": "Piece",
            "quantity": "100"
          }
        ];
        setStockItems(stockItemsData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
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
              <CardTitle>
                Search stock overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable data={stockItems} columns={columns} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="h-8">
                {"Back"}
              </Button>
              <Button className="h-8">
                {"Add"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );

};

export default SearchStock;
