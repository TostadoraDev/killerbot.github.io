// Código para ocultar la pantalla de carga cuando se carga completamente la página
window.addEventListener('load', function() {
    var pantallaCarga = document.querySelector('.pantalla-carga');
    var contenidoPrincipal = document.querySelector('main');
    pantallaCarga.classList.add('ocultar');
    contenidoPrincipal.style.display = 'block';
  });
  