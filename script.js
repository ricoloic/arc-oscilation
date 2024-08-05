var maxThickness = 15;
var minThickness = 5;
var speedWhite = 1.2;
var speedBlack = 0.9;
const arcOscilationList = [];
const space = 100;

function setup() {
    createCanvas(window.innerWidth - 30, window.innerHeight - 30);
    frameRate(20);

    noFill();
    stroke(0);

    const used = floor(width / space);
    const rest = (width / space - used) * space;

    for (let i = 0; i < used; i++) {
        createColumn(
            (i * space + space / 2 + maxThickness) + rest / 2,
            i % 2 === 0 ? "top" : "bottom",
            i % 2 === 0 ? minThickness : maxThickness
        );
    }
}

function draw() {
    background(255);

    for (const arcOscilation of arcOscilationList) {
        arcOscilation.draw();
        arcOscilation.update();
    }
}


function createColumn(x, d, t) {
    let thickness = t;
    let thicknessMod = 1;

    const spaceOffset = space + maxThickness;

    for (let i = 0; i < (height - (spaceOffset)) / (maxThickness - 2); i++) {
        const arcOscilation = new ArcOscilation(
            x, i * (maxThickness - 2) + spaceOffset / 2,
            space, space,
            d,
            thickness
        );
        arcOscilationList.push(arcOscilation);

        if (thickness === minThickness && thicknessMod < 0)
            thicknessMod = 1;
        else if (thickness === maxThickness && thicknessMod > 0)
            thicknessMod = -1;
        thickness += thicknessMod;
    }
}

