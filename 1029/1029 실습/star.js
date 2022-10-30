// q1
function drawStars(n) {
  let star = "*";
  for (i = n; i >= 1; i--) {
    console.log(star.repeat(i));
  }
}

drawStars(5);

// q2
function drawStars2(n) {
  let star2 = "*";
  let blank1 = " ";
  for (i = n; i >= 1; i++) {
    console.log(star2.repeat(i));
  }
  for (j = 1; j > 1; j--) {
    console.log(blank1).repeat(j - n);
  }
}

drawStars2(5);

function drawStars(lines) {
  for (let i = lines; i > 0; i--) {
    console.log("*".repeat(i));
  }
}
function drawStars2(lines) {
  for (let i = 1; i <= lines; i++) {
    console.log(" ".repeat(lines - i) + "*".repeat(i));
  }
}
function drawStars3(lines) {
  for (let i = 1; i <= lines; i++) {
    console.log(" ".repeat(lines - i) + "*".repeat(2 * i - 1));
  }
}
function drawStars4(lines) {
  for (let i = 1; i <= lines; i++) {
    console.log(" ".repeat(lines - i) + "*".repeat(2 * i - 1));
  }
  for (let i = lines - 1; i > 0; i--) {
    console.log(" ".repeat(lines - i) + "*".repeat(2 * i - 1));
  }
}
function drawStars5(lines) {
  for (let i = 1; i <= lines; i++) {
    console.log(" ".repeat(lines - i) + "*".repeat(lines));
  }
}
