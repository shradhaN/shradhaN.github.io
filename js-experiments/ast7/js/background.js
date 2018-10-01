class Background {

	constructor(x, y, w, h, speed) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	draw() {
		ctx.drawImage(backgroundImage, this.x, this.y);
	}
}