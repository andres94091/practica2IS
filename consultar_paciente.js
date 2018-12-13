lib.message("Load consultar_paciente.js");
lib.message("entramos al consultar_paciente.js")

// const API = "http://localhost:5000/api/user";
const server = "http://67efe232.ngrok.io";

const endpoint = "/api/paciente";

$(document).ready(function(){

    $("#Busqueda").submit(()=>{
        lib.message("intento de busqueda")
        let dato = lib.format_formData("#Busqueda")
        lib.message(dato)
        if(dato.documento != ""){
            lib
                .get(server+endpoint+'/'+dato.documento)
                .then((response)=>{
                    lib.message(response.data)
                    if (response.data.length == 0){
                        $("#response").text("Documento sin registros guardados")
                        $("#identityNum").val("")
                        $("#nombre").text("")
                        $("#documento").text("")
                        $("#eps").text("")
                        $("#telephone").text("")
                        $("#sexo").text("")
                        $("#address").text("")
                        $("#edad").text("")
                        $("#file").attr("src","")
                    }
                    else{
                        $("#response").text("")
                        $("#identityNum").val("")
                        $("#nombre").text(response.data[response.data.length - 1 ].nombre)
                        $("#documento").text(response.data[response.data.length - 1 ].documento)
                        $("#eps").text(response.data[response.data.length - 1 ].eps)
                        $("#telephone").text(response.data[response.data.length - 1 ].telefono)
                        $("#file").attr("src",server+response.data[response.data.length - 1 ].multimedia)
                        $("#sexo").text("undefined")
                        $("#address").text("undefined")
                        $("#edad").text("undefined")

                    }
                })
                .catch((error)=>{
                    lib.message(error)
                })
        }
        else{
            $("#response").text("Ingrese alguna cedula")
            $("#identityNum").val("")
            $("#nombre").text("")
            $("#documento").text("")
            $("#eps").text("")
            $("#telephone").text("")
            $("#sexo").text("")
            $("#address").text("")
            $("#edad").text("")
            $("#file").attr("src","")
        }
        
        return false
    })
    return false
})