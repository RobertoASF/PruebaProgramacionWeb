



function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;

  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){



    carrito.push(newItem)

    renderCarrito()
  } 
  
  
  function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item => {
      const tr = document.createElement('tr')
      tr.classList.add('ItemCarrito')
      const Content = `
      
     <th scope="row">1</th>
            <td class="table__productos">
                <img src=${item.img}  alt="">
                <h6 class="title">${item.title}</h6>
              </td>
              <td class="table__price"><p>${item.precio}</p></td>
              <td class="table__cantidad">
                <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                <button class="delete btn btn-danger">x</button>
              </td>
      
    `
    tr.innerHTML = Content;
    tbody.append(tr)
    })
     
}
/*llamada formulario*/
$(document).ready(function() {
  $('#div-btn1').on('click', function() {
      $('.navbar-nav li').removeClass('active');
<<<<<<< HEAD
      $('#div-btn1').addClass('active');
      $("#central").load('Formulario');
=======
      $("#central").load('Inc/Formulario.php');
>>>>>>> 6df66a2c48b50d8f813695775ba8a5569e2e5603
      return false;
  });
 
});


/*Enlaces a documentos html*/


$(document).ready(function() {


  $('#div-btnh01').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/donaciones.php');
      return false;
  });

  $('#div-btnh02').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/tienda.php');
      return false;
  });

  $('#div-btnh03').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/contacto.php');
      return false;
  });

  $('#div-btnh04').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/nosotros.php');
      return false;
  });

  $('#div-btnh00').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/carrito.php');
      return false;
  });

  //funciones de los links delc arrusel

  $('#div-btnc01').on('click', function() {
    $('.carr').removeClass('active');
    $("#central").load('inc/tienda.php');
    return false;
  });

  $('#div-btnc02').on('click', function() {
    $('.carr').removeClass('active');
    $("#central").load('inc/contacto.php');
    return false;
  });

  $('#div-btnc03').on('click', function() {
    $('.carr').removeClass('active');
    $("#central").load('inc/donaciones.php');
    return false;
  });

  $('#div-btnc04').on('click', function() {
    $('.carr').removeClass('active');
    $("#central").load('inc/nosotros.php');
    return false;
  });


  });


 