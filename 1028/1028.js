console.log(document);

console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);
console.log(document.domain);

// getElementId
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

// getElementByClassName
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));

// getElementByTagName
console.log(document.getElementsByTagName("input"));
console.log(document.getElementsByTagName("div"));

// getElmentByName
console.log(document.getElementsByName("id"));

//
console.log(document.querySelector(".pink"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("[name='id']"));

//
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("input"));
console.log(document.querySelectorAll("div")[2]);

// 실습 pink클래스 하나하나 출력해보기
let pinks = document.querySelectorAll(".pink");
console.log(pinks);

for (let pink of pinks) {
  console.log(pinks);
}
