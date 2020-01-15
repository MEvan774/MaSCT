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

context.beginPath();
context.fillStyle = "grey";
context.moveTo(900, 200);
context.lineTo(1000, 300);
context.lineTo(800, 400);
context.closePath();
context.stroke();
context.fill()


//Lijn Dak Zijkant

context.beginPath();
context.fillStyle = "red";
context.moveTo(500, 100);
context.lineTo(900, 200);
context.lineTo(800, 400);
context.lineTo(400, 300);
context.closePath();
context.stroke();
context.fill()


//Lijn Muur Voorkant

context.beginPath();
context.fillStyle = "grey";
context.moveTo(1000, 300);
context.lineTo(1000, 500);
context.lineTo(800, 600);
context.lineTo(800, 400);
context.closePath();
context.stroke();
context.fill()

//Lijn Muren Zijkant

context.beginPath();
context.fillStyle = "grey";
context.moveTo(800, 600);
context.lineTo(400, 500);
context.lineTo(400, 300);
context.lineTo(800, 400);
context.closePath();
context.stroke();
context.fill()