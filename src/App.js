import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
    return (
        <section className="h-screen flex items-center justify-center">
            <div className="w-[90%] border rounded-xl shadow">
                <PipelineToolbar />
                <PipelineUI />
                <SubmitButton />
            </div>
        </section>
    );
}

export default App;
