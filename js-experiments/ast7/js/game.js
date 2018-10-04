
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');


/*let canvas2 = document.getElementById('myCanvas2');
let ctx2 = canvas2.getContext('2d');*/

//Images load
const birdImage = new Image();
const backgroundImage = new Image();
const foregroundImage = new Image();
const pipeUp = new Image();
const pipeBottom = new Image();
const birdDown = new Image();

birdImage.src = './images/bird.png';
backgroundImage.src = './images/background.png';
foregroundImage.src = './images/fg.png';
pipeUp.src = './images/pipeNorth.png';
pipeBottom.src='./images/pipeSouth.png';
birdDown.src = './images/birdDown.png';



//variables
let score = 0;
let pressed = false;
let isPaused = true;
let isGameOver = false;
/*let pipeArray = [];*/
let arr = 1;
const PI = 3.14;

//constants
const velocity = 3;
const GAP = 100;
var dx = 1;


//Input variables
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {

	if(e.keyCode === 38 && pressed === false) {
		game.bird.moveUp(velocity);
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

function createNewPipe(pipeArray) {
	pipeObj = 'pipe' + arr;
	pipeObj = new Pipe(canvas.width,Math.floor(Math.random() * pipeUp.height) - pipeUp.height, 1);
	pipeArray.push(pipeObj);
		
}

function removePipe(pipeArray) {
	pipeArray.splice(0,1);
	
	
}

class Game {
	constructor (ctx){
		this.ctx = ctx;
		this.background;
		this.bird;
		this.pipe;
		this.pipeArray = [];
	}

	createObjects(){
		//objects
		this.background = new Background(0, 0, canvas.width, canvas.height, this.ctx);
		this.bird = new Bird(canvas.width/2, canvas.height/2, 38, 26, this.ctx);
		this.pipe = new Pipe(canvas.width, 0, 1, this.ctx);
		this.pipeArray.push(this.pipe);
	}

	
	draw() {

		this.background.draw(this.ctx);
		this.bird.draw(this.ctx);
		
		for (let i = 0; i < this.pipeArray.length; i++) {
			this.pipeArray[i].draw(this.ctx, this.pipeArray);
		}
		this.ctx.drawImage(foregroundImage, 0, canvas.height - foregroundImage.height);	
		
	}

	update(){
		this.bird.update(this.pipeArray);
		for (let i =0; i < this.pipeArray.length; i++) {
			this.pipeArray[i].update(this.pipeArray);
		}
		
	}

	drawText(text, x, y) {
		this.ctx.fillStyle = 'white';
		this.ctx.fillText(text, x, y);
		this.ctx.strokeText(text, x, y);
	}

	//function for drawing tint on the screen 
	drawTint(x, y, w, h) {
		this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
		this.ctx.fillRect(x, y, w, h);
	}

	gameLoop() {

		if(!isGameOver && !isPaused){
			this.update();
		}	
		
		this.draw();

		//ctx properties
		this.ctx.font = 'bold 56px Arial MS';
		this.ctx.fillStyle = 'white';
		this.ctx.textAlign = 'center';
		this.ctx.lineWidth = 2;
		this.ctx.strokeStyle = 'black';


		//information
		if (isPaused) {
			this.drawTint(0, 0, canvas.width, canvas.height);
			this.drawText('Hit Enter to Play', canvas.width/2, canvas.height/2);
			if (score > 0 ) {
				this.drawText(score, canvas.width/2, canvas.height/2);
			}
		}
		else if (isGameOver) {
			/*gameOver = new Image();
			gameOver.src= './images/gameover.png';
			this.ctx.drawImage(0,0);*/
			this.drawTint(0, 0, canvas.width, canvas.height);
			this.drawText('Game Over', canvas.width/2, 310);
			this.drawText('Score: ' + score, canvas.width/2, 380);
		}
		else {
			this.drawTint(0, 0, canvas.width, 64);
			this.drawText('Score: '+score, canvas.width/2, 52);
		}

		window.requestAnimationFrame(this.gameLoop.bind(this));
	}

}

const game = new Game(ctx);
game.createObjects();
game.gameLoop();


/*const game2 = new Game(ctx2);
game2.createObjects();
game2.gameLoop();*/