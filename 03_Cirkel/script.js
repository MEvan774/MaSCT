// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen


//context.beginPath()
//context.fillStyle = "yellow";
//context.arc(400,300,20,0,Math.PI*2);
//context.fill();
//context.fill();
//context.closePath();


let cirkelObject = {}
cirkelObject.x = 60;
cirkelObject.y = 100;
cirkelObject.radius = 20;
cirkelObject.sAngle = 0;
cirkelObject.eAngle = Math.PI *2;
cirkelObject.color = "yellow";
cirkelObject.velocity_x = 2;
cirkelObject.velocity_y = 2;



cirkelObject.draw = function()
{
	context.beginPath();
	context.arc(this.x,this.y,this.radius,this.sAngle,this.eAngle);
	context.closePath();
	context.stroke();
	context.fillStyle = this.color;
	context.fill()
}




//Function


function animate()
{
	context.clearRect(0,0,width,height)
	cirkelObject.x += 2;
	cirkelObject.draw();
}

setInterval(animate,10);
