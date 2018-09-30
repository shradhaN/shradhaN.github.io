function Obstacle(x, y, w, h, speed) {
	
	//properties
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.speed = speed;


	//draw function
	this.draw = function() {
		ctx.drawImage(obstacleImage, this.x, this.y);
	}

	this.update = function() {
		//move the obstacle
		this.y += this.speed;
	}


}