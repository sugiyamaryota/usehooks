import * as React from 'react';
import { useOrientation } from '@uidotdev/usehooks';

export default function App(){
    const orientation = useOrientation();
    return (
        <section>
            <article
                style={{ "--angle": `${orientation.angle}deg`}}
                className={orientation.type.toLowerCase()}
            />
            <table>
                <tbody>
                    {Object.keys(orientation).map((key) => {
                        return (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{orientation[key]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}