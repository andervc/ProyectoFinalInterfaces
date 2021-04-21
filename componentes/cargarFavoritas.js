import Favoritas from './claseFavoritas.js'

var favo = new Favoritas()

    var htmlFavoritos = pelicula => `

    <div class="card ">
        <div class="row g-0">
            <div class="col-md-7">
                <img data-lazy="${pelicula.imagen}" class="ImagenFav" src="" alt="${pelicula.titulo}">
            </div>
            <div class="col-md-5">
                <div class="card-body">
                    <h5>${pelicula.titulo}</h5>
                    <p class="card-text"><small class="text-muted">${pelicula.id} </small></p>
                    <br>

                    <h5>Descripci&oacute;n</h5>
                    <p class="card-text"><small class="text-muted">${pelicula.descripcion}</small></p>

                    <br>

                    <h5>Valoraci&oacute;n</h5>
                    <p class="card-text"><small class="text-muted">${pelicula.valoracion} ★</small></p>

                    <button type="button" class="btn btn-primary BotonEliminar" onclick="eliminar('${pelicula.id}', 1)">Eliminar</button>

                </div>
            </div>
        </div>
    </div>

        
    `
    favo.renderFavoritas(htmlFavoritos,'favoritos')

lazyLoadingFavo()