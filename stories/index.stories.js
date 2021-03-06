import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import Example from "../src/components/Button/Button";
import PhylogenyTree from "../src/components/PhylogenyTree";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>{text("Text", "Embed entry")}</Button>
  ))
  .add("with other", () => <Example>ignored text</Example>)
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Phylogeny tree", module)
  .add("with text", () => (
    <PhylogenyTree onClick={action("clicked")}>{text("Text", "Embed entry")}</PhylogenyTree>
  ));
