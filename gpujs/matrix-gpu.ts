import * as gpuJs from './node_modules/gpu.js'

const gpu = new gpuJs.GPU();
const multiplyMatrix = gpu.createKernel(function (a, b) {
  var sum = 0
  for (var i = 0; i < 512; i++) {
    sum += a[this.thread.y][i] * b[i][this.thread.x]
  }
  return sum
}).setOutput([512, 512])

const c = multiplyMatrix(16, 64)

console.log(c)
