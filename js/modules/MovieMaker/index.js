
 const MovieMaker = async (api, place,modal,contModal)=>{
    try {
        const res = await fetch(api)
        const data = await res.json()
        console.log(data)
        const fragment = document.createDocumentFragment()

        for (const el of data.results) {
            const div = document.createElement("div");
            
            div.setAttribute("class","movie");
            div.innerHTML = `
            <img class="movie__img" src="${el.poster_path || el.backdrop_path
                ? `https://image.tmdb.org/t/p/original${el.poster_path || el.backdrop_path}`
                : '../././asset/Img/noImg.jpg'}">
            <h5 class="movie__title">${el.title}</h5>`

            div.addEventListener("click",(e)=>{
                contModal.classList.add("show")
                modal.classList.add("show")
                modal.innerHTML = `
                <img class="modal__img" src="${el.poster_path || el.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${el.poster_path || el.backdrop_path}`
                    : '../././asset/Img/noImg.jpg'}">
                    <h2 class="modal__titles">Title</h2>
                    <h4>${el.title}</h4>                
                    <h2 class="modal__titles">Overview</h2>  
                    <h4>${el.overview}</h4> 
                    <h2 class="modal__titles">Average</h2>  
                    <h4 class="${el.vote_average >= 6.8 
                        ?"avr-green"
                        :"avr-red"}">${el.vote_average}</h4>                    
                    `
            })

            fragment.append(div);
        }
        window.addEventListener("click",(e)=>{
            if(e.target.matches(".container-modal")){
                contModal.classList.remove("show")
            }
        })
        place.innerHTML = ""
        place.append(fragment)

    } catch (error) {
        console.log(error)
    }
    
}

export default MovieMaker