const categoryJoke = document.querySelector("#category");
const typeJoke = document.querySelector("#type");
const urlApi = 'https://v2.jokeapi.dev/joke/Any'

async function jokeApi(){
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        console.log(data);
        categoryJoke.textContent = `Category: ${data.category}`;
        
        if(data.type === 'twopart'){
            typeJoke.textContent = `Type: ${data.type}`;
            const jokeTwoParts = document.createElement("p");
            jokeTwoParts.classList.add('acomodar');
            const resp = document.createElement("p");
            resp.classList.add('acomodar');

            jokeTwoParts.textContent = `- ${data.setup}`;
            typeJoke.after(jokeTwoParts);
            resp.textContent = `- ${data.delivery}`;
            typeJoke.after(resp);
        }

        if(data.type === 'single'){
            typeJoke.textContent = `Type: ${data.type}`;
            const joke = document.createElement("p");
            joke.classList.add('acomodar');
            joke.textContent = `- ${data.joke}`;
            typeJoke.after(joke);
        }
        
        //tenemos type : 'twopart', setup y delivery y 'single' tiene joke:    
    } catch (error) {
        
    }
}

jokeApi();
