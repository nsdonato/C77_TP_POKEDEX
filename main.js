// Tarea
// 1. Convertir el fetch en un async / await
// 2. Recibir el input del usuario y mostrar el pokemon correspondiente 
// 3. PUNTOS EXTRA asignar las variables con destructuring 

const form = document.forms[0];

form.onsubmit = (e) => {
  e.preventDefault()

  const pokemonABuscar = form.elements[0].value
  buscarPokemon(pokemonABuscar)
}

const buscarPokemon = async (pokemonParaBuscar) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonParaBuscar}`)
  const result = await data.json()

  const { name, id, sprites: { front_default }, types: [typeName] } = result;

  const pokemon = {
    name: name,
    id: id,
    image: front_default,
    type: typeName.type.name, //hicimos trampa, si tiene mas de un tipo no va a funcionar.
  };
  displayPokemon(pokemon);
}

const displayPokemon = pokemon => {
  const pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = `
  <li class="card">
      <img class="card-image" src="${pokemon.image}"/>
      <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
      <p class="card-subtitle">Type: ${pokemon.type}</p>
  </li>
  `;
};