var canvas = $("#mainCanvas");
canvas[0].width = window.innerWidth;
canvas[0].height = window.innerHeight;
canvas.css("border", "1px solid #000000");
var ctx = canvas[0].getContext("2d");

$(window).resize(function(){
	canvas[0].width = window.innerWidth;
	canvas[0].height = window.innerHeight;
	init();
});

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
}

function init(){
	
}

init();
animate();