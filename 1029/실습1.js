const box = document.querySelector(".box");
console.log(box);

box.addEventListener("click", function () {
  if (box.classList.contains("orange")) {
    box.classList.add("skyblue");
    box.classList.remove("orange");
  } else {
    box.classList.add("orange");
    box.classList.remove("skyblue");
  }
});

//
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const input = document.querySelector(".text");
const span = document.querySelector("span");

btn1.addEventListener("click", function () {
  input.value = "";
  input.setAttribute("placeholder", "아이디를 입력하세요");
  span.innerText = "아이디를 입력하세요";
});

btn2.addEventListener("click", function () {
  span.innerHTML = input.value;
  input.value = "";
});
