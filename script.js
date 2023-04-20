const container = document.querySelector("#container");

function generateGrid (numRows, numCols) {
    let row, col;
    
    for (let i = 0; i < numRows; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < numCols; j++) {
            col = document.createElement("div");
            col.classList.add("cell");
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

generateGrid(16, 16);