function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  console.log(section);
  section.scrollIntoView({ behavior: "smooth" });
}

function createTroupeCard(){
  fetch("http://lesmedievalesdumalzieu.org:8080/api/programme/troupe/get")
  .then(troupes => {
      troupes.json()
      .then(getTroupes => {
        console.log(getTroupes);
        
          const allCards = document.querySelector('.all-cards')
          for( let i = 0; i < getTroupes.length; i++){
            const card  = document.createElement('li')
            card.classList.add('troupe-card')
            const image = document.createElement('img')
            image.src = getTroupes[i].picture
            image.setAttribute('crossorigin', 'anonymous')
            image.setAttribute('loading', 'lazy')
            const name = document.createElement('h3')
            name.innerHTML = getTroupes[i].companieName
            const description = document.createElement('p')
            description.innerHTML = getTroupes[i].description
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(description);
            allCards.appendChild(card);
          }
      })
  })

  }
  createTroupeCard();
  
  function createCampementCard(){
    const allCampementCard = document.querySelector('.all-campements');
    fetch("http://lesmedievalesdumalzieu.org:8080/api/programme/campement/get")
    .then(campement => {
        campement.json()
        .then(getCampement => {
          console.log(getCampement);
            for( let i = 0; i < getCampement.length; i++){
              const card  = document.createElement('li')
              card.classList.add('campement-card')
              const image = document.createElement('img')
              image.src = getCampement[i].picture
              image.setAttribute('crossorigin', 'anonymous')
              image.setAttribute('loading', 'lazy')
              const name = document.createElement('h3')
              name.innerHTML = getCampement[i].companieName
              const description = document.createElement('p')
              description.innerHTML = getCampement[i].description
              card.appendChild(image);
              card.appendChild(name);
              card.appendChild(description);
              allCampementCard.appendChild(card);
            }
        })
    })
  
  }
  createCampementCard()
  
  function createArtisantsCard(){
    const allArtisantsCard = document.querySelector('.all-artisants');
    fetch("http://lesmedievalesdumalzieu.org:8080/api/programme/artisans/get")
    .then(artisan => {
        artisan.json()
        .then(getArtisan => {
          console.log(getArtisan);
            for( let i = 0; i < getArtisan.length; i++){
              const card  = document.createElement('li')
              card.classList.add('artisan-card')
              const image = document.createElement('img')
              image.src = getArtisan[i].picture
              image.setAttribute('crossorigin', 'anonymous')
              image.setAttribute('loading', 'lazy')
              const name = document.createElement('h3')
              name.innerHTML = getArtisan[i].companieName
              const description = document.createElement('p')
              description.innerHTML = getArtisan[i].description
              card.appendChild(image);
              card.appendChild(name);
              card.appendChild(description);
              allArtisantsCard.appendChild(card);
            }
        })
    })
  }
  createArtisantsCard()
  
  function createAnimationsCard(){
    const allAnimationCard = document.querySelector('.all-animations');
    fetch("http://lesmedievalesdumalzieu.org:8080/api/programme/animation/get")
    .then(animation => {
        animation.json()
        .then(gatAnimation => {
          console.log(gatAnimation);
            for( let i = 0; i < gatAnimation.length; i++){
              const card  = document.createElement('li')
              card.classList.add('animation-card')
              const image = document.createElement('img')
              image.src = gatAnimation[i].picture
              image.setAttribute('crossorigin', 'anonymous')
              image.setAttribute('loading', 'lazy')
              const name = document.createElement('h3')
              name.innerHTML = gatAnimation[i].companieName
              const description = document.createElement('p')
              description.innerHTML = gatAnimation[i].description
              card.appendChild(image);
              card.appendChild(name);
              card.appendChild(description);
              allAnimationCard.appendChild(card);
            }
        })
    })
  }
  createAnimationsCard()

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