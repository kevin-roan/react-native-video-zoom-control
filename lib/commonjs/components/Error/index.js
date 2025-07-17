"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Error = require("./Error");

Object.keys(_Error).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Error[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Error[key];
    }
  });
});
//# sourceMappingURL=index.js.map