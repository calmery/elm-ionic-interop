import { defineCustomElements } from "@ionic/core/loader";
import "@ionic/core/css/ionic.bundle.css";
import "./index.scss";
import { register } from "./serviceWorker";
import { Elm } from "./Main.elm";

register();

// https://github.com/ionic-team/ionic/blob/bf2953cf85c078b0fd567e51208eacd5dc9b87cd/packages/react/src/components/index.ts#L51
defineCustomElements(window);

export const flags = {
  message: "Hello World"
};

Elm.Main.init({
  flags: JSON.stringify(flags)
});

// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);
