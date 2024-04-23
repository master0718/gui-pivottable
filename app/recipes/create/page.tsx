"use client"
import React from "react";

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import Nutrition from "@/components/page-components/food-detail/nutrition"
import Tags from "@/components/page-components/food-detail/tags"
import Ingredients from "@/components/page-components/food-detail/ingredients"
import Carbohydrates from "@/components/page-components/food-detail/carbohydrates"
import Fats from "@/components/page-components/food-detail/fats"
import Protein from "@/components/page-components/food-detail/protein"
import Compounds from "@/components/page-components/food-detail/compounds";
import Vitamins from "@/components/page-components/food-detail/vitamins";
import Minerals from "@/components/page-components/food-detail/minerals";
import Form from "@/components/page-components/food-detail/form";
import ShoppingWebsites from "@/components/page-components/food-detail/shopping-websites";
import UsefulLinks from "@/components/page-components/food-detail/useful-links";
import Pictures from "@/components/page-components/food-detail/pictures";
import Comments from "@/components/page-components/food-detail/comments";
const CreateRecipes = () => {
    return (
        <div className="flex flex-col container mx-auto h-full mt-1">
            <div className="flex justify-between">
                <Button className="h-8">Back</Button>
                <Button className="h-8">Edit</Button>
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-1">
                <div className="flex flex-1 items-center">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="dishName">Dish Name</Label>
                        <Input className="h-8" type="text" id="dishName" placeholder="Dish Name" />
                    </div>
                </div>
                <div className="flex flex-1 items-center">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label>Category</Label>
                        <Select>
                            <SelectTrigger className="h-8">
                                <SelectValue placeholder="Select a Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-1 items-center">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label>Sub Category</Label>
                        <Select>
                            <SelectTrigger className="h-8">
                                <SelectValue placeholder="Select a Sub Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-1">
                <Nutrition />
                <Tags />
                <Ingredients parentType="dish" />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-1">
                <Carbohydrates />
                <Fats />
                <Protein />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-1">
                <Compounds />
                <Vitamins />
                <Minerals />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-1">
                <Form />
                <ShoppingWebsites />
                <UsefulLinks />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-1">
                <Pictures />
                <Comments />
            </div>
            <div className="flex justify-between mt-1 mb-2">
                <Button className="h-8">Back</Button>
                <Button className="h-8">Delete</Button>
                <Button className="h-8">Edit</Button>
            </div>
        </div>
    );
};

export default CreateRecipes;