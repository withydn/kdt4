// 오전,오후

let now = new Date().getHours();
let time = "현재" + "시간은" + ((now > 12) ? "오후" : "오전" ) + "입니다.";
document.write(time);


// 13의 배수
 for(i = 1 ;  i<=10000 ; i++ ){
  if(i%13%1==0 ) {
    result = n;
  }
}