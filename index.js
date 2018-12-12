lib.message("Load index.js");
lib.message("entramos al index.js")

// const API = "http://localhost:5000/api/user";
const server = "https://9c7aca2d.ngrok.io/api/";

const endpoint = "auth";

$(document).ready(function(){

    $("#Login").submit(function(){

        lib.message("Intento de logeo");
        let datos = lib.format_formData("#Login")
        lib
            .post_json(server+endpoint, datos)
            .then(function(){
                $('#token').append(data.token)
                window.location.replace('inicio.html')
            })
            .catch(function(error){
                lib.message(error)                
            })
        return false
    })
    return false
})

