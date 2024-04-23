"use client";

import { NextPage } from "next";
import * as React from "react"
import { Label } from "@/components/ui/label"
import { useActions } from "@/redux/hooks/use-actions";

export interface ThreeStateCheckboxProps {
    key: string,
    id: number,
    status: number,
    label: string,
}

const ThreeStateCheckbox: NextPage<{ props: ThreeStateCheckboxProps, module: string }> = ({ props, module }) => {

    const {
        updateSearchItem
    } = useActions(module);

    const changeStatus = (status: number) => {
        updateSearchItem({
            key: props.key,
            id: props.id,
            label: props.label,
            status: status
        });
    }

    return (
        <div className="flex gap-1 items-center">
            <div className="flex">
                <span>[</span>
                {
                    props.status === 0 && <span className="w-3 text-center cursor-pointer" onClick={(e) => changeStatus(1)}>{` `}</span>
                }
                {
                    props.status === 1 && <span className="w-3 text-center cursor-pointer" onClick={(e) => changeStatus(2)}>{`+`}</span>
                }
                {
                    props.status === 2 && <span className="w-3 text-center cursor-pointer" onClick={(e) => changeStatus(0)}>{`-`}</span>
                }
                <span>]</span>
            </div>
            <Label>{props.label}</Label>
        </div>
    );
}

ThreeStateCheckbox.displayName = "ThreeStateCheckbox"

export { ThreeStateCheckbox };