# Proyecto del Curso Profesional de JavaScript de la Escuela de JavaScript de Platzi.

## Dependencias
`npm install -D live-server`

***

## Conceptos
*DOM*: representación que hace el navegador de un documento HTML.

*DOMContentLoaded*: evento que significa que todo el documento está disponible para ser manipulado.

*async*: Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.

*defer*: La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.

---

### Scope
El Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.

#### Global Scope
Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página. Aquí hay mucho riesgo de sobreescritura.

#### Function Scope
Variables declaradas dentro de una función sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

#### Block Scope
Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.

#### Module Scope
Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.

---

### Closures 
Nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.
IIFE: Expresión de función ejecutada inmediatamente

---

### This
`this` se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

- Cuando llamamos a `this` en el Global Scope o Function Scope, se hace referencia al objeto window. A excepción de cuando estamos en strict mode que nos regresará undefined.
- Cuando llamamos a `this` desde una función que está contenida en un objeto, `this` se hace referencia a ese objeto.
- Cuando llamamos a `this` desde una “clase”, se hace referencia a la instancia generada por el constructor.

---
### Los métodos call, apply y bind
Las funciones *call, apply y bind* son parte del prototipo Function. Toda función usa este prototipo y por lo tanto tiene estas tres funciones.

- *functionName.call()*. Ejecuta la función recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la función que llamó a call.
- *functionName.apply()*. Ejecuta la función recibiendo como primer argumento el this y como segundo un arreglo con los argumentos que recibe la función que llamó a apply.
- *functionName.bind()*. Recibe como primer y único argumento el this. No ejecuta la función, sólo regresa otra función con el nuevo this integrado.

---

### Prototype
*prototype chain*: Todos los objetos “heredan” de un prototipo que a su vez hereda de otro prototipo y así sucesivamente.
*proto*: Objeto el cual debe ser el prototipo del nuevo objeto creado.

#### Herencia Prototipal
 Object es la raíz de todo, por lo tanto tiene un prototipo padre undefined.
 *hasOwnProperty()* sirve para verificar si una propiedad es parte del objeto o si viene heredada desde su prototype chain.

### Cómo funciona JavaScript
![como_funciona_js](https://drive.google.com/file/d/1R-j3yC_kBYLvFflAoEiBO72Az7vS_v5a/view?usp=sharing)

#### Parsers y el Abstract Syntax Tree
- *parser*: descompone y crea tokens que integran el AST.
- Se compila a bytecode y se ejecuta.
- Lo que se pueda se optimiza a machine code y se reemplaza el código base.

### JavaScript Engine
- Bytecode es como el código assembler pero en lugar de operar en el procesador opera en la máquina virtual V8 del navegador.
- Machine code es el más bajo nivel, es código binario que va directo al procesador.
- El profiler se sitúa en medio del bytecode y el optimizador

#### Event Loop
- *Stack*: Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
- *Memory Heap*: De forma desorganizada se guarda información de las variables y del scope.
- *Schedule Tasks*: Aquí se agregan a la cola, las tareas programadas para su ejecución.
- *Task Queue*: Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
- *MicroTask Queue*: Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.
***

## Enlaces
[HTMLMediaElement](https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement)

[IFFE](https://developer.mozilla.org/es/docs/Glossary/IIFE)

[NodeList](https://developer.mozilla.org/es/docs/Web/API/NodeList)

[Object.create](https://wiki.developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/create)

[__proto__ vs prototype](https://medium.com/javascript-in-plain-english/proto-vs-prototype-in-js-140b9b9c8cd5)

[object](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/getPrototypeOf )

[Please stop using Classes in JavaScript and become a better developer](https://medium.com/javascript-in-plain-english/please-stop-using-classes-in-javascript-and-become-a-better-developer-a185c9fbede1)

[AST Explorer](https://astexplorer.net/#/gist/16fc27fc420f705455f2b42b6c804aa1/d9cc7988c2c743d7edfbb3c3b1abed866c975ee4)


