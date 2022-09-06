const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=44910bc1b0784887aa6cf9f96215ff50";

const resultsContainer = document.querySelector(".results");


async function getNews () {

    const response = await fetch(url);

    const results = await response.json();

    const facts = results.articles;


    for(let i = 0; i < facts.length; i++) {
        console.log(facts[i].title);

        resultsContainer.innerHTML += `<div class="result">${facts[i].title}</div>`;
   }


}

getNews ();

