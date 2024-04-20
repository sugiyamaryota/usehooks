import * as React from 'react';
import { useRenderInfo } from '@uidotdev/usehooks';

export default function App() {
    const info = useRenderInfo("App");
    const [count, setCount] = React.useState(0);
    return (
        <section>
            <h1>useRenderInfo</h1>
            <button className="primary" onClick={() => setCount(count + 1)}>
                Re-Render
            </button>
            <table>
                <thead>
                    <tr>
                        <th colspan={2}>Render Info</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(info).map((key) => {
                        return (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{info[key]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
)
}