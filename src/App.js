import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
    return (
        <main className="h-screen flex flex-col overflow-hidden">
            <PipelineToolbar />
            <PipelineUI />
            <SubmitButton />
        </main>
    );
}

export default App;
