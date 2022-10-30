let now = new Date();
console.log(now);

console.log(now.getFullYear(), "년");
console.log(now.getMonth() + 1, "월");
console.log(now.getDate(), "일");
console.log(now.getHours(), "시");
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay(), "요일");

console.log(now.getDay() === 0 || now.getDay() === 5 ? "주말" : "평일");

// Math 객체

//property
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

//method
console.log(Math.min(100, 45, 23, 88));
console.log(Math.max(100, 23, 45, 88));
console.log(Math.round(4.2));
console.log(Math.floor(166.7));
console.log(Math.ceil(166.7));

// 00 <= ㅌ < 1*100
console.log(Math.random());

console.log(Math.floor(Math.random() * 100));

//
console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 99) + 2);
console.log(Math.floor(Math.random() * 2) + 21);

console.log();
