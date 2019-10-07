function funcion(){
    var chau = parseInt(prompt("Elige que hijo del menú quieres eliminar(1 o 4): "));
    var menu = document.getElementById("menu");
    var hijos = menu.childNodes;
    menu.removeChild(hijos[chau]);
}
