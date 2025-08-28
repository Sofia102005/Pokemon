export function showPokemon (pokemon) {
    
    if (!pokemon) return; 

    document.getElementById ("pokemon-img").src = pokemon.sprite;
    document.getElementById ("pokemon-name").textContent = capitalize(pokemon.name);
    document.getElementById ("pokemon-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");

    //Tipos
    const typesDiv = document.querySelector (".type");
    typesDiv.innerHTML = "";
    pokemon.types.forEach (t => {
        const span = document.createElement ("span");
        span.classList.add("type", t);
        span.textContent = capitalize (t);
        typesDiv.appendChild(span);
    })

    document.querySelector(".pokemon-img").onclick = () => {
        showModal(pokemon);
        document.getElementById('pokemon-modal').classList.remove('hidden')
        //document.getElementById('pokemon-modal').style.display = 'block';
    }
    //document.querySelector(".pokemon-img").onclick = () => alert(`hola`);

    document.getElementById("close-modal").onclick = () => {
        document.getElementById("pokemon-modal").classList.add("hidden");
    };
}

function capitalize (word) {
    return word.charAt (0).toUpperCase() + word.slice (1);
}

    //Modal

export function showModal (pokemon){
    if (!pokemon) return;
    document.getElementById ("modal-img").src = pokemon.sprite;
    document.getElementById ("modal-name").textContent = capitalize(pokemon.name);
    document.getElementById ("modal-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");
    document.getElementById ("modal-height").textContent = capitalize(pokemon.height.toString());
    document.getElementById ("modal-weight").textContent = capitalize(pokemon.weight.toString());

    //Habilidades
    const abilitiesDiv = document.getElementById ("modal-abilities");
    abilitiesDiv.innerHTML = "";
    pokemon.abilities.forEach (a => {
        const span = document.createElement ("span");
        span.classList.add("modal-abilities", a);
        span.textContent = capitalize (a) + ", ";
        abilitiesDiv.appendChild(span);
    })

    //Estadisticas
    const statsDiv = document.getElementById ("modal-stats");
    statsDiv.innerHTML = "<h3>Estadisticas</h3>";
    pokemon.stats.forEach (s => {
    const statContainer = document.createElement("div");
    statContainer.classList.add("stat-container");

    const name = document.createElement("span");
    name.classList.add("stat-name");
    name.textContent = capitalize(s.stat);

    //Barra de Stats
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    //Barra de Stats-Completado
    const progress = document.createElement("div");
    progress.classList.add("progress-barCompl");
    progress.style.width = (s.base / 255 * 100) + "%";
    
    progressBar.appendChild(progress);

    const value = document.createElement("span");
    value.classList.add("stat-value");
    value.textContent = s.base;

    statContainer.appendChild(name);
    statContainer.appendChild(progressBar);
    statContainer.appendChild(value);

    statsDiv.appendChild(statContainer);
    })
     
}
    
