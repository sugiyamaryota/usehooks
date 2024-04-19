import * as React from 'react';
import { useScript } from '@uidotdev/usehooks';
// import ScriptMeta from './ScriptMeta'

export default function App() {
    const status = useScript(`https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.js`,{removeOnUnmount: false});
    React.useEffect(() => {
        if(typeof window.$$ !== "undefined"){
            const id = document.id("moo")
            id.setStyle("background-color", "var(--green)");
        }
    },[status])
    const isReady = status === "ready";
    return (
        <section>
            <h1>useScript</h1>
            <p>
                <span id="moo" className={isReady ? "ready":""} />
                <label>Status: {status}</label>
            </p>
            {status === "ready" && (
                // <ScriptMeta title="MooTools" status={status} meta={window.MooTools} />
            )}
        </section>
    )
}