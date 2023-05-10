document.querySelector('button').addEventListener('click', fetchData)

async function fetchData() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    const jsonData = await res.json()
    console.log(jsonData)
}