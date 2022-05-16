const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


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
      $("#central").load('Inc/Formulario.php');
      return false;
  });

  $('#div-btn2').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/products.php');
      return false;
  });

  $('#div-btn3').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/news.php');
      return false;
  });

  $('#div-btn4').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/contact.php');
      return false;
  });
});

/*Enlaces a documentos php*/
$(document).ready(function() {
  $('#div-btn1').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/donaciones.php');
      return false;
  });

  $('#div-btn2').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/tienda.php');
      return false;
  });

  $('#div-btn3').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/contacto.php');
      return false;
  });

  $('#div-btn4').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/nosotros.php');
      return false;
  });

  $('#div-btn0').on('click', function() {
      $('.navbar-nav li').removeClass('active');
      $("#central").load('inc/carrito.php');
      return false;
  });

  });
