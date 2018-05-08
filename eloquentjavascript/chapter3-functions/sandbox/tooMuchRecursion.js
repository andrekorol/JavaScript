function loop(x) {
  if (x >= 1000000000000) // "x >= 10" is the exit condition
    return;
  console.log("x = " + x + '\n');
  loop(x + 1); // the recursive call
}

loop(0);
