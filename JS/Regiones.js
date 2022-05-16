const xmlhttp = new XMLHttpRequest();


xmlhttp.onload = function() {

  const myObj = JSON.parse(this.responseText);
  let text = "<select class='form-control' id='ddlRegion' onchange='CargarProvincia()'>"
  for (let x in myObj) {
      text += "<option value='"+ myObj[x].id + "'>"+ myObj[x].region +"</option>"
  }
  text += "</select>"    
  document.getElementById("region").innerHTML = text;
  
}

xmlhttp.open("GET", "http://apiedgard-001-site1.mysitepanel.net/api/Regiones/",true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send();

    function CargarProvincia()
{
var seleccion=document.getElementById('ddlRegion');


const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  let text = "<select class='form-control' id='ddlProvincia' onchange='CargarComuna()'>"
  for (let x in myObj) {
      text += "<option value='"+ myObj[x].id + "'>"+ myObj[x].provincia +"</option>"
  }
  text += "</select>"    
  document.getElementById("provincia").innerHTML = text;
}
xmlhttp.open("GET", "http://apiedgard-001-site1.mysitepanel.net/api/Provincias/"+ seleccion.options[seleccion.selectedIndex].value )
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send();

}

  function CargarComuna()
{
var seleccionP=document.getElementById('ddlProvincia');


const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
const myObj = JSON.parse(this.responseText);


let text = "<select class='form-control' id='ddlComuna'>"
for (let x in myObj) {
    text += "<option value='"+ myObj[x].id + "'>"+ myObj[x].comuna +"</option>"
}
text += "</select>"    
document.getElementById("comuna").innerHTML = text;
}
xmlhttp.open("GET", "http://apiedgard-001-site1.mysitepanel.net/api/Comunas/"+ seleccionP.options[seleccionP.selectedIndex].value  )
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send();

}
