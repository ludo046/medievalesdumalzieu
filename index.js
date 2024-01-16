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

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  document.querySelector("#banner").style.backgroundPositionY =
    offset * 0.2 + "px";
  document.querySelector("#partenatiat").style.backgroundPositionY =
    (offset - 900) * 0.2 + "px";
});

function createTroupeCard(){
  const allCards = document.querySelector('.all-cards')
  const troupes = [
    {name : 'drakonia', img : 'images/au-programme/drakonia.jpeg', description : 'Déja venu au Malzieu, Drakonia revient cette année avec un tout nouveau spectacle à couper le souffle et assurera le spectacle des vendredi et samedi soirs. Billeterie ouverte a partir du 15 mars 2024'},
    {name : 'claymor clan', img : 'images/au-programme/claymor-clan.webp', description : 'Vient pour la première fois au Malzieu, et viendra animer nos rues avec leur musique écossaise celtique.'},
    {name : 'jehan serien', img : 'images/au-programme/jehan-serien.jpeg', description : `Venu l'année dernière, mais n'ayant pas pu nous raconter toutes ses petites anecdotes il revient cette année pour finir de nous les conter, mais ... il ne sera pas seul !`},
    {name : `théatre de l'alauda`, img : 'images/au-programme/alauda.jpeg', description : `Une première au Malzieu, avec leur spectacle "et vorago". Et non vous ne rêvez pas vous croiserez bien une saucisse géante au coin d'une rue cette année.`},
    {name : `kervan`, img : 'images/au-programme/kervan.webp', description : `Venus il y a quelques année une seule journée vous ne vous souvenez peut-être pas d'eux et de leurs magnifiques déambulations nous les retrouverons cette année dans nos ruelles ainsi qu'en première partie du spectacle de feu des vendredi et samedi soirs avec un spectacle inédit !`},
    {name : `les tanneurs de drac`, img : 'images/au-programme/taneur .jpeg', description : `Les incountournables du Malzieu nous reviennent après quelques années, avec leurs musiques entrainantes.`},
    {name : `les crapiauds`, img : 'images/au-programme/crapiauds.jpeg', description : `Reviennent cette année encore, mais cette fois ci avec un tout nouveau spectacle plein de magie !
    Du rêve, de la magie, un grain de folie, un sombre sarrasin, un fantôme, un sorcier. Un moment pour vivre en famille (ou pas), l'expérience étrange et incroyable de pratiques occultes sorties tout droit du moyen âge.`},
    {name : `caminaire`, img : 'images/au-programme/caminaire.jpeg', description : `Nos amis les Caminaire reviennent une fois de plus, avec leur musique médiévale, leurs voix et des pieds pour marcher.`},
    {name : `Le choeur guillaume`, img : 'images/au-programme/choeur-guillaume.png', description : `Vous pourrez retrouver le choeur guillaume lors d'un concert dans notre église au coeur du malzieu.`},
    {name : `la chevauchee des lices`, img : 'images/au-programme/chevauché.jpeg', description : `Nouvelle au Malzieu, une animation pour enfants qui pourront faire une course de petits chevaux, en jouant les chevaliers.`},
  ]
  for( let i = 0; i < troupes.length; i++){
    const card  = document.createElement('li')
    card.classList.add('troupe-card')
    const image = document.createElement('img')
    image.src = troupes[i].img
    const name = document.createElement('h2')
    name.innerHTML = troupes[i].name
    const description = document.createElement('p')
    description.innerHTML = troupes[i].description
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    allCards.appendChild(card);
  }
}
createTroupeCard();

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  console.log(section);
  section.scrollIntoView({ behavior: "smooth" });
}