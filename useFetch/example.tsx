import * as React from 'react';
import { useFetch } from '@uidotdev/usehooks';

export default function App() {
    const [count, setCount] = React.useState(1)
    const {error, data} = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${count}`
    )
    return (
        <section>
            <button
                disabled={count < 2}
                className="link"
                onClick={() => setCount((c) => c-1)}
            >
                Prev
            </button>
            <button
                className="link"
                onClick={() => setCount((c) => c+1)}
            >
                Next
            </button>
        </section>
    )
}