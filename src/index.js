// Bryan Leasot
// 3/25/2022

// Question 3:
// change the color of the items in the navbar
// get the navbar
var navbar = document.getElementsByClassName("navbar")[0];
// get the left side section of the navbar
var navleft = navbar.firstElementChild;
// get an array of links
var navitems = navleft.getElementsByClassName("link");

// color them navy to contrast the yellow/gold background
for (var i = 0; i < navitems.length; i++) {
  navitems[i].style.color = "navy";
}

// Question 4:
// get the smalltext element
var smallText = document.getElementById("smallText");
// modify it
smallText.innerHTML = "Suspendisse potenti";
smallText.style.color = "#FFF";

// Question 5:
// adds a new card to the cards section of the page
// accepts title, image url, and info / description
function addNewCard(title, imgsrc, info) {
  // get the cards container div
  var cardsDiv = document.getElementsByClassName("cards")[0];
  // create a new element *NOTE does not add to page
  var newCard = document.createElement("article");
  newCard.className = "card";
  newCard.innerHTML +=
    '<img src="' +
    imgsrc +
    '" /><section class="card-content"><h2>' +
    title +
    "</h2><p>" +
    info +
    "</p></section>";
  // actually add the card to the page
  cardsDiv.appendChild(newCard);
}

// add a new card per instruction
addNewCard(
  "Canyon Getaway",
  "assets/canyon.jpg",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae libero quasi blanditiis voluptates. Nobis enim ab dolorem aliquam necessitatibus eaque dolorum atque voluptatum,"
);

// uncomment below to test another card
/*addNewCard(
  'Forest Vacation',
  'assets/forest.jpg',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae libero quasi blanditiis voluptates. Nobis enim ab dolorem aliquam necessitatibus eaque dolorum atque voluptatum,'
);*/

// Question 6:

// grab the first post
var post = document.getElementsByClassName("post")[0];
// add the image
// NOTE: i had added a width: auto;
// css inline attribute to post images
// due to in browser width stretching,
// but opted to not use this because
// the image does not shrink in mobile with this fix.
post.innerHTML += '<img src="assets/city1.jpg" />';

// Question 7 & 8:

var Post = function (title, desc, link) {
  this.title = title;
  this.desc = desc;
  this.link = link;

  this.postToPage = function () {
    var postSection = document.getElementsByClassName("postSection")[0];
    postSection.innerHTML +=
      "<article class='post'><main class='post-content'><h2>" +
      this.title +
      "</h2><p>" +
      this.desc +
      '</p></main><img src="' +
      this.link +
      '" /></article>';
  };

  this.changeTitle = function (t) {
    this.title = t;
  };
  this.changeDesc = function (d) {
    this.desc = d;
  };
  this.changeLink = function (l) {
    this.link = l;
  };
};

var newPost = new Post(
  "My Amazing Programming Experience",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum excepturi ullam reiciendis? Similique hic suscipit cum magnam a sunt voluptatum debitis iure, molestiae dignissimos consequuntur, minus ab nulla perferendis.</br></br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quae adipisci dignissimos consequuntur assumenda ratione fuga perspiciatis accusamus laborum ipsa totam nobis ex odio vel ipsum, saepe omnis? Deleniti, dolor. Dolorum minima natus tempora quidem pariatur, commodi fuga doloribus consectetur aspernatur explicabo fugit voluptas facilis voluptatum ad necessitatibus, dignissimos veritatis tempore ipsa mollitia recusandae corrupti sequi saepe, iste eos! Sed!",
  "assets/city2.jpg"
);

newPost.postToPage();

newPost.changeTitle("Look at this lake!");
newPost.changeLink("assets/lake.jpg");

newPost.postToPage();
