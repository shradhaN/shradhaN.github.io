class Bird {
	
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

		this.gravity = 0;
		this.velocity = 0;
		this.scored = false;

	}

	draw() {
		ctx.drawImage(birdImage, this.x, this.y);
	}

	update() {
		this.gravity += 0.1;
		this.y += this.gravity + this.velocity;

		//check for collision
		for (let i = 0; i < pipeArray.length; i ++) {
			let p = pipeArray[i]
			if (this.x + this.w >= p.x && this.x <= p.x + pipeUp.width &&
				(this.y <= p.y + pipeUp.height || this.y + this.h >= p.y + pipeUp.height + GAP) ||
				this.y + this.h >= canvas.height - foregroundImage.height){
				
				isGameOver = true;
			}

			if ((this.x > p.x + pipeUp.width) && !this.scored) {
				score ++;
				this.scored = true;
			}

			if (p.x+pipeUp.width === this.x ) {
				this.scored = false;
			}

		}

	}

	moveUp(speed) {
		this.gravity = 0;
		this.velocity = -speed;
	}
}