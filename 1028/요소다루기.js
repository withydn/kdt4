// innerHTML, innerText , textContent
let div1 = document.getElementById("div1");
div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다. &hearts;";
div1.innerText = "여기는 <b>첫번째</b> 태그입니다. &hearts;   !!";

console.log(div1.innerText);
div1.textContent = "여기는 <b>첫번째</b> 태그입니다. &hearts;   !!";
console.log(div1.textContent);
// text는 콘솔에 띄어쓰기가 안 뜸,콘텐트는 뜸

let span = document.querySelector("span");
span.innerHTML = "맛없다ㅡㅡ";
console.log(span.innerHTML);

// setAttribute -> 속성접근.변경
console.log(document.getElementById("pooh").id);
document.getElementById("pooh").setAttribute("alt", "푸");
console.log(document.getElementById("pooh"));

let a = document.querySelector("#naver");
a.textContent = "google";
a.setAttribute("href", "https://www.google.com");
console.log(a.getAttribute("href"));

// style 속성 사용
let list = document.querySelectorAll("#friends li");
for (let li of list) {
  //   li.style.backgroundColor = "blue";
  //   li.style.color = "white";
  //   li.style.fontSize = "1.3rem";
  li.classList.add("add-li");
}

let h1 = document.querySelector("h1");
h1.classList.add("add-h1");

// 노드찾기
let friends = document.getElementById("friends");
let tigger = document.getElementById("tigger");
// 자식노드에 접근.children
console.log(friends.children);
console.log(friends.children[0]);

//부모노드에 접근
console.log(tigger.parentNode);

//형제노드
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling.nextElementSibling);

// 노드 생성, 추가, 삭제 과정
// 1. 생성 creatElement
let container = document.querySelector(".container");

let p = document.createElement("p");
console.log(p);
p.innerText = "추가된 p태그";
p.style.fontWeight = 700;
p.style.backgroundColor = "red";
// 생성 되었고 집어넣기
container.append(p);

let p2 = document.createElement("p");
p2.innerText = "p2";
p2.classList.add("p-2");
container.appendChild(p2);

let p3 = document.createElement("p");
p3.classList.add("p-3");
p3.innerText = "p3";
container.appendChild(p3);

// before.after
let h3 = document.createElement("h3");
h3.textContent = "새로 추가된 제목 h3";
h1.before(h3);

let h2 = document.createElement("h2");
h2.textContent = "새로 추가된 제목 h2";
h1.after(h2);

let firstLi = document.querySelector("li");
let div = firstLi.parentElement;
console.log(div);

div.removeChild(firstLi);
firstLi.remove();
