let ff = [
    {
        image: "rr.png",
        text: "New",
        module: "Atarashi Series®"
    },
    {
        image: "ss.png",
        text: "Featured",
        module: "Kensho Series®"
    },
    {
        image: "gg.png",
        text: "Handmade",
        module: "Nairo Series®"
    },
    {
        image: "dddsf.png",
        text: "Handmade",
        module: "Nairo Series®"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const nijeLegoDiv = document.querySelector('.nije_lego');

    const item = ff[3];

    const div = document.createElement('div');
    div.classList.add('item');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.text;
    img.style.width = "736px";
    img.style.height = "700px";
    img.style.objectFit = "cover";

    const text = document.createElement('p');
    text.textContent = `${item.text} - ${item.module}`;

    div.appendChild(img);
    nijeLegoDiv.appendChild(div);
});
let container = document.querySelector('.fa');
ff.forEach(item => {
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${item.image}" alt="${item.text}">
        <h3>${item.text}</h3>
        <p>${item.module}</p>
    `;

    container.appendChild(card);
});