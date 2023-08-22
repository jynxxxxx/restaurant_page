export function ContactPage() {
    let container = document.querySelector('#content');

    let contacts =document.createElement('div');
    contacts.classList.add('contactdiv');
    container.appendChild(contacts);

//Main Contact
    let regContact = document.createElement('div');
    regContact.classList.add('contact');
    contacts.appendChild(regContact);
    
    let regPhoto = document.createElement('img');
    regPhoto.src = "../images/regular.png";
    regPhoto.alt = "selfie of a girl";
    
    let regContactName = document.createElement('div');
    regContactName.classList.add('contactName');
    regContactName.textContent = 'Regular Julia';

    let regContactInfo = document.createElement('div');
    regContactInfo.classList.add('contactInfo');
    let regNumber = document.createElement('p');
    regNumber.classList.add('info');
    regNumber.textContent = 'Number: 123-456-7890';
    let regEmail = document.createElement('p');
    regEmail.classList.add('info');
    regEmail.textContent = 'Email: customerisRarelyRight@waitressed.com';
    
    regContact.appendChild(regPhoto);
    regContact.appendChild(regContactName);
    regContact.appendChild(regContactInfo);
    regContactInfo.appendChild(regNumber);
    regContactInfo.appendChild(regEmail);


//Foodie Contact
    let foodieContact = document.createElement('div');
    foodieContact.classList.add('contact');
    contacts.appendChild(foodieContact);

    let foodiePhoto = document.createElement('img');
    foodiePhoto.src = "../images/foodie.png";
    foodiePhoto.alt = "girl biting into a bagel and smiling";

    let foodieContactName = document.createElement('div');
    foodieContactName.classList.add('contactName');
    foodieContactName.textContent = 'Foodie Julia';

    let foodieContactInfo = document.createElement('div');
    foodieContactInfo.classList.add('contactInfo');
    let foodieNumber = document.createElement('p');
    foodieNumber.classList.add('info');
    foodieNumber.textContent = 'Number: 234-567-8901';
    let foodieEmail = document.createElement('p');
    foodieEmail.classList.add('info');
    foodieEmail.textContent = 'Email: iexercisetoeat@lovefood.com';
   

    foodieContact.appendChild(foodiePhoto);
    foodieContact.appendChild(foodieContactName);
    foodieContact.appendChild(foodieContactInfo); 
    foodieContactInfo.appendChild(foodieNumber);
    foodieContactInfo.appendChild(foodieEmail);

//Climber Contact
    let climberContact = document.createElement('div');
    climberContact.classList.add('contact');
    contacts.appendChild(climberContact);

    let climberPhoto = document.createElement('img');
    climberPhoto.src = "../images/climber.png";
    climberPhoto.alt = "girl hanging from a wall and smiling";

    let climberContactName = document.createElement('div');
    climberContactName.classList.add('contactName');
    climberContactName.textContent = 'Climber Julia';

    let climberContactInfo = document.createElement('div');
    climberContactInfo.classList.add('contactInfo');
    let climberNumber = document.createElement('p');
    climberNumber.classList.add('info');
    climberNumber.textContent = 'Number: 345-678-9012';
    let climberEmail = document.createElement('p');
    climberEmail.classList.add('info');
    climberEmail.textContent = 'Email: scarredLegsandElbows@loveclimbing.com';

    climberContact.appendChild(climberPhoto);
    climberContact.appendChild(climberContactName);
    climberContact.appendChild(climberContactInfo);
    climberContactInfo.appendChild(climberNumber);
    climberContactInfo.appendChild(climberEmail);

//Surfer Contact
    let surferContact = document.createElement('div');
    surferContact.classList.add('contact');
    contacts.appendChild(surferContact);

    let surferPhoto = document.createElement('img');
    surferPhoto.src = "../images/surfer.png";
    surferPhoto.alt = "girl with a surfboard smiling and doing shaka";

    let surferContactName = document.createElement('div');
    surferContactName.classList.add('contactName');
    surferContactName.textContent = 'Surfer Julia';

    let surferContactInfo = document.createElement('div');
    surferContactInfo.classList.add('contactInfo');
    let surferNumber = document.createElement('p');
    surferNumber.classList.add('info');
    surferNumber.textContent = 'Number: 345-678-9012';
    let surferEmail = document.createElement('p');
    surferEmail.classList.add('info');
    surferEmail.textContent = 'Email: onlySurfedthreetimesinmylife@poserSurfer.com';
    
    surferContact.appendChild(surferPhoto);
    surferContact.appendChild(surferContactName);
    surferContact.appendChild(surferContactInfo);
    surferContactInfo.appendChild(surferNumber);
    surferContactInfo.appendChild(surferEmail);

};