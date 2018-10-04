class  Pipe {

	constructor(x, y, speed){

		this.x = x;
		this.y = y;
		
		this.speed = speed;
	}

	draw(ctx, pipeArray) {
		for (let i = 0; i < pipeArray.length; i++) {
			ctx.drawImage(pipeUp, pipeArray[i].x, pipeArray[i].y);
			ctx.drawImage(pipeBottom, pipeArray[i].x, pipeArray[i].y + pipeUp.height + GAP);
		}
	}

	update(pipeArray) {
		for (let i = 0; i < pipeArray.length; i++) {
			pipeArray[i].x--;

			if ( pipeArray[i].x === 700) {
				createNewPipe(pipeArray);
			}

			if (pipeArray[i].x === -20) {
				removePipe(pipeArray);
				
			}

			
		}
	}
}