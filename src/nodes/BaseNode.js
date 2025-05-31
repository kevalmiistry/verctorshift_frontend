// BaseNode.js

import { Position, useReactFlow } from "reactflow";
import { cn } from "../lib/utils";
import { CustomHandle } from "./CustomHandle";
import { CrossCircledIcon } from "@radix-ui/react-icons";

export const BaseNode = ({
    id,
    title,
    inputs = [],
    outputs = [],
    children,
    className = "",
    ...rest
}) => {
    const { setNodes } = useReactFlow();

    const handleRemoveNode = () => {
        setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
    };

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
            <div className="flex items-center justify-between mb-2">
                <p className="text-slate-600 font-medium text-sm">{title}</p>

                <button className="hover:text-red-500" onClick={handleRemoveNode}>
                    <CrossCircledIcon />
                </button>
            </div>

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
