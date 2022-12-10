// Dark mode header, main, footer
function darkModeHeader(){
    var header = document.getElementById("header");
    header.classList.toggle("header-dark-mode");

    var botonHeader1 = document.getElementById("boton1-header");
    var botonHeader2 = document.getElementById("boton2-header");
    botonHeader1.classList.toggle("boton-header-dark-mode");
    botonHeader2.classList.toggle("boton-header-dark-mode");
}

function darkModeBody() {
    var elementb = document.body;
    elementb.classList.toggle("body-dark-mode");
}

function darkModeFooter(){
    var footer = document.getElementById("footer");
    footer.classList.toggle("footer-dark-mode");

    var botonDark = document.getElementById("boton-dark");
    botonDark.classList.toggle("boton-dark-dark");
}


// Dark mode de cada página
function darkModeIndex(){
    darkModeHeader();
    darkModeFooter();
    darkModeBody();

    var botimg = document.getElementById("bot-img-darkMode");
    botimg.classList.toggle("bot-img-dark-mode");

    var fieldset1 = document.getElementById("fieldset-darkMode1");
    fieldset1.classList.toggle("fieldset-dark-mode");
    var fieldset2 = document.getElementById("fieldset-darkMode2");
    fieldset2.classList.toggle("fieldset-dark-mode");
}

function darkModeWiki(){
    darkModeHeader();
    darkModeFooter();
    darkModeBody();

    var span1 = document.getElementById("span1");
    span1.classList.toggle("span-dark-mode");
    var span2 = document.getElementById("span2");
    span2.classList.toggle("span-dark-mode");
    var span3 = document.getElementById("span3");
    span3.classList.toggle("span-dark-mode");
    var span4 = document.getElementById("span4");
    span4.classList.toggle("span-dark-mode");
    var span5 = document.getElementById("span5");
    span5.classList.toggle("span-dark-mode");
    var span6 = document.getElementById("span6");
    span6.classList.toggle("span-dark-mode");
}

function darkModeDescripcion(){
    darkModeHeader();
    darkModeFooter();
    darkModeBody();
}

function darkModeContacto(){
    darkModeHeader();
    darkModeFooter();
    darkModeBody();

    var formularioContacto = document.getElementById("formulario-contacto-dark-mode");
    formularioContacto.classList.toggle("formulario-contacto-dark-mode");
}

function darkModePag404(){
    darkModeHeader();
    darkModeFooter();
    darkModeBody();
}

function darkModeUsuario(){
    darkModeHeader();
    darkModeFooter();
    darkModeBody();

    var usuario = document.getElementById("cuadro-usuario");
    usuario.classList.toggle("cuadro-usuario-dark-mode");
}
