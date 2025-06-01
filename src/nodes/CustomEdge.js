import { Cross1Icon } from "@radix-ui/react-icons";
import { EdgeLabelRenderer, getBezierPath, SmoothStepEdge, useReactFlow } from "reactflow";

const CustomEdge = (props) => {
    const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;
    const [, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
    });

    const { setEdges } = useReactFlow();

    return (
        <>
            <SmoothStepEdge {...props} />
            <EdgeLabelRenderer>
                <Cross1Icon
                    className="absolute text-red-500 pointer-events-auto cursor-pointer"
                    style={{
                        transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
                    }}
                    onClick={() =>
                        setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id))
                    }
                />
            </EdgeLabelRenderer>
        </>
    );
};

export default CustomEdge;
