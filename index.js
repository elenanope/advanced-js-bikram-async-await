//1
async function getRandomPokemon() {
    try {
        let response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/`
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        let data = await response.json();

        const pokemonId = Math.floor(data.count * Math.random() + 1);//+1 seguro?
        let randomResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        if (!randomResponse.ok) {
            throw new Error(`Error HTTP: ${randomResponse.status}`);
        }

        let pokemonData = await randomResponse.json();

        return pokemonData;
    } catch (error) {
        console.error("No se pudo obtener la publicación:", error.message);
    }
}

//2
async function getImageAndName(pokemon) {
    try {
        let response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        let data = await response.json();

        let name = data.name;
        let img = data.sprites.front_default;
        return { name, img };
    } catch (error) {
        console.error("No se pudo obtener la publicación:", error.message);
    }
}

//3
function printImageAndName(pokemonData) {
    const newPokemonSection = document.createElement('section');
    newPokemonSection.innerHTML = `<img src=${pokemonData.img} alt=${pokemonData.name}><h1>${pokemonData.name}</h1>`;
    document.body.append(newPokemonSection);
}

//4
async function getRandomDogImage() {
    try {
        let response = await fetch(
            `https://dog.ceo/api/breeds/image/random`
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        let data = await response.json();

        return data.message;
    } catch (error) {
        console.error("No se pudo obtener la publicación:", error.message);
    }
}

//5
async function getRandomPokemonImage() {
    const randomData = getRandomPokemon();
    return randomData.sprites.front_default;
}

//6
async function printPugVsPikachu() {
    try {
        let pugResponse = await fetch(
            `https://dog.ceo/api/breed/pug/images/random`
        );
        if (!pugResponse.ok) {
            throw new Error(`Error HTTP: ${pugResponse.status}`);
        }

        let pug = await pugResponse.json();

        let pikachuResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/pikachu`
        );
        if (!pikachuResponse.ok) {
            throw new Error(`Error HTTP: ${pikachuResponse.status}`);
        }

        let pikachu = await pikachuResponse.json();

        let pikachuSprite = pikachu.sprites.front_default;
        return pug.message, pikachuSprite;
    } catch (error) {
        console.error("No se pudo obtener la publicación:", error.message);
    }
}

//7
async function getRandomCharacter() {
    try {
        let response = await fetch(
            `https://rickandmortyapi.com/api/character`
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        let data = await response.json();

        let characterId = Math.floor(data.info.count * Math.random() + 1);//+1 seguro?
        let randomResponse = await fetch(
            `https://rickandmortyapi.com/api/character/${characterId}`
        );
        if (!randomResponse.ok) {
            throw new Error(`Error HTTP: ${randomResponse.status}`);
        }

        let characterData = await randomResponse.json();

        return characterData;
    } catch (error) {
        console.error("No se pudo obtener la publicación:", error.message);
    }
}

//8
async function getRandomCharacterInfo() {
    let randomCharacterData = getRandomCharacter();
    let img = randomCharacterData.image;
    let name = randomCharacterData.name;
    let episodes = randomCharacterData.episode;
    let firstEpisode = episodes[0];
    try {
        let dateResponse = await fetch(
            `https://rickandmortyapi.com/api/episode/${firstEpisode}`
        );
        if (!dateResponse.ok) {
            throw new Error(`Error HTTP: ${dateResponse.status}`);
        }
        let dateEpisode = dateResponse.air_date;
        return { img, name, episodes, firstEpisode, dateEpisode };
    } catch (error) {
        console.error("No se pudo obtener la publicación:", error.message);
    }
}

//9
//display all objects (only 8?)

//QUITAR ESTO, solo de referencia
async function obtenerPublicacion() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        console.log(data.title);
        console.log(data.body);
    } catch (error) {
        console.error("No se pudo obtener la publicación:", error.message);
    }
}
