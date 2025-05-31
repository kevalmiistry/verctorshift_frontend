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
            <div>
                <span>LLM</span>
            </div>
            <div>
                <span>This is a LLM.</span>
            </div>
        </BaseNode>
    );
};
