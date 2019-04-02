function Music(){
	this.track1 = "assets/Epic_Unease.mp3";
	this.track2 = "assets/Dangerous.mp3";
	this.track3 = "assets/Steel_and_Seething.mp3";
	this.music = $("#music");
	
	
	this.isPlaying = function(){
		if(this.music[0].paused === false){
			return true;
		}else{
			return false;
		}
	};
	this.pause = function(){
		this.music[0].pause();
	}
	
	this.playMusic = function(track){
		if(track === 1){
			this.music[0].src = this.track1;
			this.music[0].play();
		}
		if(track === 2){
			this.music[0].src = this.track2;
			this.music[0].play();
		}
		if(track === 3){
			this.music[0].src = this.track3;
			this.music[0].play();
		}
	};
}