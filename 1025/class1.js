// 함수선언문
helloWorld1();
console.log('--')
function helloWorld1(){
  console.log('helloWorld1');
}

function helloWorld2(){
  return 'helloWorld 2';
}

helloWorld1();
console.log(helloWorld2());

// 함수표현문
let sayHello1 = function(text){
  console.log(`안녕 ${text}`);
}

sayHello1('마루')

// 화살표함수
let sayHello2 = (text) => {
  return `hi, ${text}`
}

console.log(sayHello2('마루'));

// 화살표함수와 함수표현문은 선언 전에 쳐도 나오지 않음.

function square(a) {
  conslog.log(a**2);
}

square(4)