// BaseNode.js

import { Position } from "reactflow";
import { cn } from "../lib/utils";
import { CustomHandle } from "./CustomHandle";

export const BaseNode = ({
    id,
    title,
    inputs = [],
    outputs = [],
    children,
    className = "",
    ...rest
}) => {
    return (
        <div
            className={cn("min-w-52 min-h-28 p-2 rounded-xl border bg-white shadow text-xs")}
            {...rest}
        >
            {/* Input Handles */}
            {inputs.map((input, idx) => (
                <CustomHandle
                    key={input.id}
                    type="target"
                    position={Position.Left}
                    id={input.id}
                    style={{ top: `${(idx + 1) * (100 / (inputs.length + 1))}%` }}
                />
            ))}

            {/* Title */}
            <p className="text-slate-600 font-medium mb-2 text-sm">{title}</p>

            {/* Children (custom content) */}
            <div>{children}</div>

            {/* Output Handles */}
            {outputs.map((output, idx) => (
                <CustomHandle
                    key={output.id}
                    type="source"
                    position={Position.Right}
                    id={output.id}
                    style={{ top: `${(idx + 1) * (100 / (outputs.length + 1))}%` }}
                />
            ))}
        </div>
    );
};
