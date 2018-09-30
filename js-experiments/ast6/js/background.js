function Background(x, y, w, h, speed) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.speed = speed;

	//draw function
	this.draw = function() {
		ctx.drawImage(imageBG,this.x,this.y);
	}

	//update functon
	this.update = function() {
		this.y += this.speed;
		
		//if it moves out of the screen
		if (this.y > canvasHeight) {
			/*console.log('here');*/
			this.y = -canvasHeight;
		}


	}
}