const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

var chosenRows = 16;
var chosenColumns = 16;

defaultGrid(16, 16)

function defaultGrid(a, b) {
    document.querySelectorAll('.cell').forEach(e => e.remove());
    document.querySelectorAll('.gridRow').forEach(e => e.remove());
    makeRows(a);
    makeColumns(b);
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach(cellColor => {
        cellColor.addEventListener('click', function handleClick() {
            if (cellColor.classList.contains('selected')) {
                cellColor.classList.remove('selected')
            } else {
                cellColor.classList.add('selected')
            }
        });
    });
}

function makeRows(rowNum) {
    for (let x = 0; x < rowNum; x++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};


function makeColumns(cellNum) {
    for (let y = 0; y < rows.length; y++) {
        for (let z = 0; z < cellNum; z++) {
            let newCell = document.createElement("div");
            rows[z].appendChild(newCell).className = "cell";
        };
    };
};


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `${slider.value}x${slider.value}`; 

slider.oninput = function() { 
    output.innerHTML = `${slider.value}x${slider.value}`;
    chosenRows = slider.value;
    chosenColumns = slider.value;
    defaultGrid(chosenRows, chosenColumns)
}

let resetButton = document.querySelector(".button1");
resetButton.addEventListener('click', resetFunction);

function resetFunction () {
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach(cellColor => {
                cellColor.classList.remove('selected')
            }
        );
    };
