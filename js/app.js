/*
 * Archivo principal de funcionalidad de JS

 var imagenes = document.getElementById('galeria').getElementsByTagName('img');


 for( var i = 0; i < imagenes.length; i++){

 	imagenes[i].onClick
 }

  (function(){
    var traerGaleria = document.querySelector('.row'),
        cierre = document.querySelector('.cierre'),
        modalImage = document.querySelector('.slider img');

    traerGaleria.addEventListener('click', openFullSize, false);
  
  function openFullSize(e){
      var src = traerGaleria.firstElementChild.src;
      var boton = document.querySelector('.exit');
          modalOpen = true;
    
      modalImage.src = src;
    
      if(modalOpen){
        cierre.className = 'modal-open';
        boton.addEventListener('click', function(){
          cierre.className = 'modal-closed';
        })
      }
    e.stopPropagation();
};

})();


 */

(function modal(){
  var traerGaleria =
})

 