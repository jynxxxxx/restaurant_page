import {InitialPageLoad} from './pageLoad';
import {ContactPage} from './contactpage';
import {MenuPage} from './menupage';

document.addEventListener('DOMContentLoaded', () => {
    InitialPageLoad();
});

const container = document.querySelector('#content');
const homePage = document.querySelector('#home');
const contactPage = document.querySelector('#contact');
const menuPage = document.querySelector('#menu');

homePage.addEventListener('click', ()=>{
    container.innerHTML = ""
    InitialPageLoad();
});

contactPage.addEventListener('click', ()=>{
    container.innerHTML = ""
    ContactPage();
});

menuPage.addEventListener('click', ()=>{
    container.innerHTML = ""
    MenuPage();
});
