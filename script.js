/* =========================
   TYPING ANIMATION
========================= */

const roles = [
    'Computer Science Student',
    'Data Scientist',
    'ML Engineer',
    'Graphic Designer',
    'Content Writer'
];

let i = 0;
let c = 0;
let f = true;

const t = document.getElementById('typing');

function typingEffect() {

    const role = roles[i];

    if (f) {

        t.textContent = role.slice(0, c);

        c++;

        if (c > role.length) {

            f = false;

            setTimeout(typingEffect, 1200);

            return;
        }

    } else {

        t.textContent = role.slice(0, c);

        c--;

        if (c < 0) {

            c = 0;

            f = true;

            i = (i + 1) % roles.length;
        }

    }

    setTimeout(typingEffect, f ? 100 : 60);
}

typingEffect();



/* =========================
   CERTIFICATIONS
========================= */

const certs = [
    {
        title: 'IBM AI',
        desc: 'Add certificate image later'
    },

    {
        title: 'Python',
        desc: 'Add certificate image later'
    },

    {
        title: 'SQL',
        desc: 'Add certificate image later'
    }
];


const grid = document.getElementById('certGrid');


certs.forEach(cert => {

    const card = document.createElement('div');

    card.className = 'card';

    card.innerHTML = `
        <h3>${cert.title}</h3>
        <p>${cert.desc}</p>
    `;

    grid.appendChild(card);

});



/* =========================
   INTERNSHIP IMAGE POPUP
========================= */

function openImage(image) {

    const modal = document.getElementById('imageModal');

    const enlargedImage =
        document.getElementById('enlargedImage');

    enlargedImage.src = image.src;

    modal.style.display = 'flex';
}


function closeImage() {

    const modal = document.getElementById('imageModal');

    modal.style.display = 'none';
}
