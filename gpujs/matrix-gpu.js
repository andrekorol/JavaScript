"use strict";
exports.__esModule = true;
var gpuJs = require("./node_modules/gpu.js");
var gpu = new gpuJs.GPU();
var multiplyMatrix = gpu.createKernel(function (a, b) {
    var sum = 0;
    for (var i = 0; i < 512; i++) {
        sum += a[this.thread.y][i] * b[i][this.thread.x];
    }
    return sum;
}).setOutput([512, 512]);
var c = multiplyMatrix(16, 64);
console.log(c);
