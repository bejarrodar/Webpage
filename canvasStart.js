var canvas = $("#mainCanvas");
var keyPressed;
canvas[0].width = window.innerWidth;
canvas[0].height = window.innerHeight;
//canvas.css("border", "1px solid #000000");
var ctx = canvas[0].getContext("2d");
var centerWidth = canvas[0].width/2;
var centerHeight = canvas[0].height/2;
var click = {
	x: undefined,
	y: undefined
};
var clickTarget = {
	xLow: centerWidth - (ctx.measureText("Enter").width/2),
	xHigh: centerWidth + (ctx.measureText("Enter").width/2),
	yLow:  centerHeight+100,
	yHigh: centerHeight+120
}

$(window).mouseup(function(){
	click.x = event.offsetX;
	click.y = event.offsetY;
});

$(window).resize(function(){
	canvas[0].width = window.innerWidth;
	canvas[0].height = window.innerHeight;
	init();
});

$(window).keypress(function(){
	keyPressed = event.key;
});

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	ctx.font = "30px Arial";
	ctx.fillText("Welcome",centerWidth - (ctx.measureText("Welcome").width/2),centerHeight/2);
	ctx.fillText("This is my playground",centerWidth - (ctx.measureText("This is my playground").width/2),centerHeight/2+40);
	ctx.fillText("Here I play around with HTML and JavaScript",centerWidth - (ctx.measureText("Here I play around with HTML and JavaScript").width/2),centerHeight/2+80);
	ctx.fillText("Click below to Enter",centerWidth - (ctx.measureText("Click below to Enter").width/2),centerHeight/2+120);
	ctx.fillText("Enter",centerWidth - (ctx.measureText("Enter").width/2),centerHeight+120);
	
	if(keyPressed === "Enter"){
		document.location.href = "main.html";
	}
	
	if(click.x>= clickTarget.xLow && click.x<= clickTarget.xHigh && click.y >= clickTarget.yLow && click.y <= clickTarget.yHigh){
		document.location.href = "main.html";
	}
/* 	if(click.x != undefined){
		console.log(click);
		console.log(clickTarget);
	} */
	click.x = undefined;
	click.y = undefined;
}

function init(){
	
}

init();
animate();