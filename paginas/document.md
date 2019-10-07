# EL OBJETO DOCUMENT
## 1 MÉTODOS
#### 1.1 OBSOLETOS
**1.1.1 Capture Events**

Servía para especificar que tipo de eventos tiene que recoger el documento.

    document.captureEvents();    

Actualmente se recoge un elemento y se le añade un evento: 

    elemento.addEventListener(evento, función, flujo);    

**1.1.2 Handle Event**

Recoge un evento concreo para realizar una serie de procesos o acciones cuando el evento indicado se produzca.
Ahora este método pertenece al objeto eventListener.

    document.handleEvent(event);    

**1.1.3 Release Events**

Hace que el documento deje de capturar un evento concreto.
Ahora pertenece al objero [window](https://www.w3schools.com/jsref/obj_window.asp).

    document.releaseEvents(event);    

**1.1.4 Route Event**

Solía usarse para mandar un evento al siguiente objeto que solicitó carturar eventos (handleEvent).
Este método pasó a ser del objeto [window](https://www.w3schools.com/jsref/obj_window.asp).

    document.routeEvent();

**1.1.5 Get Selection**\*

Devuelve un objeto [Selection](https://developer.mozilla.org/es/docs/Web/API/Selection) que representa el texto que se ha seleccionado.

    document.getSelection();    


#### 1.2 EN USO
**1.2.1 Open, Write y Close**

Estos tres métodos van de la mano.

- Con *open* abrimos el documento a la escritura.

- Con *write* escribimos en el documento.

- Con *close* cerramos el documento.


    document.open();     
    document.write(text);    
    document.close();    

[Ejemplo](../examples/ej01/index.html)

**1.2.2 Get Element By Id**

Devuelve un objeto HTML con el elemento que tenga como propiedad 'id' el string que se le pasa..

    document.getElementById(idName);   

[Ejemplo](../examples/ej02/index.html)

**1.2.2 Get Elements By Class Name**

Devuelve un array de objetos HTML con los elementos que tengan como propiedad 'class' el string que se le pasa.

    document.getElementsByClassName(className);   

[Ejemplo](../examples/ej10/index.html)

**1.2.2 Get Elements By Name**

Devuelve un array de objetos HTML con los elementos que tengan como propiedad 'name' el string que se le pasa.

    document.getElementsByName(nameName);

[Ejemplo](../examples/ej03/index.html)    

**1.2.3 Get Elements By Tag Name**

Devuelve un array de objetos HTML con los elementos que haya recogido.

    document.getElementsByTagName(tagName);    

[Ejemplo](../examples/ej04/index.html)

\**Se puede acceder a cualquier propiedad de cualquier elemento que se recoja.

Por ejemplo: Si quisiesemos recoger un enlace y cambiarle su 'href' se haría de la siguiente forma:

    var enlace = document.getElementsByTagName(a);
    enlace[0].href = "URL";

**1.2.4 Create Text Node**

Sirve para crear un nodo de tipo texto.

    var elementP = document.createTextNode(String);

**1.2.5 Create Element**

Con este método podemos crear nuevos elementos.

    var element = document.createElement(tag);


