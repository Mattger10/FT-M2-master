const URL = "http://localhost:5000/amigos";
const  listaAmigos = (respuesta) => {
    const [lista] = $('#lista');
    respuesta.forEach (amigo => {
    const nuevoLi = document.createElement('li');
    nuevoLi.innerText = amigo.name;
    lista.appendChild(nuevoLi);
    })
}

const [boton] = $('#boton');

const mostrarAmigos = () => $.get(URL, listaAmigos);
boton.addEventListener("click", mostrarAmigos); 

$(document).ready(function(){
    $("#boton").click(function(){
      $.ajax({
        type: "GET",
        url: "http://localhost:5000/amigos",
        success: function(result){
          $("#lista").empty();
          for(const i in result){
            $("#lista").append("<li>" + result[i].id + " " + result[i].name + "</li>");
          }
        }
      });
    });
  
    $("#search").click(function(){
      const id = $("#input").val();
      $.ajax({
        type: "GET",
        url: "http://localhost:5000/amigos/" + id,
        success: function(result){
          $("#amigo").text(" Se encontró a " + result.name);
        },
        error: function(){
          $("#amigo").text("No se encontró un amigo con ese ID");
        }
      });
    });
  
    $("#delete").click(function(){
      const id = $("#inputDelete").val();
      $.ajax({
        type: "DELETE",
        url: "http://localhost:5000/amigos/" + id,
        success: function(){
          $("#success").text("Amigo borrado exitosamente");
        },
        error: function(){
          $("#success").text("No se pudo borrar al amigo");
        }
      });
    });
  });
  
