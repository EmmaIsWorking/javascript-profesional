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

### Getters y setters
Donfiguración del trío **data-getters-setters** para acceder y modificar esos datos. Esta definición es útil cuando algunas operaciones, como la validación, tienen que realizarse en los datos antes de guardarlos o verlos: los captadores y los instaladores proporcionan el hogar perfecto para ello.

Existe una definición más estricta según la cual la encapsulación se realiza para ocultar datos, para que sea inaccesible desde otro código, excepto a través de *getters* y *setters* . De esta forma, no terminamos sobrescribiendo accidentalmente datos importantes con algún otro código en el programa.

### Proxis
El objeto Proxy se usa para definir un comportamiento personalizado para operaciones fundamentales (por ejemplo, para observar propiedades, cuando se asignan, enumeración, invocación de funciones, etc).

- *handler*: objeto que gestiona las intercepciones a las propiedades del objeto proxy.
- *traps*: Son los métodos interceptores que proveen acceso a las propiedades. Es análogo al concepto de traps en los sistemas operativos.
- *target* : El objeto que virtualiza este objeto. Suele usarse como backend de almacenamiento del proxy. Invariantes (semántica que no acepta cambios) respecto a la no extensibilidad del objeto o propiedades no configurables se verifican contra este target.

### Generators
Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope.

Algunas de sus características:

- Los generadores regresan una función.
- *Empiezan suspendidos* y se tiene que llamar **next** para que ejecuten.
- Regresan un value y un boolean done que define si ya terminaron.
- **yield** es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.


### Fetch
La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
Este tipo de funcionalidad se conseguía previamente haciendo uso de XMLHttpRequest. Fetch proporciona una alternativa mejor que puede ser empleada fácilmente por otras tecnologías como Service Workers. Fetch también aporta un único lugar lógico en el que definir otros conceptos relacionados con HTTP como CORS y extensiones para HTTP.
Con fetch tenemos algo llamado AbortController que nos permite enviar una señal a una petición en plena ejecución para detenerla.

### IntersectionObeserver
La API Observador de Intersección, provee una vía para, de forma asíncrona, observar cambios en la intersección de un elemento con un elemento ancestro o con el viewport del documento de nivel superior.El API Intersection Observer deja al código registrar una función callback que se ejecuta si un elemento que se desea monitorizar entra o sale de otro elemento (o del viewport), o cuando la cantidad por la que ambos elementos se intersecan cambia en una cantidad requerida. De esta manera, los sitios no necesitan hacer nada sobre el hilo principal para mirar este tipo de intersección entre elementos, y el navegador está libre para optimizar la gestión de intersecciones como le parezca conveniente.


### VisibilityChange
El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.

### Service Workers
Un service worker es una secuencia de comandos que tu navegador ejecuta en segundo plano, separado de una página web, abriéndoles la puerta a funciones que no necesitan una página web ni interacción de usuario. En la actualidad, ya incorporan funciones como notificaciones push y sincronización en segundo plano. En el futuro, los service workers podrían admitir funciones como sincronización periódica o geovallado. 
El motivo por el que esta es una API tan emocionante es que te permite admitir experiencias sin conexión, brindándoles a los programadores control total sobre la experiencia.




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

[Getters y Setters](https://es.hideout-lastation.com/ultimate-guide-getters)

[Proxi](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Proxy)

[fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)

[Intersection Observer](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API)

[Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers?hl=es)

[PWAs](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps)


