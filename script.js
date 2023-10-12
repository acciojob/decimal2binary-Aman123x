function decimalToBinary(num) {
  //Write you code here
  let bin=new Array();
	let i=0;
	while(num>0){
		bin[i]=num%2;
		num=Math.floor(num/2);
		i++;
	}
	let j=0;
	i=i-1;
	while(j<i){
		let temp=bin[i];
		bin[i]=bin[j];
		bin[j]=temp;
		i--;
		j++;
	} 
	let text=bin.toString();
	return text;
}

window.decimalToBinary = decimalToBinary;
