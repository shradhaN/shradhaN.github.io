function Player(x, y, w, h) {
	//properties of player

	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.scored = false;

	///function to draw
	this.draw = function() {
		ctx.drawImage(carImage,this.x ,this.y);
		/*ctx2.drawImage(carImage,this.x ,this.y);*/
	}

	this.update = function() {
		//write code for collision

		//check for collision with each obstacles currently in the canvas
		/*for (i = 0; i< obstacles.length -1; i++) {

			if (this.y < obstacles[i].y + obstacles[i].h) {

				if ((this.x + this.w >= obstacles[i].x && obstacles[i].x >= this.x) ||
					(obstacles[i].x + obstacles[i].w <= this.x + this.w && obstacles[i].x + obstacles[i].w >=this.x)) {
						console.log("collision");
						isGameOver = true;
				}

				else {
					score ++;
					this.scored =true;
					
					

				}
			}
			

		}*/

		if (this.y < obstacle.y + obstacle.h) {

				if ((this.x + this.w >= obstacle.x && obstacle.x >= this.x) ||
					(obstacle.x + obstacle.w <= this.x + this.w && obstacle.x + obstacle.w >=this.x)) {
						console.log("collision");
						isGameOver = true;
				}

				else {
					score ++;
					this.scored =true;
				}
	}
}

	this.move = function (speed) {
		
		if(rightPressed && this.x<rightLimit){
			this.x += 5;
		}

		if(leftPressed && this.x>leftLimit){
			this.x -= 5;
		}
		
	}

}
