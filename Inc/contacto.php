
<br><br><br><br>
<div id="contacto" class="seccion">

<!--formualrio de contacto-->
<div class="container">
  <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-4">
      <label for="validationCustom01" class="form-label">Primer Nombre</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="Nombre" required>
      <div class="invalid-feedback">
      ❌ debes ingresar tu nombre
     
      </div>
    </div>
    <div class="col-md-4">
      <label for="validationCustom02" class="form-label">Apellidos</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Apellido" required>
      <div class="invalid-feedback">
       ❌  Por favor ingrese su Apellido.
      
      </div>
    </div>
    <div class="col-md-4">
      <label for="validationCustomUsername" class="form-label">Instagram o Twitter (opcional)</label>
      <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend">@</span>
        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend">
      </div>
    </div>
    <div class="col-md-6">
      <label for="validationCustom03" class="form-label">Ciudad</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="Ciudad" required>
      <div class="invalid-feedback">
        ❌ Por favor ingrese su ciudad.
     
      </div>
    </div>
    <div class="col-md-3">
      <label for="validationCustom04" class="form-label">Region</label>
      
      <select class="form-select" id="validationCustom04" required>
        <option selected disabled value="">selecciona Region...</option>
        <option>I Región de Tarapacá</option>
        <option>II Región de Antofagasta</option>
        <option>III Región de Atacama</option>
        <option>IV Región de Coquimbo</option>
        <option>V Región de Valparaíso</option>
        <option>VI Región del Libertador General Bernardo O’Higgins</option>
        <option>VII Región del Maule</option>
        <option>VIII Región del Biobío</option>
        <option>IX Región de La Araucanía</option>
        <option>X Región de Los Lagos</option>
        <option>XI Región Aysén del General Carlos Ibáñez del Campo</option>
        <option>XII Región de Magallanes y Antártica Chilena</option>
        <option>Región Metropolitana de Santiago</option>
        <option>XIV Región de Los Ríos</option>
        <option>XV Región de Arica y Parinacota</option>
        <option>XVI Región de Ñuble</option>
       
      </select>
      <div class="invalid-feedback">
      ❌ Por favor seleccione su region.
      </div>
    </div>
    <div class="col-md-3">
      <label for="validationCustom05" class="form-label">Telefono movil</label>
      <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend" aria-describedby="inputGroupPrepend">+56 9</span>
      <input type="text" class="form-control" id="validationCustom05" placeholder="999999999" required>
      <div class="invalid-feedback">
       ❌ Por favor ingresa un telefomo valido.
      </div>
      </div>
    </div>
       <label for="subject">Comentario</label>
       <div class="row">
       <div class="col-md-12">
        <textarea id="subject" name="subject" placeholder="Escribenos tu comentario..." style="width:100%; height:200px;" required ></textarea>
        <div class="invalid-feedback">
          ❌ Por favor ingresa un telefomo valido.
         </div>
      </div>
    </div>
  


    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
        <label class="form-check-label" for="invalidCheck">
          Acepto los terminos y condiciones
        </label>
        <div class="invalid-feedback">
          ❌ Debes aceptar los terminos y condiciones
        </div>
      </div>
    </div>
    
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Enviar 🐾 </button>
    </div>
  </form>

  
  </div>
</div>
<!--script validacion de formulario-->
<script>
// Ejemplo sacado de internet
(function() {
  'use strict';
  window.addEventListener('load', function() {
   var forms = document.getElementsByClassName('needs-validation');
   var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

</script>

<script>
  function openSeccion(seccionName) {
  var i;
  var x = document.getElementsByClassName("seccion");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(seccionName).style.display = "block";
}
</script>

<script src="js/jquery.validationEngine-en.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.validationEngine.js" type="text/javascript" charset="utf-8"></script>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
  
