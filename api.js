document.addEventListener('DOMContentLoaded', function() {
    const fetchJokeBtn = document.getElementById('fetchJokeBtn');
    const jokeContainer = document.getElementById('joke-container');
    const jokeSetup = document.getElementById('joke-setup');
    const jokeDelivery = document.getElementById('joke-delivery');
    const errorMessage = document.getElementById('error-message');

    fetchJokeBtn.addEventListener('click', fetchRandomJoke);

    async function fetchRandomJoke() {
        jokeContainer.classList.add('hidden');
        errorMessage.classList.add('hidden');

        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&safe-mode');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            if (data.type === 'single') {
                jokeSetup.textContent = data.joke;
                jokeDelivery.textContent = '';
            } else {
                jokeSetup.textContent = data.setup;
                jokeDelivery.textContent = data.delivery;
            }

            jokeContainer.classList.remove('hidden');
        } catch (error) {
            console.error('Error fetching joke:', error);
            errorMessage.classList.remove('hidden');
        }
    }
});