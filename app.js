const grid = document.querySelector("#grid");

const gridRows = 16;
const gridHeight = 600;
const squares = gridRows * gridRows;
const squareHeight = gridHeight / gridRows;

function createGrid() {
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.height = `${squareHeight}px`;
    square.style.width = `${squareHeight}px`;
    grid.appendChild(square);
  }
}

createGrid();
