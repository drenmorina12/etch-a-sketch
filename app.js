const grid = document.querySelector("#grid");

const gridRows = 16;
const gridHeight = 600;
const squares = gridRows * gridRows;
const squareHeight = gridHeight / gridRows;
let isDrawing = false;

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
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("data-id", i);
    square.style.height = `${squareHeight}px`;
    square.style.width = `${squareHeight}px`;
    grid.appendChild(square);
  }
}

grid.addEventListener("mouseover", changeSquareColor);

createGrid();

function changeSquareColor(event) {
  if (isDrawing) {
    const square = event.target;
    if (square.classList.contains("square")) {
      square.style.backgroundColor = "black";
    }
  }
}
