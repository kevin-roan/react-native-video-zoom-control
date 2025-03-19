"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Timer = require("./Timer");

Object.keys(_Timer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Timer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Timer[key];
    }
  });
});
//# sourceMappingURL=index.js.map