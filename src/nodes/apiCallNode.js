import { useState } from "react";
import { BaseNode } from "./BaseNode";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "../components/ui/select";
import { Input } from "../components/ui/input";

const SUPPORTED_METHODS = [
    { value: "GET", label: "GET" },
    { value: "POST", label: "POST" },
    { value: "PUT", label: "PUT" },
    { value: "DELETE", label: "DELETE" },
];

export const ApiCallNode = ({ id }) => {
    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("GET");

    return (
        <BaseNode id={id} title="API Call" outputs={[{ id: `${id}-result` }]}>
            <div className="flex flex-col gap-2 text-xs w-full">
                <label className="flex flex-col gap-1">
                    <span className="text-slate-400">Method</span>
                    <Select value={method} onValueChange={setMethod}>
                        <SelectTrigger className="p-2 h-auto !text-xs w-full">
                            <SelectValue placeholder="Select Method" />
                        </SelectTrigger>
                        <SelectContent>
                            {SUPPORTED_METHODS.map((item) => (
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
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-slate-400">URL</span>
                    <Input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://api.example.com"
                        className="p-2 w-full h-auto !text-xs"
                    />
                </label>
            </div>
        </BaseNode>
    );
};
