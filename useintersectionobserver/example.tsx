import * as React from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

const Section = ({ imgUrl, caption, href }) => {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px"
    });
    return (
        <section>
            <figure ref={ref}>
                {
                    entry?.isIntersecting && (
                        <>
                            <img src={imgUrl} alt={caption} />
                            <figcaption>
                                <a href={href} alt={caption} target="_blank" rel="noreferrer">
                                    {caption}
                                </a>
                            </figcaption>
                        </>
                    )
                }
            </figure>
        </section>
    )
}

export default function App() {
    const demoData = [];
    return(
        <main>
            <header>
                <h1>useIntersectionObserver</h1>
                <h6>
                    (Memes from <a href="https://bytes.dev">bytes.dev</a>)
                </h6>
            </header>
            {
                demoData.map(({imgUrl, href, caption}, index) => {
                    return (
                        <Section key={index} imgUrl={imgUrl} href={href} caption={caption} />
                    )
                })
            }
        </main>
    )
}