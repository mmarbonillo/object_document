function funcion(){

    var etiqueta = prompt("Elige un tipo de nodo: ");
    var texto = prompt("Escribe un texto: ");

    var contenido = document.createTextNode(texto);
    var elemento = document.createElement(etiqueta);
    elemento.appendChild(contenido);

    var padre = document.getElementById("capa1");
    padre.appendChild(elemento);
}
