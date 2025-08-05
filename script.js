let blog = document.getElementById("blog");
let blogDropMenu = document.getElementById("drop");

blog.addEventListener("click", function () {
  //       console.log("Blog clicked");
  //   e.preventDefault();
  blogDropMenu.classList.toggle("show");
});


let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll(".nav-link");
let img = document.querySelector(".navbar-brand img");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    nav.classList.add("white");
 nav.classList.add("scrolled");
    navLinks.forEach(link => {
      link.style.color = "rgb(153, 153, 153)";
    });

    img.setAttribute("src", "images/bakery-color.png");
  } else {
    nav.classList.remove("white");

    navLinks.forEach(link => {
      link.style.color = "white";
    });

    img.setAttribute("src", "images/bakery-light-1.png");
  }
});
