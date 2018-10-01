
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
//ctx properties
ctx.font = 'bold 56px Comic Sans MS';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';

//Images load
const birdImage = new Image();
const backgroundImage = new Image();
const foregroundImage = new Image();
const pipeUp = new Image();
const pipeBottom = new Image();

birdImage.src = './images/bird.png';
backgroundImage.src = './images/background.png';
foregroundImage.src = './images/fg.png';
pipeUp.src = './images/pipeNorth.png';
pipeBottom.src='./images/pipeSouth.png';

//objects
const background = new Background(0, 0, canvas.width, canvas.height);
const bird = new Bird(canvas.width/2, canvas.height/2, 38, 26);
const pipe = new Pipe(canvas.width, 0, 1)

//variables
let score = 0;
let pressed = false;
let isPaused = true;
let isGameOver = false;
let pipeArray = [];
let arr = 1;

pipeArray.push(pipe);

//constants
const velocity = 3;
const GAP = 100;


//function for text
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

//Input variables
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {

	if(e.keyCode === 38 && pressed === false) {
		bird.moveUp(velocity);
		pressed = true;
	}

	if (e.keyCode === 13) {
		if (isGameOver) {
			window.location.reload();
		}

		if (isPaused) {
			isPaused = false;
		}
	}

	if(e.keyCode === 27 && !isPaused && !isGameOver) {
		isPaused = true;
	}
}

function keyUpHandler(e) {
	pressed = false;
}

function createNewPipe() {
	pipeObj = 'pipe' + arr;
	pipeObj = new Pipe(canvas.width,Math.floor(Math.random() * pipeUp.height) - pipeUp.height, 1);
	pipeArray.push(pipeObj);
		
}

function removePipe() {
	pipeArray.splice(0,1);
	
	
}

class Game {
	constructor (x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	draw() {
		background.draw();
		bird.draw();
		//pipedraw
		for (let i = 0; i < pipeArray.length; i++) {
			pipeArray[i].draw();
		}
		ctx.drawImage(foregroundImage,0 , canvas.height - foregroundImage.height);		
	}

	update(){
		bird.update();
		for (let i =0; i < pipeArray.length; i++) {
			pipeArray[i].update();
		}
	}
}

const game = new Game();

function gameLoop(){
	
	if(!isGameOver && !isPaused){
		game.update();
	}	
	game.draw();


	//information
	if (isPaused) {
		drawTint(0, 0, canvas.width, canvas.height);
		drawText('Hit Enter to Play', canvas.width/2, canvas.height/2);
		if (score > 0 ) {
			drawText(score, canvas.width/2, canvas.height/2);
		}
	}
	else if (isGameOver) {
		drawTint(0, 0, canvas.width, canvas.height);
		drawText('Game Over', 180, 310);
		drawText('Score: ' + score, 180, 380);
	}
	else {
		drawTint(0, 0, canvas.width, 64);
		drawText('Score: '+score, 180, 52);
	}


	window.requestAnimationFrame(gameLoop);
}


gameLoop();