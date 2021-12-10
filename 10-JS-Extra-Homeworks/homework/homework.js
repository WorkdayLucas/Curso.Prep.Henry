// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  i=0
  for(let clave in objeto){
    array[i] = [clave,objeto[clave]];
    i++;
  }
  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let L = string[0]
  contador = 0
  var letras={}

  for(let letra in string){
	  for(let j in string){
      if(L == string[j]){
    		contador = contador+1;
    	}
    }


	  for(let i in string){
		  if(letra == i){
			letras[L]=contador			
			continue
		  }else if(L == string[i]){
			
			break;
		  }
	
	  }

    
    L= string[parseInt(letra)+1];
    contador=0;
  
  }

  return letras
  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let filtro = s.toUpperCase()
  let upCase = ""
  let lowCase = ""

  for(let char in s){
	  if(s[char] == filtro[char]){
	  	upCase = upCase + s[char]
  	}else{
		  lowCase = lowCase + s[char]
  	}
  }

  return upCase+lowCase
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  function turnWordMirrow(palabra){ 
    let mirrowW = "";
  
    for(i=palabra.length; i>0; i--){
       mirrowW += palabra[i-1]; 
    }
  
    return mirrowW
  }
  
  
  function  turnMirrow(frase){ 
    let L = frase.trim()[0]
    let esp = 0
    let palabras = 0
    let posisiones = [0]
    word = "";
    mirrowWord = "";
    mirroWsent = "";
  
    for(let char in frase.trim()){
       if(frase.trim()[char]==" "){
         esp++
         posisiones.push(char)
       }
    }
  
    palabras = esp + 1
    posisiones.push(frase.trim().length)
  
    for(let i=0; i<palabras; i++){
       word = frase.trim().substring(posisiones[i],posisiones[i+1]).trim()
       mirroWsent += turnWordMirrow(word) + " "
    }
  
  
    return mirroWsent.trim()
  }

  return turnMirrow(str)
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  function turnMirrow(n){ 
    let mirrowW = "";
    let palabra = String(n)
  
    for(i=palabra.length; i>0; i--){
       mirrowW += palabra[i-1]; 
    }
  
    return mirrowW
  }

  if(numero == turnMirrow(numero)){
    return "Es capicua"
   }else{
    return "No es capicua"
   }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let filter = ""

  for(let char in cadena){
    if(cadena[char] == "a" ||cadena[char] == "b" || cadena[char] == "c"){

    }else{
      filter += cadena[char]
    }
  }

  return cadena=filter
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let array = arr
  let newArray = [[]]

  for(let i in array){
    newArray[i] = [array[i].length,array[i]] 
  }

  newArray.sort()

  for(let i in newArray){
   array[i] = newArray[i][1]
  }

  return array
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
let ns1 = arreglo1
let ns2 = arreglo2
let comons = []

for(let i in ns1){

  for(let j in ns2){
    if(ns1[i]==ns2[j]){
      comons.push(ns1[i])
      break
    }
  }
}


for(let i in comons){
  let L = comons[i]
  for(let j in comons){
    if(i==j){
      console.log(i + " " + j + "ignorado")
    }else{
      if(L == comons[j]){
        comons.splice(parseInt(j),1)
      }
    }
  }
}

return comons
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
}