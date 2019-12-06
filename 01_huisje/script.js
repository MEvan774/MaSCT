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


// Lijn Dak Voorkant

context.beginPath()
//context.fillStyle = “grey”;
context.moveTo(200,300);
context.lineTo(600,400);
context.lineTo(440,120);
context.closePath();
context.stroke();
//context.fill()


//Lijn Dak Zijkant

context.beginPath()
//context.fillStyle = “red”;
context.moveTo(440,120);
context.lineTo(1140,80);
context.lineTo(1280,360);
context.lineTo(600,400);
context.closePath();
context.stroke();
//context.fill()

//Lijn Muren Zijkant

context.beginPath()
//context.fillStyle = “grey”;
context.lineTo(1260,360);
context.lineTo(600,400);
context.lineTo(600,700);
context.lineTo(1260,660);
context.closePath();
context.stroke();
//context.fill()

//Lijn Muren Voorkant
context.beginPath()
//context.fillStyle = “grey”;
context.lineTo(600,400);
context.lineTo(600,700);
context.lineTo(220,605);
context.lineTo(220,305);
context.closePath();
context.stroke();
//context.fill()