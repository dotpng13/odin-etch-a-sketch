const container = document.querySelector("#container");

function generateGrid (numSide) {
    const idealContainerSide = 512;
    const cellSide = Math.floor(idealContainerSide / numSide);
    const rowFlexBasis = cellSide - 2;
    const cellFlexBasis = cellSide - 4;
    let row, cell;
    
    for (let i = 0; i < numSide; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        row.style.flexBasis = `${rowFlexBasis}px`;
        for (let j = 0; j < numSide; j++) {
            cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.flexBasis = `${cellFlexBasis}px`;
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

generateGrid(16);