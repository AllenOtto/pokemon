document.querySelector('button').addEventListener('click', fetchData)

async function fetchData() {
    const url1 = `https://pokeapi.co/api/v2/pokemon/`
    const response = await fetch(url1)
    const jsonData = await response.json()
    console.log(jsonData)
    const anotherUrl = displayFunc(jsonData)
    fetchPokemonImage(anotherUrl)
}

const displayFunc = function display(data) {
    const numberOfPokemon = data.results.length
    let randomPokemon = Math.floor(Math.random() * numberOfPokemon)
    document.querySelector('h3').innerText = data.results[randomPokemon].name
    return data.results[randomPokemon].url
}

async function fetchPokemonImage(url) {
    const response = await fetch(url)
    const jsonData = await response.json()
    console.log(jsonData)
    console.log(jsonData.sprites.back_default)
    document.querySelector('img').src = jsonData.sprites.back_default
}