/*Enlaces a documentos php*/
$(document).ready(function() {
    $('#div-btnt03').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('aves');
        return false;
    });

    $('#div-btnt02').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('gatos');
        return false;
    });

    $('#div-btnt01').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('perros');
        return false;
    });

  });
