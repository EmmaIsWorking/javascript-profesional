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


***

## Enlaces
[HTMLMediaElement](https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement)

[IFFE](https://developer.mozilla.org/es/docs/Glossary/IIFE)

[NodeList](https://developer.mozilla.org/es/docs/Web/API/NodeList)