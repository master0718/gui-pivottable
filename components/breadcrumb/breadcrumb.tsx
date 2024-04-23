"use client";

import { NextPage } from "next";
import { ChevronRight } from "lucide-react";
import { Label } from "@/components/ui/label"


interface IBreadcrumbProps {
    items: string[];
}

const Breadcrumb: NextPage<IBreadcrumbProps> = ({
    items
}) => {
    return (
        <div className="flex justify-start items-center">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <Label>{item}</Label>
                    {index < items.length - 1 && (
                        <Label><ChevronRight className="h-4 w-4" /></Label>
                    )}
                </div>
            ))}
        </div>
    )
}

Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };