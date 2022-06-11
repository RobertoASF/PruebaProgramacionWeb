



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
      $('#div-btn1').addClass('active');
      $("#central").load('Formulario');
      return false;
  });
 
});


/*Enlaces a documentos html*/


$(document).ready(function() {


  $('#div-btnh01').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('donaciones');
      return false;
  });

  $('#div-btnh02').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('tienda');
      return false;
  });

  $('#div-btnh03').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('contacto');
      return false;
  });

  $('#div-btnh04').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('nosotros');
      return false;
  });

  $('#div-btnh00').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('carrito');
      return false;
  });

  //funciones de los links delc arrusel

  $('#div-btnc01').on('click', function() {
    $('.carr').removeClass('active');
    $("#central").load('tienda');
    return false;
  });

  $('#div-btnc02').on('click', function() {
    $('.carr').removeClass('active');
    $("#central").load('contacto');
    return false;
  });

  $('#div-btnc03').on('click', function() {
    $('.carr').removeClass('active');
    $("#central").load('donaciones');
    return false;
  });

  $('#div-btnc04').on('click', function() {
    $('.carr').removeClass('active');
    $("#central").load('nosotros');
    return false;
  });


  });


 