1. [CONCEPTOS BÁSICOS](#dom)
   - [1.1 Árbol DOM](#dom)
   - [1.2 Nodo](#nodo)
   - [1.3 Elemento](#elemento)
   - [1.4 Objeto](#objeto)
   - [1.5 El Objeto Document](document)
2. [DOCUMENT](paginas/document.md)
3. [EXTRAS](paginas/extras.md)

### ÁRBOL DOM <a name="dom"></a>

Es la representacíon gráfica en forma de árbol de todos los nodos de una página.

![DOM](dom.png)

### NODOS <a name="nodo"></a>

Es el conjunto de elementos interconectados entre sí que representan el contenido de una página.

### Elementos <a name="elemento"></a>

Un elemento es un nodo de forma individual.

### OBJETOS <a name="objeto"></a>

Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.

### EL OBJETO DOCUMENT <a name="document"></a>

Con el objeto document se controla la página web y todos los elementos que contiene. El objeto document es la página actual que se está visualizando en ese momento.

#### ¿Dónde está situado? <a name="situado"></a>

Document depende directamente del elemento raíz en la jerarquia de objetos, es decir, de [window](https://www.w3schools.com/jsref/obj_window.asp). También puede depender del objeto [frame](https://desarrolloweb.com/articulos/1147.php) en caso de que la página se está mostrando en un frame.

![Jerarquía de objetos en JavaScript](jerarquia.jpg)

