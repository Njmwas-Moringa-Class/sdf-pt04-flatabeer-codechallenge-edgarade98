// Code here

// See the first beer's details, including its name, image, description, and reviews, when the page loads
function getBeerInfo(beer) {
    const beerName = document.querySelector('#beer-name');
    const beerImage = document.querySelector('#beer-image');
    const beerDescription = document.querySelector('#beer-description');

    beerName.textContent = beerData.name;
    beerDescription.textContent = beerData.description;
    beerImage.src = beerData.image_url;

    const beerReviewList = document.querySelector('#review-list');
    beerReviewList.innerHTML = "";

    const beerReviewForm = document.querySelector('#review-form');
    const beerReviewText = document.querySelector('#review');

    beerInfo.reviews.forEach(function (review) {
        const reviewItem = document.getElement("li");
        reviewItem.textContent = review;
        beerReviewsElement.appendChild(reviewItem);
      });

}

// Add a new review of beers

beerReviewForm.addEventListener('submit') {
    console.log(${beer.id})
    if(beerReviewText.value == '') {
        beer.reviews.push(beerReviewText.value)
    } else{
        alert('Add a review')
    }
};


//See a menu of all beers in the <nav> element on the left side of the page when the page loads

function loadBeerList () {
    const navElement = document.getElementById("beer-menu");

    const menuList = document.createElement("ul");
    
    beers.forEach(beer) { 
        const navElement = document.createElement('li');
        navElement.textContent = beer.name;
        navElement.setAttribute('index', beer.id);
        navBeerList.append(navElement);
    })   
}
