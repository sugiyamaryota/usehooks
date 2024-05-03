import * as React from "react";
import { useMap } from "@uidotdev/usehooks";

export default function App() {
    const map = useMap([
        ["Jazz", 32],
        ["Suns", 50]
    ])
    return (
        <section>
            <h1>useMap</h1>
            <table>
                <thead>
                    <tr>
                        <th colspan={4}>Jazz vs Suns</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(map.keys()).map((team) => {
                        const score = map.get(team);
                        return (
                            <tr key={team}>
                                <th style={{width: "25%"}}>{team}</th>
                                <td style={{width: "50%"}}>{score}</td>
                                <td style={{width: "12.5%"}}>
                                    <button
                                        className="link"
                                        onClick={() => {
                                            map.set(team, score+2)
                                        }}
                                    >
                                        + 2
                                    </button>
                                </td>
                                <td style={{width: "12.5%"}}>
                                <button
                                        className="link"
                                        onClick={() => {
                                            map.set(team, score+3)
                                        }}
                                    >
                                        + 3
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}