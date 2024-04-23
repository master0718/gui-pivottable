"use client";

import { useClickOutside } from "@/redux/hooks";
import type { NextPage } from "next";
import { useRef, useState } from "react";
import { colors, eventCategories } from "./colors";
import { ColorOption } from "./color-option";

interface IColorPickerProps {
	selectedColor: string;
	onChangeColor: (color: string) => void;
}

const ColorPicker: NextPage<IColorPickerProps> = ({
	selectedColor,
	onChangeColor,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const colorPickerRef = useRef<HTMLDivElement>();

	const toggling = () => setIsOpen(!isOpen);

	const close = () => setIsOpen(false);

	useClickOutside(colorPickerRef, close);

	return (
		<div className="flex flex-col gap-4" ref={colorPickerRef}>
			{/* <div className="flex items-center cursor-pointer" onClick={toggling}>
                <div className="w-12 h-6" style={{ background: selectedColor }}></div>
                <ChevronDown />
            </div>
            {isOpen && ( */}
			<ul className="flex flex-col gap-1">
				{colors.map((color, index) => (
					<ColorOption
						key={index}
						color={color}
						eventCategory={eventCategories[index]}
						selectedColor={selectedColor}
						onChangeColor={onChangeColor}
					/>
				))}
			</ul>
			{/* )} */}
		</div>
	);
};

ColorPicker.displayName = "ColorPicker";

export { ColorPicker };
