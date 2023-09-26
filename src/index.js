const content = document.querySelector('.content');

import './style.css';
import Logo from './logo.svg';
export { content };
import { homeComponent, createBanner } from './home.js';
import { menuComponent } from './menu.js';
import { aboutComponent } from './about.js';

function createNav() {
    // Creates the navbar that will be shared across pages
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    // creates the logo box to be added to the navbar
    const logo = document.createElement('logo');
    logo.classList.add('logo');

    // creates the image to be added to the logo container
    const logoImage = new Image();
    logoImage.src = Logo;

    // adds the logo to the container
    logo.append(logoImage);

    // adds the logo container to the navbar
    nav.append(logo);

    // creates the linkbar that will be placed next to the logo
    const linkbar = document.createElement('div');
    linkbar.classList.add('linkbar');

    // creates the links that will be added to the linkbar
    const home = document.createElement('a');
    home.id = 'home';
    home.textContent = 'Home';

    const menu = document.createElement('a');
    menu.id = 'menu';
    menu.textContent = 'Menu';

    const about = document.createElement('a');
    about.id = 'about';
    about.textContent = 'About';

    // adds the links to the linkbar container
    linkbar.append(home);
    linkbar.append(menu);
    linkbar.append(about);

    // adds the linkbar to the navbar
    nav.append(linkbar);

    return nav;
}

// Initial page load

content.append(createNav());
content.append(homeComponent());

// Event listener for the home page
document.addEventListener('click', function(event) {
    let tarElement = event.target;
    if (tarElement.tagName == 'A' && tarElement.id == 'home') {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        content.append(createNav());
        content.append(homeComponent());
    }
})

// Event listener for the menu page
document.addEventListener('click', function(event) {
    let tarElement = event.target;
    if (tarElement.tagName == 'A' && tarElement.id == 'menu') {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        content.append(createNav());
        content.append(menuComponent());
    }
})

// Event listener for about page
document.addEventListener('click', function(event) {
    let tarElement = event.target;
    if (tarElement.tagName == 'A' && tarElement.id == 'about') {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        content.append(createNav());
        content.append(aboutComponent());
    }
})









