import { useState, useRef, useEffect } from "react";
import { BaseNode } from "./BaseNode";
import { Textarea } from "../components/ui/textarea";

const extractVariables = (text) => {
    const matches = [...text.matchAll(/{{\s*([a-zA-Z_$][\w$]*)\s*}}/g)];
    const uniqueMatches = new Set(matches.map((m) => m[1]));

    return Array.from(uniqueMatches);
};

export const TextNode = ({ id, data }) => {
    const textareaRef = useRef(null);

    const [currText, setCurrText] = useState(data?.text || "{{input}}");
    const [variables, setVariables] = useState(() => extractVariables(currText));

    const handleTextChange = (e) => {
        setCurrText(e.target.value);
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.rows = 2; // reset first
            const lineHeight = 16; // text-xs line-height
            const lines = Math.floor(textarea.scrollHeight / lineHeight);
            textarea.rows = Math.min(10, Math.max(2, lines - 1));
        }
        //
        setVariables(extractVariables(currText));
    }, [currText]);

    return (
        <BaseNode
            id={id}
            title="Text"
            outputs={[{ id: `${id}-output` }]}
            inputs={variables.map((name) => ({
                id: `${id}-var-${name}`,
                label: name,
            }))}
        >
            <label className="flex flex-col gap-1">
                <span className="text-slate-400 text-xs">Text:</span>
                <Textarea
                    ref={textareaRef}
                    value={currText}
                    onChange={handleTextChange}
                    className="resize-none p-2 w-full h-auto !text-xs nowheel-textarea"
                />
            </label>
        </BaseNode>
    );
};
