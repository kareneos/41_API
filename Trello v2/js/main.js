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
    div.setAttribute("class", "inl bg-gray pd-3 ml-1 mt-1 bloqueGris"); 
    tarjetas.appendChild(div);   
    //crea input nombre de la lista
    var input = document.createElement("input");
    input.setAttribute("id","inputTituloLista");
    input.setAttribute("placeholder","Ingrese nombre de la lista");
    input.setAttribute("class", "mt-5");
    //crea botón guardar
    var boton2 = document.createElement("button");
    boton2.setAttribute("class","btn btn-primary btn-sm");
    //crear texto del boton guardar
    boton2.innerHTML = "Guardar";
    //añarir input y boton gardar en div
    div.appendChild(input);
    div.appendChild(boton2);
    //focus en input
    input.focus();
    //crear título al dar click en guardar
    boton2.onclick = function(){
        if (input.value.length == 0){
            alert("Ingrese nombre de la lista");
        }else{
            //ocultar input y boton2
            input.style.display="none";
            boton2.style.display="none";
            //crea titulo
            var divTarjetas = document.createElement("div");
            var textoTitulo = input.value;
            var titulo = document.createTextNode(textoTitulo);
            divTarjetas.appendChild(titulo);
            div.insertBefore(divTarjetas, input);
            //Deja input en blanco
            document.getElementById("inputTituloLista").value = "";
            
            //Botón añadir una tarjeta
            var anadirTarjeta = document.createElement("button");     
            anadirTarjeta.setAttribute("class","btn btn-success btn-sm mt-1");
            var textoBotonTarjeta = document.createTextNode("Añadir una tarjeta...");
            anadirTarjeta.appendChild(textoBotonTarjeta);
            divTarjetas.appendChild(anadirTarjeta);
            }
        //Textarea
        anadirTarjeta.onclick = function(){
            var textArea = document.createElement("textarea");
            divTarjetas.insertBefore(textArea, anadirTarjeta);
            textArea.focus();
            //Arrastrar TextArea
            textArea.setAttribute("draggable","true");
            //notar cuál elemento se arrastra
            textArea.addEventListener('dragstart', iniciaArrastre, false);
            function iniciaArrastre(){
                this.style.opacity = "0.4";
                textArea.setAttribute("class","bg-blue");
            };
        };
    };
}
