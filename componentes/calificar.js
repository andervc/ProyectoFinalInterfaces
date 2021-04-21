

function guardar(idPelicula, tituloPelicula, imagenPelicula, descripcionPelicula){
    var existia=false
    if(calificacion(idPelicula)==0){
        alert("Para guardar la Película es necesario asignar una Calificación")
    }
    else{
        if(!localStorage.getItem("PELICULAS")){
            var peliculas = [
            ]
            localStorage.setItem("PELICULAS", JSON.stringify(peliculas))
        }
       
        if(buscar(idPelicula)>=0){
            existia = true
            eliminar(idPelicula,0)
        }
        let nueva = {
            id: idPelicula,
            titulo: tituloPelicula,
            imagen: imagenPelicula,
            descripcion: descripcionPelicula,
            valoracion: calificacion(idPelicula)
        }
        let guardadas= obtener()
        guardadas.push(nueva)           
        
        
        localStorage.setItem("PELICULAS", JSON.stringify(guardadas))
        if(existia == false){
            alert(`La película ${tituloPelicula} ha sido agregada a Favoritas`)
        }else{
            alert(`La calificación de ${tituloPelicula} ha sido actualizada en Favoritas`)
        }
        
        // document.getElementById("exampleModal"+idPelicula).
        // location.reload();
    }
}

function calificacion(id){
    let puntuacion = 0
    if(document.getElementById('radio1-'+id).checked){
        puntuacion=5
    }else{
        if(document.getElementById('radio2-'+id).checked){
            puntuacion=4
        }else{
            if(document.getElementById('radio3-'+id).checked){
                puntuacion=3
            }else{
                if(document.getElementById('radio4-'+id).checked){
                    puntuacion=2
                }else{
                    if(document.getElementById('radio5-'+id).checked){
                        puntuacion=1
                    }else{
                        puntuacion=0
                    }
                }
            }
        }
    }
    return puntuacion
}

function obtener(){
    if(localStorage.getItem("PELICULAS")){

        let peliculas = JSON.parse(localStorage.getItem("PELICULAS"))

        //console.log(peliculas)
        return peliculas

    }else{
        
        console.log("No existe en el local storage")
    }
    
}

function eliminar(id, tipo){
    let favoritas = JSON.parse(localStorage.getItem("PELICULAS"))
    let index = favoritas.findIndex(favoritas => favoritas.id==id)

    favoritas.splice(index, 1)
   
    localStorage.setItem("PELICULAS", JSON.stringify(favoritas))
    if(tipo==1){
        alert(`La película ha sido eliminada de Favoritas`)
        location.reload()
    }
}

function buscar(id){
    if(localStorage.getItem("PELICULAS")){
    let favoritas = JSON.parse(localStorage.getItem("PELICULAS"))
    var index = favoritas.findIndex(favoritas => favoritas.id==id)      
    //console.log("Buscar = "+index)
    }else{
        index=-1
    }
    return index
}