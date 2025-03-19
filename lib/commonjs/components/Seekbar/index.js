"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Seekbar = require("./Seekbar");

Object.keys(_Seekbar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Seekbar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Seekbar[key];
    }
  });
});
//# sourceMappingURL=index.js.map