// CustomHandle.js

import { Handle } from "reactflow";
import { cn } from "../lib/utils";

export const CustomHandle = ({ type, position, id, style = {} }) => {
    return (
        <Handle
            type={type}
            position={position}
            id={id}
            className={cn("!w-3 !h-3 !bg-white !border !border-slate-600 !rounded-full ", {
                "!-translate-x-1/2 !left-0": type === "target",
                "!translate-x-1/2 !right-0": type === "source",
            })}
            style={style}
        />
    );
};
