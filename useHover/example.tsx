import * as React from "react";
import { useHover } from "@uidotdev/usehooks";

function getRandomColor() {
    const colors = ["green", "blue", "purple", "red", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
}

export default function App() {
    const [ref, hovering] = useHover();
    const backgroundColor = hovering
    ? `var(--${getRandomColor()})`
    : "var(--charcoal)";
    return (
        <section>
            <h1>useHover</h1>
            <article ref={ref} style={{backgroundColor}}>
                Hovering? {hovering ? "Yes" : "No"}
            </article>
        </section>
    )
}