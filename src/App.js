import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { Toaster } from "./components/ui/sonner";

function App() {
    return (
        <main className="h-screen flex flex-col overflow-hidden">
            <PipelineToolbar />
            <PipelineUI />
            <SubmitButton />

            <Toaster />
        </main>
    );
}

export default App;
