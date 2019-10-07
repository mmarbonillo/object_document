# EL OBJETO DOCUMENT
## ¿Qué es un objeto?

Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.

### Y el objeto document, ¿Qué es?

Con el objeto document se controla la página web y todos los elementos que contiene. El objeto document es la página actual que se está visualizando en ese momento.

## ¿Dónde está situado?

Document depende directamente del elemento raíz en la jerarquia de objetos, es decir, de 'window'. También puede depender del objeto [frame](https://desarrolloweb.com/articulos/1147.php) en caso de que la página se está mostrando en un frame.

![Jerarquía de objetos en JavaScript](jerarquia.jpg)

## MÉTODOS
### OBSOLETOS
**Capture Events**

Servía para especificar que tipo de eventos tiene que recoger el documento.

    document.captureEvents();    

Actualmente se recoge un elemento y se le añade un evento: 

    elemento.addEventListener(evento, función, flujo);    

**Handle Event**

Recoge un evento concreo para realizar una serie de procesos o acciones cuando el evento indicado se produzca.
Ahora este método pertenece al objeto eventListener.

    document.handleEvent(event);    

**Release Events**

Hace que el documento deje de capturar un evento concreto.
Ahora pertenece al objero 'window'.

    document.releaseEvents(event);    

**Route Event**

Solía usarse para mandar un evento al siguiente objeto que solicitó carturar eventos (handleEvent).
Este método pasó a ser del objeto 'window'.

    document.routeEvent();


