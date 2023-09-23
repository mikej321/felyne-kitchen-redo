import { content } from './index';
import './menu.css';

const ingredients = ['Wyvern Filet', 'Peon Turkey', 'Shogun Tuna', 'Millenary Crab', 'Wild Chicken', 'Giga Steak', 'Queen Shrimp', 'Soulful Caviar', 'Stonecorn', 'Cudgel Onion', 'Elysian Fruit', 'Heaven Berry'];
const prices = [12.99, 11.99, 9.99, 15.99, 12.99, 14.99, 12.99, 16.99, 7.99, 7.99, 9.99, 10.99]

function menuComponent() {
    // Div that holds the menu
    const menuFrame = document.createElement('div');
    menuFrame.classList.add('menuFrame');

    // Div that holds all of the contents of the menu 
    const menuBoard = document.createElement('div');
    menuBoard.classList.add('menuBoard');
    
    // appends menu to board
    menuFrame.append(menuBoard);

    // contents for the menu
    const menuTitle = document.createElement('p');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = `Our Menu`;
    
    // appends title to board
    menuBoard.append(menuTitle);

    // div that holds all of the menu items
    const menuItems = document.createElement('div');
    menuItems.classList.add('menuItems');

    // appends menuItems div to the menuBoard
    menuBoard.append(menuItems);

    // creates every item div and appends it to the menuItem div
    for (let i = 1; i < 13; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        menuItem.id = `menuItem${i}`;
        menuItems.append(menuItem);
        for (let j = 1; j < 2; j++) {
            const itemP = document.createElement('p');
            itemP.classList.add(`item${i}`);
            // adds the array element that corresponds to its place in the menu
            itemP.textContent = ingredients[i - 1];
            menuItem.append(itemP);
            const priceP = document.createElement('p');
            priceP.classList.add(`price${i}`);
            // adds the array element that corresponds to its place in the menu
            priceP.textContent = prices[i - 1];
            menuItem.append(priceP);
        }
    }

    return menuFrame;
}


export { menuComponent };