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

const { ports } = Elm.Main.init({
  flags: JSON.stringify(flags)
});

let rootRendered = false;

if (ports && ports.urlChanged) {
  (ports.urlChanged as Elm.Ports.Subscribable).subscribe(() => {
    requestAnimationFrame(async () => {
      const pageComponent = document.querySelector(
        "div[data-ionic-component]"
      ) as HTMLTemplateElement;

      if (pageComponent === null) {
        return;
      }

      const name = pageComponent
        .getAttribute("data-ionic-component")!
        .toLowerCase()
        .split(/\s+/)
        .join("-");
      const html = pageComponent.innerHTML;

      const Component = class extends HTMLElement {
        connectedCallback() {
          this.innerHTML =
            html +
            `
            <ion-nav-push></ion-nav-push>
          `;
        }
      };

      if (!customElements.get(name)) {
        customElements.define(name, Component);
      }

      if (!rootRendered) {
        const nav = document.querySelector("ion-nav") as HTMLElement;
        nav.setAttribute("root", name);
        rootRendered = true;
      } else {
        const navPush = document.querySelector(
          `ion-app > *:last-child ion-nav-push`
        ) as HTMLElement;
        navPush.setAttribute("component", name);
        navPush.click();
      }
    });
  });
}

// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);
