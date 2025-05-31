import { BaseNode } from "./BaseNode";

export const FormatterNode = ({ id }) => {
    return (
        <BaseNode
            id={id}
            title="Formatter"
            inputs={[{ id: `${id}-input` }]}
            outputs={[{ id: `${id}-output` }]}
        >
            <div className="flex-1 flex items-center justify-center">Formats LLM Response</div>
        </BaseNode>
    );
};
