function Snake(){
	this.x = 200;
	this.y = 0;
	this.speed = 2;
	this.tail = [];
	
	this.draw = function(){
		ctx.beginPath();
		for(var i = 0; i<score;i++){
			ctx.rect(this.tail[i].x,this.tail[i].y,scale,scale);
		}
		ctx.rect(this.x,this.y,scale,scale);
		ctx.fill();
	}
	
	this.update = function(){
		if(score === this.tail.length){
			for(var i =0;i<this.tail.length-1; i++){
				this.tail[i] = this.tail[i+1];
			}
		}
		if(score>=1){
			this.tail[score-1] = new Vect(this.x,this.y);
		}
		//console.log(this.tail[score-1].x);
		if(keyPressed === "w"){
			this.y = this.y - this.speed;
		}
		if(keyPressed === "s"){
			this.y = this.y + this.speed;
		}
		if(keyPressed === "a"){
			this.x = this.x - this.speed;
		}
		if(keyPressed === "d"){
			this.x = this.x + this.speed;
		}
		if(this.x < 200){
			this.x = 200;
		}
		if(this.x + scale > canvasWidth){
			this.x = canvasWidth - scale;
		}
		if(this.y < 0){
			this.y = 0;
		}
		if(this.y + scale > canvasHeight){
			this.y = canvasHeight - scale;
		}
		
		
		this.draw();
	}
}