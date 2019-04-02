var canvasHeight = 800;
var canvasWidth = 800;
var scale = 10;

/* --do not modify below this point-- */
var canvas = $("#mainCanvas");
canvas[0].width = canvasWidth;
canvas[0].height = canvasHeight;
canvas.css("border", "1px solid #000000");
var ctx = canvas[0].getContext("2d")
var audioImg = $('#audioImg')
var audioOn = 'assets/AudioOn.png';
var audioOff = 'assets/AudioOff.png';
var menuImg = $("#menuImg");
var song = new Music();
var musicSound = true;
var score = 0;
var time;
var snake = new Snake();
var keyPressed;
var food = [];
var click = {
	x: undefined,
	y: undefined
};
function Vect(x,y){
	this.x = x;
	this.y = y;
}
function rng(min,max){
	return Math.floor(Math.random() * (max - min) + min);
	
}

$(window).mouseup(function(){
	click.x = event.offsetX;
	click.y = event.offsetY;
});
function audioControl(){
	if(click.x < 40 && click.x > 10 && click.y < 40 && click.y > 10){
		musicSound = !musicSound;
		if(song.isPlaying() === true){
			song.pause();
		}
	}
}
$(window).keypress(function(){
	keyPressed = event.key;
});
function drawIcons(){
	if(musicSound === true){
		audioImg[0].src = audioOn;
	}
	if(musicSound === false){
		audioImg[0].src = audioOff;
	}
	ctx.drawImage(audioImg[0],10,10,30,30);
}

function playMusic(){
	if(musicSound === true){
		var track = Math.floor(Math.random()*3);
		if(song.isPlaying() === false){
			song.playMusic(track);
		}
	}
}

function backgroundDraw(){
	ctx.strokeStyle="black";
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.moveTo(canvasWidth/4,0);
	ctx.lineTo(canvasWidth/4,canvasHeight);
	ctx.stroke();
	ctx.font="20px Georgia";
	ctx.fillText("Score:" + score,canvasWidth/15,(canvasHeight/8)+30);
	//ctx.fillText("Time: ",canvasWidth/15,(canvasHeight/8)+60);
}

food[0] = new Food(rng(200,canvasWidth-scale),rng(0,canvasHeight-scale),0);

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	backgroundDraw();
	audioControl();
	drawIcons();
	if(Math.floor(Math.random()*300) === 1){
		playMusic();
		console.log(musicSound);
	}
	food[0].update();
	snake.update();
	click.x = undefined;
	click.y = undefined;
}

function init(){
	food[0].draw();
	snake.draw();
}

init();
animate();
