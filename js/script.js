import peliculas from './peliculas.js'

const divGeneros = document.querySelectorAll('.genero')
const generos = [28, 53, 12]

function postMovie (genre, element) {
    if (genre == 28 || genre == 53 || genre == 12) {
        divGeneros[generos.indexOf(genre)].innerHTML += `<div class="poster"><img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}" /><span>${element.title}</span></div>`
    }
}

peliculas.forEach((element) => element.genre_ids.forEach((genre) => postMovie(genre, element)))