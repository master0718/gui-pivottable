"use client"

import { NextPage } from "next"
import * as React from "react"
import { ThreeStateCheckbox } from "@/components/ui/three-state-checkbox"
import { Label } from "@/components/ui/label"
interface SelectItem {
    key: string,
    id: number,
    label: string,
    status: number,
}

interface Props {
    title: string,
    items: SelectItem[],
}

const SelectOnly: NextPage<{ props: Props, module: string }> = ({ props, module }) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <Label htmlFor="name">{props.title}</Label>
            <div className="flex flex-col gap-1 border rounded-sm p-1">
                {props.items.map((item, index) => (
                    <ThreeStateCheckbox key={index} props={item} module={module} />
                ))}
            </div>
        </div>
    );
}

SelectOnly.displayName = "SelectOnly"

export { SelectOnly };