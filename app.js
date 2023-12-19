const grid = document.querySelector("#grid");
const slider = document.querySelector(".slider");
const output = document.querySelector(".output");
const clearButton = document.querySelector(".clear-button");
const colorPicker = document.querySelector(".color-picker");
const buttons = document.querySelectorAll(".button");

const gridRows = slider.value;
const gridHeight = 500;
const squares = gridRows * gridRows;
const squareHeight = gridHeight / gridRows;
let isDrawing = false;
let color = "#000000";

output.textContent = `${slider.value} X ${slider.value}`;

slider.oninput = function () {
  output.textContent = `${this.value} X ${this.value}`;
};

function getMouseStatus(event) {
  grid.addEventListener("mousedown", (event) => {
    event.preventDefault();
    isDrawing = true;
  });
  grid.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  grid.addEventListener("mouseleave", () => {
    isDrawing = false;
  });
}

function createGrid() {
  getMouseStatus();
  grid.style.width = `${gridHeight}px`;
  grid.style.height = `${gridHeight}px`;
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("data-id", i);
    square.style.height = `${squareHeight}px`;
    square.style.width = `${squareHeight}px`;
    grid.appendChild(square);
  }
}

function changeSquareColor(event) {
  if (isDrawing) {
    const square = event.target;
    if (square.classList.contains("square")) {
      square.style.backgroundColor = color;
    }
  }
}

colorPicker.addEventListener("input", () => {
  color = colorPicker.value;
});

function setActiveButton(button) {
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveButton(button);
    if (button.classList.contains("eraser-button")) {
      color = "#FFFFFF";
    } else {
      color = colorPicker.value;
    }
  });
});

grid.addEventListener("mouseover", changeSquareColor);

createGrid();
