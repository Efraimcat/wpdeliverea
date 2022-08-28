$ = jQuery.noConflict();
$(document).ready(function(){
  $(function(){

    // PAGINA REFERENCIAS

    if ( window.location.href.indexOf("referencias") != -1){
      // referencias-mas-1-boton
      // referencias-segundo
      console.log('referencias');

      document.getElementById('referencias-mas-1-boton').style.cursor='pointer';

      var elementsSegundo = document.getElementsByClassName('referencias-segundo');

      for (var i = 0; i < elementsSegundo.length; i++) {
        elementsSegundo[i].style.display = 'none';
      }

      document.getElementById('referencias-mas-1-boton').addEventListener('click', function(){
        for (var i = 0; i < elementsSegundo.length; i++) {
          elementsSegundo[i].style.display = 'block';
        }
        document.getElementById('referencias-mas-1').style.display = 'none';
      } , false);


    } // END PAGINA Referencias

  }); // Function END
}); // Document ready END
