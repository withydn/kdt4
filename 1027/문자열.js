let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon   ";

console.log(str1[1]);
console.log(str1[0] + str1[3]);

// Sonny

console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

console.log(str1.length);
console.log(str2.length);

console.log("Strawberry".toUpperCase());
console.log("Strawberry".toLowerCase());

let str3 = str2.trim();
console.log(str3);
console.log(str3.length);

let fruit = "applemango";
let msg1 = "Wow! It is so amazing!!";

//indexOf()
console.log(fruit.indexOf("a"));
console.log(fruit.indexOf("ple"));
console.log(fruit.indexOf("mango"));
console.log(fruit.indexOf("z"));

// charAt()
console.log(fruit.charAt(8));

// slice
console.log(fruit.slice(5));
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-1));

//replace
console.log(msg1.replace("Wow", "Hey"));
console.log(msg1.replaceAll("i", "a"));

// 2022.10.27 => 2022-10-27
console.log("2022.10.27".replaceAll(".", "-"));

// repeat
console.log("ㅎ".repeat(10));

// split
let hello = "hello";
console.log(typeof hello);
hello = hello.split("");
console.log(hello);
console.log(typeof hello);

//
let day = "2022.10.27";
console.log(day.split("."));

// 배열관련 함수

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "puppy", "rabbit", "hamster"];

arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1);

arr2.unshift("cat");
console.log(arr2);
arr2.shift();
console.log(arr2);

arr1[5] = 8;
console.log(arr1);

// includes - true / false 반환
console.log(arr1.includes(3));

console.log(arr2.indexOf("quakka"));

// 기존 배열을 바꿔줌
arr1.reverse();
console.log(arr1);

// join 배열을 문자열로 바꿔줌
let str4 = arr1.join("*");
console.log(str4);

// for of / forEach / for in
arr4 = [1, 2, 3, 4, 5];
let alphabets = ["a", "b", "c", "d", "e"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr4[i]);
}

// for of
for (let el of arr4) {
  console.log(el);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

alphabets.forEach(function (el, index, arr) {
  console.log(el);
  console.log(index);
  console.log(arr);
});

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let el of arr1) {
  sum2 = sum2 + el;
}
console.log(sum2);

console.log("---");

// filter
arr2.filter(function (word) {
  return word.length === 6;
});
console.log(arr2);

let sixAlphabets = arr2.filter(function (word) {
  return word.length === 6;
});
console.log(sixAlphabets);
// map
let arr5 = arr1.map(function (num) {
  return num * 3;
});

console.log(arr5);

// find
let arr6 = arr2.find(function (el) {
  return el.length === 6;
});

console.log(arr6);

let arr7 = arr2.find((el) => {
  return el.length === 5;
});

console.log(arr7);

let cute = arr2.find((el) => el.length === 7);
console.log(cute);
