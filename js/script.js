//1- Algoritmo para obtener la estatura promedio de un grupo de personas

function media (ArregloEstatura){
	var mediaEstatura = 0;

	for( var i = 0; i < ArregloEstatura.length; i++){
			mediaEstatura = mediaEstatura + ArregloEstatura[i];

		}
		return mediaEstatura/ArregloEstatura.length;
		console.log(media);
}

//2- Algoritmo  para determinar en que km de esa carretera se encontraran.

function aguas(){
	var amiga = 150;
	var amigo = 70;

	for (amiga; amiga>=0; amiga--){
		if(amiga == amigo){
			return amiga;
		}
	amigo++;
	}
	return false;
}

//3- Algoritmo para determinar, de N cantidades cuantas son <= a 0 y cunatas mayores a cero.

function mayores(arregloN)
	var Mayor = 0;
	var Menor = 0;

	for (var i=0 ; i<arregloN.length; ++i){
		if (arregloN[i] > 0) {
			Mayor++;
		} else {
			Menor++;
		}
	}
	console.log( "Mayores a 0 "+ Mayor);
	console.log( "Menores o iguales a 0 "+ Menor);
	
}

//4- Algoritmo para generar N elementos de la sucesion fibonacci.

function sucesion (numero) {
	var fibonacci = [0, 1];
	for ( var i=2 ; i<=numero ; ++i){
	var numb1 = fibonacci[i-2]
	var numb2 = fibonacci[i-1]

		fibonacci.push(numb1 + numb2);
	}if (numero==0) {
		return 0;
	} else (numero == 1){
		return [0, 1];
	}
	
	return fibonacci;
}

//5- Elaborar una funcion a la cual le enviemos tres enteros y muestre el menor.

function tres(n1, n2, n3){
	var resul = 0;
	if (n1 < n2 && n1 < n3) {
		result = n1;
	}
	else if (n2 < n1 && n2 < n3) {
		result = n2;
	}
	else if (n3 < n1 && n3 < n2) {
		result = n3;
	}
	console.log("El menor de " + n1 +", " + n2 + ", " + n3 + " es "+ result);

	return result;
}

//6- funcion a la que se le pasa como parametro un numero entero y devuelve como resultado una cadena de texto que indica si es par o inpar.

function paroImpar(entero) {

	if (numero%2 == 0){
		console.log("El numero " + entero + " es par");
	}
	else{
		console.log("el numero " + entero + " es impar");
	}
}

//7- Funcion a la cual le envie tres entros y los muestre ordenados de mayor a menor.

function ordenados(num1, num2, num3) {

	var numeros = [numero1, numero2, numero3];
	var numOrdenados = numeros.sort();

	for (i = 0; i<3; i++){

		console.log(numOrdenados[i]);
	}
}

//8- multiplos d eun numero.

function multiplos(numeros){

	var vacio = "";
	for (i = 0; i <= 10; i++) {

		var multiplo = 1;

		multiplo = i * numero;

		console.log(multiplo);
		vacio = vacio + " " + multiplo.toString();
	}

	return vacio;
}
//9- funcion que muestre informacion sobre una cadena de texto que se pasa un argumento. La funcion determina si esta formada solo por mayusculas o minuscas o mezcladas.

function letras(cadena){

	if (cadena == cadena.toLowerCase()){

		console.log("Su cadena solo '" + cadena + " tiene minusculas");
	}
	else if(cadena == cadena.toUpperCase()){

		console.log("Su cadena solo " + cadena + " tiene mayusculas");
	}
	else{

		console.log("Su cadena solo " + cadena + " tiene Ambas");
	}
}

//10- cuadrado de la suma d edo numeros.

function cuadrado(n1, n2){

	var total = Math.pow((n1 + n2), 2);

	console.log(total);

	return total;
}

//11- funcion que indique si el numero que ingresa es primo o no.

function primo(numeros){
	var resultado = 0;

	for (var i = 0; i <= numeros; i++) {

		if(numeros %i == 0){

			resultado++;
		}
	}
	if(resultado == 2){

		console.log("Numero primo!");
	}
	else{
		console.log("Numero no es primo");
	}
}

//12- funcion que retorne la cantidad de digitos que tiene una variable positiva.

function variablePositiva(digitos){

	var positiva = 0;
	while (digitos > 0){
		digitos = Math.floor(digitos/10);
		positiva++;
	}
	console.log("su numero tiene "+ positiva + " positiva")

	return positiva;
}

//13- Determinar sueldo por horas trabajads.

function sueldo (valorHora, time){
	var hora = 0;
	var final = 0;

	for( var i=0; i < time.length(); i++){
		hora = hora + time[i];
	}
	final = hora * valorHora;

	console.log("El sueldo total es " + final);
}
