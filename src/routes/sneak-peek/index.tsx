import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { css, cx } from "~/styled-system/css";
import { flex, hstack } from "~/styled-system/patterns";
import { Navbar } from "~/components/layout/Navbar/Navbar";
import SquigglyIcon from '~/media/svgs/squiggly-middle.svg?jsx'
import StarIcon from '~/media/svgs/cogwheel.svg?jsx'

export default component$(() => {
    return (
        <>
            <Navbar />

            <main class={css({ mt: 20, fontFamily: 'helvetica_neue' })}>
                <section aria-label="hero section" class={css({ mb: '280px', px: '100px' })}>
                    <div>
                        <h1 class={css({ fontFamily: 'gloria', fontSize: '2rem', mb: -2, color: 'obsidian' })}>
                            Hey! I&apos;m David Enikuomehin,
                        </h1>

                        <h2 class={css({ textStyle: 'h1', color: 'gray.dark' })}>
                            Insatiably curious <br /> Software Engineer
                        </h2>
                    </div>

                    <SquigglyIcon width={298} height={23.2} class={css({ my: 12, mx: 'auto' })} />

                    <h2 class={flex({ justify: "flex-end", textStyle: 'h1', color: 'gray.dark' })}>
                        Endlessly learning, <br />
                        constantly tinkering
                    </h2>
                </section>

                <section aria-label="projects section">
                    <h3 class={cx(hstack({ alignItems: "center", fontSize: '4rem', gap: 6, px: '100px' }))}>
                        <span class={css({ mb: 2 })}>
                            <StarIcon width={100} height={100} />
                        </span>
                        Here's some stuff I've built
                    </h3>

                    <div class={css({ mt: 20, w: 'screen', overflowX: "hidden" })} >
                        {/* Sliding Marquee Row 1 */}
                        <div class={cx(css({ transform: 'translateX(-200px)', mb: 10 }), hstack({ gap: 8 }))}>
                            {Array.from({ length: 4 }, (_, index) => ({
                                name: `project${index + 1}`,
                            })).map((project) => (
                                <div key={project.name} class={css({ w: 650, h: 450, flexShrink: 0, bg: 'stone.300' })}></div>
                            ))}
                        </div>

                        {/* Sliding Marquee Row 2 */}
                        <div class={cx(css({ mb: 10 }), hstack({ gap: 8 }))}>
                            {Array.from({ length: 4 }, (_, index) => ({
                                name: `project${index + 1}`,
                            })).map((project) => (
                                <div key={project.name} class={css({ w: 650, h: 450, flexShrink: 0, bg: 'stone.300' })}></div>
                            ))}
                        </div>
                    </div>
                </section >

                <section aria-label="contacts section">
                    <h3 class={cx(hstack({ alignItems: "center", fontSize: '4rem', gap: 6, px: '100px' }))}>
                        <span class={css({ mb: 2 })}>
                            <StarIcon width={100} height={100} />
                        </span>
                        Get in Touch?
                    </h3>
                </section>

                <pre>
                    &lt;footer class="footer"&gt;
                    &lt;p&gt;Designed & Developed by &lt;a href="https://github.com/eniiku"&gt;David Enikuomehin&lt;/a&gt; &lt;/p&gt;
                    &lt;/footer&gt;
                </pre>

            </main >
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
