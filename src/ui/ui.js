export function showPokemon (pokemon) {
    
    if (!pokemon) return; 

    document.getElementById ("pokemon-img").src = pokemon.sprite;
    document.getElementById ("pokemon-name").textContent = capitalize(pokemon.name);
    document.getElementById ("pokemon-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");

    


    const typesDiv = document.querySelector (".type");
    typesDiv.innerHTML = "";
    pokemon.types.forEach (t => {
        const span = document.createElement ("span");
        span.classList.add("type", t);
        span.textContent = capitalize (t);
        typesDiv.appendChild(span);
    })

    
}

function capitalize (word) {
    return word.charAt (0).toUpperCase() + word.slice (1);
}

export function showModal (pokemon){
    if (!pokemon) return;
    document.getElementById ("modal-img").src = pokemon.sprite;
    document.getElementById ("modal-name").textContent = capitalize(pokemon.name);
    document.getElementById ("modal-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");
    document.getElementById ("modal-height").textContent = capitalize(pokemon.height.toString());
    document.getElementById ("modal-weight").textContent = capitalize(pokemon.weight.toString());

    const abilitiesDiv = document.getElementById ("modal-abilities");
    abilitiesDiv.innerHTML = "";
    pokemon.abilities.forEach (a => {
        const span = document.createElement ("span");
        span.classList.add("modal-abilities", a);
        span.textContent = capitalize (a) + ", ";
        abilitiesDiv.appendChild(span);
    })


    const statsDiv = document.getElementById ("modal-stats");
    statsDiv.innerHTML = "<h3>Estadisticas</h3>";
    pokemon.stats.forEach (s => {

    })
        document.querySelector(".pokemon-img").onclick = () => showModal(pokemon);

}


    
