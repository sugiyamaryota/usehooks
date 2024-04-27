import * as React from "react";
import { useIsClient } from "@uidotdev/usehooks";

export default function App() {
    const isClient = useIsClient();
    return (
        <section>
            <header>
                <h1>useIsClient</h1>
            </header>
            <h6>Is Client? </h6>
            {isClient ? "If you can see this ... you already know" : "No"}
        </section>
    )
}