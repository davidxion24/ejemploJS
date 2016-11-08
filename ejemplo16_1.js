//sentencia if - else
var x=0;
if (x) {
	console.log("true");
}
else{
	console.log("false")
}

//if - else resumido
console.log(x?"true":"false");

var a=0;
console.log(a==="a"?"true":"false");

console.log(a!==a?"true":"false");

//sentencia while - for
function contadorA(cadena){
	
	cadena=cadena.toUpperCase()
	var contA = 0;//inicializacion
	var i = 0;
	while(i<cadena.length){//permanencia
		if (cadena[i]==="A"){//accion
			contA++;
		}
		i++//incremento
	}
	return contA;
}
var cad ="Anastacia";
console.log("la cantidad de letras a, es:"+contadorA(cad));

//sentencia for
function contarA(cadena,letra){
	for (var i = 0,contA=0 ; i < cadena.length; i++) {
			if (cadena[i]===letra){//accion
			contA++;
		}
	}
	return contA;
}

var cad ="Romero";
var letra="m";
console.log("lacanidad de letras "+letra+ ", es:"+contarA(cad,letra));