class ArcOscilation {
    constructor(x, y, w, h, d /* "top" | "bottom" */, t) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.start = d === "top" ? PI : 0;
        this.end = d === "top" ? TWO_PI : PI;
        this.t = t;
        this.tMod = 1;
    }

    draw() {
        strokeWeight(this.t);
        arc(this.x, this.y, this.w, this.h, this.start, this.end);
    }

    update() {
        if (this.t <= minThickness && this.tMod < 0)
            this.tMod = speedBlack;
        else if (this.t >= maxThickness && this.tMod > 0)
            this.tMod = -speedWhite;
        this.t += this.tMod;
    }
}