export const getPokemon = async (nombre) => {
    //url es la dirección de la api que será consumida
    const url = 'https://pokeapi.co/api/v2/pokemon/' + nombre
    //fetch es la función que permite consumer las api por medio de los métodos http
    const resp = await fetch(url)
    //captura la información que retorna la api
    const data = await resp.json()
    //objeto con los datos que necesitamos
    const pokemon = {
        num: data.id,
        nom: data.name,
        img: data.sprites.other['official-artwork'].front_default,
        img2: data.sprites.other['official-artwork'].front_shiny,
        tipo: data.types,
        sonido: data.cries.latest,
        stats: data.stats
    }

    return pokemon
}