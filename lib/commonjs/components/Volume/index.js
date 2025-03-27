"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Volume = require("./Volume");
Object.keys(_Volume).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Volume[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Volume[key];
    }
  });
});
//# sourceMappingURL=index.js.map