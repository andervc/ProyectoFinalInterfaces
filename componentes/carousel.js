const fila1 = document.querySelector('.contenedor_carousel1')
const fila2 = document.querySelector('.contenedor_carousel2')
const peliculas = document.querySelector('.pelicula')

const flechaIzquierda1 = document.getElementById('flecha-izq1')
const flechaDerecha1 = document.getElementById('flecha-der1')

const flechaIzquierda2 = document.getElementById('flecha-izq2')
const flechaDerecha2 = document.getElementById('flecha-der2')

//------------- Para flecha derecha Populares -----------------
flechaDerecha1.addEventListener('click', () =>{
    fila1.scrollLeft += fila1.offsetWidth
})
//------------- Para flecha izquierda Proximas -----------------
flechaIzquierda1.addEventListener('click', () =>{
    fila1.scrollLeft -= fila1.offsetWidth
})

//------------- Para flecha derecha Proximas -----------------
flechaDerecha2.addEventListener('click', () =>{
    fila2.scrollLeft += fila2.offsetWidth
})

//------------- Para flecha izquierda Proximas -----------------
flechaIzquierda2.addEventListener('click', () =>{
    fila2.scrollLeft -= fila2.offsetWidth
})