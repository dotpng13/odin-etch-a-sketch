const container = document.querySelector("#container");

function generateGrid(numSide) {
    const idealContainerSide = 960;
    const cellSide = Math.round(idealContainerSide / numSide);
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

function resetGrid() {
    let newSide = prompt("What side length grid would you like?");
    newSide = Number(newSide);

    while(true) {
        if (newSide > 100) {
            newSide = prompt("ERROR: the number you entered is too big!"
                + "\nWhat side length grid would you like?");
        } else if (newSide < 1) {
            newSide = prompt("ERROR: the number you entered is too small!"
                + "\nWhat side length grid would you like?");
        } else if (newSide % 1 !== 0) {
            newSide = prompt("ERROR: the number you entered is not an integer!"
                + "\nWhat side length grid would you like?");
        } else {
            break;
        }
    }

    while (container.firstElementChild) {
        container.firstElementChild.remove();
    }
    start(newSide);
}

function beginDrawing() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "black";
        });
    });
}

function start(numSide) {
    generateGrid(numSide);
    beginDrawing();
}

start(16);