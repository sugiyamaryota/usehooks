import * as React from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";

const randomHash = crypto.randomUUID();

export default function App() {
    const [copiedText, copyToClipboard] = useCopyToClipboard();
    const hasCopiedText = Boolean(copiedText);
    return (
        <section>
            <h1>useCopyToClipboard</h1>
            <article>
                <label>Fake API key</label>
                <pre>
                    <code>{randomHash}</code>
                    <button
                        disabled={hasCopiedText}
                        className="link"
                        onClick={() => copyToClipboard(randomHash)}
                    >
                        {hasCopiedText ? '' : ''}
                    </button>
                </pre>
            </article>
            {hasCopiedText && (
                <dialog open={hasCopiedText}>
                    <h4>
                        Copied{" "}
                        <span role="img" aria-label="Celebrate Emoji">
                            🎉
                        </span>
                    </h4>
                    <textarea placeholder="Paste your copied text" />
                </dialog>
            )}
        </section>
    )
}