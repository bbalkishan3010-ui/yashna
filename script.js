const yesBtn = document.getElementById("yesBtn");
const laterBtn = document.getElementById("laterBtn");
const popup = document.getElementById("popup");

yesBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

laterBtn.addEventListener("click", () => {
    alert("Take all the time you need. ❤️ Your happiness and comfort matter most to me.");
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});

/* ==========================
   Typewriter Effect
========================== */

const message = `Dear Sandhya ❤️,

From the moment you came into my life,
everything became brighter.

Your smile became my favorite reason to smile.
Your happiness became my happiness.
Every moment with you became a beautiful memory.

Thank you for being such an amazing person.

I don't know what the future holds,
but I know one thing...

I want you to be a part of it.

With all my heart,

❤️ Bal Kishan ❤️`;

let i = 0;
const typingElement = document.getElementById("typing");

function typeWriter() {

    if (typingElement && i < message.length) {

        if (message.charAt(i) === "\n") {
            typingElement.innerHTML += "<br>";
        } else {
            typingElement.innerHTML += message.charAt(i);
        }

        i++;

        setTimeout(typeWriter, 45);
    }

}

window.addEventListener("load", typeWriter);


/* ==========================
   Scroll Animation
========================== */

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();