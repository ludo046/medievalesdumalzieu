function getAllArchive(){
  fetch("http://backoffice.lesmedievalesdumalzieu.org:8080/api/archive/get/")
  .then(archive => {
      archive.json()
      .then(getArchive => {
          ArchiveSort(getArchive)
          console.log(getArchive);
      })
  })
}
getAllArchive()

function ArchiveSort(archives){
  const years = [
    one = [], two = [], three = [], four = [], five = [], six = [], seven = [], height = [], nine = [], ten = [], eleven = [], twelve = []
  ]
  for(let i = 0; i < archives.length; i++){
    if(archives[i].years === '2012'){
      years[0].push(archives[i])
    }
    if(archives[i].years === '2013'){
      years[1].push(archives[i])
    }
    if(archives[i].years === '2014'){
      years[2].push(archives[i])
    }
    if(archives[i].years === '2015'){
      years[3].push(archives[i])
    }
    if(archives[i].years === '2016'){
      years[4].push(archives[i])
    }
    if(archives[i].years === '2017'){
      years[5].push(archives[i])
    }
    if(archives[i].years === '2018'){
      years[6].push(archives[i])
    }
    if(archives[i].years === '2019'){
      years[7].push(archives[i])
    }
    if(archives[i].years === '2020'){
      years[8].push(archives[i])
    }
    if(archives[i].years === '2021'){
      years[9].push(archives[i])
    }
    if(archives[i].years === '2022'){
      years[10].push(archives[i])
    }
    if(archives[i].years === '2023'){
      years[11].push(archives[i])
    }
    if(archives[i].years === '2024'){
      years[12].push(archives[i])
    }
  }
  console.log(years);
  createCards(years)
}

function createCards(years){
  const allCards = document.querySelector('.all-cards')
  for(let i = 0; i < years.length; i++){
    const card = document.createElement('li')
    card.classList.add('year-card')
    const carousels = document.createElement('div')
    carousels.classList.add('carousels')
    carousels.setAttribute('id', 'carousels'+(2012+i))
    card.setAttribute('id', `year ${2012+i}`)
    for(let j = 0; j < years[i].length; j++){
      const slide = document.createElement('div')
      slide.classList.add('slide')
      const img = document.createElement('img')
      img.setAttribute('src', years[i][j].picture)
      img.setAttribute('crossorigin', 'anomymous')
      img.setAttribute('loading', 'lazy')
      slide.appendChild(img)
      carousels.appendChild(slide)
    }
    allCards.appendChild(card)
    card.appendChild(carousels)

  }
}

setTimeout(() => {
  const carousels = document.querySelectorAll(".carousels");
console.log(carousels);

carousels.forEach((carousel) => {
  let slides = carousel.querySelectorAll(".slide");
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(n) {
    setTimeout(() => {
      slides[currentSlide].style.display = "none";
      currentSlide = (n + totalSlides) % totalSlides;
      slides[currentSlide].style.display = "inline-block";
    }, 500);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function previousSlide() {
    showSlide(currentSlide - 1);
  }

  // Show the initial slide
  showSlide(currentSlide);

  // Optionally, you can add interval for automatic sliding
  setInterval(() => nextSlide(carousel), 2000); // Change slide every 3 seconds
});
}, 6000);




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



const startDate = new Date("2012-01-01");
const endDate = new Date("2024-01-01");
const totalYears = 12;
const pixelsPerYear = 50;
const totalWidth = 80 + "px";

const timeline = document.getElementById("timeline");
timeline.style.width = totalWidth + "px";
for (let i = 0; i <= totalYears; i++) {
  const event = document.createElement("div");
  const eventYear = document.createElement("p");
  event.classList.add("event");
  event.appendChild(eventYear);
  eventYear.classList.add("years");

  // CALCUL DE LA POSITION EN FONCTION DE L'ANNÉÉ ACTUELLE
  const currentDate = new Date(startDate);
  currentDate.setFullYear(startDate.getFullYear() + i);
  eventYear.innerText = [currentDate][0].getFullYear([i]);
  eventYear.setAttribute("id", [currentDate][0].getFullYear([i]));

  // CALCUL DE LA POSITION EN POURCENTAGE
  const positionPercentage =
    ((currentDate - startDate) / (endDate - startDate)) * 95;

  // POSITIONNEMENT DE L'EVENEMENT SUR LA TIMELINE
  event.style.top = positionPercentage + "%";

  timeline.appendChild(event);

  //RECUPETATION DE L'ID DE L'ANNEE
  event.addEventListener("click", function () {
    let id = eventYear.getAttribute("id");
    changeYear(id);
  });
}

function changeYear(year) {
  // Logique de changement d'année ici
  console.log(`Changement vers l'année ${year}`);
  const section = 'year '+year;
  console.log(section);
  scrollToSection(section);
}


  


function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}





