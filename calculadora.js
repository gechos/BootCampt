
function numero(str2){
    var str1=document.getElementById('resultado').value; 
	if(str1 == '0'){
		document.getElementById('resultado').value=str2
		}else{ 
	var res = str1.concat(str2);
	document.getElementById('resultado').value=res;
}
}
// operaciones
function operaciones(op){
	// antes de realizar la operación guarda los datos en las variables de operación para despues realizar los calculos con los datos del array var ops
    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },
        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        }
    };
	var operacion;
	switch(op) {
		case 'sumar':
			var operando1 = document.getElementById("resultado").value; // toma el valor de resultado en esté momento
			document.getElementById("resultado").value = operando1 + "+"; // concatenamos con el simbolo de la operacion
			operacion = document.getElementById("resultado").value;  // tomamos el valor en esté momento operando1+"+"
			document.getElementById("memoria").value = "suma"; // le decimos a memoria que es una suma
			break;
		case 'restar':
			var operando1 = document.getElementById("resultado").value;
			document.getElementById("resultado").value = operando1 + "-";
			operacion = document.getElementById("resultado").value;
			document.getElementById("memoria").value = "resta";
			break;			
		case 'igual':			
			operacion = document.getElementById("resultado").value; // tomamos en operacion todo lo escrito num1+"operacion"+num2
			var memoriaOp = document.getElementById("memoria").value; // guardamos en memoriaOP tipo operacion
			switch(memoriaOp) {
				case 'suma':
					var operandos = operacion.split("+");   // si es una suma separamos array por ese simbolo
					var resultado = ops.sumar(operandos[0], operandos[1]); // realizamos la operación  y raliza la operación de sumar estos datos arriba.
					document.getElementById("resultado").value = resultado; // pintamos en pantalla resultado
					break;
				case 'resta':
					var operandos = operacion.split("-");
					var resultado = ops.restar(operandos[0], operandos[1]);
					document.getElementById("resultado").value = resultado;
					break;		
			}	
			break;
	}
}

