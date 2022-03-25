// Question 3:
var navbar = document.getElementsByClassName("navbar")[0];
console.log(navbar);
var navleft = navbar.firstElementChild;
console.log(navleft);

var navitems = navleft.getElementsByClassName("link");
console.log(navitems);

for (var i = 0; i < navitems.length; i++) {
  navitems[i].style.color = "navy";
}

// Question 4:

// Question 5:

// Question 6:

// Question 7 & 8:

var Post = function (title, desc, link) {
  this.title = title;
  this.desc = desc;
  this.link = link;
};
