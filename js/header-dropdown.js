function desplegar() {
    var aparecer = document.getElementsByClassName('menu-desplegable');
    for (var i = 0; i < aparecer.length; i++) {
        aparecer[i].classList.toggle('ocultar');
    }
}