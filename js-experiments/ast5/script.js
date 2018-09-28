
//game console properties
var gameConsole = document.getElementById('gameConsole');
var gameConsoleHeight = 400;
var gameConsoleWidth = 700;

var antArray=[];
var score = 0;
var antCount = 30;


document.addEventListener('mousemove', mouseMoveHandler, false);

function mouseMoveHandler(e) {
	for ( i =0; i< antCount; i++) {
		ant = antArray[i];
		var antElement = document.getElementById(ant.el);
		ant.mouseClickEvent(e.clientX, e.clientY, antElement);
	}
}

function Ants(el, x, y, ballWidth, ballColor) {
	var that = this;

	this.el = el;
	this.x = x;
	this.y = y;
	this.ballWidth = ballWidth;
	this.ballHeight = ballWidth;
	this.ballColor = ballColor;
	this.dx = 4
	this.dy = -4;
	this.status = 1;

	this.drawAnt = function(){
		var newAnt = document.createElement('div');
		newAnt.setAttribute('id',this.el);
		newAnt.style.left = this.x +'px';
		newAnt.style.top = this.y + 'px';
		newAnt.style.width = this.ballWidth + 'px';
		newAnt.style.height = this.ballHeight +'px';
		newAnt.style.background = this.ballColor;
		newAnt.style.borderRadius = '50%';
		newAnt.style.position = 'absolute';
		
		gameConsole.appendChild(newAnt);
	}

	this.updatePosition = function() {
		this.x += this.dx;
		this.y += this.dy;
	}

	this.handleAntCollision = function(currentAntIndex) {
		
		for( var i = 0; i < antCount; i++) {
			var otherAnts = antArray[i];

			if (this.status === 1 && otherAnts.status ===1) {			
				if(i != currentAntIndex){
					if  ((this.x < (otherAnts.x + otherAnts.ballWidth)) &&
                        ((this.x + this.ballWidth) > otherAnts.x) &&
                        (this.y < (otherAnts.y + otherAnts.ballWidth)) &&
                        ((this.ballWidth + this.y) > otherAnts.y) ){
						
						this.dx = -this.dx;
						this.dy = -this.dy;
										
					}
				}
			}
		}

	}

	this.mouseClickEvent = function(pressedX, pressedY, antElement) {

		if(pressedX >= this.x && (pressedX <= this.x + this.ballWidth) &&
		(pressedY >= this.y) && (pressedY <= this.y + this.ballWidth) ){			
			this.ballColor = '#eee';
			this.status = 0;
			this.dx = 0;
			this.dy = 0;
			score++;
			checkGameWin();
		}
	}

	this.handleBorderCollision = function(){

		if(this.x> gameConsoleWidth-this.ballWidth || this.x < this.ballWidth) {
		    this.dx = -this.dx;
		}
		if( this.y > gameConsoleHeight-this.ballWidth || this.y< this.ballWidth) {
		    this.dy = -this.dy;
		}
	}

	this.handleOutliers = function(){
		if(this.x<=0 || this.x >=gameConsoleWidth) {
			this.x = 1;
		}
		if (this.y<=0 || this.y >=gameConsoleHeight) {
			this.y = 1;
		}
	}

}

function generateRandomProperty(){

	x = Math.floor(Math.random() * (gameConsoleWidth-15)) +5;
	y = Math.floor(Math.random() * (gameConsoleHeight-15)) +5;
	ballWidth = Math.floor(Math.random() * 30) +10;
	ballColor = getRandomColor();

	return [x, y, ballWidth, ballColor];

}

var getRandomColor = function () {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random()*16)];
   }
   return color;
}

function drawRandomAnts() {
	for (i = 0; i< antCount ; i++) {
		properties = generateRandomProperty();
		antName = 'ant'+i;
		var antName = new Ants(antName, properties[0], properties[1], properties[2], properties[3]);
		antName.drawAnt();
		antArray.push(antName);
	}
}

function updateScore(){	document.getElementById('score').innerHTML = 'Score = ' +score;}


function checkGameWin(){
	var gameStatus = 0;
	for (i = 0; i< antCount; i++) {
		if( antArray[i].status ==0 ) {
			gameStatus+=1;
		}
	}
	if (gameStatus === antCount){
		alert("YOU WIN!!!");
		document.location.reload();
	}
}

function clearGameConsole() {
    gameConsole.innerHTML = "";
}

function draw(){
	clearGameConsole();
	
	for( var i=0; i< antCount; i++) {
		antContext = antArray[i];
		antContext.handleAntCollision(i);
		
		if (antContext.status ==1){
			antContext.drawAnt();
		}		
		antContext.handleOutliers();
		antContext.handleBorderCollision();
		antContext.updatePosition();		
	}
	updateScore();	
}




drawRandomAnts();
setInterval(draw,10);

