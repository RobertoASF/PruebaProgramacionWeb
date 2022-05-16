/*Enlaces a documentos php*/
$(document).ready(function() {
    $('#div-btnt03').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('inc/aves.php');
        return false;
    });

    $('#div-btnt02').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('inc/gatos.php');
        return false;
    });

    $('#div-btnt01').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('inc/perros.php');
        return false;
    });

  });
