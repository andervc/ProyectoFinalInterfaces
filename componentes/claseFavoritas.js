export default class Favoritas {

    renderFavoritas(html, idElemento) {
        try {
            if (!localStorage.getItem("PELICULAS") || Object.keys(JSON.parse(localStorage.getItem("PELICULAS"))).length <= 0) {
                alert("No hay películas favoritas")
            } else {

                let favoritas = JSON.parse(localStorage.getItem("PELICULAS"))

                if (favoritas) {
                    var renderArray = favoritas.map(html)
                    var renderJoin = renderArray.join('')
                    let lista = document.getElementById(idElemento)
                    lista.innerHTML = renderJoin
                }
            }
            console.log(Object.keys(JSON.parse(localStorage.getItem("PELICULAS"))).length)
        } catch (error) {
        }
    }
}