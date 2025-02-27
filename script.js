// script.js

const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

// In this project we want data about the authors on freeCodeCamp News.
// If you want data from an online source, you need use an API (Application Programming Interface).
// An API lets people from outside of an organization retrieve its internal data.
// There is a method called fetch that allows code to receive data from an API by sending a GET request.
// Here is how you can make a GET request with the fetch() method: fetch("url-goes-here")

// Make a GET request to this URL: "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json".
// Don't terminate your code with a semicolon yet.

// The fetch() method returns a Promise, which is a placeholder object that will either be fulfilled if your request is successful,
// or rejected if your request is unsuccessful.
// If the Promise is fulfilled, it resolves to a Response object, and you can use the .then() method to access the Response.
// Here's how you can chain .then() to the fetch() method: fetch("sample-url-goes-here").then((res) => res)

// The data you get from a GET request is not usable at first. To make the data usable,
// you can use the .json() method on the Response object to parse it into JSON.
// If you expand the Prototype of the Response object in the browser console, you will see the .json() method there.

//In order to start working with the data, you will need to use another .then() method.
// Chain another .then() to the existing .then() method. This time, pass in data as the parameter for the callback function.
// For the callback, use a curly brace because you will have more than one expression. Within your callback function,
// log data to the console to see what it looks like.
fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    //console.log("Author Data Array:", authorDataArr);
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  })
  .catch((err) => {
    authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
  });

// Now that you have the data you want, you can use it to populate the UI.
// But the fetched data contains an array of 26 authors, and if you add them all to the page at the same time, it could lead to poor performance.
// Instead, you should add 8 authors at a time, and have a button to add 8 more until there's no more data to display.
let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

// Now you'll create a function to populate the UI with the author data. You will call this function inside the second .then() method.
const displayAuthors = (authors) => {
  // destructing first parameter {} not the second (index)
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `<div class="user-card" id=${index}>
        <h2 class="author-name">${author}</h2>
        <image class="user-img" src="${image}" alt="${author} avatar" />
        <div class="purple-divider"></div>
        <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + "..." : bio}</p>
        <a class="author-link" href="${url}" target="_blank">${author}'s author page</a>
    </div>`;
  });
};

// To see the authors' names on the page, you need to call the displayAuthors function inside the second .then() method. 
// But before that, you need to assign the author data to the empty authorDataArr array.
// First, remove your console.log() statement. Then, assign data to the authorDataArr variable.


const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex += 8;
  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.cursor = "not-allowed";
    loadMoreBtn.textContent = "No more data to load";
  }
};

loadMoreBtn.addEventListener("click", fetchMoreAuthors);