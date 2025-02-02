const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar')

window.onload = function(){
    if(window.innerWidth > 740){
        menu.style.height = 0;
        menu.style.opacity = 0;
    }
}

burgerBtn.addEventListener('click', function(){
    if(menu.style.height == "0px"){
        menu.style.height = "300px";
        navbar.style.boxShadow = "none";
        menu.style.opacity = 1;
      } else {
        menu.style.height = 0;
        menu.style.opacity = 0;
      }
})

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  console.log(section);
  section.scrollIntoView({ behavior: "smooth" });
}