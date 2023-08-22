export function InitialPageLoad() {
    let container = document.querySelector('#content');

    let main=document.createElement('div');
    main.classList.add('main');
    container.appendChild(main);

    let description = document.createElement('div');
    description.classList.add('description');
    
    let mainText = document.createElement('p'); 
    mainText.classList.add('text');
    mainText.textContent = "The theme of this restaurant is all the food from LA that I miss that Korea doesn't do well. It is true to the LA flavors that I know and love. I promise you won't be disappointed";
    description.appendChild(mainText); // Append p to description
    
    let quoted = document.createElement('p');
    quoted.classList.add('quoted');
    quoted.textContent = '- Julia';
    description.appendChild(quoted); 


    let locations = document.createElement('div');
    locations.classList.add('location');

    let locatitle = document.createElement('div');
    locatitle.classList.add('locatitle');
    locatitle.textContent = 'Locations';
    locations.appendChild(locatitle);

    let locaone = document.createElement('div');
    locaone.classList.add('loca');
    locaone.textContent = 'Irvine, California';
    locations.appendChild(locaone);

    let locatwo = document.createElement('div');
    locatwo.classList.add('loca');
    locatwo.textContent = 'Los Angeles, California';
    locations.appendChild(locatwo);

    let locathree = document.createElement('div');
    locathree.classList.add('loca');
    locathree.textContent = 'Seoul, South Korea';
    locations.appendChild(locathree);
    
    
    main.appendChild(description);
    main.appendChild(locations);
}