var maxRad = 60; //Max radius of bubbles
var minRad = 5; //Min radius of bubbles
var growInc = 1; // how fast bubbles grow
var shrinkInc = 0.5; // how fast bubbles shrink
var numBub = 50; // number of bbbles on screen
var maxSpd = 10; // max speed bubbles move
var colors = [ // array of custom colors
'#637C7F',
'#79F0FF',
'#C7F9FF',
'#39777F',
'#9FC7CC'
]; 
var gravity = 1;  //force of gravit
var friction = 0.9; //amount of friction between 0 and 1 higher takes longer to slowdown


// Do not modify code below this point

$("body").css({
	"margin": 0 
});
var canvas = $("#mainCanvas");
canvas[0].width = window.innerWidth;
canvas[0].height = window.innerHeight;
canvas.css("border", "1px solid #000000");
var ctx = canvas[0].getContext("2d")
var option = new Options(true,true,true,false);
var greeter;


function getRandomColor() {
	var color;
	if(option.customColors === true){
		color = colors[Math.floor(Math.random()*colors.length)];
	} else{
		var letters = '0123456789ABCDEF';
		color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
	}
	return color;
}

var mouse = {
	x: undefined,
	y: undefined	
};
var click = {
	x: undefined,
	y: undefined
};
$(window).mousemove(function(){
	mouse.x = event.x;
	mouse.y = event.y;
});

$(window).resize(function(){
	canvas[0].width = window.innerWidth;
	canvas[0].height = window.innerHeight;
	init();
});

$(window).mouseup(function(){
	click.x = event.offsetX;
	click.y = event.offsetY;
});

var bubbles = [];

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	greeter.update();
	
	for(var i=0; i<bubbles.length;i++){
		bubbles[i].update();
	}
	if(option.useCol === true){
		for(var i=0; i<bubbles.length;i++){
			for(var j=0; j<bubbles.length;j++){
				CollisionDetect(i,j);
			}
		}
	}
	option.update();
	click.x = undefined;
	click.y = undefined;
}

function init(){
	bubbles = [];
	
	var x = window.innerWidth/2;
	var y = 0;
	var yVol = Math.floor(Math.random() * (10 - 5 + 1) + 5);
	var clr = getRandomColor();
	greeter = new Greeting(x,y,yVol,greet(),clr);
	
	for(var i=0;i<numBub;i++){
		var rad = Math.random() * (maxRad - minRad) +minRad ;	
		x = Math.random() * (window.innerWidth - rad*2) +rad;
		y = Math.random() * (window.innerHeight- rad*2) +rad;
		var xVol = (Math.random()-0.5)* maxSpd;
		yVol = (Math.random()-0.5)* maxSpd;
		clr = getRandomColor();
		
		bubbles.push(new Circle(x,y,xVol,yVol,rad,clr));
		
	}
	
}

init();
animate();