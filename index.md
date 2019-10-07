# EL OBJETO DOCUMENT
## 1 ¿Qué es un objeto?

Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.

### 1.1 Y el objeto document, ¿Qué es?

Con el objeto document se controla la página web y todos los elementos que contiene. El objeto document es la página actual que se está visualizando en ese momento.

## 2 ¿Dónde está situado?

Document depende directamente del elemento raíz en la jerarquia de objetos, es decir, de [window](https://www.w3schools.com/jsref/obj_window.asp). También puede depender del objeto [frame](https://desarrolloweb.com/articulos/1147.php) en caso de que la página se está mostrando en un frame.

![Jerarquía de objetos en JavaScript](jerarquia.jpg)

## 3 MÉTODOS
### 3.1 OBSOLETOS
**3.1.1 Capture Events**

Servía para especificar que tipo de eventos tiene que recoger el documento.

    document.captureEvents();    

Actualmente se recoge un elemento y se le añade un evento: 

    elemento.addEventListener(evento, función, flujo);    

**3.1.2 Handle Event**

Recoge un evento concreo para realizar una serie de procesos o acciones cuando el evento indicado se produzca.
Ahora este método pertenece al objeto eventListener.

    document.handleEvent(event);    

**3.1.3 Release Events**

Hace que el documento deje de capturar un evento concreto.
Ahora pertenece al objero [window](https://www.w3schools.com/jsref/obj_window.asp).

    document.releaseEvents(event);    

**3.1.4 Route Event**

Solía usarse para mandar un evento al siguiente objeto que solicitó carturar eventos (handleEvent).
Este método pasó a ser del objeto [window](https://www.w3schools.com/jsref/obj_window.asp).

    document.routeEvent();

**3.2.2 Get Selection**\*

Devuelve un objeto [Selection](https://developer.mozilla.org/es/docs/Web/API/Selection) que representa el texto que se ha seleccionado.

    document.getSelection();    


### 3.2 EN USO
**3.2.1 Open, Write y Close**

Estos tres métodos van de la mano.

- Con *open* abrimos el documento a la escritura.

- Con *write* escribimos en el documento.

- Con *close* cerramos el documento.


    document.open();     
    document.write(text);    
    document.close();    

[Ejemplo](examples/01.html)

**3.2.2 Get Element By Id**

Devuelve un objeto HTML con el elemento que tenga como propiedad 'id' el string que se le pasa..

    document.getElementById(idName);    

**3.2.2 Get Elements By Name**

Devuelve un array de objetos HTML con los elementos que tengan como propiedad 'name' el string que se le pasa.

    document.getElementsByName(nameName);    

**3.2.3 Get Elements By Tag Name**

Devuelve un array de objetos HTML con los elementos que haya recogido.

    document.getElementsByTagName(tagName);    

**3.2.4 Create Text Node**

Sirve para crear un nodo de tipo texto (\<p>).

    var elementP = document.createTextNode(String);

**3.2.5 Create Element**

Con este método podemos crear nuevos elementos.

    var element = document.createElement(tag);


### 3.3 EXTRAS
**3.3.1 Has Child Nodes**

Devuelve *True* o *False* dependiendo si el elemento tiene nodos hijos o no.

    element.hasChildNodes();    

**3.3.2 Child Nodes**

Esta **propiedad** devuelve como un array **TODOS** los nodos hijos de un elemento.

    var child = element.childNodes;

**3.3.3 Append Child**

Con este método podemos añadirle un nodo hijo a un elemento.

    element.appendChild(childNode);

**3.3.4 Replace Child**

Este método se usa para reemplazar un hijo por otro.

    element.replaceChild(oldChild, newChild);

**3.3.5 Remove Child**

Elimina el elemento hijo que se le indique.

    emelent.removeChild(child);


