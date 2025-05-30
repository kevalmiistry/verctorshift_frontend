// submit.js

import { Button } from "./components/ui/button";

export const SubmitButton = () => {
    return (
        <div className="p-4 flex justify-end items-center border-t">
            <Button variant="default" type="submit">
                Submit
            </Button>
        </div>
    );
};
