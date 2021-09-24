//Función que funciona como manejador de evento
//al producirse el evento load (carga de la página)
function init() {
    //Ingresar los datos de los números a operar
    var op1 = prompt('Introduzca el numero:', '');
    //Elemento div donde se mostrará el menú de las operaciones
    var operaciones = document.getElementById('operaciones');
    //Elemento div donde se mostrarán los resultados
    var resultado = document.getElementById('resultado');
    //Creando el contenido de la página
    var contenido = "<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pies</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Yardas</span></a>\n";
    contenido += "</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";
    //Colocar el contenido dentro del elemento div
    operaciones.innerHTML = contenido;
    //Preparando el manejo del evento click sobre los enlaces del menú
    var opciones = document.getElementsByTagName('a');
    //Recorrer todos los elementos de enlace (elementos a)
    //y asignar el manejador del evento click
    for (var i = 0; i < opciones.length; i++) {
        switch (i) {
            case 0:
                opciones[i].onclick = function () {
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " metros = " + op1 * 3.28084 + " pies " + "</p>\n";
                }
                break;
            case 1:
                opciones[i].onclick = function () {
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " metros = " + op1 * 39.3701 + " pulgadas " + "</p>\n";
                }
                break;
            case 2:
                opciones[i].onclick = function () {
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " metros = " + op1 * 1.09361 + " yardas " + "</p>\n";
                }
                break;
        }
    }
}
window.onload = init;