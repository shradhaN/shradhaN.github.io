class Bird {
	
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.gravity = 0;
		this.velocity = 0;
		this.scored = false;
		this.rotation = 0.5;
		/*this.ctx = ctx;*/

	}

	draw(ctx) {
	
		if(this.gravity > 1){
			ctx.drawImage(birdDown, this.x, this.y);
		}
		else{
			ctx.drawImage(birdImage, this.x, this.y);
		}
		
		
	}

	handleCollision(pipeArray) {
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

	update(pipeArray) {
		this.gravity += 0.1;
		this.y += this.gravity + this.velocity;	
		//check for collision
		this.handleCollision(pipeArray);		

	}

	moveUp(speed) {
		this.gravity = 0;
		this.velocity = -speed;
	}
}