import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          off_white: { value: '#F5F5F5' },
          obsidian: { value: '#000000' },
          gray: {
            dark: { value: '#333333' }, light: { value: '#464646' }
          },
          orange: { value: '#E26540' },
          green: { value: '#29635C' }
        },
        fonts: {
          helvetica_neue: { value: 'var(--font-helvetica-neue), sans-serif' },
          gloria: { value: 'var(--gloria-hallelujah), cursive' }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
