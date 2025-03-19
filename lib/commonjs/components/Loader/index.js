"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = require("./Loader");

Object.keys(_Loader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Loader[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Loader[key];
    }
  });
});
//# sourceMappingURL=index.js.map