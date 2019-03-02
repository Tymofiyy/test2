// Задача №2

// var r = 'qqqqqqqqqqqqqq';
// var i = r.length/3;
// var remainder = r.length/3%1;
// alert((r.substring(0, i-remainder)) +'\n' + (r.substring(i-remainder, i+i-remainder)) + '\n' + (r.substring(i+i-remainder)));


// Задача №3

// var s ='', c=0;
// var a=0, b = 1;
// var string = 'qwerty qwe    rty    asdfgh  asdftyu   poiuyt   lkj                    -y          hgfd   7';
// for(var i=0; i<=string.length; i++){
// if(string.substring(a, b)!=' '){
// s = s + string.substring(a, b);
// a++;
// b++;
// c=0;
// }
// else if(string.substring(a,b)==' ' && c==1){
// 	a++;
// 	b++;
// }
// else if(string.substring(a,b)==' '){
// 	c++;
// 	s = s + string.substring(a, b);
// 	a++;
// 	b++;
// }

// }
// alert(s);




// Задача №5 a)


// var a=0, b=1, s='';
// var string = 'werff9isso3j201pplkn91dffode33w';
// for (var i=0; i<=string.length; i++){
// 	if(string.substring(a, b)>=0){
// 		a++;
// 		b++;
// 	}
// 	else{
// 		s = s+string.substring(a, b);
// 	   	a++;
// 	   	b++;
// 	} 
// }
// alert(s);



// Задача №5 b)

// var a=0, b=1, s='';
// var string = 'werff9isso3j201pplkn91dffode33w';
// for (var i=0; i<=string.length; i++){
// 	if(string.substring(a, b)>=0){
// 		s = s+string.substring(a, b);
// 		a++;
// 		b++;
// 	}
// 	else{
// 	   	a++;
// 	   	b++;
// 	} 
// }
// alert(s);



var r = prompt('', '');