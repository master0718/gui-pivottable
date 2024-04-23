import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label"
import { ChevronsRight } from "lucide-react";
import Image from 'next/image';

const FoodItem = () => {

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center space-x-2">
                    <Checkbox id="item-1" />
                    <CardTitle className="text-md">
                        Item Name
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grow flex flex-col gap-4">
                    <div className="flex space-x-4">
                        <div className="flex-2 flex flex-col space-y-1">
                            <div className="flex gap-1 items-center">
                                <span className="italic text-sm">{"Category"}</span>
                                <ChevronsRight className="h-4 w-4" />
                                <span className="italic text-sm">{"Sub-Category"}</span>
                            </div>
                            <div className="flex space-x-2">
                                <Label className="text-sm">{"Form:"}</Label>
                                <span className="text-neutral-500"></span>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <Label className="text-sm">{"Ingredients:"}</Label>
                                <Textarea className="md:grow h-48" readOnly value={"HealthForce Nutritionals, Antioxidant Extreme, Version 8, 360 Vegan Caps [ORAC ROOT Complex - 0.75g [Turmeric: Whole Root - 0.75g ], RESVERATROL ORAC Complex - 0.3g [Trans-Resveratrol: Extract (50%) - 0.15g, Resveratrol: Whole Food (Polygonum) - 0.15g ], HERBAL ORAC Complex - 0.66g [Grape Seed Extract (30% Proanthocyanidins) - 0.5g , Green Tea Extract (90% polyphenols, 40% EGCG) - 0.15g, Pine Bark Extract (95% OPCs) - 0.01g], Herbal Antioxidant Activators - 0.268g [Cinnamon, Peppermint, Black Pepper, Ginger], ORAC FRUIT BLEND Fruit Concentrates - 0.022g [Strawberry, Blueberry, Blackberry, Cranberry, Grape, Pomegranate, Mangosteen Extract (30:1), Goji Berry Extract (20% polyphenols), Acai (2% anthocyanidins)], Other ingredients[Vegancaps (non-GMO Tapioca)]]"} />
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <Label className="flex-none md:w-20 font-medium">{"Nutrition Facts:"}</Label>
                                <div className="md:grow">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Calories</TableHead>
                                                <TableHead>Fat</TableHead>
                                                <TableHead>Protein</TableHead>
                                                <TableHead>Carbs</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>12</TableCell>
                                                <TableCell>23</TableCell>
                                                <TableCell>34</TableCell>
                                                <TableCell>45</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <Label className="flex-none md:w-20 font-medium">{"Tags:"}</Label>
                                <Card className="md:grow">
                                    <CardContent className="p-2">
                                        <div className="flex items-center flex-wrap space-x-2 space-y-2 overflow-x-auto h-24">
                                            <Button className="mt-2 ml-2 h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">TagTag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                            <Button className="h-8">Tag</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col hidden md:block">
                            <a href={"/foods/detail"}>
                                <Image src="/images/products/product-001.png" alt="product" width="0" height="0" className="w-full border rounded-sm h-96" />
                            </a>
                            <div className="flex items-center justify-between mt-1">
                                <Button className="h-8">Edit</Button>
                                <Button className="h-8">Delete</Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:hidden">
                        <a href={"/foods/detail"}>
                            <Image src="/images/products/product-001.png" width="0" height="0" alt="product" className="w-full rounded-sm h-96" />
                        </a>
                        <div className="flex items-center justify-between mt-1">
                            <Button className="h-8">Edit</Button>
                            <Button className="h-8">Delete</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default FoodItem;