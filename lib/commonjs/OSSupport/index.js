"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlatformSupport = require("./PlatformSupport");

Object.keys(_PlatformSupport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PlatformSupport[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PlatformSupport[key];
    }
  });
});
//# sourceMappingURL=index.js.map