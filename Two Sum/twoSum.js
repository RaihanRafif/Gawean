const nums = [3, 2, 4];
let target = 6;

let value = 0;
let number1 = 0;
let number2 = 0;
var i = 0;
var j = i + 1;

for (var i = 0; i < nums.length - 1; i++) {
  number1 = nums[i];
  if (value == target) {
    break;
  }
  for (var j = i + 1; j < nums.length; j++) {
    number2 = nums[j];
    value = number1 + number2;
    if (value == target) {
      break;
    }
  }
}

console.log(`Output : [${i - 1},${j}]`);
