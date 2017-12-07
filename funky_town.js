var fibonacci = function(n) {
    if(n<2){
	return 1;
    }
    else{
	return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(3));

var gcd = function(a,b){
    a = Math.abs(a);
    b = Math.abs(b);
    if (a==0||b==0){
	return 0;
    }
    if (a>b){
	var temp = a;
	while (temp>0){
	    if (a%temp==0 && b%temp==0){
		return temp;
	    }
	    else {
		temp = temp-1;
	    }
	}
    }
    else{
	return gcd(b,a);
    }
}


var list = ["Jim","Bob","Mary","Judith","Susan"]
var randomStudent = function(l){
    var i = Math.floor(Math.random()*l.length);
    return l[i];
}

