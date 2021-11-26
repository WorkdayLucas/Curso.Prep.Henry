// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  ultimo = array.length;
  ultimo--;
  return array[ultimo];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let elementos = array.length
  for(i=0;i<elementos;i++){
    array[i]++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let elementos = palabras.length;
  let newString = "";
  for(i=0; i<elementos ; i++){
    if(i<(elementos-1)){
      newString = newString + palabras[i] + " ";
    }else{
      newString = newString + palabras[i];
    }
  }
  return newString;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let elementos = array.length;
  for(i=0; i<elementos; i++){
    if(elemento==array[i]){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let elementos = numeros.length;
  let acumulador = 0;
  for(i=0; i<elementos; i++){
    acumulador = acumulador + numeros[i];    
  }
  return acumulador;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let elementos = resultadosTest.length;
  let acumulador = 0;
  let promedio = 0;
  for(i=0; i<elementos; i++){
    acumulador = acumulador + resultadosTest[i];    
  }
  promedio = acumulador/elementos;
  return promedio;
}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let elementos = numeros.length
  let elMayor = 0;
  for(i=0 ; i<elementos; i++){
    if(numeros[i]>elMayor){
      elMayor = numeros[i];
    }
  }
  return elMayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let elementos = arguments.length;
  let producto = 1;
  if(elementos==0){
    return 0;
  } else if(elementos==1){
    return arguments[0]
  } else {
    for(i=0; i<elementos;i++){
      producto = producto * arguments[i];
    }
    return producto;
  }

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let elementos = arreglo.length;
  var losMayores18 = [];
  for(i = 0; i<elementos; i++){
    if(arreglo[i]>18){
      losMayores18.push(arreglo[i]);
    }
  }
  var cantMas18 = losMayores18.length;
  return cantMas18;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  if(numeroDeDia==1 || numeroDeDia==7){
    return "Es fin de semana"
  } else {
    return "Es dia Laboral"
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let aCadena = String(n);
  if(aCadena.startsWith("9")){
    return true;
  }else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let elementos = arreglo.length;
  let elAnterior = arreglo[0];
  let siSon = true
  for(i=0; i<elementos; i++){
    if(arreglo[i]==elAnterior){
      elAnterior = arreglo[i];
      siSon = true;
    }else{
      return false
    }
  }
  if(siSon==true){
    return true;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let elementos = array.length;
  let losBuscados = [];
  let eneroSi = false;
  let marzoSi = false;
  let novSi = false;
  for(i=0; i<elementos; i++){
    if(array[i]=="Enero"){
      losBuscados.push(array[i])
      eneroSi = true;
    } else if(array[i]=="Marzo"){
      losBuscados.push(array[i]);
      marzoSi = true;
    } else if(array[i]=="Noviembre"){
      losBuscados.push(array[i]);
      novSi = true;
    }
  }
    
  if(eneroSi==true && marzoSi==true && novSi==true){
    return losBuscados;
  }else{
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let elementos = array.length;
  var losMas100 = [];
  for(i=0; i<elementos; i++){
    if(array[i]>100){
      losMas100.push(array[i]);
    }
  }
  return losMas100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let acumulador = numero;
  var array = []
  let rompio = false
  for(i=0; i<10; i++){
    acumulador =  acumulador + 2;
    if(acumulador == i){
      rompio = true
      break
    }
    array.push(acumulador);
  }
  if(rompio==true){
    return "Se interrumpió la ejecución";
  }else{
    return array;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let acumulador = numero;
  var array = []
  for(i=1; i<11; i++){
    if(i != 5){
      acumulador = acumulador + 2;
      array.push(acumulador)
    }else{
      continue
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
