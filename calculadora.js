
function numero(str2){
    var str1=document.getElementById('resultado').value; 
	if(str1 == '0'){
		document.getElementById('resultado').value=str2
		}else{ 
	var res = str1.concat(str2);
	document.getElementById('resultado').value=res;
}
}

function operaciones(op){
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
			var operando1 = document.getElementById("resultado").value;
			document.getElementById("resultado").value = operando1 + "+";
			operacion = document.getElementById("resultado").value;
			document.getElementById("memoria").value = "suma";
			break;
		case 'restar':
			var operando1 = document.getElementById("resultado").value;
			document.getElementById("resultado").value = operando1 + "-";
			operacion = document.getElementById("resultado").value;
			document.getElementById("memoria").value = "resta";
			break;			
		case 'igual':			
			operacion = document.getElementById("resultado").value;
			var memoriaOp = document.getElementById("memoria").value;
			switch(memoriaOp) {
				case 'suma':
					var operandos = operacion.split("+");
					var resultado = ops.sumar(operandos[0], operandos[1]);
					document.getElementById("resultado").value = resultado;
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
