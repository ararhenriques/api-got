const baseURL = "https://anapioficeandfire.com/api/houses/" //you might have to go back and change this, homie
let url;

// search form
const searchInput = document.getElementById("option"); 
const searchButton = document.getElementById("submit");
//results
const section = document.getElementById("results");
const title = document.getElementById("name")
const region = document.getElementById("region")
const coatOfArms = document.getElementById("coatOfArms")
const words = document.getElementById("words")


searchButton.addEventListener('click', fetchResults);

function fetchResults(e) { //e allows us to interact with the object that we're fetching (placeholder?)
e.preventDefault()  
console.log(searchInput.value)
// console.log(e);
  url = `${baseURL}${searchInput.value}`; //assembling the full url
  console.log('URL:', url);
  //e.preventDefault();

//fetch
fetch(url) // Info request w/ url as a parameter
    .then(function(result) { //
      console.log(result)
      return result.json(); // returns the request, but not easily interpretable
    })
    .then(function(json) {
        console.log(json);
      console.log(json);
      console.log(json.name);
      console.log(json.region);
      console.log(json.coatOfArms);
      console.log(json.words);
      displayResults(json); //returning the results in a way we can read
    })
}
function displayResults(json){
  title.innerText = "Name: "+json.name
  region.innerText = "Region: " +json.region
  coatOfArms.innerText = "Coat of Arms: " +json.coatOfArms
  words.innerText = "Words: " +json.words
}



