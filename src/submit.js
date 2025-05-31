// submit.js

import { useState } from "react";
import { Button } from "./components/ui/button";
import { useStore } from "./store";
import { toast } from "sonner";
import { cn } from "./lib/utils";

export const SubmitButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { edges, nodes } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    const handleSubmit = async () => {
        setIsLoading(true);
        const formattedNodes = nodes.map((node) => node.id);
        const formattedEdges = edges.map((edge) => [edge.source, edge.target]);

        try {
            const response = await fetch("http://localhost:8000/pipelines/parse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nodes: formattedNodes,
                    edges: formattedEdges,
                }),
            });

            const result = await response.json();

            toast(
                <div className="w-[420px]">
                    <p className="font-medium text-base mb-2 px-4">Pipeline Parsed!</p>
                    <div className="flex items-center">
                        <div className="flex-1 space-y-1 text-start border-r last:border-r-0 px-4">
                            <p className="text-slate-500 text-sm">Nodes</p>
                            <p className="font-semibold text-lg">{result.num_nodes}</p>
                        </div>
                        <div className="flex-1 space-y-1 text-start border-r last:border-r-0 px-4">
                            <p className="text-slate-500 text-sm">Edges</p>
                            <p className="font-semibold text-lg">{result.num_edges}</p>
                        </div>
                        <div className="flex-1 space-y-1 text-start border-r last:border-r-0 px-4">
                            <p className="text-slate-500 text-sm">Is DAG?</p>
                            <p
                                className={cn(
                                    "font-semibold text-lg",
                                    result.is_dag ? "text-green-600" : "text-red-500",
                                )}
                            >
                                {result.is_dag ? "Yes" : "No"}
                            </p>
                        </div>
                    </div>
                </div>,
                {
                    position: "top-center",
                    unstyled: true,
                    className: "bg-white shadow-lg rounded-xl py-4 border w-fit",
                },
            );

            setIsLoading(false);
        } catch (err) {
            console.error("Error submitting pipeline:", err);
            toast.error("Failed to submit pipeline.", {
                position: "top-center",
            });
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 flex justify-end items-center border-t" onClick={handleSubmit}>
            <Button variant="default" type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
            </Button>
        </div>
    );
};
