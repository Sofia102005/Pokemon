export function showPokemon (pokemon) {
    if (!pokemon) return; 

    document.getElementById ("pokemon-img").src = pokemon.sprite;
    document.getElementById ("pokemon-name").textContent = capitalize(pokemon.name);
    document.getElementById ("pokemon-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");

    const typesDiv = document.querySelector (".types");
    typesDiv.innerHTML = "";
    pokemon.types.forEach (t => {
        const span = document.createElement ("span");
        span.classList.add("type", t);
        span.tectContent = capitalize (t);
        typesDiv.appendChild(span);
    })

}

function capitalize (word) {
    return word.charAt (0).toUpperCase() + word.slice (1);
}