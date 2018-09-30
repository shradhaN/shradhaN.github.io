var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
ctx.font = 'bold 56px Comic Sans MS';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';

//function to write the stroked text
function drawText(text, x, y) {
	ctx.fillStyle = 'white';
	ctx.fillText(text, x, y);
	ctx.strokeText(text, x, y);
}

//function for drawing tint on the screen 
function drawTint(x, y, w, h) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect(x, y, w, h);
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
var obstacles = [];
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
  	/*clearInterval(generateObstacles)*/
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

//function to generate obstacles
var generateObstacles = setInterval(function() {
	obstacleX = Math.floor(Math.random() * 190) + leftLimit;
	obstacleY = 0;

	var obstacle = new Obstacle(obstacleX, obstacleY, 50, 50, 2);
	obstacles.push(obstacle);	
}, 2000);


function checkObstaclePosition() {
	//check if obstacle has gone out of the canvas
	for( i = 0; i < obstacles.length-1; i++) {
		if (obstacles[i].y > canvasHeight){
			obstacles.splice(i,1);
		}
	}
}

//Main Loop
function gameLoop() {

	//update calls
	checkObstaclePosition();
	if(!isGameOver && !isPaused) {
		background1.update();
		background2.update();
		playerCar.update();
		for (i = 0; i< obstacles.length -1; i++) {
			obstacles[i].update();
		}
	}

	//clear the screen
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	playerCar.move();

	//draw background
	background1.draw();
	background2.draw();
	playerCar.draw();
	for (i = 0; i < obstacles.length-1; i++) {
		obstacles[i].draw();
	}
	
	//for information: draw on top of the canvas
	if (isPaused){
		drawTint(0, 0, canvasWidth, canvasHeight);
		drawText('Hit Enter', 180, 310);
		drawText('to play !!', 180, 380);
		if (score > 0){
			drawtext(score, 180, 52);
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
	
	console.log(obstacles.length);
	window.requestAnimationFrame(gameLoop);

}

gameLoop();
