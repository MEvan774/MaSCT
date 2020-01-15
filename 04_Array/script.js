// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
let circles = [];

// hier kun je op de canvas tekenen


//context.beginPath()
//context.fillStyle = "yellow";
//context.arc(400,300,20,0,Math.PI*2);
//context.fill();
//context.fill();
//context.closePath();



let circleObject = {};
circleObject.x = getRandomInt(0,width);
circleObject.y = getRandomInt(0,height);
circleObject.radius = getRandomInt(5,20);
circleObject.sAngle = 0;
circleObject.eAngle = Math.PI *2;
circleObject.color = colors[getRandomInt(0,colors.lenght)];
circleObject.velocity_x = getRandomInt(2,5);
circleObject.velocity_y = getRandomInt(2,5);

//get Random
function getRandomInt(min, max)
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



circleObject.draw = function()
{
	context.beginPath();
	context.arc(circleObject.x,circleObject.y,circleObject.radius,0,2*Math.PI);
	context.closePath();
	context.stroke();
	context.fillStyle = this.color;
	context.fill();
}



circleObject.update = function()
{
	circleObject.x = circleObject.x + circleObject.speedX;
	circleObject.y = circleObject.y + circleObject.speedY;
	
	if(circleObject.y > height - circleObject.radius || circleObject.y < circleObject.radius){
    circleObject.speedY = - circleObject.speedY ;
	}
		if(circleObject.x > width - circleObject.radius || circleObject.x < circleObject.radius){
		circleObject.speedX = - circleObject.speedX ;
	}
}


function loop(){
	context.clearRect(0,0,width,height);
	circleObject.update();
	circleObject.draw();
}

setInterval(loop,10)