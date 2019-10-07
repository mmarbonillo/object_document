function funcion(){
    document.open();
    document.write("Hello world!");
    document.write("<br>");
    document.write("<input type=\"button\" name=\"ejemplo\" value=\"Ejecutar\" onclick=\"funcion()\">");
    document.close();
}

function open(){
    document.open();
}