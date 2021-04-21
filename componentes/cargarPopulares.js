import Populares from './clasePopulares.js'
const apiPopularesURL ='https://api.themoviedb.org/3/movie/popular?api_key=c8f0e89c2a789ea8a93c6db654ac65d8&language=es-CR&page=1'

var popu = new Populares()

async function renderPopu(){

    var htmlPopulares = pelicula => `  
        <div class="pelicula">
            <img data-lazy="https://image.tmdb.org/t/p/w300/${pelicula.poster_path}" src="" class="card-img-top" alt="${pelicula.title}">        
            <div class="card-body center">
                <button type="button" class="btn btn-primary BotonModal" data-bs-toggle="modal" data-bs-target="#exampleModal${pelicula.id}">
                    Detalles
                </button>
            </div>

            <div class="modal fade" id="exampleModal${pelicula.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel${pelicula.id}">${pelicula.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p class="card-text">${pelicula.overview}</p>
                        </div>
                        <div class="modal-footer">
                            <h5>Deja tu valoración:</h5>
                            <p class="clasificacion">
                                <input id="radio1-${pelicula.id}" type="radio" name="estrellas" value="5">
                                <label for="radio1-${pelicula.id}" class="estrellas">★</label>
                                <input id="radio2-${pelicula.id}" type="radio" name="estrellas" value="4">
                                <label for="radio2-${pelicula.id}" class="estrellas">★</label>
                                <input id="radio3-${pelicula.id}" type="radio" name="estrellas" value="3">
                                <label for="radio3-${pelicula.id}" class="estrellas">★</label>
                                <input id="radio4-${pelicula.id}" type="radio" name="estrellas" value="2">
                                <label for="radio4-${pelicula.id}" class="estrellas">★</label>
                                <input id="radio5-${pelicula.id}" type="radio" name="estrellas" value="1">
                                <label for="radio5-${pelicula.id}" class="estrellas">★</label>
                            </p>
                            <button type="button" class="btn btn-primary BotonModal" onclick="guardar('${pelicula.id}','${pelicula.title}','https://image.tmdb.org/t/p/w500/${pelicula.poster_path}','${pelicula.overview}')" data-bs-dismiss="modal">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    await popu.renderPopulares(apiPopularesURL, htmlPopulares,'populares')
}
await renderPopu()
lazyLoading()
