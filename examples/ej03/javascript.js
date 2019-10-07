function inner(){
    var elementos = document.getElementsByName("ElementoMenu");
    for(i = 0; i < elementos.length; i++){
        alert(elementos[i].innerHTML);
    }
}

function objeto(){
    var elementos = document.getElementsByName("elementoMenu");
    for(i = 0; i < elementos.length; i++){
        alert(elementos[i]);
    }
}