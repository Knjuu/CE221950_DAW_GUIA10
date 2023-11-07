$(document).ready(function() {
    var imgItems = $('.slider li').length; // Número de Slides
    var imgPos = 1;
  
    // Agregando paginación
    for (var i = 1; i <= imgItems; i++) {
      $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    }
  
    // Ocultar todos los slides y mostrar el primero
    $('.slider li').hide();
    $('.slider li:first').show();
  
    // Estilo para el primer elemento de la paginación
    $('.pagination li:first').css({'color': '#CD6E2E'});
  
    // Ejecutar funciones al hacer clic en la paginación, flecha derecha o flecha izquierda
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);
  
    // Cambiar de slide automáticamente cada 4 segundos
    setInterval(function() {
      nextSlider();
    }, 4000);
  
    // Funciones
    function pagination() {
      var paginationPos = $(this).index() + 1; // Posición de la paginación seleccionada
      $('.slider li').hide(); // Ocultar todos los slides
      $('.slider li:nth-child(' + paginationPos + ')').fadeIn(); // Mostrar el Slide seleccionado
  
      // Estilos de la paginación seleccionada
      $('.pagination li').css({'color': '#858585'});
      $(this).css({'color': '#CD6E2E'});
      imgPos = paginationPos;
    }
  
    function nextSlider() {
      if (imgPos >= imgItems) {
        imgPos = 1;
      } else {
        imgPos++;
      }
  
      // Estilos de la paginación
      $('.pagination li').css({'color': '#858585'});
      $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#CD6E2E'});
  
      // Ocultar todos los slides y mostrar el Slide seleccionado
      $('.slider li').hide();
      $('.slider li:nth-child(' + imgPos + ')').fadeIn();
    }
  
    function prevSlider() {
      if (imgPos <= 1) {
        imgPos = imgItems;
      } else {
        imgPos--;
      }
  
      // Estilos de la paginación
      $('.pagination li').css({'color': '#858585'});
      $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#CD6E2E'});
  
      // Ocultar todos los slides y mostrar el Slide seleccionado
      $('.slider li').hide();
      $('.slider li:nth-child(' + imgPos + ')').fadeIn();
    }
  });
  