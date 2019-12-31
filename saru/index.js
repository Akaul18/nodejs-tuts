const abcd = require("./extra/abcd").abcd;

// console.log(abcd);

// let obj = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3"
// };

// let { key2, key3 } = obj;
// console.log(obj.key1 + key2 + key3);

const arr = ["abcd", "xyz", "lmno"];

const arr2 = arr.map(ar => {
  return ar.indexOf("a");
});
console.log(arr2);

const arr1 = [1, 2, 3, 4, 65, 33, 78, 99, 123];

const arr3 = arr1.filter(ar => {
  return ar > 65;
});

console.log(arr3);

const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];

// const d = a.concat(b);
const c = [...a, ...b];

console.log(c);

let obj2 = {
  id: 1,
  key1: "value1",
  id: 2,
  key2: "value2",
  id: 3,
  key3: "value3"
};

let obj4 = {
  key4: "value1",
  key5: "value2",
  id2: 3,
  key6: "value3"
};
let obj3 = { ...obj2, ...obj4 };
console.log(obj3);
