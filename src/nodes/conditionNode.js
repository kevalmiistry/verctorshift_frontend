// ConditionNode

import { BaseNode } from "./BaseNode";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { useState } from "react";

const SUPPORTED_CONDITIONS = [
    {
        label: "(==) - Equal to (loose equality)",
        value: "==",
    },
    {
        label: "(===) - Strict equal",
        value: "===",
    },
    {
        label: "(!=) - Not equal to (loose inequality)",
        value: "!=",
    },
    {
        label: "(!==) - Strict not equal to",
        value: "!==",
    },
    {
        label: "(>) - Greater than",
        value: ">",
    },
    {
        label: "(<) - Less than",
        value: "<",
    },
    {
        label: "(>=) - Greater than or equal to",
        value: ">=",
    },
    {
        label: "(<=) - Less than or equal to",
        value: "<=",
    },
];

export const ConditionNode = ({ id }) => {
    const [condition, setCondition] = useState("");

    return (
        <BaseNode
            id={id}
            title="Condition"
            inputs={[
                { id: `${id}-value-1`, label: "Value 1" },
                { id: `${id}-value-2`, label: "Value 2" },
            ]}
            outputs={[
                { id: `${id}-if-true`, label: "If True" },
                { id: `${id}-if-false`, label: "If False" },
            ]}
        >
            <div className="flex items-center gap-2 px-2">
                <div className="">Value 1</div>
                <Select value={condition} onValueChange={setCondition}>
                    <SelectTrigger className="p-2 h-auto !text-xs w-[250px]">
                        <SelectValue placeholder="Select Condition" />
                    </SelectTrigger>
                    <SelectContent>
                        {SUPPORTED_CONDITIONS.map((item) => (
                            <SelectItem
                                key={item.value}
                                value={item.value}
                                className="text-xs cursor-pointer"
                            >
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <div className="">Value 2</div>
            </div>
        </BaseNode>
    );
};
