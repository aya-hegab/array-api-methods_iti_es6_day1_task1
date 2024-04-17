var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// console.log(
//   `is every element a string? ${fruits.every((x) => typeof x == "string")}`
// );

console.log(
  `is there some fruits starts with the letter "a"? ${fruits.some((x) =>
    x.startsWith("a")
  )}`
);

// var newarr = fruits.filter((x) => x.startsWith("b") || x.startsWith("s"));
// console.log(`which fruits starts with "b" or "s"? ${newarr.join(" and ")}`);
// console.log(newarr);

// var newarr2 = fruits.map((x) => `i like ${x}`);
// console.log(newarr2);

// newarr2.forEach((x) => console.log(x));
console.log(
  fruits.some(function (x, y, z) {
    console.log(x);
    return x.startsWith("a");
    // console.log(x);
    // console.log(y);
    // console.log(z);
  })
);
// console.log(newArray);
