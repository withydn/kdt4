// let x = 1;
//   while(x<=99){
//     console.log(x % 2 == 0 || x % 3 == 0);
    
//   }


function drawStars(n) {
  let lines='*';
  for(i=n; i>0; i--) {
    console.log(lines.repeat(i));
  }
}

drawStars(5);

for(let i=3 ; i>= 1; i--) {
  console.log('*'.repeat(i));
}


for(let i=5 ; i>= 1; i--) {
  console.log('*'.repeat(i));
}

for(let i = 1; i <=3 ; i++) {
  console.log(" ".repeat(3-i) + "*".repeat(i));
}

for(let i = 1; i <=5 ; i++) {
  console.log(" ".repeat(5-i) + "*".repeat(i));
}

let sum1 = 0;
let x = 1 ;

while(x < 100) {
  if (x % 2 === 0 || x % 3 === 0) {
    sum1 = sum1 + x ; 
  }
  x++;
}

console.log(sum1);