const grid = document.querySelector("#grid");

const gridRows = 16;
const squares = gridRows * gridRows;
const gridHeight = 600;

function createGrid() {
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.height = `${gridHeight / gridRows}px`;
    square.style.width = `${gridHeight / gridRows}px`;
    grid.appendChild(square);
  }
}

createGrid();
