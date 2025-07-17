"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Back = require("./Back");

Object.keys(_Back).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Back[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Back[key];
    }
  });
});
//# sourceMappingURL=index.js.map