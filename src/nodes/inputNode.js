// inputNode.js

import { useState } from "react";
import { BaseNode } from "./BaseNode";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";

export const InputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(
        data?.inputName || id.replace("customInput-", "input_"),
    );
    const [inputType, setInputType] = useState(data.inputType || "Text");

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleTypeChange = (value) => {
        setInputType(value);
    };

    return (
        <BaseNode id={id} title="Input" outputs={[{ id: `${id}-value` }]}>
            <div className="space-y-2">
                <label className="flex flex-col gap-1">
                    <span className="text-slate-400">Name:</span>
                    <Input
                        type="text"
                        value={currName}
                        onChange={handleNameChange}
                        className="p-2 w-full h-auto !text-xs"
                    />
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-slate-400">Type:</span>
                    <Select value={inputType} onValueChange={handleTypeChange}>
                        <SelectTrigger className="w-full p-2 h-auto !text-xs">
                            <SelectValue placeholder="Select Type" className="" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Text" className="text-xs cursor-pointer">
                                Text
                            </SelectItem>
                            <SelectItem value="File" className="text-xs cursor-pointer">
                                File
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </label>
            </div>
        </BaseNode>
    );
};
