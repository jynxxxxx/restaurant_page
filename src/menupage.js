export function MenuPage() {
    let container = document.querySelector('#content');

    let menu=document.createElement('div');
    menu.classList.add('menu');
    container.appendChild(menu);

//Acai Bowl
    let acai = document.createElement('div');
    acai.classList.add('menucard');
    menu.appendChild(acai);
    
    let acaiPhoto = document.createElement('img');
    acaiPhoto.classList.add('menuPhoto');
    acaiPhoto.src = "./images/acai.jpg"
    acaiPhoto.alt = "an Acai Bowl";
    
    let acaiName = document.createElement('div');
    acaiName.classList.add('menuItem');
    acaiName.textContent = 'Acai Bowl';

    let acaiText = document.createElement('div');
    acaiText.classList.add('menudescript');
    acaiText.textContent = 'A super thick acai bowl topped with seasonal fruits and your choice of 2 additional toppings (Granola, Bee Pollen, Goji Berries, Honey, Chia Seeds, Hemp Hearts, Nut Mix, Coconut Flakes, Peanut Butter)';
    
    acai.appendChild(acaiPhoto);
    acai.appendChild(acaiName);
    acai.appendChild(acaiText);

//Street Tacos
    let taco = document.createElement('div');
    taco.classList.add('menucard');
    menu.appendChild(taco);

    let tacoPhoto = document.createElement('img');
    tacoPhoto.classList.add('menuPhoto');
    tacoPhoto.src = "./images/taco.png";
    tacoPhoto.alt = "paper plate with street tacos";

    let tacoName = document.createElement('div');
    tacoName.classList.add('menuItem');
    tacoName.textContent = 'LA Street Tacos';

    let tacoText = document.createElement('div');
    tacoText.classList.add('menudescript');
    tacoText.textContent = '3 Homemade Corn tortillas topped with your choice of meat (Carne Asada, Al Pastor, Lengua, Cabeza, Chorizo, Tripas), cilantro, diced onions, and your choice of green or red sauce'

    taco.appendChild(tacoPhoto);
    taco.appendChild(tacoName);
    taco.appendChild(tacoText);

//Proper Avocado Toast
    let avocado = document.createElement('div');
    avocado.classList.add('menucard');
    menu.appendChild(avocado);

    let avocadoPhoto = document.createElement('img');
    avocadoPhoto.classList.add('menuPhoto');
    avocadoPhoto.src = "./images/avocadotoast.png";
    avocadoPhoto.alt = "Avocado Toast";

    let avocadoName = document.createElement('div');
    avocadoName.classList.add('menuItem');
    avocadoName.textContent = 'Proper Avocado Toast';

    let avocadoText = document.createElement('div');
    avocadoText.classList.add('menudescript');
    avocadoText.textContent = 'Creamy fatty avocado on top of grilled sourdough bread topped with a poached egg, sliced radish, micro-greens, and drizzled with basil EVOO'

    avocado.appendChild(avocadoPhoto);
    avocado.appendChild(avocadoName);
    avocado.appendChild(avocadoText);

//Fluffy Pita Bread and Hummus
    let pita = document.createElement('div');
    pita.classList.add('menucard');
    menu.appendChild(pita);

    let pitaPhoto = document.createElement('img');
    pitaPhoto.classList.add('menuPhoto');
    pitaPhoto.src = "./images/hummus.jpg";
    pitaPhoto.alt = "Pita Bread and Hummus";

    let pitaName = document.createElement('div');
    pitaName.classList.add('menuItem');
    pitaName.textContent = 'Fluffy Pita Bread and Hummus';

    let pitaText = document.createElement('div');
    pitaText.classList.add('menudescript');
    pitaText.textContent = 'Thick creamy Hummus topped with EVOO and paprika served with warm FLUFFY pita bread'

    pita.appendChild(pitaPhoto);
    pita.appendChild(pitaName);
    pita.appendChild(pitaText);

//Roasted Brussel Sprouts
    let sprouts = document.createElement('div');
    sprouts.classList.add('menucard');
    menu.appendChild(sprouts);

    let sproutsPhoto = document.createElement('img');
    sproutsPhoto.classList.add('menuPhoto');
    sproutsPhoto.src = "./images/sprouts.jpeg";
    sproutsPhoto.alt = "Roasted Brussel Sprouts";

    let sproutsName = document.createElement('div');
    sproutsName.classList.add('menuItem');
    sproutsName.textContent = 'Roasted Brussel Sprouts';

    let sproutsText = document.createElement('div');
    sproutsText.classList.add('menudescript');
    sproutsText.textContent = 'Roasted caramelized Brussel sprouts and pancetta'

    sprouts.appendChild(sproutsPhoto);
    sprouts.appendChild(sproutsName);
    sprouts.appendChild(sproutsText);
}