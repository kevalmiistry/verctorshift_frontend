// draggableNode.js

import { buttonVariants } from "./components/ui/button";
import { cn } from "./lib/utils";

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
        const appData = { nodeType };
        event.target.style.cursor = "grabbing";
        event.dataTransfer.setData("application/reactflow", JSON.stringify(appData));
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <div
            className={cn(
                type,
                buttonVariants({
                    variant: "outline",
                    className: "aspect-square h-auto w-20 text-slate-600 cursor-grab",
                }),
            )}
            onDragStart={(event) => onDragStart(event, type)}
            onDragEnd={(event) => (event.target.style.cursor = "grab")}
            draggable
        >
            {label}
        </div>
    );
};
