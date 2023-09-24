import './about.css';
import picture1 from './Fatalis.jpg';
import picture2 from './Hunter.jpg';
import { content } from './index';

function aboutComponent() {
    // Create the container div that holds the about page
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');

    // create the title for the page and appends it to the div
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Me & Monster Hunter';
    aboutContent.append(title);

    // creates the next 3 sections with the information and images inside of them
    const portion1 = document.createElement('div');
    portion1.classList.add('portion');
    portion1.classList.add('portion1');
    aboutContent.append(portion1);

    // image for first portion
    const img1 = document.createElement('img');
    img1.src = picture2;
    portion1.append(img1);

    // container div for the first text information segment
    const textInfo1 = document.createElement('div');
    textInfo1.classList.add('textInformation');
    portion1.append(textInfo1);

    // text information for the container div
    const textTitle1 = document.createElement('h2');
    textTitle1.textContent = 'Who am I?';
    textInfo1.append(textTitle1);

    const textDescription1 = document.createElement('p');
    textDescription1.textContent = `My name is Michael. I am a web developer who
                                    also happens to love Monster Hunter. It is a franchise that
                                    has helped me through some tough times and, im my opinion, one
                                    of the greatest franchises of all time.`;
    textInfo1.append(textDescription1);

    // container div for the second segment
    const portion2 = document.createElement('div');
    portion2.classList.add('portion');
    portion2.classList.add('portion2');
    aboutContent.append(portion2);

    // image for the second portion
    const img2 = document.createElement('img');
    img2.src = picture1;
    portion2.append(img2);

    // text information container for second segment
    const textInfo2 = document.createElement('div');
    textInfo2.classList.add('textInformation');
    portion2.append(textInfo2);

    // text information for the container div
    const whatIs = document.createElement('h2');
    whatIs.textContent = 'What is Monster Hunter?';
    textInfo2.append(whatIs);

    const textDescription2 = document.createElement('p');
    textDescription2.textContent = `A game about hunting monsters, of course!
                                    It is an action RPG where the core gameplay
                                    loop resides in hunting monster for their parts
                                    and using the parts to create weapons and armors
                                    that will help you defeat stronger monsters.`;
    textInfo2.append(textDescription2);

    // container div for the outro
    const outro = document.createElement('div');
    outro.classList.add('portion');
    outro.classList.add('outro');
    aboutContent.append(outro);

    // text information container for the outro div
    const textInfoOutro = document.createElement('div');
    textInfoOutro.classList.add('textInformation');
    outro.append(textInfoOutro);

    // text information for the outro div
    const outroTitle = document.createElement('h2');
    outroTitle.textContent = 'Felyne Kitchen?';
    textInfoOutro.append(outroTitle);

    const outroDescription = document.createElement('p');
    outroDescription.textContent = `In the world of Monster Hunter, we eat meals
                                    prepared in restaurants that are managed by cats referred
                                    to as Felynes. Felynes use ingredients from slain monsters as
                                    well as items procured from the hunters to create specialized
                                    meals.`;
    textInfoOutro.append(outroDescription);

    return aboutContent;
}

export { aboutComponent };