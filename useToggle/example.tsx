import * as React from "react";
import { useToggle } from "@uidotdev/usehooks";

function ToggleDemo({on, toggle}) {
    return (
        <div>
            <label className="">
                <input
                    onChange={toggle}
                    className="toggle-checkbox"
                    type="checkbox"
                    checked={on}
                />
                <div className="toggle-switch"></div>
                <span className="toggle-label">{on ? "On" : "Off"}</span>
            </label>
        </div>
    )
}

export default function App() {
    const [on, toggle] = useToggle(true)
    return (
        <section>
            <h1>useToggle</h1>
            <button disabled={on} class="link" onClick={() => toggle(true)}>Trun on</button>
            <button disabled={!on} class="link" onClick={() => toggle(false)}>Trun off</button>
            <button class="link" onClick={toggle}>Toggle</button>
            <button className="link" onClick={() => toggle("nope")}>(Also toggles)</button>
            <ToggleDemo toggle={toggle} on={on} />
        </section>
    )
}