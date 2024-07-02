import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/layout/Navbar/Navbar";

export default component$(() => {
    return (
        <>
            <Navbar />
            <main>
                <h1>alrighty let's get to it</h1>
            </main>
        </>
    )
})

export const head: DocumentHead = {
    title: "David Enikuomehin",
    meta: [
        {
            name: "description",
            content: "Insatiably curious Software Engineer",
        },
    ],
};
