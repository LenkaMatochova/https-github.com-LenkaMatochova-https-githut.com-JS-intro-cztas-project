const header = document.querySelector ("header.header-news");
const section = document.querySelector("section.main-content");

const carouselItemCount = 4;

fetch("http://localhost:3000/news.json")
    .then(serverResponse => serverResponse.text())
    .then(responseText => {
        const data = JSON.parse(responseText);
        populateNewsCarousel(data.articles);
    })
    .catch(serverError => alert ("Chyba serveru"));

function populateNewsCarousel(news) {
    for(let i = 0; i < carouselItemCount; i++) {
        const newsValue = news[i];
        const newsDiv = createDivForNews(newsValue);
        header.appendChild(newsDiv);
    }
}

function createDivForNews(newsContent) {
    const newsArticle = document.createElement ("div");
    newsArticle.innerText = newsContent.title;
    return newsArticle;
}

for (let i = 1; i <=32; i++) {
        const daysOfMonth = document.createElement("div");
        const newsDiv = createDivForNews(newsValue);
        header.appendChild(newsDiv)
        daysOfMonth.innerText = i;
        daysOfMonth.classList.add("main-content_day");
    }
