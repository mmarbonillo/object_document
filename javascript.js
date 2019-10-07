/*
El objeto Document es el que tiene el contenido de toda
la página que se está visualizando y con el que accederemos a todos
los nodos del árbol DOM

document.captureEvents(): Sirve para especificar que tipo de eventos tiene que recoger el documento. OBSOLETO
Actualmente: Se recoge un elemento y se le añade un evento -> elemento.addEventListener(evento, función, flujo)
document.handleEvent(event): Recoge un evento concreo para realizar una serie de procesos o acciones cuando el evento indicado
    se produzca. Ahora este método pertenece al objeto eventListener.
document.releaseEvents(event): Hace que el documento deje de capturar un evento concreto. Pasó a ser del objeto window del cual
    también quedó obsoleto.
document.routeEvent(): Solía usarse para mandar un evento al siguiente objeto que solicitó carturar eventos (handleEvent).
    Este método pasó a ser del objeto window y ya se ha quedado obsoleto.

document.open(): Abre un documento para poder escribir en él.
document.close(): finaliza la escritura de un documento abierta. 
document.getSelection(): Devuelve un Selection que representa el texto que se ha seleccionado.

document.home(): No se que hace porque ya ni sale en internet.



document.write(String text): Escribe un texto en el documento.
document.writeln(String text): Escribe un texto en el documento y además le mete un retorno de carro.

function funcion(){
    pagina = new XMLHttpRequest();
    pagina.open("GET", "file://C:/Users/Bonillo/Documents/DAW/segundo/Cliente/document/clear/indexjs.html", true);
    pagina.send("body");
    alert(pagina.status);
    /*menu = xmlDoc.getElementById("menu")
    resultado = menu.getElementsByTagNameNS("li","Las");
    for(i = 0; i < resultado.length; i++){
        resultado[i].childNodes[0].nodeValue +
        " edition." +
        " Namespace: " +
        resultado[i].namespaceURI + "<br>";
        
    }
    
    
}*/

function funcion(){

    //GET ELEMENT BY ID
    menu = document.getElementById("menu");
    alert(menu);
    /*elementoUl = menu.children[0];
    elemento = document.createElement("li");
    contenido = document.createTextNode("Otro apartado más");
    elemento.appendChild(contenido);
    elementoUl.appendChild(elemento);*/

    //GET ELEMENTS BY CLASS NAME
    /*submenus = document.getElementsByClassName("submenu");
    for(i = 0; i < submenus.length; i++){
        alert(submenus[i].innerHTML);
    }*/

    //GET ELEMENTS BY NAME
    /*apartados = document.getElementsByName("apartado");
    for(i = 0; i < apartados.length; i++){
        alert(apartados[i].innerHTML);
    }*/

    //GET ELEMENTS BY TAG NAME
    /*capas = document.getElementsByTagName("div");
    for(i = 0; i < capas.length; i++){
        alert(capas[i].innerHTML);
    }*/

    
    //HAS CHILD NODES
    /*alert(document.hasChildNodes());
    alert(document.getElementById("pruebahijos").hasChildNodes());*/

    //REMOVE CHILD
    /*Borra todo el menú (?)
    menu = document.getElementById("menu");
    hijos = menu.childNodes;
    menu.removeChild(hijos[0]);*/


    /*hijos = menu.childNodes;
    i = 0;
    while(menu.hasChildNodes()){
        menu.removeChild(hijos[0]);
        i++;
    }*/


    /*menuUl = document.getElementsByTagName("ul");
    hijos = menuUl[0].childNodes;
    menuUl[0].removeChild(hijos[0]);*/
    

    //REMPLACE CHILD
    /*menuUl = document.getElementsByTagName("ul");
    hijos = menuUl[0].childNodes;
    nuevo = document.createElement("li");
    contenido = document.createTextNode("LI NUEVO");
    nuevo.appendChild(contenido);
    menuUl.replaceChild(nuevo, hijos[7]);
    i=0;
    for(i = 0; i < hijos.length; i++){
        alert(hijos[i]);
    }
    alert(i);*/
    

}