/*Enlaces a documentos html*/
$(document).ready(function() {
    $('#div-btnt03').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('aves.html');
        return false;
    });

    $('#div-btnt02').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('gatos.html');
        return false;
    });

    $('#div-btnt01').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('perros.html');
        return false;
    });

  });
