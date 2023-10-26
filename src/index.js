//See the first beer's details, including its name, image, description, and reviews, when the page loads

function showBeerDetails(beer) {
    
    const beerName = document.querySelector('#beer-name');
    const beerImage = document.querySelector('#beer-image');
    const beerDescription = document.querySelector('#beer-description');
    console.log("Beer" + beer.id)

    const beerDescriptionForm = document.querySelector('#description-form');
    const beerEditDescription = document.querySelector('#description');
    beerDescriptionForm.reset();

    const beerReviewList = document.querySelector('#review-list');
}

    reviews.forEach(review => {
        const reviewList = document.createElement('li');
        reviewList.textContent = review;
        beerReviewsList.appendChild(reviewList);
      });

    function fetchBeerInfo () {
        let defaultURL = 'http://localhost:3000/beers/${beer.id}'
        fetch (defaultURL)
        .then(response => response.json())
        .then(data => {
            beerName.textContent = beer.name;
            beerImage.src = beer.image_url;
            beerDescription.textContent = beer.description;
        })
    }
//See a menu of all beers in the <nav> element on the left side of the page when the page loads
function navBeers (beers) {
    const beerMenu = document.getElementById("beer-list");
    beer.forEach(beer => {
        const beerItem = document.createElement('li');
})

fetch ('http://localhost:3000/beers/')
.then(response => response.json())
.then (data => showBeerDetails(beer))
}


//Add a new review to the page when the review form is submitted
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
       e.preventDefault()
       beerReview(e.target.review.value)
       form.reset
    })
  })

function beerReview (review) {
    let li = document.createElement('li')
    li.textContent = review;
    console.log(li)
    document.querySelector('#review-list').appendChild(li)
}
