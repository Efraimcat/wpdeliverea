$ = jQuery.noConflict();
$(document).ready(function(){
  $(function(){

    var idioma_wpml =  getCookie('wp-wpml_current_language');
    if (idioma_wpml === 'es'){
      idioma_wpml = '';
    }else{
      idioma_wpml = '/' + idioma_wpml;
    }


    if ( window.location.href.indexOf("comparativa") === -1){ // no activar si es la página comparativa

      console.log('Entrada carriers');

      [document.getElementById('carrier-gls'), document.getElementById('carrier-gls-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/gls/'; } , false);
      });
      [document.getElementById('carrier-glovo'), document.getElementById('carrier-glovo-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/glovo/'; } , false);
      });
      [document.getElementById('carrier-correos'), document.getElementById('carrier-correos-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/correos/'; } , false);
      });
      [document.getElementById('carrier-colissimo'), document.getElementById('carrier-colissimo-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/colissimo/'; } , false);
      });

      [document.getElementById('carrier-shenker'), document.getElementById('carrier-shenker-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/schenker/'; } , false);
      });
      [document.getElementById('carrier-fedex'), document.getElementById('carrier-fedex-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/fedex/'; } , false);
      });
      [document.getElementById('carrier-ctt'), document.getElementById('carrier-ctt-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/ctt/'; } , false);
      });
      [document.getElementById('carrier-seur-dpd'), document.getElementById('seur-dpd-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/seur-dpd-group/'; } , false);
      });

      [document.getElementById('carrier-elog'), document.getElementById('carrier-elog-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/e-log/'; } , false);
      });
      [document.getElementById('carrier-envialia'), document.getElementById('carrier-envialia-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/envialia/'; } , false);
      });
      [document.getElementById('carrier-instapak'), document.getElementById('carrier-instapack-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/instapack/'; } , false);
      });
      [document.getElementById('carrier-esw'), document.getElementById('carrier-esw-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/esw/'; } , false);
      });

      [document.getElementById('carrier-nacex'), document.getElementById('carrier-nacex-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/nacex/'; } , false);
      });
      [document.getElementById('carrier-spring'), document.getElementById('carrier-spring-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/spring/'; } , false);
      });
      [document.getElementById('carrier-shargo'), document.getElementById('carrier-shargo-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/shargo/'; } , false);
      });
      [document.getElementById('carrier-celeris'), document.getElementById('carrier-celeris-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/zeleris/'; } , false);
      });

      [document.getElementById('carrier-ups'), document.getElementById('carrier-ups-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/ups/'; } , false);
      });
      [document.getElementById('carrier-mrw'), document.getElementById('carrier-mrw-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/mrw/'; } , false);
      });
      [document.getElementById('carrier-stuart'), document.getElementById('carrier-stuart-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/stuart/'; } , false);
      });
      [document.getElementById('carrier-dhl'), document.getElementById('carrier-dhl-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/dhl/'; } , false);
      });

      [document.getElementById('carrier-llewo'), document.getElementById('carrier-llewo-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/llewo/'; } , false);
      });
      [document.getElementById('carrier-paack'), document.getElementById('carrier-paack-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/paack/'; } , false);
      });
      [document.getElementById('carrier-seur'), document.getElementById('carrier-seur-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/seur/'; } , false);
      });
      [document.getElementById('carrier-mondial'), document.getElementById('carrier-modial-movil') ].forEach(function(element) {
        element.style.cursor='pointer';
        element.addEventListener('click', function(){ window.location.href = idioma_wpml+'/carriers/mondial/'; } , false);
      });

    } // END no activar si es la página comparativa

    //getCookie('wp-wpml_current_language')
    function getCookie(c_name) {
      var c_value = document.cookie,
      c_start = c_value.indexOf(" " + c_name + "=");
      if (c_start == -1) c_start = c_value.indexOf(c_name + "=");
      if (c_start == -1) {
        c_value = null;
      } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
          c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
      }
      return c_value;
    }


  }); // Function END
}); // Document ready END
