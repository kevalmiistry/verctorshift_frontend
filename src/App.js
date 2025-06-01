import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { Toaster } from "./components/ui/sonner";
import { ReactFlowProvider } from "reactflow";

function App() {
    return (
        <ReactFlowProvider>
            <main className="h-screen flex flex-col overflow-hidden">
                <PipelineToolbar />
                <PipelineUI />
                <SubmitButton />

                <Toaster />
            </main>
        </ReactFlowProvider>
    );
}

export default App;
