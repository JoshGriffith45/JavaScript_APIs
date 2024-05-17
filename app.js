console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const searchButton = document.getElementById("submitSearch");
const searchInput = document.getElementById("searchWord");
const image = document.getElementById("imageContainer");
const feedbackPar = document.getElementById("feedback");

searchButton.addEventListener("click", function() {

    //I removed my api key.
    const myApi = "";
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${myApi}&s=${searchInput}`;

    fetch(url)
    .then((response) => response.json())
    .then((res) => {
        const imageSrc = res.data.images.original.url;
        image.innerHTML = `<img src=${imageSrc} alt="Giphy Selection" style="width: 100%; height: auto" />`;
        searchInput.value = "";
        feedbackPar.textContent = "";
    })
    .catch((error) => {
        console.error(error);

        feedbackPar.textContent = error.message;
    });
        
});