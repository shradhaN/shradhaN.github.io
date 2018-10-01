var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');


ctx.font = 'bold 56px Comic Sans MS';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';

/*var canvas2 = document.getElementById('myCanvas2');
ctx2 = canvas2.getContext('2d');*/

//function to write the stroked text
function drawText(text, x, y) {
	ctx.fillStyle = 'white';
	ctx.fillText(text, x, y);
	ctx.strokeText(text, x, y);

	//for canvas2
	/*ctx2.fillStyle = 'white';
	ctx2.fillText(text, x, y);
	ctx2.strokeText(text, x, y);*/
}

//function for drawing tint on the screen 
function drawTint(x, y, w, h) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect(x, y, w, h);

	//for canvas2
	/*ctx2.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx2.fillRect(x, y, w, h);*/
}


var imageBG = document.getElementById('myImage');
var carImage = document.getElementById('carImage');
var obstacleImage = document.getElementById('obstacle');

//variables
var score = 0;
var isPaused = true;
var isGameOver = false;
var canvasHeight = canvas.height;
var canvasWidth = canvas.width;
var rightLimit = 290;
var leftLimit = 140;
var carX = 215;
var carY = canvas.height - 150;
var rightPressed = false;
var leftPressed = false;

//objects
var background1 = new Background(0, 0, canvasWidth, canvasHeight, 2);
var background2 = new Background(0,-canvasHeight, canvasWidth, canvasHeight, 2); 
var playerCar = new Player(carX, carY, 40, 80);
var obstacle = new Obstacle(leftLimit, 0, 48, 96, 5);
//var obstacle = new Obstacle(0, 0, 50, 50, 2);




//Keyboard inputs
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode == 39) {  	
    rightPressed = true;
  }
  else if(e.keyCode == 37) {    
    leftPressed = true;
  }

  //enter button: start/resume
  if (e.keyCode === 13) {
  	if (isGameOver) {
  		window.location.reload();
  	}

  	if (isPaused) {
  	
  		isPaused = false;
  	}
  }
  //Pause: ESC
  if(e.keyCode === 27 && !isPaused && !isGameOver) {
  	isPaused = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39) {  
    rightPressed = false;
  }
  else if(e.keyCode == 37) {  
    leftPressed = false;
  }

}

//Main Loop
function gameLoop() {
	//update calls

	/*generateObstacles();*/
	/*checkObstaclePosition();*/
	if(!isGameOver && !isPaused) {
		background1.update();
		background2.update();
		playerCar.update();
		obstacle.update();
		
	}

	//clear the screen
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	/*ctx2.clearRect(0, 0, canvasWidth, canvasHeight);*/
	
	//move car
	playerCar.move();
	
	//draw background
	background1.draw();
	background2.draw();
	playerCar.draw();
	obstacle.draw();
	
	//for information: draw on top of the canvas
	if (isPaused){
		drawTint(0, 0, canvasWidth, canvasHeight);
		drawText('Hit Enter', 180, 310);
		drawText('to play !!', 180, 380);
		if (score > 0){
			drawText(score, 180, 52);
		}
	}
	else if (isGameOver) {
		drawTint(0, 0, canvasWidth, canvasHeight);
		drawText('Game Over', 180, 310);
		drawText('Score: ' + score, 180, 380);
	}
	else {
		drawTint(0, 0, canvasWidth, 64);
		drawText(score, 180, 52);
	}
	
	window.requestAnimationFrame(gameLoop);

}


gameLoop();
