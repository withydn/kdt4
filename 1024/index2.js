// 1. string
let myName = '마루'
let email = 'maru@naver.com'
let a = "'마루'"
console.log(myName);
console.log(email);
console.log(a);

console.log('내 이름은',myName) 
console.log('내 이름은'+myName)
console.log(`내 이름은 ${myName}`);

// 2.number
let number = 123;
let opcaity = 0.7;

// 3.boolean
let checked=true;
let unchecked=false;
console.log(checked);
console.log(unchecked);

// 4. undefined
let undef;
console.log(undef);

// 5. null
let empty = null;
console.log(empty);

//6. 배열
let fruits =  ['orange','apple','pineapple','banana'];
let fruits2 =new Array('orange','apple','pineapple','banana')

console.log(fruits);
console.log(fruits2);

let data =[1, 'apple', false, undefined];
console.log(data);

// 배열 응용
// 2차원 배열
const korean = [[1,2,3,4,5],[11,12,13,14,15],[21,22,23,24,25]];
console.log(korean[0]);
console.log(korean[1][2]);

const letters = [
  ['사', '스', '자', '크'],
  ['진', '안', '리', '이'],
  ['가', '수', '림', '나'],
  ['아', '으', '차', '운'],
];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);

console.log(letters[3][0]+letters[1][3]+letters[0][1]+letters[0][3]+letters[2][2]);
let nums = [
  [
    [1,2,3],
    [4,5,6]  
  ],
  [
    [7,8,9],
    [10,11,12]
  ]
]
// 8을 출력하기
console.log(nums[1][0][1])

// 7.오브젝트, (딕셔너리)

let cat ={
  name : '나비',
  age : 1,
  isCute : true ,
  mew:function(){
    return '냐옹';
  },
};

console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());

console.log(cat['name']);
console.log(cat['age']);
console.log(cat['mew']());

let dog ={
  name : '마루',
  age : 4,
  alone : false ,
  snack:function(){
    return '포카칩 맛있어';
  },
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);
console.log(dog.alone);
console.log(dog.snack());

console.log(typeof 'aa');
console.log(typeof 1);
let b = true;
console.log(typeof b);
console.log(typeof NaN);

console.log('3'-3);
console.log('a'-3);

// 실습문제
console.log(`${typeof(77)} ins't ${typeof 'a'} data type`);
console.log(`typeof를 array나 null에 사용하면, ${typeof null} 을 얻을 수 있습니다. `);

//형 변환
// propt는 문자로 저장이 되어서 80+50이면 8050이 됨

console.log('--------------------------------------------------------');

let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));
console.log(typeof str1.toString());
console.log(typeof str1);

let n1=true;
let n2=false;
let n3='123';
let n4='123.9';

console.log(Number(n1));
console.log(Number(n2));

console.log(Number(n3));
console.log(Number(n4));

console.log(parseInt(n3));
console.log(parseInt(n4));

// let mathScore = prompt("수학점수를 입력해주세요."); 
// let engScore = prompt("영어점수를 입력해주세요.");
// let avgScore = (Number(mathScore) + Number(engScore)) / 2;
// console.log(avgScore);




