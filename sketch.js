function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let cols;
let rows;
let resolution = 10;


function setup() {
    var canvas = createCanvas(520, 1000)
    canvas.parent('lifeInWeeks')
    cols = width / resolution;
    rows = height / resolution;
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 1
        }
    }
}

function draw() {
    background(0)

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution
            let y = j * resolution
            if (grid[i][j] == 1) {
                fill(255)

                stroke(0)

                rect(x, y, resolution - 1,);
            }
        }
    }
}