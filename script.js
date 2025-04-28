let parent = document.querySelector(".parent");
let middle = document.querySelector(".middle");

for (let i = 0; i < 252; i++) {
  let div = document.createElement("div");
  div.classList.add("child");
  middle.appendChild(div);
}

let child = document.getElementsByClassName("child");
let button = document.querySelector("button");

Array.from(child).forEach(function (element) {
  element.addEventListener("mouseover", function () {
    element.style.color = "yellow";
  });
});

button.addEventListener("click", function () {
  Array.from(child).forEach(function (element) {
    element.style.color = "";
  });
});
