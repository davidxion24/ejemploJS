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