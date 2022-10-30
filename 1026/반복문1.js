// 실습 : 1~n까지의 합 구하기
let n = 11;
let sum1 = 0;
for(let i= 1 ; i<n+1 ; i++) {
  // sum1=sum1+i;
  sum1+=i;
}

console.log(sum1);

// 배열과 함께 쓰는 for문
let fruits=['apple','mango','orange','mangostean'];
console.log(fruits.length);

for(let i=0; i<fruits.length ; i++ ) {
  console.log(fruits[i]);
}

let numsArr= [99, 99, 98, 85, 77];
let numsSum=0 ;
for (let i=0 ; i< numsArr.length ; i++) {
  numsSum=numsSum+numsArr[i];
}

console.log(numsSum/numsArr.length);

// if문과 for문
// 짝수일 때의 합

let sum2 = 0;
for(i=0 ; i<=20 ; i++) {
  if(i%2 === 0) {
    sum2= sum2+i;
  }
}

console.log(sum2)