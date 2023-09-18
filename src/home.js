import { content } from './index.js';
import Sign from './sign.svg';

function createBanner() {
    // creates the hero image for the restaurant
    const banner = document.createElement('div');
    banner.classList.add('banner');

    // creates the image and appends it
    const bannerImage = new Image();
    bannerImage.src = Sign;
    banner.append(bannerImage);

    return banner;
}

function homeComponent() {

    
    
    // creates div for holding all of the home page info
    const information = document.createElement('div');
    information.classList.add('information');
    information.append(createBanner());

    // creates the headline and appends it
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Felyne Kitchen!';
    information.append(headline);

    // creates the second section container
    const choose = document.createElement('div');
    choose.classList.add('choose');

    // creates the information to be placed into the second section container
    const chooseHeader = document.createElement('h2');
    chooseHeader.textContent = 'Why choose us?';
    choose.append(chooseHeader);

    const chooseInfo = document.createElement('p');
    chooseInfo.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Illo ducimus facere cumque soluta praesentium nemo earum debitis,
    ad provident maiores repellendus? Nulla esse consequatur ratione vitae, 
    iure impedit! Delectus, vero!`;
    choose.append(chooseInfo);
    information.append(choose);

    // creates the third section container holding location information
    const location = document.createElement('div');
    location.classList.add('location');

    // creates the headline for the location container and appends it
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = 'Where are we located?';
    location.append(locationTitle);

    // creates the street container that will hold the address
    const street = document.createElement('div');

    // creates the two elements that will be appended to street container
    const streetName = document.createElement('p');
    streetName.textContent = 'Downtown Main St.';
    street.append(streetName);

    const address = document.createElement('p');
    address.textContent = 'Somewhere, SC 22222';
    street.append(address);
    
    // appends street to location container
    location.append(street);

    // appends location to information container
    information.append(location);

    // creates telephone container that holds telephone number and appends it to information container
    const telephone = document.createElement('div');
    telephone.classList.add('telephone');

    const telephoneNumber = document.createElement('a');
    telephoneNumber.textContent = '1-999-999-9999';
    telephone.append(telephoneNumber);

    location.append(telephone);

    // adds a booking button to the end of the page
    const bookUs = document.createElement('button');
    bookUs.classList.add('bookUs');
    bookUs.textContent = 'Reservations';

    information.append(bookUs);

    // returns the main content div for this page
    
    return information;

}

export { homeComponent, createBanner };


