var maxThickness = 10;
var minThickness = 1;
const arcOscilationList = [];
const space = 95;

function setup() {
    createCanvas(window.innerWidth - 30, window.innerHeight - 30);
    frameRate(20);

    noFill();
    stroke(0);

    for (let i = 0; i < 6; i++) {
        createColumn(i * space + space / 2 + maxThickness, i % 2 === 0 ? "top" : "bottom", i % 2 === 0 ? 1 : maxThickness);
    }
}

function draw() {
    background(255);

    for (const arcOscilation of arcOscilationList) {
        arcOscilation.draw();
        arcOscilation.updateTickness();
    }
}


function createColumn(x, d, t) {
    let thickness = t;
    let thicknessMod = 1;

    const spaceOffset = space + maxThickness;

    for (let i = 0; i < (height - (spaceOffset)) / maxThickness; i++) {
        arcOscilationList.push(
            new ArcOscilation(
                x, i * maxThickness + spaceOffset / 2,
                space, space,
                d,
                thickness
            )
        );
        if (thickness === minThickness && thicknessMod < 0) {
            thicknessMod = 1;
        }
        if (thickness === maxThickness && thicknessMod > 0) {
            thicknessMod = -1;
        }
        thickness += thicknessMod;
    }
}

