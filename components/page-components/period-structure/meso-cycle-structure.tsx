"use client";

import { NextPage } from "next";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarIcon,
  ChevronsUpDown,
  CopyPlus,
  Delete,
  MoveDown,
  MoveUp,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { IMesoCycleStructure } from "./period-structure";
import { MicroCycleStructure } from "./micro-cycle-structure";

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
} from "@/components/ui/alert-dialog";

interface IMesoCycleStructureProps {
  mesoCycleStructure: IMesoCycleStructure;
  deleteMesoCycle: (id: number) => void;
  duplicateMesoCycle: (id: number) => void;
  deleteMicroCycle: (mesoCycleId: number, microCycleId: number) => void;
  duplicateMicroCycle: (mesoCycleId: number, microCycleId: number) => void;
  updateMesoCycleOrder: (mesoCycleId: number, direction: string) => void;
  updateMicroCycleOrder: (
    mesoCycleId: number,
    microCycleId: number,
    direction: string
  ) => void;
}

const MesoCycleStructure: NextPage<IMesoCycleStructureProps> = ({
  mesoCycleStructure,
  deleteMesoCycle,
  duplicateMesoCycle,
  deleteMicroCycle,
  duplicateMicroCycle,
  updateMesoCycleOrder,
  updateMicroCycleOrder,
}) => {
  const [isOpen, setIsOpen] = useState(mesoCycleStructure.isExpand);
  const [startDate, setStartDate] = useState<Date>(
    mesoCycleStructure.startDate
  );
  const [endDate, setEndDate] = useState<Date>(mesoCycleStructure.endDate);

  return (
    <Collapsible
      className="border rounded-md"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="container flex items-center justify-between border-b">
        <div className="flex items-center">
          <div className="h-8 flex items-center">
            <h2 className="text-md font-semibold">{mesoCycleStructure.name}</h2>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-8 flex items-center">
            <Popover>
              <PopoverTrigger asChild className="h-8">
                <Button
                  variant="ghost"
                  className={cn(!startDate && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? (
                    format(startDate, "PPP")
                  ) : (
                    <span>Start date</span>
                  )}
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
                  className={cn(!endDate && "text-muted-foreground")}
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
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => deleteMesoCycle(mesoCycleStructure.id)}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Button>
          <Button variant="ghost" className="w-9 h-8 p-0">
            <CopyPlus
              className="h-4 w-4"
              onClick={() => duplicateMesoCycle(mesoCycleStructure.id)}
            />
          </Button>
          <Button variant="ghost" className="w-9 h-8 p-0">
            <MoveUp
              className="h-4 w-4"
              onClick={() => updateMesoCycleOrder(mesoCycleStructure.id, "up")}
            />
          </Button>
          <Button variant="ghost" className="w-9 h-8 p-0">
            <MoveDown
              className="h-4 w-4"
              onClick={() =>
                updateMesoCycleOrder(mesoCycleStructure.id, "down")
              }
            />
          </Button>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-9 h-8 p-0">
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
      <CollapsibleContent className="space-y-2 p-2">
        <div className="flex">
          <div className="grow flex flex-col gap-1 ml-36">
            <Card>
              <CardContent className="p-2">
                <Label htmlFor="message">Description</Label>
                <Textarea
                  placeholder="Type your message here."
                  value={mesoCycleStructure.description}
                  id="message"
                  readOnly
                />
              </CardContent>
            </Card>
            {mesoCycleStructure.microCycles.map((microCycle, index) => (
              <MicroCycleStructure
                key={index}
                microCycleStructure={microCycle}
                deleteMicroCycle={deleteMicroCycle}
                duplicateMicroCycle={duplicateMicroCycle}
                updateMicroCycleOrder={updateMicroCycleOrder}
                mesoCycleId={mesoCycleStructure.id}
              />
            ))}
            <div className="flex justify-between">
              <Button className="h-8">Add new Micro Cycle</Button>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

MesoCycleStructure.displayName = "MesoCycleStructure";

export { MesoCycleStructure };
