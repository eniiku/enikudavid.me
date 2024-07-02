import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { css, cx } from '~/styled-system/css';
import { hstack } from '~/styled-system/patterns';

export const Navbar = component$(() => {
  return (
    <nav class={cx(css({ border: '1px solid', borderColor: 'obsidian', rounded: 'full', py: 5, px: 10, w: 'fit', margin: 'auto', mt: 6 }), hstack({ gap: 10, justify: 'space-evenly', alignItems: 'center' }))}>
      {
        ['home', 'projects', 'contact', 'about'].map((link, index) => (
          <Link key={link} href={`#${link}`} class={css({ fontSize: '2xl', fontFamily: 'helvetica_neue', fontWeight: 'light' })}>
            {index === 0 ?
              <span class={css({ w: 2.5, h: 2.5, rounded: 'full', bg: 'lime.500', display: 'inline-block', mr: 2 })}></span>
              : null}
            {link}
            <span class={css({ srOnly: true })}>Go to {link}&apos; section</span>
          </Link>
        ))
      }
    </nav>
  );
});
