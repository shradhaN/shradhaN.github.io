var a = ""

flag = 1;
var pattern = setInterval(function(){	
	if (flag===1){	
		a=a+"*";
		console.log(a);
		if (a.length>5){
			flag=0;
		}
	}
	
	else{
		a=a.substr(0, a.length -1);
		console.log(a);
		if (a.length===1){
			flag=1;
		}
	}	
	
},1000);

