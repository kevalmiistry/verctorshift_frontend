// llmNode.js

import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="LLM"
            inputs={[
                {
                    id: `${id}-system`,
                },

                {
                    id: `${id}-prompt`,
                },
            ]}
            outputs={[{ id: `${id}-response` }]}
        >
            <div className="flex-1 flex justify-center items-center">
                <span>LLM Runner.</span>
            </div>
        </BaseNode>
    );
};
