const axios = require('axios');

async function obtenerReposPopulares() {
    try {
        // hacer una solicitud a la API de GitHub para obtener los repositorios públicos de "google"
        const response = await axios.get('https://api.github.com/users/google/repos?sort=stars');

        // obtener los 10 repositorios más populares
        const repositoriosPopulares = response.data.slice(0, 10);

        console.log('Los 10 repositorios más populares de "google":');
        repositoriosPopulares.forEach((repo, index) => {
            console.log(`${index + 1}. ${repo.name} - Estrellas: ${repo.stargazers_count}`);
        });
    } catch (error) {
        console.error('Error al obtener repositorios:', error.message);
    }
}

// llamar a la función para obtener y mostrar los repositorios populares
obtenerReposPopulares();
