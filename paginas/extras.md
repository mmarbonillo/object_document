## 3 OBJETO ELEMENT
**3.1 Append Child**

Con este método podemos añadirle un nodo hijo a un elemento.

    element.appendChild(childNode);

[Ejemplo](examples/ej05/index.html)

**3.2 Has Child Nodes**

Devuelve *True* o *False* dependiendo si el elemento tiene nodos hijos o no.

    element.hasChildNodes();    

[Ejemplo](examples/ej06/index.html)

**3.3 Child Nodes**

Esta **propiedad** devuelve como un array **TODOS** los nodos hijos de un elemento.

    var child = element.childNodes;

[Ejemplo](examples/ej07/index.html)

**3.4 Replace Child**

Este método se usa para reemplazar un hijo por otro.

    element.replaceChild(oldChild, newChild);

[Ejemplo](examples/ej08/index.html)

**3.5 Remove Child**

Elimina el elemento hijo que se le indique.

    emelent.removeChild(child);

[Ejemplo](examples/ej09/index.html)

### ATRIBUTOS ÚTILES
#### [1. Style](https://www.w3schools.com/jsref/dom_obj_style.asp)