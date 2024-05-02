import * as React from "react";
import { useKeyPress } from "@uidotdev/usehooks";

export default function App() {
    const [activeKey, setActiveKey] = React.useState("")

    useKeyPress("ArrowRight", onKeyPress);
    useKeyPress("ArrowLeft", onKeyPress);
    useKeyPress("ArrowUp", onKeyPress);
    useKeyPress("ArrowDown", onKeyPress);

    function onKeyPress(e) {
        e.preventDefault();
        setActiveKey(e.key);
        setTimeout(() =>{
            setActiveKey("")
        },600)
    }
    return (
        <section>
            <h1>useKeyPress</h1>
            <p>Press one of the arrow keys on your keyboard</p>
            <article>
                <button className={activeKey === "ArrowUp" ? "pressed" : ""}>
                    <span>&uarr;</span>
                </button>
                <button className={activeKey === "ArrowLeft" ? "pressed" : ""}>
                    <span>&larr;</span>
                </button>
                <button className={activeKey === "ArrowDown" ? "pressed" : ""}>
                    <span>&darr;</span>
                </button>
                <button className={activeKey === "ArrowRight" ? "pressed" : ""}>
                    <span>&rarr;</span>
                </button>
            </article>
            {Boolean(activeKey) && <label>{activeKey} was pressed</label>}
        </section>
    )
}