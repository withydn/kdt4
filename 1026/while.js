// while문
let n2=1;
while (n2 <= 5) {
  console.log(n2);
  n2++;
}

let n3=9 ;
while (n3 >= 4) {
  console.log(n3);
  n3--;
}

//1~10까지의 짝수
n2=1;
while (n2 <= 10) {
  if(n2%2===0) {
    console.log(n2);
  }
  n2++;
}

// 무한루프
// let a = 0 ;
// while (true) {
//   console.log(a);
//   a++;
    
//     if(a>10){
//       break;
//     }
// }

// let b=0 ;
// confirm('dd')
// while(confirm('계속 띄울까요')){
//   b++;
//   alert(`${b}번째 alert 창`)
// }

// continue
let sum3=0;
for(let i =0 ; i <= 10 ; i++) {
  if(i%2===0) {
    continue;
  }
  sum3+=i;
}
console.log(sum3)