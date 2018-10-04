class Background {

	constructor(x, y, w, h, speed) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		/*this.ctx = ctx;*/
	}

	draw(ctx) {
		ctx.drawImage(backgroundImage, this.x, this.y);
	}
}