import * as React from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";

function Modal({handleClose}) {
    useLockBodyScroll();
    return (
        <div>
            <dialog>
                <header>
                    <button onclick={handleClose}>icon</button>
                    <h2>Modal</h2>
                </header>
                <section>
                    {/* demo content */}
                </section>
            </dialog>
        </div>
    )
}

export default function App() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            {isOpen && <Modal handleClose={() => setIsOpen(false)} />}
            <main>
                <header>
                    <h1>useLockBodyScroll</h1>
                </header>
                {["red", "blue", "green", "pink", "purple", "yellow"].map((color) => {
                    return(
                        <section
                            style={{
                                backgroundColor: `var(--${color})`,
                                width: "100%",
                                height: "50vh"
                            }}
                        />
                    )
                })}
                <button className="primary" onClick={() => setIsOpen(true)}>
                    openModal
                </button>
            </main>
        </>
    )
}