console.log("Hola mundo");

const nombre="Franco Burga";
const dni= 41232082;
const sexo= 'M';

// CONCATENAR
const frase = " Mi Nombre es " + nombre + " y mi DNI es " + dni;
console.log(frase);

// TEMPLATE STRING
const frase_2 = `Mi nombre es ${nombre}, mi dni es ${dni}`

console.log(nombre);
console.log(typeof(nombre));

console.log(dni);
console.log(typeof(dni));

console.log(sexo)
console.log(typeof(sexo))

let numero_1 = 5;
console.log(numero_1);

numero_1 = 6;
console.log(numero_1);

// Operadores Aritmeticos

console.log("suma:",2+2);
console.log("resta:",2-2);
console.log("Multiplicación:",2*2);
console.log("Division:",2/2);
console.log("Potencia",Math.pow(4,2))
console.log("Raiz",Math.sqrt(4,2))
console.log("Potencia:",3**2)
console.log("Residuo",11%2)

//Comparaciones Booleanas (true/false)
const resultado_1 = 2==2;
const resultado_2 = 2==="2"

console.log(resultado_1)
console.log(resultado_2)

const resultado_3 = 2 != 2;
const resultado_4 = 2 !== "2";
console.log(resultado_3);
console.log(resultado_4);

console.log("==================")
console.log(100>10);
console.log(100<10);
console.log(100>=10);
console.log(100<=10);

//CONDICIONALES
const hora = 6;
if(hora>7){
    console.log("llegaste tarde");
}else{
    console.log("llegaste temprano");
}


const nota = 13;
if(nota>12){
    console.log("Pasaste");
}else{
    console.log("Jalaste")
}


const fecha = new Date();
const hota =  fecha.getHours

//FUNCIONES

function suma(n1,n2){
    const resultado = n1 + n2;
    console.log(resultado);
    return  resultado;
}

suma(2,10);
suma(2,11);
suma(2,12);


function calculadora(num1,num2,operador){
    if(operador ==="+"){
        return num1 + num2;
    }else if(operador === "-"){
        return num1 - num2

    }else if(operador ==="*"){
        return num1 * num2

    }else if(operador === "/"){
        return num1 / num2;
    }
}
 const resultados_1 = calculadora(2,6,"-");
 const resultados_2 = calculadora(2,7,"+");
 const resultados_3 = calculadora(2,8,"/");
 const resultados_4 = calculadora(2,9,"*")

 console.log(resultados_1);
 console.log(resultados_2);
 console.log(resultados_3);
 console.log(resultados_4);