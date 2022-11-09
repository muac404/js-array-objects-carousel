"use strict"

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const items = document.querySelector(".items");

for (let i = 0; i < images.length; i++) {
    const element = images[i];
    const item = `
    <div class="item">
        <img src="${element.image}" alt="">
        <div class="img-text">
        <h2 class="title">${element.title}</h2>
        <p class="caption">${element.text}</p>
    </div>
    `;
    items.innerHTML += item
    console.log(element.image)

}

document.querySelector(".item").classList.add("active")


const prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", function(){
    const itemActive = document.querySelector(".item.active")
    const nextItem = itemActive.nextElementSibling
    itemActive.classList.remove("active")
    if ( nextItem !== null) {
        nextItem.classList.add("active")
    } else {
        document.querySelector(".item").classList.add("active")
    }
    
})
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", function(){
    const itemActive = document.querySelector(".item.active")
    const nextItem = itemActive.nextElementSibling
    itemActive.classList.remove("active")
    if ( nextItem !== null) {
        nextItem.classList.add("active")
    } else {
        document.querySelector(".item").classList.add("active")
    }
    
})
