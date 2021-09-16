/* eslint-disable no-console */

import { ElMessageBox } from "element-plus";
import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      ElMessageBox({
        title: "Update found",
        message: "A new update has been pushed on the system.",
        confirmButtonText: "OK",
        callback: () => {
          window.location.reload();
        },
      });
      console.log("New content is available; please refresh.");
    },
    offline() {
      ElMessageBox({
        title: "Connection lost",
        message: "No internet connection found.",
        confirmButtonText: "OK",
        callback: () => {
          window.location.reload();
        },
      });
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
