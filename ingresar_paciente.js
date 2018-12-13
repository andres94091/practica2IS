lib.message("Load ingresar_paciente.js");
lib.message("entramos al ingresar_paciente.js")

// const API = "http://localhost:5000/api/user";
const server = "http://67efe232.ngrok.io/api/";

const endpoint = "paciente";

// $("#usuario").text(localStorage.getItem('nombre'))
// lib.message(localStorage.getItem('nombre'))

$(document).ready(function(){

    $('#Registro').submit(function(){
        lib.message('formulario de la imagen')

        let data = lib.format_formData('#Registro')
        let imagen = lib.get_image('#file')
        let formulario = new FormData()
        formulario.append('multimedia', imagen.files[0])
        formulario.append("nombre", data.nombre);
        formulario.append("documento", data.documento);
        formulario.append("eps", data.eps);
        formulario.append("sexo", data.sexo);
        formulario.append("telefono", data.telefono);

        lib.message(formulario)

        lib.post_multipart(server+endpoint, formulario).then(function(response){
          lib.message(response)
          $("#name").val("")
          $("#identityNum").val("")
          $("#sexo").val("")
          $("#eps").val("")
          $("#age").val("")
          $("#telephone").val("")
          $("#address").val("")
          $("#file").val("")
          $("#status").append("Registro guardado de manera exitosa")

        })
        return false
    })
    return false
})