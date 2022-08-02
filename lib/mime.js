"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//type:类型，h：16字节标识【根据需要，自行添加】
var mime = [{
  type: 'image/png',
  h: '89504e47'
}, {
  type: 'image/gif',
  h: '47494638'
}, {
  type: 'image/jpeg',
  h: 'ffd8ffe0,ffd8ffe1,ffd8ffe2,ffd8ffe3,ffd8ffe8'
}, {
  type: 'image/webp',
  h: '524946461c'
}, {
  type: 'image/heic',
  h: '0020,0018'
}, {
  type: 'video/mpeg',
  h: '00000020'
}];
var _default = mime;
exports["default"] = _default;