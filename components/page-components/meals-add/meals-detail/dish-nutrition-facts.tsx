"use client";

import { NextPage } from "next"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

interface IDishNutritionFactsProps {

}

const DishNutritionFacts: NextPage<IDishNutritionFactsProps> = ({

}) => {
    return (
        <div className={`flex flex-col w-[400px] gap-1`}>
            <div className="flex justify-between h-8">
                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Show summary</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Show all</Label>
                </div>
            </div>
            <Card>
                <CardContent className="p-0">
                    <div className="flex flex-col">
                        <div className="border-b border-dotted pl-1 h-6">
                            <h1 className="text-sm font-bold">Nutrition Facts - Dish</h1>
                        </div>
                        <div className="flex border-b h-6">
                            <div className="flex-none w-64">

                            </div>
                            <div className="flex-1 border-dotted border-l pl-1">
                                <span className="text-xs">Quantity</span>
                            </div>
                            <div className="flex-1 border-dotted border-l pl-1">
                                <span className="text-xs">UM</span>
                            </div>
                        </div>
                        <div className="flex border-b h-6">
                            <div className="flex-none w-64 pl-1">
                                <span className="text-xs">Serving Size</span>
                            </div>
                            <div className="flex-1 border-dotted border-l pl-1">
                                <span className="text-xs">100</span>
                            </div>
                            <div className="flex-1 border-dotted border-l pl-1">
                                <span className="text-xs">g</span>
                            </div>
                        </div>
                        <div className="flex border-b h-6">
                            <div className="flex-none w-64 pl-1">
                                <span className="text-xs">Adjusted Serving Size</span>
                            </div>
                            <div className="flex-1 border-dotted border-l pl-1">
                                <span className="text-xs">100</span>
                            </div>
                            <div className="flex-1 border-dotted border-l pl-1">
                                <span className="text-xs">g</span>
                            </div>
                        </div>
                        <div className="flex border-b h-6">
                            <div className="flex-none w-64 pl-1">
                                <span className="text-xs"></span>
                            </div>
                            <div className="flex-1 border-dotted border-l pl-1">
                                <span className="text-xs"></span>
                            </div>
                            <div className="flex-1 border-dotted border-l pl-1">
                                <span className="text-xs"></span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex border-b h-6">
                                <div className="p-1 flex flex-cols items-center">
                                    <span className="text-xs font-bold">General Information</span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Calories (kcal)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">251</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">g</span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-4">from Cabs</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-4">from Fat</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">167</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-4">from Protein</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">167</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Fiber</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">g</span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Alchol (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">g</span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex border-b h-6">
                                <div className="w-full flex justify-between items-center px-1">
                                    <span className="text-xs font-bold">Macros</span>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="show-hide-macros" />
                                        <Label htmlFor="show-hide-macros" className="text-xs">Show/Hide</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Cabs (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">1</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6 bg-yellow-300">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Fat (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6 bg-yellow-300">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Protein (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex border-b h-6">
                                <div className="w-full pl-1 flex justify-between items-center px-1">
                                    <span className="text-xs font-bold">Carbohydrates</span>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="show-hide-macros" />
                                        <Label htmlFor="show-hide-macros" className="text-xs">Show/Hide</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Cabs (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">1</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Fiber (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Fructose (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Galactose (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Glucose (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Lactose (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Net Carbs (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Starch (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Surcose (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Sugars (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex border-b h-6">
                                <div className="w-full pl-1 flex justify-between items-center px-1">
                                    <span className="text-xs font-bold">Fats</span>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="show-hide-macros" />
                                        <Label htmlFor="show-hide-macros" className="text-xs">Show/Hide</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Fat (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">1</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Cholesterol (mg)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Omega-3 (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Omega-6 (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Phytosterol (mg)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Polyunsaturated (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Saturated (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Trans-Fats (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex border-b h-6">
                                <div className="w-full pl-1 flex justify-between items-center px-1">
                                    <span className="text-xs font-bold">Protein</span>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="show-hide-macros" />
                                        <Label htmlFor="show-hide-macros" className="text-xs">Show/Hide</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Protein (g)</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">1</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">BCAA Total</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">BCAA Valine</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">BCAA Leucine</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">BCAA Iso-Leucine</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Creatine</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex border-b h-6">
                                <div className="w-full pl-1 flex justify-between items-center px-1">
                                    <span className="text-xs font-bold">Vitamins</span>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="show-hide-macros" />
                                        <Label htmlFor="show-hide-macros" className="text-xs">Show/Hide</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin A</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">1</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin B1</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin B2</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin B3</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin B5</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin B6</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin B7</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin B9</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin B12</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin B15</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin B17</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Choline</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin C</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin D</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin E</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Vitamin K</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex border-b h-6">
                                <div className="w-full pl-1 flex justify-between items-center px-1">
                                    <span className="text-xs font-bold">Minerals</span>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="show-hide-macros" />
                                        <Label htmlFor="show-hide-macros" className="text-xs">Show/Hide</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Calcium</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">1</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Chloride</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Chromium</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Copper</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Fluoride</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Iodine</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Iron</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Magnesium</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Manganese</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Molybdenum</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Phosphorus</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Potassium</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Selenium</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Sodium</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Zinc</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex border-b h-6">
                                <div className="w-full pl-1 flex justify-between items-center px-1">
                                    <span className="text-xs font-bold">Other compounds</span>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="show-hide-macros" />
                                        <Label htmlFor="show-hide-macros" className="text-xs">Show/Hide</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Curcumin</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">1</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Lutein</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">Ginseng</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex border-b h-6">
                                <div className="w-full pl-1 flex justify-between items-center px-1">
                                    <span className="text-xs font-bold">List of ingredients</span>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="show-hide-macros" />
                                        <Label htmlFor="show-hide-macros" className="text-xs">Show/Hide</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">I1</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">1</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex border-b h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">I2</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                            <div className="flex h-6">
                                <div className="flex-none w-64 pl-1">
                                    <span className="text-xs pl-2">I3</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs">19</span>
                                </div>
                                <div className="flex-1 border-dotted border-l pl-1">
                                    <span className="text-xs"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

DishNutritionFacts.displayName = "DishNutritionFacts";

export { DishNutritionFacts };