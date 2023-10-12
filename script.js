function decimalToBinary(num) {
  //Write you code here
  let bin="";
	let i=0;
	while(num>0){
		bin+=num%2;
		num=Math.floor(num/2);
		i++;
	}
	let text="";
	for(let i=bin.length-1;i>=0;i--){
		text+=bin[i];
	}
	return text;
}

window.decimalToBinary = decimalToBinary;
