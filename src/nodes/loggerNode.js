import { BaseNode } from "./BaseNode";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";

const OPTIONS = [
    {
        label: "Pipeline 1 logger DB",
        value: "ppl-1-logger-db",
    },
    {
        label: "Pipeline 2 logger DB",
        value: "ppl-2-logger-db",
    },
];
export const LoggerNode = ({ id }) => {
    const [loggerDB, setLoggerDB] = useState("");

    return (
        <BaseNode id={id} title="Logger" inputs={[{ id: `${id}-response` }]}>
            <div className="space-y-1">
                <label className="text-slate-400">Logger DB</label>
                <Select value={loggerDB} onValueChange={setLoggerDB}>
                    <SelectTrigger className="p-2 h-auto !text-xs w-full">
                        <SelectValue placeholder="Select DB" />
                    </SelectTrigger>
                    <SelectContent>
                        {OPTIONS.map((item) => (
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
            </div>
        </BaseNode>
    );
};
