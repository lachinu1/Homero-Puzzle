//capturamos el elemento html de la img y del formulario
const IMG= document.getElementById("Homero","Marge","Bart","Lisa", "Maggie");
const FORMULARIO = document.getElementById("formulario");

//se le agrega un evento al formulario, cuando se ejecute el submit(boton enviar) se ejecute la funcion declarada
FORMULARIO.addEventListener("submit", (e)=> {
    //esto lo que hace es detener el proceso predeterminado que tiene el form(en este caso)
    //si yo no hago esto se ejecuta el submit predeterminado y actualiza o me envia a otra pagina
    e.preventDefault();
    //se captura el input del nombre
    let inputNombre = document.getElementById("nombre");

    //se guardan los values de los elementos en las variables siguientes
    var imgValue = IMG.attributes.src.value;
    var inputValue = inputNombre.value;
​
    //creamos un objeto con los values que va a ser el que enviemos en el POST
    var objetoParaEnviar = {
        avatar: imgValue,
        usuario: inputValue 
    }
​
    //ejecutamos una funcion pasandole por parametro el objeto
    enviarDatos(objetoParaEnviar);
    console.log(imgValue, inputValue)
})
​
​
//esta funcion recibe por parametro un objeto que a traves de fetch lo envia en un body por el metodo POST

function enviarDatos(objeto){
    fetch('http://localhost:3000/juego.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto)
    })
    .then(response => {
        console.log(response)
    })
}