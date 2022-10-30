let todo1 = document.getElementsByClassName("todo");
let done1 = document.getElementsByClassName("done");

console.log(todo1);
console.log(done1);

document.getElementsByClassName("todo")[0].className = "done";
document.getElementsByClassName("todo")[0].className = "done";
document.getElementsByClassName("done")[2].className = "todo";
document.getElementsByClassName("done")[2].className = "todo";
document.getElementsByClassName("done")[2].className = "todo";

// cosnt lis = document.querySelectorAll('li');
// for (let li of lis) {
//   li.classList.toggle('done');
//   li.classList.toggle('todo');
// }
