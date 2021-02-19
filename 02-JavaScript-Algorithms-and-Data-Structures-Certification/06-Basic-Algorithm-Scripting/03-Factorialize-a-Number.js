function factorialize(num) {
  let result = 1;

  for (let i = num; i > 0; i -= 1) {
    result *= i;
  }

  return result;
}


// function factorialize(num) {
//   let result = 1;

//   while (num > 0) {
//     // console.log(num)
//     result *= num;
//     num -= 1;
//   }
//   return result;
// }

console.log(factorialize(5));