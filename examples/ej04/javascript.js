function funcion(){
    var elementos = document.getElementsByTagName("ul");
    for(i = 0; i < elementos.length; i++){
        alert("" + i+1 + ": " + elementos[i].innerHTML);
    }
}

function objeto(){
    var elementos = document.getElementsByTagName("ul");
    for(i = 0; i < elementos.length; i++){
        alert("" + i + ": " + elementos[i]);
    }
}

function fallo(){
    var elementos = document.getElementsByName("iframe");
    for(i = 0; i < elementos.length; i++){
        alert("" + i + ": " + elementos[i].innerHTML);
    }
}