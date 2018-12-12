lib.message("Load index.js");
lib.message("entramos al index.js")

// const API = "http://localhost:5000/api/user";
const server = "https://9c7aca2d.ngrok.io/api/";

const endpoint = "auth";

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

    // lib.post_multipart(server+'paciente', formulario).then(function(response){
    //   lib.message(response)
    // })
    return false
});