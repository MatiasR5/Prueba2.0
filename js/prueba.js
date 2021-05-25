(function(d,w){
    
    var imagen= d.getElementById('cont');
    let formulario = d.getElementsByTagName('form')[0];
    var text = d.getElementById('text');
    var producto= cargarproducto();
        text.addEventListener('input', function(){
        imagen.src=text.value;

    });
    function guardarlocal(params) {
        producto.push(params)
        localStorage.setItem('producto', JSON.stringify(producto))
    }
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        var nombre= formulario.pastel.value;
        var precio= formulario.precio.value;
        var radio= formulario.radio.value;
        var imagen=formulario.imagen.value;
        var comentario=formulario.comentario.value;

        var objeto_producto={
           nombre:nombre,
           precio:precio,
           radio:radio,
           imagen:imagen,
           comentario:comentario
        }
        guardarlocal(objeto_producto);
    })
    function cargarproducto() {
        var retorno=[]
        if (localStorage.getItem('producto')) {
            retorno=JSON.parse(localStorage.getItem('producto'))  
        }

        return retorno;

    }
})(document,window);
