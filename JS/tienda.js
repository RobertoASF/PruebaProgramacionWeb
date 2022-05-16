/*Enlaces a documentos php*/
$(document).ready(function() {
    $('#div-btn5').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('inc/aves.php');
        return false;
    });

    $('#div-btn6').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('inc/gatos.php');
        return false;
    });

    $('#div-btn7').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('inc/perros.php');
        return false;
    });

  });
