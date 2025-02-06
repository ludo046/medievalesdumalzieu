const parrains = [];
const partenaires = [];
const sponsors = [];
const amis = [];

const parrainCards = document.querySelector('.card_bloc_parrainage')
const partenaireCards = document.querySelector('.card_bloc_partenaire')
const sponsorsCards = document.querySelector('.card_bloc_sponsort')
const amiCards = document.querySelector('.card_bloc_amis')

function getAllPartenaire(){
    fetch("http://backoffice.lesmedievalesdumalzieu.org:8080/api/partenaire/get/")
    .then(partenaire => {
        partenaire.json()
        .then(getPartenaire => {
            partenaireSort(getPartenaire)
        })
    })
}
getAllPartenaire()

function partenaireSort(a){
    a.sort(function compare(a, b) {
        if (a.montant > b.montant)
           return -1;
        if (a.montant < b.montant )
           return 1;
        return 0;
      });
    for(let i = 0; i < a.length; i++){
        if(a[i].activate === true){
            if(a[i].formule === 'Parrainage'){
                parrains.push(a[i])
            }
            if(a[i].formule === "Partenaire"){
                partenaires.push(a[i])
            }
            if(a[i].formule === "Verte"){
                partenaires.push(a[i])
            }
            if(a[i].formule === 'Sponsors'){
                sponsors.push(a[i])
            }
            if(a[i].formule === 'Ami'){
                amis.push(a[i])
            }
        }
    }

    createCard(parrains)
    createCard(partenaires)
    createCard(sponsors)
    createCard(amis)
}

function createCard(a){
    for(let i=0; i < a.length; i++){
        if(a[i].formule === 'Parrainage'){
            const parrainCard = document.createElement('div')
            parrainCard.classList.add('card_parrainage')
            const parrainLink = document.createElement('a')
            parrainLink.setAttribute('href', a[i].site)
            const parrainImg = document.createElement('img')
            parrainImg.src = a[i].picture
            parrainImg.setAttribute('crossOrigin', 'anonymous')
            
            parrainLink.appendChild(parrainImg)
            parrainCard.appendChild(parrainLink)
            parrainCards.appendChild(parrainCard)
        }

        if(a[i].formule === 'Partenaire'){
            const partenaireCard = document.createElement('div')
            partenaireCard.classList.add('card_partenaire')
            const partenaireLink = document.createElement('a')
            partenaireLink.setAttribute('href', a[i].site)
            const partenaireImg = document.createElement('img')
            partenaireImg.src = a[i].picture
            partenaireImg.setAttribute('crossOrigin', 'anonymous')
            
            partenaireLink.appendChild(partenaireImg)
            partenaireCard.appendChild(partenaireLink)
            partenaireCards.appendChild(partenaireCard)
        }

        if(a[i].formule === 'Verte'){
            const partenaireCard = document.createElement('div')
            partenaireCard.classList.add('card_partenaire')
            const partenaireLink = document.createElement('a')
            partenaireLink.setAttribute('href', a[i].site)
            const partenaireImg = document.createElement('img')
            partenaireImg.src = a[i].picture
            partenaireImg.setAttribute('crossOrigin', 'anonymous')
            
            partenaireLink.appendChild(partenaireImg)
            partenaireCard.appendChild(partenaireLink)
            partenaireCards.appendChild(partenaireCard)
        }

        if(a[i].formule === 'Sponsors'){
            const sponsorsCard = document.createElement('div')
            sponsorsCard.classList.add('card_sponsort')
            const sponsorsLink = document.createElement('a')
            sponsorsLink.setAttribute('href', a[i].site)
            const sponsorsImg = document.createElement('img')
            sponsorsImg.src = a[i].picture
            sponsorsImg.setAttribute('crossOrigin', 'anonymous')
            
            sponsorsLink.appendChild(sponsorsImg)
            sponsorsCard.appendChild(sponsorsLink)
            sponsorsCards.appendChild(sponsorsCard)
        }

        if(a[i].formule === 'Ami'){
            const amiCard = document.createElement('div')
            amiCard.classList.add('card_amis')
            const amiLink = document.createElement('a')
            amiLink.setAttribute('href', a[i].site)
            const amiName = document.createElement('h2')
            amiName.innerHTML = a[i].partenaireName
            const amiPhone = document.createElement('p')
            amiPhone.innerHTML = a[i].phone
            const amiAdress = document.createElement('p')
            amiAdress.innerHTML = a[i].adresse
            console.log(a[i].partenaireName);
            

            amiLink.appendChild(amiName)
            amiLink.appendChild(amiPhone)
            amiLink.appendChild(amiAdress)
            amiCard.appendChild(amiLink)
            amiCards.appendChild(amiCard)
        }
    }
}
console.log(partenaires);
console.log(amis);



const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar')

window.onload = () => {
    if(window.innerWidth < 740){
        menu.style.height = 0;
        menu.style.opacity = 0;
    } else {
      menu.style.height = "300px";
      navbar.style.boxShadow = "none";
      menu.style.opacity = 1;
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
