// toolbar.js

import { useReactFlow } from "reactflow";
import { Button } from "./components/ui/button";
import { DraggableNode } from "./draggableNode";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

export const PipelineToolbar = () => {
    const { nodes, edges } = useStore(
        (state) => ({
            nodes: state.nodes,
            edges: state.edges,
        }),
        shallow,
    );

    const { setNodes, setEdges } = useReactFlow();

    const handleClearAll = () => {
        setNodes([]);
        setEdges([]);
    };

    return (
        <div className="border-b p-4 flex items-center gap-4 w-full">
            <DraggableNode type="customInput" label="Input" />
            <DraggableNode type="llm" label="LLM" />
            <DraggableNode type="customOutput" label="Output" />
            <DraggableNode type="text" label="Text" />
            <DraggableNode type="model" label="Model" />
            <DraggableNode type="condition" label="Condition" />
            <DraggableNode type="formatter" label="Formatter" />
            <DraggableNode type="logger" label="Logger" />
            <DraggableNode type="apiCall" label="API Call" />

            {nodes.length > 0 || edges.length > 0 ? (
                <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-500"
                    onClick={handleClearAll}
                >
                    Clear All
                </Button>
            ) : null}
        </div>
    );
};
