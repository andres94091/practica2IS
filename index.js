lib.message("Load index.js");
lib.message("entramos al index.js")

// const API = "http://localhost:5000/api/user";
const server = "http://67efe232.ngrok.io/api/";

const endpoint = "auth";

$(document).ready(() => {

    $('#Login').submit( function(){

        lib.message('intento de login')
        let datos=lib.format_formData('#Login')
        localStorage.setItem('nombre', datos.username)
        axios
            .post(server+'auth', datos, {})
            .then(function(response) {
                console.log(response.data);
                if(response.data.hasOwnProperty('token')){
                    window.location.replace('inicio.html')
                }
            })
            .catch(function(error) {
                console.log(error);
                $("#username").val("")
                $("#password").val("")
            });
        return false
    })
})

