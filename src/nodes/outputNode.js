// outputNode.js

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

export const OutputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(
        data?.outputName || id.replace("customOutput-", "output_"),
    );
    const [outputType, setOutputType] = useState(data.outputType || "Text");

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleTypeChange = (value) => {
        setOutputType(value);
    };

    return (
        <BaseNode id={id} title="Output" inputs={[{ id: `${id}-value` }]}>
            <div className="space-y-2">
                <div className="space-y-1">
                    <label className="text-slate-400 ">Name:</label>
                    <Input
                        type="text"
                        value={currName}
                        onChange={handleNameChange}
                        className="p-2 w-full h-auto !text-xs"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-slate-400 ">Type:</label>
                    <Select value={outputType} onValueChange={handleTypeChange}>
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
                </div>
            </div>
        </BaseNode>
    );
};
