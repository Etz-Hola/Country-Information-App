const result = document.getElementById("result");
const btn = document.getElementById("search-btn");
// console.log(url);

    
  // Event listener for the search button
  btn.addEventListener("click", () => {
    inputWord = document.getElementById("country-name").value;
    const url = `https://restcountries.com/v3.1/name/${inputWord}?fullText=true`

    fetch (url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data[0]);
        console.log(data[0].name.common);
        console.log(data[0].flags);
        console.log(data[0].flags.svg);
        console.log(data[0].flags.alt);
        console.log(data[0].capital);
        console.log(data[0].capital[0]);
        console.log(data[0].continents);
        console.log(data[0].continents[0]);
        console.log(data[0].population);
        console.log(data[0].currencies);
        console.log(Object.keys(data[0].currencies));
        let currency = Object.keys(data[0].currencies);
        console.log(currency);
        let languagesInfo = data[0].languages
        let languages = Object.values(languagesInfo)
        console.log(data[0].languages);


        // console.log(data[0].country.flags.svg[0]);
        result.innerHTML = `
            <div class="flag-details">
            <img src="${data[0].flags.svg}" alt="${data[0].flags.alt}">
                <h1>${data[0].name.common}</h1>
            </div>

            <div class="resultDetails">
                <p>Capital: <span>${data[0].capital}</span> </p>
                <p>Continent: <span>${data[0].continents[0]}</span> </p>
                <p>Population: <span>${data[0].population}</span> </p>
                <p>Currency: <span>${currency[0]}</span> </p>
                <p>Language: <span>${languages[0]}</span> </p>
            </div>        
        `
        
    })
    .catch (() => {
        result.innerHTML =`
        <h2 class="error">Couldn't Find The Word: ${inputWord}</h2>
        `
    })
    
    

  })
