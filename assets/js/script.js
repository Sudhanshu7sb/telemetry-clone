//header background on scroll beyond hero section
window.addEventListener("scroll", showHeaderBackground);

function showHeaderBackground(event) {
    console.log(event.target.scrollY);
  if (event.target.scrollY > 350) {
    console.log(event.target, scrollY);
     let header = document.querySelector(".header");
    header.classList.add("header-background");
    console.log("hi");
  } else {
      console.log("yes");
      
    // header.classList.remove("header-background");
  }
}