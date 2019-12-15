var piezas = document.getElementsByClassName("movil");

var tamWidh = [134,192,134,163,134,163,134,192,134];
var tamHeight = [163,134,163,134,192,134,163,134,163];

for(var i=0;i<piezas.length;i++) {
	piezas[i].setAttribute("width", tamWidh[i]);
	piezas[i].setAttribute("height",tamHeight[i]);
	piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
	piezas[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
    piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
    piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
}

var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
	elementSelect = reordenar(evt);
	currentX = evt.clientX;        
	currentY = evt.clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));     
    currentPosy = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove","moverElemento(evt)");
}

function moverElemento(evt){
	var dx = evt.clientX - currentX;
	var dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	currentX = evt.clientX;        
    currentY = evt.clientY;
    elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
}

function moverElemento(evt){
	var dx = evt.clientX - currentX;
	var dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	currentX = evt.clientX;        
	currentY = evt.clientY;
	elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
	elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
	iman();
}



var entorno = document.getElementById('entorno');
function deseleccionarElemento(evt){
	testing();
	if(elementSelect != 0){			
		elementSelect.removeAttribute("onmousemove");
		elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("onmouseup");
		elementSelect = 0;
	}
}
function reordenar(evt){
	var padre = evt.target.parentNode;
	var clone = padre.cloneNode(true);
	var id = padre.getAttribute("id");
	entorno.removeChild(document.getElementById(id));
	entorno.appendChild(clone);
	return entorno.lastChild.firstChild;
}

var origX = [200,304,466,200,333,437,200,304,466];   
var origY = [100,100,100,233,204,233,337,366,337];

function iman(){
	for(var i=0;i<piezas.length;i++){
		if (Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}
			
var win = document.getElementById("win");


function testing() {
	var bien_ubicada = 0;
	var padres = document.getElementsByClassName('padre');
	for(var i=0;i<piezas.length;i++){
		var posx = parseFloat(padres[i].firstChild.getAttribute("x"));    
		var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
		ide = padres[i].getAttribute("id");
		if(origX[ide] == posx && origY[ide] == posy){
			bien_ubicada = bien_ubicada + 1;
		}
	}
	if(bien_ubicada == 9){
		win.play();
		clearInterval(cronometro)
		alert("Felicitaciones babos@! Terminaste el juego")
		
		}

	}



//Animación de la DonaMovil

var xInic, yInic;
            var estaPulsado = false;
            
            function mousePulsado(evt) { 
                //Obtener la posición de inicio
                xInic = evt.clientX;
                yInic = evt.clientY;  
                estaPulsado = true;
                //Para Internet Explorer: Contenido no seleccionable
                document.getElementById("donaMovil").unselectable = true;
            }
            
            function mouseMovido(evt) {
                if(estaPulsado) {
                    //Calcular la diferencia de posición
                    var xActual = evt.clientX;
                    var yActual = evt.clientY; 
                    var xInc = xActual-xInic;
                    var yInc = yActual-yInic;
                    xInic = xActual;
                    yInic = yActual;
                    
                    //Establecer la nueva posición
                    var elemento = document.getElementById("donaMovil");
                    var position = getPosicion(elemento);
                    elemento.style.top = (position[0] + yInc) + "px";
                    elemento.style.left = (position[1] + xInc) + "px";
                }
            }
            
            function mouseSoltado(evt) {
                estaPulsado = false;
            }
            
            /*
             * Función para obtener la posición en la que se encuentra el
             * elemento indicado como parámetro.
             * Retorna un array con las coordenadas x e y de la posición
             */
            function getPosicion(elemento) {
                var posicion = new Array(2);
                if(document.defaultView && document.defaultView.getComputedStyle) {
                    posicion[0] = parseInt(document.defaultView.getComputedStyle(elemento, null).getPropertyValue("top"));
                    posicion[1] = parseInt(document.defaultView.getComputedStyle(elemento, null).getPropertyValue("left"));            
                } else {
                    //Para Internet Explorer
                    posicion[0] = parseInt(elemento.currentStyle.top);             
                    posicion[1] = parseInt(elemento.currentStyle.left);               
                }      
                return posicion;   
                
            }


		
				