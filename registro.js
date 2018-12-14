lib.message("Load registro.js");
lib.message("entramos al registro.js")

// const API = "http://localhost:5000/api/user";
const server = "http://67efe232.ngrok.io/api/";

const endpoint = "user";

$(document).ready(()=>{

    $("#registrar").submit(()=>{
        lib.message("intento de registro de usuario")
        let datos = lib.format_formData("#registrar")
        if(datos.password === datos.confirm_password){
            $("#Confirmacion").text("las contraceñas coinciden :D")
            axios
                .post(server+endpoint, datos, {})
                .then((response)=>{
                    lib.message(response.data)
                    if(response.data.username == datos.username){
                        window.location.replace('index.html')
                    }
                })
                .catch((error)=>{
                    $("#Confirmacion").text("Algo malo paso, intentalo de nuevo")
                    $("#usename").text("")
                    $("#userpassword").text("")
                    $("#userpassword-confirm").text("")
                })
        }
        else{
            $("#Confirmacion").text("las contraseñas no coinciden")
            $("#userpassword").val("")
            $("#userpassword-confirm").val("")
        }
        return false
    })
    return false
})