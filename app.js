const grid = document.querySelector("#grid");

const gridRows = 16;
const gridHeight = 600;
const squares = gridRows * gridRows;
const squareHeight = gridHeight / gridRows;
let click = false;

function getMouseStatus() {
  grid.addEventListener("mousedown", () => {
    click = true;
  });
  grid.addEventListener("mouseup", () => {
    click = false;
  });
}

function createGrid() {
  getMouseStatus();
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("data-id", i);
    square.style.height = `${squareHeight}px`;
    square.style.width = `${squareHeight}px`;
    grid.appendChild(square);
    square.addEventListener("mouseover", changeSquareColor);
  }
}

createGrid();

function changeSquareColor() {
  if (click) {
    this.style.backgroundColor = "black";
  }
}
