import { useState, useRef, useEffect } from "react";
import { BaseNode } from "./BaseNode";
import { Textarea } from "../components/ui/textarea";

export const TextNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || "{{input}}");
    const textareaRef = useRef(null);

    const handleTextChange = (e) => {
        setCurrText(e.target.value);
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.rows = 2; // reset first
            const lineHeight = 16; // because of text-xs line-height = 16px
            const lines = Math.floor(textarea.scrollHeight / lineHeight);
            textarea.rows = Math.min(10, Math.max(2, lines - 1));
        }
    }, [currText]);

    return (
        <BaseNode id={id} title="Text" outputs={[{ id: `${id}-output` }]}>
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
