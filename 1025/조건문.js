let a=5 ;
switch(a){
  case 3:
    console.log('입력값이 4보다 작습니다.');
    break;
  case 4:
    console.log('입력값이 4입니다.');
    break;
  case 5:
    console.log('입력값이 4보다 큽니다.')
  default:
    console.log('어느수인지 파악이 안돼요.')
    break;
}


// 삼항연산자
let num=5;
if(num % 2 === 1){
  console.log('홀수');
}else {
  console.log('짝수');
}

let result=num%2===1 ? '홀수' : '짝수' ;
console.log(result)

let fruit='apple';
console.log(fruit==='banana' ? '맞다' : '틀렸어');

// 오전,오후

let now = new Date().getHours();
let time = ((now > 12) ? "오후" : "오전" );
console.log(time)

let x = 2;
switch (x) {
  case 1:
  case 2:
    console.log('a');
    console.log('b');
  case 3:
    console.log('c');
    break;
  case 4:
    console.log('d');
    break;
  default:
    console.log('f');
}