(function(d,w){
    d.addEventListener('readystatechange', function () {
        if (d.readyState === 'interactive') {
            pintarproducto();
        }
    })
    var productos = cargartortas();
     function cargartortas(){
         var retorno=[];
         if (localStorage.getItem('producto')){
             retorno=JSON.parse(localStorage.getItem('producto'))
         }
         return retorno;
     }
     var contenedor = d.getElementById('contenedor');
function pintarproducto(){
    for(var i in productos){

	const seccionCarta = document.createElement('div');
	seccionCarta.setAttribute('class', 'card');
	

	const imagenCarta = document.createElement('img');
	imagenCarta.setAttribute('src', productos[i].imagen);
	imagenCarta.setAttribute('class', 'card-img-top');
    seccionCarta.appendChild(imagenCarta);

	const articuloCarta = document.createElement('h4');
	articuloCarta.innerText= productos[i].nombre;
	seccionCarta.appendChild(articuloCarta)

	const tituloCarta = document.createElement('p');
	tituloCarta.innerText = productos[i].comentario;
	articuloCarta.appendChild(tituloCarta);

	const parrafoCarta = document.createElement('a');
	parrafoCarta.setAttribute('href', '#');
	parrafoCarta.innerText = 'Leer más';
	articuloCarta.appendChild(parrafoCarta);

    contenedor.appendChild(seccionCarta);

}
}
})(document,window)