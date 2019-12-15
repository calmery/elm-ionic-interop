import { defineCustomElements } from "@ionic/core/loader";
import "ionicons/icons";
import "@ionic/core/css/ionic.bundle.css";
import "./index.scss";
import { register } from "./serviceWorker";
import { Elm } from "./Main.elm";
import { loadingController } from "@ionic/core";

register();

// https://github.com/ionic-team/ionic/blob/bf2953cf85c078b0fd567e51208eacd5dc9b87cd/packages/react/src/components/index.ts#L51
defineCustomElements(window);

export const flags = {
  message: "Hello World"
};

const { ports } = Elm.Main.init({
  flags: JSON.stringify(flags)
});

// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);

if (ports && ports.createAlert) {
  (ports.createAlert as Elm.Ports.Subscribable).subscribe(
    async ({ header, message }: { header: string; message: string }) => {
      const alertController = document.querySelector("ion-alert-controller")!;
      const alert = await alertController.create({
        header,
        message,
        buttons: [
          {
            text: "OK",
            handler: () =>
              (ports.onClickOkButton as Elm.Ports.Sendable).send(null)
          }
        ]
      });
      await alert.present();
    }
  );
}

if (ports && ports.createLoading) {
  (ports.createLoading as Elm.Ports.Subscribable).subscribe(async () => {
    const loadingController = document.querySelector("ion-loading-controller")!;
    const loading = await loadingController.create({
      duration: 3000,
      message: "Please wait ..."
    });
    await loading.present();
  });
}

if (ports && ports.createToast) {
  (ports.createToast as Elm.Ports.Subscribable).subscribe(async () => {
    const toastController = document.querySelector("ion-toast-controller")!;
    const toast = await toastController.create({
      duration: 3000,
      message: "Hello World !"
    });
    await toast.present();
  });
}

if (ports && ports.refreshComplete) {
  (ports.refreshComplete as Elm.Ports.Subscribable).subscribe(async () => {
    const refresher = document.querySelector("ion-refresher");

    if (refresher) {
      refresher.complete();
    }
  });
}
