function decimalToBinary(num) {
  //Write you code here
  let bin=new Array();
	let i=0;
	while(num>0){
		bin[i]=num%2;
		num=Math.floor(num/2);
		i++;
	}
	for (let j = i - 1; j >= 0; j--)
        document.write(bin[j]);
}

window.decimalToBinary = decimalToBinary;
