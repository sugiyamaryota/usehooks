import * as React from "react";
import { useSet } from "@uidotdev/usehooks";

function format(val) {
    return val.toLocaleLowerCase().replace(/\s/g,"");
}

export default function App() {
    const [value, setValue] = React.useState("");
    const set = useSet([
        "benadam11",
        "tylermcginnis",
        "lynnandtonic",
        "alexbrown40",
        "uidotdev",
        "bytesdotdev",
        "reactnewsletter",
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        set.add(format(username));
        setValue("");
        e.target.reset();
        e.target.focus();
    }

    const hasError = set.has(value);

    return (
        <section>
            <h1>useSet</h1>
            <p>Check if your username is available</p>
            <article>
                <form className={hasError ? "error" : ""} onSubmit={handleSubmit}>
                    <span>@</span>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter a username"
                        onChange={(e) => {
                            setValue(format(e.target.value));
                        }}
                    />
                </form>
                {hasError && <label>woops that user is taken</label>}
            </article>
            <table>
                <tbody>
                    {Array.from(set.values()).map((username) => {
                        const match = username === value;
                        return (
                            <tr key={username}>
                                <th>username</th>
                                <td
                                    style={{
                                        borderColor: match ? "var(--red)" : "var(--charcoal)",
                                    }}
                                >
                                    {username}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}