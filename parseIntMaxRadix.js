var maxRadix = 2;
var testStr = "0100";
while (parseInt(testStr, maxRadix)) {
  maxRadix++;
}
maxRadix--;
console.log("Maximum radix for parseInt is: ", maxRadix);