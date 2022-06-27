function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
let width = 30;
let height = 30;

let boxNumber = 0;

input.addEventListener("input", (event) => {
  boxNumber = event.currentTarget.value;
});

boxes.style.display = "flex";

function createBoxes(amount) {
  console.log(amount);
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    width += 10;
    height += 10;
    newBox.style.width = width + "px";
    newBox.style.height = height + "px";
    newBox.style.display = "flex";

    newBox.style.backgroundColor = getRandomHexColor();
    boxes.append(newBox);
  }
}

create.addEventListener("click", () => {
  createBoxes(boxNumber);
});

destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});