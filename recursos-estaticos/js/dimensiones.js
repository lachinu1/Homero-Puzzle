// dimensiones de la ventanada del navegador

var dimensiones = {
    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    inicar: function() {
        window.addEventListener("resize", function (e) {
        dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        console.log("Ancho: " + dimensiones.ancho +  " | Alto: " + dimensiones.alto);
        });
    }
};

dimensiones.inicar()

