function fibo(){
	var fib = [];
	var firstNumber = parseInt($("#lowNum").val());
	var lastNumber = parseInt($("#highNum").val());
	var output;
	fib[0] = 0;
	fib[1] = 1;

	if (firstNumber < 0 || lastNumber <= firstNumber || isNaN(lastNumber) || isNaN(firstNumber)){
		output = "The information entered was not valid"
	} else{
		for(var i=1;i<=fib.length;i++){
			if(fib[i]+ fib[i-1] <= lastNumber){
				fib.push(fib[i]+ fib[i-1]);
			}
		}
		fib.reverse();
		for(var x=fib.length;x>=0;x--){
			if(firstNumber > fib[x]){
				fib.pop();
			}
		}
		fib.reverse();
		if(fib.length <= 0){
			output = "No Numbers where found"
		} else{
			output = fib.toString();
		}
	}
	$("#Output").text(output);
}