//llamar div tarjetas
var tarjetas = document.getElementById("tarjetas");
//llamar boton + evento onclick
var boton1 = document.getElementById("boton1");
boton1.onclick = function () {
    muestraInput();
};
//añadir input y botón guardar al hacer click en botón1
function muestraInput() {
    //crear div
    var div = document.createElement("div");
    div.setAttribute("class", "inl bg-gray pd-3 ml-1");
    tarjetas.appendChild(div);   
    //crea input nombre de la lista
    var input = document.createElement("input");
    input.setAttribute("placeholder","Ingrese nombre de la lista");
    input.setAttribute("class", "mt-5");
    input.focus();
    //crea botón guardar
    var boton2 = document.createElement("button");
    boton2.setAttribute("class","btn btn-primary btn-sm");
    //crear texto del boton guardar
    var textoBoton2 = document.createTextNode("Guardar");
    //Agregar texto a guardar
    boton2.appendChild(textoBoton2);
    //div para añarir input y boton gardar
    div.appendChild(input);
    div.appendChild(boton2);


    //crear título al dar click en guardar
    boton2.onclick = function(){
        if (input.value.length == 0){
            alert("Ingrese nombre de la lista");
        }else{
            //crea elemento
            var div = document.createElement("div");
            div.className = "nuevo";
            var textoTitulo = input.value;
            var titulo = document.createTextNode(textoTitulo);
            div.appendChild(titulo);
            var titulo1 = document.getElementById("titulo");
            titulo1.appendChild(div);
           //Deja input en blanco
            document.getElementById("inputTituloLista").value = "";
            //Botón añadir una tarjeta
            var anadirTarjeta = document.createElement("button");     
            anadirTarjeta.setAttribute("class","btn btn-success btn-sm mt-1");
            var textoBotonTarjeta = document.createTextNode("Añadir una tarjeta...");
            anadirTarjeta.appendChild(textoBotonTarjeta);
            titulo1.appendChild(anadirTarjeta);
            }
        //Textarea
        anadirTarjeta.onclick = function(){
            var textArea = document.createElement("textarea");
            div.appendChild(textArea);
            textArea.focus();
        };
    };
}
