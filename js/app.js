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
  var traerGaleria = Array.from(document.getElementsByClassName("img-galeria"));
  var modal = document.getElementById("cajamodal");

  var bodyModal, close, img;
  traerGaleria.forEach(function(galeria){
    box.addEventListener("click", function(){
      modal.innerHTML = "";
      bodyModal = document.createElement("div");
      bodyModal.classList.add("modal-body");
      bodyModal.innerHTML = box.innerHTML;
    })
  })
})

 