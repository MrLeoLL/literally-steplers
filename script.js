/* =========================================
   LITERALLY STEPLERS
   MAIN JAVASCRIPT
========================================= */


// LOADING SCREEN

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 700);

});


// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// CLOSE MOBILE MENU WHEN CLICKING A LINK

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// MUSIC PLAYER

let playerPlaying = false;


function playAlbum(albumName) {

    const player = document.getElementById("musicPlayer");
    const currentSong = document.getElementById("currentSong");

    currentSong.textContent = albumName;

    player.style.display = "flex";

    playerPlaying = true;

    console.log("Playing:", albumName);

}


function togglePlayer() {

    const button =
        document.querySelector(".music-player button");

    if (playerPlaying) {

        playerPlaying = false;

        button.textContent = "▶";

    } else {

        playerPlaying = true;

        button.textContent = "Ⅱ";

    }

}


// TRACKLIST MODAL

function openTracklist() {

    document
        .getElementById("trackModal")
        .classList.add("active");

}


function closeTracklist() {

    document
        .getElementById("trackModal")
        .classList.remove("active");

}


document
    .getElementById("trackModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeTracklist();

        }

    });


// ESC TO CLOSE MODAL

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeTracklist();

    }

});


// SIMPLE SCROLL REVEAL

const revealElements =
    document.querySelectorAll(
        ".album-card, .member, .news-item, .gallery-grid img"
    );


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


// RANDOM GLITCH EFFECT

const logo =
    document.querySelector(".hero h1");


setInterval(() => {

    if (Math.random() > .75) {

        logo.style.transform =
            "translateX(" +
            (Math.random() * 8 - 4) +
            "px)";

        setTimeout(() => {

            logo.style.transform =
                "translateX(0)";

        }, 100);

    }

}, 1000);
