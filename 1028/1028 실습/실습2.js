let container = document.querySelector(".container");
container.style.backgroudColor = "#eee";
container.style.textAlign = "center";
console.log(container);

let text = document.querySelectorAll("span");
for (let span of text) {
  span.style.color = "blueviolet";
  span.style.fontWeight = "bold";
}
