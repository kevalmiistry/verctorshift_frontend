// CustomHandle.js

import { Handle } from "reactflow";
import { cn } from "../lib/utils";

export const CustomHandle = ({ type, position, id, style = {}, label = "" }) => {
    return (
        <Handle
            type={type}
            position={position}
            id={id}
            className={cn(
                "!w-3 !h-3 hover:scale-125 transition-all !bg-white !border !border-slate-600 !rounded-full",
                {
                    "!-translate-x-1/2 !left-0": type === "target",
                    "!translate-x-1/2 !right-0": type === "source",
                    "after:content-[var(--handle-label)] after:absolute after:top-1/2 after:-translate-y-1/2 after:whitespace-nowrap":
                        !!label,
                    "after:!-left-full after:-translate-x-[85%]": label && type === "target",
                    "after:!-right-full after:translate-x-[85%]": label && type === "source",
                },
            )}
            style={{
                ...style,
                ...(label
                    ? {
                          "--handle-label": `"${label}"`,
                      }
                    : {}),
            }}
        />
    );
};
