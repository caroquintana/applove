/*
 * Archivo principal de funcionalidad de JS


(function modal(){
  var traerGaleria = Array.from(document.getElementsByClassName("col-4"));
  var modal = document.getElementById("cajamodal");


    function crearNuevos(){
          modal.innerHTML = "";
          bodyModal = document.createElement("div");
          bodyModal.classList.add("modal-body");
          bodyModal.innerHTML = box.innerHTML;
          modal.appendChild(bodyModal);
          modal.classList.remove("hide");

          close = document.createElement("div");
          close.classList.add("close");

          img = document.createElement("img");
          img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");

          close.appendChild(img);
          modal.appendChild(close);
      };

    function ocultar(){
        modal.classList.add("hide");
      };
    
  var bodyModal, close, img;

  traerGaleria.forEach(function(box){
    box.addEventListener("click", crearNuevos); 
    close.addEventListener("click", ocultar); 
  });

})();
  */

(function modal(){
  var traerGaleria = Array.from(document.getElementsByClassName("col-4"));
  var modal = document.getElementById("cajamodal");

  

  var bodyModal, close, img;
  

  traerGaleria.forEach(function(box){
    box.addEventListener("click", function(){
      modal.innerHTML = "";
      bodyModal = document.createElement("div");
      bodyModal.classList.add("modal-body");
      bodyModal.innerHTML = box.innerHTML;
      modal.appendChild(bodyModal);
      modal.classList.remove("hide");

      close = document.createElement("div");
      close.classList.add("close");

      img = document.createElement("img");
      img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");

      close.appendChild(img);
      modal.appendChild(close);
      close.addEventListener("click", function(){
        modal.classList.add("hide");
      });
    });
  });
})();


