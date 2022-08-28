$ = jQuery.noConflict();
$(document).ready(function(){
  $(function(){

    // PAGINA PRECIOS

    if ( window.location.href.indexOf("precios") != -1){

      console.log('precios');

      document.getElementById('botones-plan-mensual').style.display = 'none';
      document.getElementById('cabecera-mensual').style.display = 'none';
      document.getElementById('precios-calculadora').style.display = 'none';
      document.getElementById('ahorro-potencial-resultado').style.display = 'none';
      document.getElementById('ahorro-potencial-recomendado').style.display = 'none';

      document.getElementById('boton-plan-anual').style.cursor='pointer';
      document.getElementById('boton-plan-mensual').style.cursor='pointer';
      document.getElementById('precios-diagnostico').style.cursor='pointer';

      document.getElementById('boton-plan-mensual').addEventListener('click', function(){
        document.getElementById('botones-plan-anual').style.display = 'none';
        document.getElementById('botones-plan-mensual').style.display = 'block';
        document.getElementById('cabecera-anual').style.display = 'none';
        document.getElementById('cabecera-mensual').style.display = 'block';
      } , false);

      document.getElementById('boton-plan-anual').addEventListener('click', function(){
        document.getElementById('botones-plan-mensual').style.display = 'none';
        document.getElementById('botones-plan-anual').style.display = 'block';
        document.getElementById('cabecera-mensual').style.display = 'none';
        document.getElementById('cabecera-anual').style.display = 'block';
      } , false);

      var elementsMasInfo = document.getElementsByClassName('precios-mas-info');

      for (var i = 0; i < elementsMasInfo.length; i++) {
        elementsMasInfo[i].addEventListener('click', deliFunctionPreciosInfo, false);
        elementsMasInfo[i].style.cursor='pointer';
      }

    } // END PAGINA PRECIOS

  }); // Function END
}); // Document ready END


var deliFunctionPreciosInfo = function() {
  window.scrollTo(0, 0);
  document.getElementById('precios-inicio').style.display = 'none';
  document.getElementById('cabecera-mensual').style.display = 'none';
  document.getElementById('cabecera-anual').style.display = 'none';
  document.getElementById('precios-info').style.display = 'none';
  document.getElementById('precios-incluye').style.display = 'none';
  document.getElementById('precios-hablamos').style.display = 'none';
  document.getElementById('ahorro-potencial-resultado').style.display = 'none';
  document.getElementById('precios-calculadora').style.display = 'block';
  //precios-calculadora
  //precios-diagnostico
  document.getElementById('precios-diagnostico').addEventListener('click',function(){
    document.getElementById('ahorro-potencial-boton').style.display = 'none';
    document.getElementById('ahorro-potencial-resultado').style.display = 'block';
    document.getElementById('ahorro-potencial-recomendado').style.display = 'block';

  } , false);



};
