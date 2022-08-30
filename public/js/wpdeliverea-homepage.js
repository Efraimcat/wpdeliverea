$ = jQuery.noConflict();
$(document).ready(function(){
  $(function(){

    // HOME
    console.log('Entrada Home');

    var delay = 100; setTimeout(function() {
      $('.elementor-tab-title').removeClass('elementor-active');
      $('.elementor-tab-content').css('display', 'none');
    }, delay);

    document.getElementById('hacemos-vector1').style.display = 'none';
    document.getElementById('hacemos-vector2').style.display = 'none';
    document.getElementById('hacemos-vector3').style.display = 'none';

    document.getElementById('hacemos-texto-1').style.display = 'none';
    document.getElementById('hacemos-texto-2').style.display = 'none';
    document.getElementById('hacemos-texto-3').style.display = 'none';

    document.getElementById('hacemos-icono1').firstElementChild.firstElementChild.setAttribute('ID','imagen1');
    document.getElementById('hacemos-icono2').firstElementChild.firstElementChild.setAttribute('ID','imagen2');
    document.getElementById('hacemos-icono3').firstElementChild.firstElementChild.setAttribute('ID','imagen3');

    document.getElementById('imagen1').addEventListener('mouseover', icono1);
    document.getElementById('imagen1').addEventListener('mouseout', icono1_out);
    document.getElementById('imagen2').addEventListener('mouseover', icono2);
    document.getElementById('imagen2').addEventListener('mouseout', icono2_out);
    document.getElementById('imagen3').addEventListener('mouseover', icono3);
    document.getElementById('imagen3').addEventListener('mouseout', icono3_out);

    [document.getElementById('hacemos-diagnostico-boton'), document.getElementById('hacemos-diagnostico') ].forEach(function(element) {
      element.addEventListener('mouseover', diagin, false);
      element.addEventListener('mouseout', diagout, false);
    });

    [document.getElementById('hacemos-evaluacion-boton'), document.getElementById('hacemos-evaluacion') ].forEach(function(element) {
      element.addEventListener('mouseover', evalin, false);
      element.addEventListener('mouseout', evalout, false);
    });

    [document.getElementById('hacemos-planificacion-boton'), document.getElementById('hacemos-planificacion') ].forEach(function(element) {
      element.addEventListener('mouseover', planin, false);
      element.addEventListener('mouseout', planout, false);
    });

    [document.getElementById('hacemos-implantacion-boton'), document.getElementById('hacemos-implantacion') ].forEach(function(element) {
      element.addEventListener('mouseover', implin, false);
      element.addEventListener('mouseout', implout, false);
    });

    function diagin(){
      document.getElementById('elementor-tab-content-7551').style.display = 'block';
    }
    function diagout(){
      document.getElementById('elementor-tab-content-7551').style.display = 'none';
    }

    function evalin(){
      document.getElementById('elementor-tab-content-2651').style.display = 'block';
    }
    function evalout(){
      document.getElementById('elementor-tab-content-2651').style.display = 'none';
    }

    function planin(){
      document.getElementById('elementor-tab-content-1061').style.display = 'block';
    }
    function planout(){
      document.getElementById('elementor-tab-content-1061').style.display = 'none';
    }

    function implin(){
      document.getElementById('elementor-tab-content-1651').style.display = 'block';
    }
    function implout(){
      document.getElementById('elementor-tab-content-1651').style.display = 'none';
    }


    function icono1() {
      //$('body').css('opacity', '0.5');
      document.getElementById('hacemos-vector1').style.display = 'block';
      document.getElementById('hacemos-texto-1').style.display = 'block';
    }
    function icono1_out() {
      document.getElementById('hacemos-vector1').style.display = 'none';
      document.getElementById('hacemos-texto-1').style.display = 'none';
    }
    function icono2() {
      document.getElementById('hacemos-vector2').style.display = 'block';
      document.getElementById('hacemos-vector2').style.marginTop = '170px';
      document.getElementById('hacemos-texto-2').style.display = 'block';
      document.getElementById('hacemos-texto-2').style.marginTop = '240px';
    }
    function icono2_out() {
      document.getElementById('hacemos-vector2').style.display = 'none';
      document.getElementById('hacemos-texto-2').style.display = 'none';
    }
    function icono3() {
      document.getElementById('hacemos-vector3').style.display = 'block';
      document.getElementById('hacemos-vector3').style.marginTop = '322px';
      document.getElementById('hacemos-texto-3').style.display = 'block';
      document.getElementById('hacemos-texto-3').style.marginTop = '392px';
    }
    function icono3_out() {
      document.getElementById('hacemos-vector3').style.display = 'none';
      document.getElementById('hacemos-texto-3').style.display = 'none';
    }


  }); // Function END
}); // Document ready END
