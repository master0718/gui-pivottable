"use client";

import { NextPage } from "next";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { CalendarIcon, ChevronsUpDown, CopyPlus, Delete, MoveDown, MoveUp } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"
import { IMicroCycleStructure } from "./period-structure";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface IMicroCycleStructureProps {
    microCycleStructure: IMicroCycleStructure;
    mesoCycleId: number;
    deleteMicroCycle: (mesoCycleId: number, microCycleId: number) => void;
    duplicateMicroCycle: (mesoCycleId: number, microCycleId: number) => void;
    updateMicroCycleOrder: (mesoCycleId: number, microCycleId: number, direction: string) => void;
}

const MicroCycleStructure: NextPage<IMicroCycleStructureProps> = ({
    microCycleStructure,
    mesoCycleId,
    deleteMicroCycle,
    duplicateMicroCycle,
    updateMicroCycleOrder
}) => {

    const [isOpen, setIsOpen] = useState(microCycleStructure.isExpand);
    const [startDate, setStartDate] = useState<Date>(microCycleStructure.startDate);
    const [endDate, setEndDate] = useState<Date>(microCycleStructure.endDate);
    return (
        <Collapsible
            className="border rounded-md"
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <div className="container flex items-center justify-between border-b">
                <div className="flex items-center">
                    <div className="h-8 flex items-center">
                        <h2 className="text-md font-semibold">{microCycleStructure.name}</h2>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="h-8 flex items-center">
                        <Popover>
                            <PopoverTrigger asChild className="h-8">
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        !startDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {startDate ? format(startDate, "PPP") : <span>Start date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={startDate}
                                    onSelect={setStartDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="h-8 flex items-center">
                        <Popover>
                            <PopoverTrigger asChild className="h-8">
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        !endDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {endDate ? format(endDate, "PPP") : <span>End date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={endDate}
                                    onSelect={setEndDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <Button variant="ghost" className="w-9 h-8 p-0">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Delete className="h-4 w-4" />
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        account and remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => deleteMicroCycle(mesoCycleId, microCycleStructure.id)}>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </Button>
                    <Button variant="ghost" className="w-9 h-8 p-0">
                        <CopyPlus className="h-4 w-4" onClick={() => duplicateMicroCycle(mesoCycleId, microCycleStructure.id)} />
                    </Button>
                    <Button variant="ghost" className="w-9 h-8 p-0">
                        <MoveUp className="h-4 w-4" onClick={() => updateMicroCycleOrder(mesoCycleId, microCycleStructure.id, "up")} />
                    </Button>
                    <Button variant="ghost" className="w-9 h-8 p-0">
                        <MoveDown className="h-4 w-4" onClick={() => updateMicroCycleOrder(mesoCycleId, microCycleStructure.id, "down")} />
                    </Button>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 h-8 p-0">
                            <ChevronsUpDown className="h-4 w-4" />
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </div>
            <CollapsibleContent className="space-y-2 p-2">
                <div className="flex">
                    <div className="grow flex flex-col gap-1 ml-36">
                        <Label htmlFor="message">Description</Label>
                        <Textarea placeholder="Type your message here." value={microCycleStructure.description} id="message" readOnly/>
                    </div>
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}

MicroCycleStructure.displayName = "MicroCycleStructure";

export { MicroCycleStructure };