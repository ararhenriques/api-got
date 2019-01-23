const baseURL = "https://anapioficeandfire.com/api/houses/" //you might have to go back and change this, homie
let url;

// search form
const searchInput = document.getElementById("option"); 
const searchButton = document.getElementById("submit");

/* //results nav
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//results section
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 1; 

let displayNav = false; */

/* nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage); */

//url
// function makeOptions(event) {
//     event.preventDefault()
//     console.log()
//     fetch(baseURL)
//     .then(function(result){
//         console.log(result)
//         return result.json();
//     })
//     .then(function(json) {
//         console.log(json)
//         displayResults(json);
//     })
    
//     json.forEach(option => {
//         let elem = document.createElement('option');
//         elem.innerText=[].name;
//         Selection.appendChild(elem);
//     })
// }

// function makeOptions(json) {
//      console.log(json);
// }
searchButton.addEventListener('click', fetchResults);

function fetchResults(e) { //e allows us to interact with the object that we're fetching (placeholder?)
e.preventDefault()  
console.log(searchInput.value)
// console.log(e);
  url = `${baseURL}/${searchInput.value}`; //assembling the full url
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
      console.log(json.coatOfArms);
      console.log(json.region);
      console.log(json.words);
      displayResults(json); //returning the results in a way we can read
    })
}
/* console.log(json.value)
function displayResults(json) {} */
