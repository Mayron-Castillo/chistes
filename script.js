const categoryJoke = document.querySelector("#category");
const typeJoke = document.querySelector("#type");
const urlApi = 'https://v2.jokeapi.dev/joke/Any';
const button = document.querySelector(".button");

button.addEventListener("click", async function jokeApi(){
    try {
        button.textContent = 'Cambiar chiste'
        const response = await fetch(urlApi);

        if(!response.ok){
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data.id);
        
        categoryJoke.textContent = `Category: ${data.category}`;
        if(data.type === 'twopart'){
            typeJoke.textContent = `Type: ${data.type}`;
            const jokeTwoParts = document.createElement("p");
            jokeTwoParts.classList.add('acomodar');
            const resp = document.createElement("p");
            resp.classList.add('acomodar');

            jokeTwoParts.textContent = `- ${data.setup}`;
            typeJoke.appendChild(jokeTwoParts);
            resp.textContent = `- ${data.delivery}`;
            typeJoke.appendChild(resp);
        }

        if(data.type === 'single'){
            typeJoke.textContent = `Type: ${data.type}`;
            const joke = document.createElement("p");
            joke.classList.add('acomodar');
            joke.textContent = `- ${data.joke}`;
            typeJoke.appendChild(joke);
        }
    } catch (error) {
        console.error(error);
    }
})

jokeApi();
