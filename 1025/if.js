// if문
if(5>3){
  console.log('마자');
}

let number=Number(prompt('숫자 입력해주쇼'));
console.log(typeof number);

if(number>10){
  console.log('10보다 큰 수입니다.');
}else{
  console.log('10과 같거나 작은 수입니다.');
}

if(number>10) {
  console.log('10보다 큰 수입니다.');
}else if(number===10) {
  console.log('10입니다.');
}else {
  console.log('10보다 작은 수입니다.');
}

if(number>100){
  console.log('잘못된 점수입니다.');
}else if(number>=90){
  console.log('A');
}else if(number>=80){
  console.log('B');
}else if(number>=70){
  console.log('C');
}else{
  console.log('F');
}

// if문 중첩

let userId='user01';
let userPw='1234qwer';

function loginUser(){
  let inputId=prompt('id를 입력해주세요.');
  let inputPw=prompt('pw를 입력해주세요.');

  if(userId===inputId) {
    if(userPw===inputPw){
      console.log('로그인 성공!');
      alert(`안녕하세요 $(userId)님`);
    }else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  }else if(inputId===''){
    alert('id를 입력해주세요.');
  }else{
    alert('없는 아이디입니다.');
  }
}

// loginuser();

// Switch 조건문



