function funcion(){
    var elementos = document.getElementsByName("elementoMenu");
    
    for(i = 0; i < elementos.length; i++){
        alert("" + i + ": " + elementos[i].innerHTML);
    }
}

function objeto(){
    var elementos = document.getElementsByName("elementoMenu");
    for(i = 0; i < elementos.length; i++){
        alert("" + i + ": " + elementos[i]);
    }
}

function fallo(){
    var elementos = document.getElementsByName("nombre");
    for(i = 0; i < elementos.length; i++){
        alert("" + i + ": " + elementos[i].innerHTML);
    }
}