const year = [
  {video : '', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2012
  {video : '', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2013
  {video : '', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2014
  {video : '', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2015
  {video : 'https://youtu.be/kth-1lg388o?si=JexSML626e64TcLI', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2016
  {video : 'https://www.youtube.com/embed/jsin-3UoWaE?si=iMjQ9IcUXFju0qv2', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2017
  {video : 'https://youtu.be/kKRRPDeCWyg?si=AIB5bTyT5SnZHyEe', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2018
  {video : 'https://youtu.be/A_zkGMwAjUM?si=t5AWk0dwB0QCfFoX', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2019
  {video : '', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2020
  {video : '', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2021
  {video : 'https://youtu.be/E9e9A9aWZKM?si=1bik7jaIRwqfNfkA', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2022
  {video : 'https://youtu.be/lCItTjEyGbY?si=kY-nJLHsVBI6GEYU', image : ['images/archives/2016/1.jpg','images/archives/2016/2.jpg']}, //2023
]


const startDate = new Date("2012-01-01");
const endDate = new Date("2023-01-01");
const totalYears = 11;
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
  const section = 'year'+year;
  console.log(section);
  scrollToSection(section);
}

function createYearsCard(){
    allCards = document.querySelector('.all-cards')
    for(let i = 0; i <= totalYears; i++){
        const yearCard = document.createElement('div')
        yearCard.classList.add('year-card')
        yearCard.setAttribute('id', 'year'+(2012+i))
        const currentYear = document.createElement('h2')
        currentYear.innerText = 2012+i
        const yearContent = document.createElement('div')
        yearContent.classList.add('year-content')
        const teaser = document.createElement('iframe')
        teaser.setAttribute('src', year[i].video)
        if(window.innerWidth > 740){
          teaser.style.height = '400px'
        } else {
          teaser.style.height = "40%"
        }
        teaser.style.width = "calc(100% - 50px)"
        const caroussel = document.createElement('div')
        caroussel.classList.add('carousel')
        caroussel.setAttribute('id', 'carousel'+ (2012+i))
        for(let j = 0; j < year[i].image.length; j++){
          const slide = document.createElement('div')
          slide.classList.add('slide')
          const image = document.createElement('img')
          image.src = year[i].image[j]
          slide.appendChild(image)
          caroussel.appendChild(slide)
        }  

        yearCard.appendChild(currentYear)
        yearContent.appendChild(teaser)
        yearContent.appendChild(caroussel)
        yearCard.appendChild(yearContent)
        allCards.appendChild(yearCard)


    }
}
createYearsCard()

  const carousels = document.querySelectorAll(".carousel");
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


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  console.log(section);
  section.scrollIntoView({ behavior: "smooth" });
}



