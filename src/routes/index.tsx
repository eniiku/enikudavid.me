import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { css, cx } from "~/styled-system/css";
import { flex } from "~/styled-system/patterns";

import grain from '~/styles/grain.css?inline'
import MemeImage from '~/media/images/meme.jpeg?jsx';
import ArrrowLeft from '~/media/svgs/squiggly-left.svg?jsx';
import ArrorRight from '~/media/svgs/squiggly-right.svg?jsx'


export default component$(() => {
  useStyles$(grain);
  return (
    <main class={cx(
      flex({ justify: 'center', align: 'center' }),
      css({ h: '100vh', bg: 'off_white', fontFamily: 'helvetica_neue' }),
      "grain-bg"
    )}>
      <div>
        <h1 class={css({
          fontSize: '6rem',
          fontWeight: 'light',
          textAlign: 'center',
          lineHeight: 'tight'
        })}>Website still in <br /> production 🚧</h1>

        <div class={css({ h: 300, mt: 8, pos: 'relative', '& img': { w: 'auto', h: 'full', display: 'block' } })}>
          <MemeImage class={css({ mx: 'auto' })} />
        </div>

        <p class={css({
          fontSize: '2rem',
          fontWeight: 'light',
          color: 'gray.light',
          mt: '16px',
          mb: '32px',
          textAlign: 'center'
        })}>In the meantime...</p>

        <div class={cx(css({ pos: 'relative', zIndex: 100 }), flex({ justify: 'space-between', align: 'center' }))}>
          <span class={css({ fontFamily: 'gloria', fontSize: 'xl', lineHeight: "140%", color: 'orange', pos: 'absolute', top: -44, left: -48 })}>Connect with <br /> me on socials</span>
          <span class={css({ fontFamily: 'gloria', fontSize: 'xl', lineHeight: "140%", color: 'green', pos: 'absolute', top: -28, right: -52 })}>Check out the <br /> site in progess</span>

          <ArrrowLeft class={css({ pos: 'absolute', zIndex: '10', top: '-160%', left: -36 })} />
          <ArrorRight class={css({ pos: 'absolute', zIndex: '10', top: '-70%', right: -28 })} />

          <button class={css({
            display: "block",
            border: '3px solid',
            borderColor: ["#532011"],
            bg: "#DB7252",
            color: "white",
            p: '12px 32px',
            rounded: '8px',
            fontFamily: 'helvetica_neue',
            fontSize: '1.25rem',
            fontWeight: 'medium',
            position: 'relative',
            zIndex: '1',

            _before: {
              content: '""',
              position: 'absolute',
              top: 3,
              left: 0,
              w: "full",
              h: "full",
              bg: "rgba(157, 63, 35, 0.7)",
              rounded: '8px',
              border: '3px solid #532011',
              zIndex: -1
            }

          })}>
            I'm on Linkedin
          </button>

          <button class={css({

            pos: 'relative',
            border: '3px solid',
            borderColor: "green",
            bg: "off_white",
            color: "obsidian",
            p: '12px 32px',
            rounded: '8px',
            fontFamily: 'helvetica_neue',
            fontSize: '1.25rem',
            fontWeight: 'medium',
            zIndex: 50,
            _after: {
              content: '""',
              pos: 'absolute',
              width: 'full',
              height: 'full',
              left: 0,
              top: 3,
              border: '3px solid',
              borderColor: "green",
              bg: "#2E8379",
              rounded: '8px',
              zIndex: -10
            },
          })}>
            View Skeleton
          </button>
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "David Enikuomehin",
  meta: [
    {
      name: "description",
      content: "Insatiably curious Software Engineer",
    },
  ],
};
