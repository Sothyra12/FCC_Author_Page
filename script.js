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

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json").then((res) => console.log(res))



