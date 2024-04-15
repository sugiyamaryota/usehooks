import * as React from 'react';
import { usePreferredLanguage } from '@uidotdev/usehooks';

export default function App() {
    const language = usePreferredLanguage();
    return (
        <section>
            <h1>usePreferredLanguage</h1>
            <p>Change language here - chrome://settings/languages</p>
            <h2>
                The correct data format for <pre>{language}</pre> is {" "}
                <time>{new Date(Date.now()).toLocaleDateString(language)}</time>
            </h2>
        </section>
    )
}