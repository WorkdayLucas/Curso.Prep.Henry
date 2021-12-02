Objetos: es una coleccion de datos, caracteristicas que intentan emular objetos de la vida real, un concepto de la programacion orientada a objetos. Estructuralmente es similar a un array, aunque tienen algunas diferencias, como por ejemplo que a la hora de acceder a un dato, no se usa un indice, si no que se accede con el nombre de la propiedad 

Propiedades: las propiedades son cada uno de los datos que va a guardar el objeto

Métodos: como en la vida real los objetos tienen ciertos comportamientos, y realizan algunas acciones, los metodos son procedimientos que realizaran los objetos, pudiendo utilizar las propiedades en el proceso.
Cuando se guarda una funcion dentro de un objeto esta pasa a ser un método del objeto, que luego se va a poder invocar.

Bucle `for…in`: un blucle for in va a iterar un objeto segun la cantidad de propiedades que guarde, seria lo mismo que utilizar el metodo ".length" de un array y utilizarlo como indice para recorrer el array segun la cantidad de datos que tenga almacenados.

Notación de puntos vs notación de corchetes: para llamar a una propiedad o método de un objeto se necesita el nombre del objeto y la propiedad o método a llamar, para hacerlo se puede utilizar la notación de punto que es objeto.propiedad , en este caso buscará una propiedad con ese nombre literal en el objeto y no se puede utilizar una variable, o la otra manera es utilizar la anotacián de corchetes que es objeto["propiedad"], en este caso el nombre de la propiedad debe de ir entre comillas, ya que si no se usan las comillas, se interpretará que hay una variable, y entonces se fijará que hay guardado en la variable y usará ese valor para comparar y buscar en el objeto una propiedad llamada igual que ese valor.  