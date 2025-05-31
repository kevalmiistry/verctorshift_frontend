// textNode.js

import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { Input } from "../components/ui/input";

export const TextNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || "{{input}}");

    const handleTextChange = (e) => {
        setCurrText(e.target.value);
    };

    return (
        <BaseNode id={id} title="Text" outputs={[{ id: `${id}-output` }]}>
            <label className="flex flex-col gap-1">
                <span className="text-slate-400">Text:</span>
                <Input
                    type="text"
                    value={currText}
                    onChange={handleTextChange}
                    className="p-2 w-full h-auto !text-xs"
                />
            </label>
        </BaseNode>
    );
};
