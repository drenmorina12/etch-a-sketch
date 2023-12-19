const grid = document.querySelector("#grid");
const slider = document.querySelector(".slider");
const output = document.querySelector(".output");

const gridRows = slider.value;
const gridHeight = 500;
const squares = gridRows * gridRows;
const squareHeight = gridHeight / gridRows;
let isDrawing = false;

output.textContent = `${slider.value} X ${slider.value}`;

slider.oninput = function () {
  output.textContent = `${this.value} X ${this.value}`;
};

function getMouseStatus(event) {
  grid.addEventListener("mousedown", () => {
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
      square.style.backgroundColor = "black";
    }
  }
}

grid.addEventListener("mouseover", changeSquareColor);

createGrid();
