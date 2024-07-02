import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import custom_styles from "./custom.css?inline";

export default component$(() => {
  useStyles$(custom_styles);
  return (
    <>
      <Slot />
    </>
  );
});
