"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const addStyles = (win, styles) => {
  styles.forEach((style) => {
    const link = win.document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", style);
    win.document.getElementsByTagName("head")[0].appendChild(link);
  });
};

const VueHtmlToPaper = {
  install(_i, options = {}) {
    const globals = _i.prototype || _i.config.globalProperties;
    globals.$htmlToPaper = (el, localOptions, cb = () => true) => {
      const defaultName = "_blank",
        defaultSpecs = ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
        defaultStyles = [],
        defaultTimeout = 1000,
        defaultAutoClose = true,
        defaultWindowTitle = window.document.title;
      let {
        name = defaultName,
        specs = defaultSpecs,
        styles = defaultStyles,
        timeout = defaultTimeout,
        autoClose = defaultAutoClose,
        windowTitle = defaultWindowTitle,
      } = options;

      if (options.name) name = options.name;
      if (options.specs) specs = options.specs;
      if (options.styles) styles = options.styles;
      if (options.timeout) timeout = options.timeout;
      if (options.autoClose) autoClose = options.autoClose;
      if (options.windowTitle) windowTitle = options.windowTitle;

      specs = !specs.length ? specs.join(",") : "";

      let element = el;
      if (typeof el === "string" || el instanceof String) {
        element = window.document.getElementById(el);
      }
      if (!element) {
        alert(`Element to print #${el} not found!`);
        return;
      }

      const url = "";
      const win = window.open(url, name, specs);

      win.document.write(`
        <html>
          <head>
            <title>${windowTitle}</title>
          </head>
          <body>
            ${element.innerHTML}
          </body>
        </html>
      `);

      addStyles(win, styles);

      const promise = new Promise((resolve) => {
        setTimeout(() => {
          win.focus();
          win.print();
          autoClose && win.document.close();
          autoClose && win.close();
          if (cb) cb();
          resolve();
        }, timeout);
      });

      return cb ? true : promise;
    };
  },
};

exports.default = VueHtmlToPaper;
