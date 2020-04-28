# Proyecto del Curso Profesional de JavaScript de la Escuela de JavaScript de Platzi.

## Dependencias
`npm install -D live-server`

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

## Enlaces
[HTMLMediaElement](https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement)

[IFFE](https://developer.mozilla.org/es/docs/Glossary/IIFE)