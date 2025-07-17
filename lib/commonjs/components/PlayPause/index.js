"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayPause = require("./PlayPause");

Object.keys(_PlayPause).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PlayPause[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PlayPause[key];
    }
  });
});
//# sourceMappingURL=index.js.map