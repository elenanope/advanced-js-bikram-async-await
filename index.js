//1
async function getRandomPokemon() {
    try {
        const pokemonId = Math.floor(Math.random() * 1025 + 1);
        const randomResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        if (!randomResponse.ok) {
            throw new Error(`Error HTTP: ${randomResponse.status}`);
        }

        const pokemonData = await randomResponse.json();

        return pokemonData;
    } catch (error) {
        console.error("No se pudo obtener el pokemon:", error.message);
    }
}

//2
async function getImageAndName(pokemon) {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        const name = data.name;
        const img = data.sprites.front_default;
        return { name, img };
    } catch (error) {
        console.error("No se pudo obtener el pokemon:", error.message);
    }
}

//3
async function printImageAndName(pokemonName) {
    const pokemonData = await getImageAndName(pokemonName || (await getRandomPokemon()).name);
    const printedSection = `<section>
    <h1>Pokémon ${pokemonName? "seleccionado" : "aleatorio"}</h1>
    <img src="${pokemonData.img}" alt="${pokemonData.name}">
    <h1>${pokemonData.name}</h1>
    </section>`;

    document.body.insertAdjacentHTML("beforeend", printedSection);
    return printedSection;
}

//4
async function getRandomDogImage() {
    try {
        const response = await fetch(
            `https://dog.ceo/api/breeds/image/random`
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        return data.message;
    } catch (error) {
        console.error("No se pudo obtener la imagen:", error.message);
    }
}

//5
async function getRandomPokemonImage() {
    const randomData = await getRandomPokemon();
    if (!randomData) return;
    return randomData.sprites.front_default;
}

//6
async function printPugVsPikachu() {
    try {
        const pugResponse = await fetch(
            `https://dog.ceo/api/breed/pug/images/random`
        );
        if (!pugResponse.ok) {
            throw new Error(`Error HTTP: ${pugResponse.status}`);
        }

        const pug = await pugResponse.json();
        const pugImage = pug.message;

        const pikachu = await getImageAndName("pikachu");
        const pikachuSprite = pikachu.img;

        const battleSection = document.createElement("section");
        battleSection.innerHTML = `<img src = "${pugImage}" alt = "Pug"> <h1>VS</h1> <img src = "${pikachuSprite}" alt = "Pikachu">`;
        document.body.append(battleSection);
        return { pugImage, pikachuSprite };
    } catch (error) {
        console.error("No se pudo obtener alguna de las imágenes:", error.message);
    }
}

//7
async function getRandomCharacter() {
    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character`
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        const characterId = Math.floor(data.info.count * Math.random() + 1);
        const randomResponse = await fetch(
            `https://rickandmortyapi.com/api/character/${characterId}`
        );
        if (!randomResponse.ok) {
            throw new Error(`Error HTTP: ${randomResponse.status}`);
        }

        const characterData = await randomResponse.json();

        return characterData;
    } catch (error) {
        console.error("No se pudo obtener el personaje:", error.message);
    }
}

//8
async function getRandomCharacterInfo() {
    try {
        const randomCharacterData = await getRandomCharacter();
        const img = randomCharacterData.image;
        const name = randomCharacterData.name;
        const episodes = randomCharacterData.episode;
        const response = await fetch(
            episodes[0]
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const episodeData = await response.json();
        const firstEpisode = episodeData.name;
        const dateEpisode = episodeData.air_date;
        return { img, name, episodes, firstEpisode, dateEpisode };
    } catch (error) {
        console.error("No se pudo obtener la información:", error.message);
    }
}

//9
function printRandomCharacterInfo(characterData) {
    const newCharacterSection = document.createElement('section');
    newCharacterSection.innerHTML = `<h1>Personaje Random de Rick&Morty</h1>
    <img src="${characterData.img}" alt="${characterData.name}">
    <p>El personaje <strong>${characterData.name}</strong> ha salido en ${characterData.episodes.length > 1? "los episodios":"el episodio"} <strong>${characterData.episodes.map(url => url.split("/").pop()).join(", ")}</strong>.</p>
    <p>El primer episodio en el que estuvo se llama <strong>${characterData.firstEpisode}</strong>, que salió en la siguiente fecha: <strong>${characterData.dateEpisode}</strong></p>`;
    document.body.append(newCharacterSection);
}