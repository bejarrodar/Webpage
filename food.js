function Food(x,y,i){
	this.x = x;
	this.y = y;
	this.i = i;
	
	this.eaten = function(){
		score ++;
		food.splice(this.i,1);
		food.push(new Food(rng(200,canvasWidth - scale),rng(0,canvasHeight - scale),0));
	}
	
	this.draw = function(){
		ctx.strokeRect(this.x,this.y,scale,scale);
	}
	
	this.update = function(){
		if(this.x < snake.x + scale &&
			this.x + scale > snake.x &&
			this.y < snake.y + scale &&
			scale + this.y > snake.y){
				this.eaten();
		}
		
		this.draw();
	}
}