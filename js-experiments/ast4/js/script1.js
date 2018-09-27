



//get elements
var viewPort = document.getElementsByClassName('viewport')[0];
var imageContainer =document.getElementsByClassName("image-list")[0];
var imageCount = imageContainer.getElementsByTagName("img").length;

//variables
var IMAGE_WIDTH = 1140;
var currentMargin = 0;
var maxMargin= (imageCount * IMAGE_WIDTH ) - IMAGE_WIDTH ;
var minMargin =  -maxMargin;
var flag = 1;

var currentIndex = 0;
var nextIndex =0; 



drawCaraousel();

//pass direction which is passes along with onclick
/*function getNextImage(direction){	

	var IMAGE_WIDTH = 1140;

	if (direction === 1){
		
		applyMargin(IMAGE_WIDTH);
	}

	else{
		applyMargin(IMAGE_WIDTH);
	}


}

function slideContinuous(){
	var CONTINUOUS_MARGIN_SIZE = 1;

	setInterval(function(){applyMargin(CONTINUOUS_MARGIN_SIZE)},5);
	
}


function applyMargin(margin){

	if (flag===1){
		imageContainer.style.marginLeft=-currentMargin+"px";
		currentMargin+=margin;

		if (currentMargin>maxMargin){
			flag=0;
		}
	}

	else{
		
		imageContainer.style.marginLeft=-currentMargin+'px';
		currentMargin-=margin;

		if (currentMargin === 0){
			flag =1;
		}
	}

}
*/

function drawCaraousel(){

	//left arrow
	var leftArrow = document.createElement('div');
	leftArrow.setAttribute('id','left-arrow');
	console.log('inside carousel builder');
	
	//set css properties
	leftArrow.style.background = 'black';
	leftArrow.style.width='50px';
	leftArrow.style.height='50px';
	leftArrow.style.position = 'absolute';
	leftArrow.style.top = '250px';
	leftArrow.style.left = '10px';

	//append to viewport
	viewPort.appendChild(leftArrow);

	//right arrow
	var rightArrow = document.createElement('div');
	rightArrow.setAttribute('id','right-arrow');
	console.log("inside carousel builder");
	
	//set css properties
	rightArrow.style.background = 'black';
	rightArrow.style.width='50px';
	rightArrow.style.height='50px';
	rightArrow.style.position = 'absolute';
	rightArrow.style.top = '250px';
	rightArrow.style.right = '10px';

	viewPort.appendChild(rightArrow);

	//navigation dots
	var dotElement = document.createElement('div');
	dotElement.style.width = IMAGE_WIDTH +'px';
	dotElement.style.position='absolute';
	dotElement.style.height='50px';
	dotElement.style.bottom = '10px';
	dotElement.style.background='white';
	dotElement.style.opacity='0.7';
	viewPort.appendChild(dotElement);

	//dots
	var dotArray = [];
	for (i = 0; i< imageCount ; i++){
		var dotItem = document.createElement('div');
		dotItem.style.position='absolute';
		dotItem.style.width='5px';
	}



}

//manualslider
/*
function slideManual(){

	var leftArrow = document.getElementById('left-arrow');
	var rightArrow = document.getElementById('right-arrow');

	leftArrow.onclick = function(){
		getNextImage(1);
	}

	rightArrow.onclick = function(){
		getNextImage(0);
	}

}

slideManual();
slideContinuous();*/



function startSlide(){

	var slideTimer = setInterval()
}

