const $search = document.querySelector(".search")
import MovieMaker from './modules/MovieMaker/index.js'

$search.addEventListener("submit",(e)=>{
    e.preventDefault()
    const $place = document.getElementById("place")
    const $input = document.querySelector(".search__input").value.trim()
    const $modal = document.querySelector(".modal")
    const $contModal = document.querySelector(".container-modal")
    MovieMaker(`https://api.themoviedb.org/3/search/movie?api_key=14def63958c869548fa4195ab03b71f3&query=${$input}`,$place, $modal,$contModal)
    
})