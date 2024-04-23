"use client";

import { NextPage } from "next";
import { CheckSquare, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IColorOptionProps {
  color: string;
  selectedColor: string;
  onChangeColor: (color: string) => void;
  eventCategory: string;
}

const ColorOption: NextPage<IColorOptionProps> = ({
  color,
  selectedColor,
  onChangeColor,
  eventCategory,
}) => {
  const handleChangeColor = () => onChangeColor(color);

  return (
    <div
      className="h-10 p-1 flex justify-between items-center gap-1 rounded-sm cursor-pointer"
      onClick={handleChangeColor}
      style={{ background: color }}
    >
      <div className="flex gap-1">
        {selectedColor === color ? (
          <CheckSquare className="font-normal" />
        ) : (
          <Square className="font-normal" />
        )}
        <span className="font-normal">{eventCategory}</span>
      </div>

      <div className="flex justify-end gap-1">
        <Button className="h-8">Start</Button>
        <Button className="h-8">Skip</Button>
        <Button className="h-8">Change</Button>
        <Button className="h-8">Delete</Button>
        <Button className="h-8">Comment</Button>
      </div>
    </div>
  );
};

ColorOption.displayName = "ColorOption";

export { ColorOption };
