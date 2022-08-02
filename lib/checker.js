"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mime = _interopRequireDefault(require("./mime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function check(header) {
  for (var i in _mime["default"]) {
    var arr = _mime["default"][i].h.split(',');

    var offset = (_mime["default"][i].offset || -1) + 1; //偏移量

    for (var j in arr) {
      var _byte = arr[j].toLowerCase().replace(/\s+/g, "");

      if (header.indexOf(_byte) == offset) {
        return _mime["default"][i].type;
      }
    }
  }

  return 'unknown';
}

function loadmime(file, callback) {
  return new Promise(function (resolve, reject) {
    var blob = file.slice(0, 128); //仅获取前128字节。

    var reader = new FileReader();

    reader.onloadend = function (e) {
      var arr = new Uint8Array(e.target.result).subarray(0, 200);
      var header = "";

      for (var i = 0; i < arr.length; i++) {
        header += arr[i].toString(16);
      }

      var type = check(header);
      resolve(type);
    };

    reader.onerror = function (e) {
      reject(e);
    };

    reader.readAsArrayBuffer(blob);
  });
}

var _default = loadmime;
exports["default"] = _default;