// modelNode

import { BaseNode } from "./BaseNode";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { useState } from "react";

const LLM_PROVIDERS = [
    {
        label: "OpenAI",
        value: "openai",
        logo_url: "https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png",
    },
    {
        label: "Anthropic",
        value: "anthropic",
        logo_url:
            "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/anthropic-icon-wii9u8ifrjrd99btrqfgi.png/anthropic-icon-tdvkiqisswbrmtkiygb0ia.png?_a=DATAdtAAZAA0",
    },
    {
        label: "Google DeepMind",
        value: "google_deepmind",
        logo_url:
            "https://registry.npmmirror.com/@lobehub/icons-static-png/1.46.0/files/dark/deepmind-color.png",
    },
];

const MODELS = {
    openai: [
        {
            label: "GPT-4.5",
            value: "GPT-4.5",
        },
        {
            label: "GPT-4 Turbo",
            value: "GPT-4 Turbo",
        },
        {
            label: "GPT-4.1",
            value: "GPT-4.1",
        },
    ],
    anthropic: [
        {
            label: "Claude 3 Opus",
            value: "Claude 3 Opus",
        },
        {
            label: "Claude 3 Sonnet",
            value: "Claude 3 Sonnet",
        },
        {
            label: "Claude 3 Haiku",
            value: "Claude 3 Haiku",
        },
    ],
    google_deepmind: [
        {
            label: "Gemini 1.5 Pro",
            value: "Gemini 1.5 Pro",
        },
        {
            label: "Gemini 1.5 Flash",
            value: "Gemini 1.5 Flash",
        },
        {
            label: "Gemini 1.0 Ultra/Pro/Nano",
            value: "Gemini 1.0 Ultra/Pro/Nano",
        },
    ],
};

export const ModelNode = ({ id }) => {
    const [provider, setProvider] = useState("");
    const [model, setModel] = useState("");

    const handleProviderChange = (value) => {
        setProvider(value);
        setModel("");
    };

    return (
        <BaseNode id={id} title="LLM" outputs={[{ id: `${id}-model` }]}>
            <div className="space-y-2">
                <label className="flex flex-col gap-1">
                    <span className="text-slate-400">Provider</span>
                    <Select value={provider} onValueChange={handleProviderChange}>
                        <SelectTrigger className="w-full p-2 h-auto !text-xs">
                            <SelectValue placeholder="Select Provider" />
                        </SelectTrigger>
                        <SelectContent>
                            {LLM_PROVIDERS.map((item) => (
                                <SelectItem
                                    key={item.value}
                                    value={item.value}
                                    className="text-xs cursor-pointer"
                                >
                                    <div className="flex flex-row items-center gap-1">
                                        <img
                                            src={item.logo_url}
                                            alt={item.label + " logo"}
                                            className="w-3 h-3 object-contain shrink-0"
                                        />
                                        {item.label}
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-slate-400">Model</span>
                    <Select value={model} onValueChange={setModel} disabled={!provider}>
                        <SelectTrigger className="w-full p-2 h-auto !text-xs">
                            <SelectValue placeholder="Select Model" />
                        </SelectTrigger>
                        <SelectContent>
                            {MODELS[provider]?.map((item) => (
                                <SelectItem
                                    key={item.value}
                                    value={item.value}
                                    className="text-xs cursor-pointer"
                                >
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </label>
            </div>
        </BaseNode>
    );
};
