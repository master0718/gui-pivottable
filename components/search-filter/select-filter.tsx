"use client"

import { NextPage } from "next"
import * as React from "react"
import { Input } from "@/components/ui/input"
import { ThreeStateCheckbox } from "@/components/ui/three-state-checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useActions } from "@/redux/hooks/use-actions"

interface SelectItem {
    key: string,
    id: number,
    label: string,
    status: number,
}

interface Props {
    key: string,
    title: string,
    placeholder: string,
    items: SelectItem[]
}

const SelectFilter: NextPage<{ props: Props, module: string }> = ({ props, module }) => {

    const {
        filterSearchItem
    } = useActions(module);

    const filterSelectItems = (key: string, searchText: string) => {
        filterSearchItem({
            key,
            searchText
        });
    }

    return (
        <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between">
                <Label>{props.title}</Label>
                <div className="flex justify-end">
                    <RadioGroup defaultValue="1" className="flex gap-1">
                        <div className="flex items-center space-x-1">
                            <RadioGroupItem value="1" id="option-and" />
                            <Label htmlFor="option-and">{"AND"}</Label>
                        </div>
                        <div className="flex items-center space-x-1">
                            <RadioGroupItem value="2" id="option-or" />
                            <Label htmlFor="option-or">{"OR"}</Label>
                        </div>
                        <div className="flex items-center space-x-1">
                            <RadioGroupItem value="3" id="option-xor" />
                            <Label htmlFor="option-xor">{"XOR"}</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
            <div className="flex flex-col gap-1 border rounded-sm p-1">
                <Input className="h-8" type="text" placeholder={props.placeholder} onChange={(e) => filterSelectItems(props.key, e.target.value)} />
                {props.items.map((item, index) => (
                    <ThreeStateCheckbox key={index} props={item} module={module} />
                ))}
                <Button className="h-8">+&nbsp;Show More</Button>
            </div>
        </div>
    );
}

SelectFilter.displayName = "SelectFilter"

export { SelectFilter };