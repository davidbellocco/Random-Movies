let data_json = `./data.json`
const section = document.getElementById("section")

function GetPeliculas(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("algo salio mal")
            }
            return response.json();
        })
        .then(peliculas => {
            generarVariasAleatorias(peliculas)


        })
        .catch(error => {
            console.log("Not found",error)
        })

}


GetPeliculas(data_json)

const Renderizado = (prop) => {
    prop.map(elemento => {
        const nuevo = document.createElement("div")
        nuevo.classList = "docs"
        nuevo.innerHTML = `
        
    
        <img src=${elemento.imagen} alt=${elemento.titulo}>
        <h2>Nombre:${elemento.titulo}</h2>
        <strong>Año:${elemento.año}</strong>
        <span>Genero:${elemento.genero}</span>
        <p>Director:${elemento.director}</p>
    
    
    
    `
        section.appendChild(nuevo)

    })

}

const PostRamdon = (calculo) => {
    const random = Math.round(Math.random() * calculo.length)
    const peli = calculo[random]
    Renderizado([peli])

}




const generarVariasAleatorias =(prop) => {
    let ArregloVacio = []
    for (let i = 0; i < 5; i++) {
        ArregloVacio.push(PostRamdon(prop));
    }
    return ArregloVacio;
}


