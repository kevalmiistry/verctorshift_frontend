// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
    return (
        <div className="border-b p-4 flex items-center gap-4 w-full">
            <DraggableNode type="customInput" label="Input" />
            <DraggableNode type="llm" label="LLM" />
            <DraggableNode type="customOutput" label="Output" />
            <DraggableNode type="text" label="Text" />
        </div>
    );
};
