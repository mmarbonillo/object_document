function funcion(){
    var menu = document.getElementById("menu");
    nuevo = document.createElement("li");
    contenido = document.createTextNode("LI NUEVO");
    nuevo.appendChild(contenido);
    hijos = menu.childNodes;

    //Si existen ambos
    menu.replaceChild(hijos[1], hijos[4]);

    //Si no existe el viejo
    //menu.replaceChild(hijos[1], hijos[3]);

    //Si no existe el nuevo
    //menu.replaceChild(hijos[3], hijos[1]);
}
