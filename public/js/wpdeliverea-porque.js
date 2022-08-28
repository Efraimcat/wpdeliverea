$ = jQuery.noConflict();
$(document).ready(function(){
  $(function(){

    // PAGINA /porque-deliverea/
    if ( window.location.href.indexOf("porque-deliverea") != -1){

      console.log('porque-deliverea');

      [ document.getElementById('logo-ecommerce-blue'),document.getElementById('text-ecommerce-blue'),
      document.getElementById('logo-operaciones-white'),document.getElementById('text-operaciones-white'),
      document.getElementById('logo-soporte-white'),document.getElementById('text-soporte-white'),
      document.getElementById('argum-operaciones'),document.getElementById('argum-soporte') ].forEach(function(element) {
        element.style.display = 'none';
      });

      [ document.getElementById('logo-ecommerce-white'), document.getElementById('text-ecommerce-white'), document.getElementById('logo-ecommerce-blue'), document.getElementById('text-ecommerce-blue'),
      document.getElementById('logo-operaciones-white'), document.getElementById('text-operaciones-white'), document.getElementById('logo-operaciones-blue'), document.getElementById('text-operaciones-blue'),
      document.getElementById('logo-soporte-white'), document.getElementById('text-soporte-white'), document.getElementById('logo-soporte-blue'),document.getElementById('text-soporte-blue') ].forEach(function(element) {
        element.style.cursor='pointer';
      });

      //  click ecommerce

      [ document.getElementById('logo-ecommerce-white'),document.getElementById('text-ecommerce-white'), document.getElementById('logo-ecommerce-blue'),document.getElementById('text-ecommerce-blue') ].forEach(function(element) {
        element.addEventListener('click', function(){

          console.log('click ecommerce');

          [ document.getElementById('logo-ecommerce-blue'),document.getElementById('text-ecommerce-blue'),
          document.getElementById('logo-operaciones-white'),document.getElementById('text-operaciones-white'),
          document.getElementById('logo-soporte-white'),document.getElementById('text-soporte-white'),
          document.getElementById('argum-operaciones'),document.getElementById('argum-soporte')].forEach(function(element) {
            element.style.display = 'none';
          });

          [ document.getElementById('logo-ecommerce-white'),document.getElementById('text-ecommerce-white'),
          document.getElementById('logo-operaciones-blue'),document.getElementById('text-operaciones-blue'),
          document.getElementById('logo-soporte-blue'),document.getElementById('text-soporte-blue'),
          document.getElementById('argum-ecommerce')].forEach(function(element) {
            element.style.display = 'block';
          });

        } , false);

      });

      //  click operaciones

      [ document.getElementById('logo-operaciones-white'),document.getElementById('text-operaciones-white'), document.getElementById('logo-operaciones-blue'),document.getElementById('text-operaciones-blue') ].forEach(function(element) {
        element.addEventListener('click', function(){

          console.log('click operaciones');

          [ document.getElementById('logo-ecommerce-white'),document.getElementById('text-ecommerce-white'),
          document.getElementById('logo-operaciones-blue'),document.getElementById('text-operaciones-blue'),
          document.getElementById('logo-soporte-white'),document.getElementById('text-soporte-white'),
          document.getElementById('argum-soporte'),document.getElementById('argum-ecommerce')].forEach(function(element) {
            element.style.display = 'none';
          });

          [ document.getElementById('logo-operaciones-white'),document.getElementById('text-operaciones-white'),
          document.getElementById('logo-ecommerce-blue'),document.getElementById('text-ecommerce-blue'),
          document.getElementById('logo-soporte-blue'),document.getElementById('text-soporte-blue'),
          document.getElementById('argum-operaciones')].forEach(function(element) {
            element.style.display = 'block';
          });

        } , false);

      });

      //  click soporte

      [ document.getElementById('logo-soporte-white'),document.getElementById('text-soporte-white'), document.getElementById('logo-soporte-blue'),document.getElementById('text-soporte-blue') ].forEach(function(element) {
        element.addEventListener('click', function(){

          console.log('click soporte');

          [ document.getElementById('logo-ecommerce-white'),document.getElementById('text-ecommerce-white'),
          document.getElementById('logo-operaciones-white'),document.getElementById('text-operaciones-white'),
          document.getElementById('logo-soporte-blue'),document.getElementById('text-soporte-blue'),
          document.getElementById('argum-operaciones'),document.getElementById('argum-ecommerce')].forEach(function(element) {
            element.style.display = 'none';
          });

          [ document.getElementById('logo-operaciones-blue'),document.getElementById('text-operaciones-blue'),
          document.getElementById('logo-ecommerce-blue'),document.getElementById('text-ecommerce-blue'),
          document.getElementById('logo-soporte-white'),document.getElementById('text-soporte-white'),
          document.getElementById('argum-soporte')].forEach(function(element) {
            element.style.display = 'block';
          });

        } , false);

      });


    } // END PAGINA /porque-deliverea/

  }); // Function END
}); // Document ready END
