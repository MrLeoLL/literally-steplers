@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&display=swap');


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    background: #050505;
    color: #fff;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}


body::after {
    content: "";

    position: fixed;
    inset: 0;

    pointer-events: none;

    z-index: 9999;

    opacity: .035;

    background-image:
        repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            white 4px
        );
}


/* LOADER */

#loader {
    position: fixed;
    inset: 0;

    z-index: 10000;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    background: #050505;

    transition: opacity .6s;
}


.loader-logo {
    font-family: 'Anton', sans-serif;

    font-size: 110px;

    color: #e60000;

    animation: glitch .8s infinite;
}


.loader-text {
    font-size: 9px;

    letter-spacing: 5px;

    color: #777;
}


/* NAVBAR */

.navbar {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    height: 85px;

    padding: 0 6%;

    display: flex;

    justify-content: space-between;
    align-items: center;

    z-index: 5000;

    background: rgba(5,5,5,.85);

    backdrop-filter: blur(15px);

    border-bottom: 1px solid #222;
}


.logo {
    font-family: 'Anton', sans-serif;

    font-size: 22px;

    line-height: .75;

    color: white;

    text-decoration: none;
}


.logo span {
    display: block;

    color: #e60000;
}


nav {
    display: flex;

    gap: 35px;
}


nav a {
    color: #fff;

    text-decoration: none;

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 3px;

    transition: .3s;
}


nav a:hover {
    color: #e60000;
}


.menu-button {
    display: none;

    border: 0;

    background: transparent;

    color: white;

    font-size: 25px;
}


/* HERO */

.hero {
    height: 100vh;

    min-height: 650px;

    position: relative;

    display: flex;

    align-items: center;

    padding: 0 8%;

    overflow: hidden;
}


.hero-background {
    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            #050505 10%,
            rgba(5,5,5,.8) 45%,
            rgba(5,5,5,.2)
        ),
        url("images/albums/1 Debut Album.png");

    background-size: cover;

    background-position: center;

    filter: grayscale(40%);

    transform: scale(1.05);
}


.hero-content {
    position: relative;

    z-index: 2;

    max-width: 1000px;
}


.eyebrow,
.red-label {
    color: #e60000;

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 4px;
}


.hero h1 {
    font-family: 'Anton', sans-serif;

    font-size: clamp(75px, 13vw, 190px);

    line-height: .75;

    letter-spacing: -5px;

    margin: 25px 0;
}


.hero h1 span {
    display: block;

    color: #e60000;
}


.hero-subtitle {
    letter-spacing: 8px;

    font-size: 13px;

    font-weight: 800;

    margin-bottom: 35px;
}


.hero-buttons {
    display: flex;

    gap: 15px;
}


.button {
    display: inline-block;

    padding: 16px 25px;

    background: #e60000;

    border: 1px solid #e60000;

    color: white;

    text-decoration: none;

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 2px;

    cursor: pointer;

    transition: .3s;
}


.button:hover {
    background: white;

    border-color: white;

    color: black;

    transform: translateY(-3px);
}


.button.outline {
    background: transparent;

    border-color: white;
}


.scroll-indicator {
    position: absolute;

    bottom: 30px;

    left: 50%;

    transform: translateX(-50%);

    color: #777;

    font-size: 8px;

    letter-spacing: 5px;
}


/* GENERAL */

.section {
    padding: 130px 8%;
}


.section-heading {
    margin-bottom: 60px;
}


.section-heading h2,
.split-content h2,
.lore h2 {
    font-family: 'Anton', sans-serif;

    font-size: clamp(65px, 9vw, 130px);

    line-height: .8;

    letter-spacing: -3px;

    margin: 20px 0;
}


.section-heading > p:last-child {
    color: #777;

    max-width: 500px;

    font-size: 13px;

    line-height: 1.7;
}


/* ALBUMS */

.albums-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 35px 22px;
}


.album-card {
    cursor: pointer;
}


.album-cover {
    position: relative;

    aspect-ratio: 1;

    overflow: hidden;

    background: #111;

    border: 1px solid #222;
}


.album-cover img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: .5s;
}


.album-card:hover img {
    transform: scale(1.06);
}


.album-number {
    position: absolute;

    top: 12px;
    left: 12px;

    z-index: 2;

    font-size: 9px;

    letter-spacing: 2px;

    color: white;

    background: rgba(0,0,0,.7);

    padding: 6px 8px;
}


.album-hover {
    position: absolute;

    inset: 0;

    display: flex;

    justify-content: center;
    align-items: center;

    background: rgba(0,0,0,.65);

    opacity: 0;

    transition: .3s;
}


.album-card:hover .album-hover {
    opacity: 1;
}


.album-play {
    width: 65px;
    height: 65px;

    border-radius: 50%;

    background: #e60000;

    border: 2px solid white;

    color: white;

    font-size: 18px;
}


.album-name {
    font-family: 'Anton', sans-serif;

    font-size: 28px;

    line-height: .9;

    margin-top: 17px;
}


.album-meta {
    color: #666;

    font-size: 9px;

    letter-spacing: 2px;

    margin-top: 8px;
}


/* SPLIT */

.split-section {
    min-height: 700px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    background: #0d0d0d;
}


.split-image {
    min-height: 700px;
}


.split-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}


.split-content {
    padding: 10%;

    display: flex;

    flex-direction: column;

    justify-content: center;
}


.split-content > p:not(.red-label) {
    color: #888;

    line-height: 1.8;

    max-width: 550px;

    margin-bottom: 20px;
}


/* LORE */

.lore {
    min-height: 700px;

    padding: 10%;

    display: flex;

    align-items: center;

    background:
        linear-gradient(
            rgba(0,0,0,.8),
            rgba(0,0,0,.8)
        ),
        url("images/albums/19 Laminhapal.png");

    background-size: cover;

    background-position: center;
}


.lore-content {
    max-width: 850px;
}


.lore-content > p:not(.red-label) {
    color: #999;

    max-width: 650px;

    line-height: 1.8;

    margin: 20px 0;
}


/* GALLERY */

.gallery {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 8px;
}


.gallery-placeholder {
    aspect-ratio: 1;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #111;

    border: 1px dashed #333;

    color: #444;

    font-size: 9px;

    letter-spacing: 2px;

    text-align: center;
}


/* FOOTER */

footer {
    padding: 90px 8% 40px;

    text-align: center;

    border-top: 1px solid #222;
}


.footer-logo {
    font-family: 'Anton', sans-serif;

    font-size: 60px;

    line-height: .75;
}


.footer-logo span {
    color: #e60000;
}


footer > p {
    color: #666;

    font-size: 9px;

    letter-spacing: 4px;

    margin: 30px 0;
}


.socials {
    display: flex;

    justify-content: center;

    gap: 30px;

    margin: 35px 0;
}


.socials a {
    color: white;

    text-decoration: none;

    font-size: 9px;

    letter-spacing: 2px;

    font-weight: 900;
}


.socials a:hover {
    color: #e60000;
}


footer small {
    color: #444;

    font-size: 8px;
}


/* MODAL */

.modal {
    position: fixed;

    inset: 0;

    z-index: 8000;

    background: rgba(0,0,0,.88);

    backdrop-filter: blur(15px);

    display: none;

    align-items: center;
    justify-content: center;

    padding: 30px;
}


.modal.active {
    display: flex;
}


.modal-box {
    width: min(1000px, 100%);

    max-height: 90vh;

    overflow-y: auto;

    background: #0d0d0d;

    border: 1px solid #333;

    padding: 40px;
}


.close {
    float: right;

    border: 0;

    background: transparent;

    color: white;

    font-size: 35px;

    cursor: pointer;
}


.modal-album {
    display: grid;

    grid-template-columns: 45% 55%;

    gap: 50px;

    padding: 20px;
}


.modal-album > img {
    width: 100%;

    aspect-ratio: 1;

    object-fit: cover;
}


.modal-info h2 {
    font-family: 'Anton', sans-serif;

    font-size: 80px;

    line-height: .8;

    margin: 15px 0 35px;
}


.track {
    display: flex;

    align-items: center;

    gap: 15px;

    padding: 13px 0;

    border-bottom: 1px solid #222;

    cursor: pointer;

    transition: .2s;
}


.track:hover {
    color: #e60000;
}


.track-number {
    color: #555;

    width: 25px;

    font-size: 10px;
}


.track-title {
    flex: 1;

    font-size: 12px;

    font-weight: 700;
}


.no-music {
    color: #555;

    font-size: 12px;

    padding: 30px 0;
}


/* PLAYER */

.player {
    position: fixed;

    left: 20px;
    right: 20px;

    bottom: 20px;

    z-index: 7000;

    display: grid;

    grid-template-columns: 1fr auto 1fr auto;

    align-items: center;

    gap: 25px;

    padding: 12px 18px;

    background: rgba(15,15,15,.96);

    border: 1px solid #333;

    box-shadow: 0 15px 50px rgba(0,0,0,.7);
}


.player.hidden {
    display: none;
}


.player-info {
    display: flex;

    align-items: center;

    gap: 12px;
}


.player-info img {
    width: 48px;
    height: 48px;

    object-fit: cover;
}


.player-info small {
    display: block;

    color: #e60000;

    font-size: 7px;

    letter-spacing: 2px;
}


.player-info strong {
    display: block;

    font-size: 11px;

    margin-top: 5px;
}


.player-controls {
    display: flex;

    align-items: center;

    gap: 12px;
}


.player-controls button {
    width: 34px;
    height: 34px;

    border-radius: 50%;

    border: 1px solid #555;

    background: transparent;

    color: white;

    cursor: pointer;
}


#playPause {
    background: #e60000;

    border-color: #e60000;
}


.player-progress {
    display: flex;

    align-items: center;

    gap: 10px;

    font-size: 8px;

    color: #777;
}


#progress {
    width: 100%;
}


.player-close {
    background: none;

    border: 0;

    color: #666;

    font-size: 20px;

    cursor: pointer;
}


/* ANIMATION */

@keyframes glitch {

    0% {
        transform: translate(0);
    }

    20% {
        transform: translate(-4px, 2px);
    }

    40% {
        transform: translate(4px, -2px);
    }

    60% {
        transform: translate(-2px, 1px);
    }

    80% {
        transform: translate(2px, -1px);
    }

    100% {
        transform: translate(0);
    }

}


/* MOBILE */

@media(max-width: 900px) {

    .menu-button {
        display: block;
    }


    nav {
        position: absolute;

        top: 85px;
        left: 0;

        width: 100%;

        display: none;

        flex-direction: column;

        gap: 0;

        background: #080808;
    }


    nav.active {
        display: flex;
    }


    nav a {
        padding: 20px 30px;

        border-bottom: 1px solid #222;
    }


    .albums-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }


    .split-section {
        grid-template-columns: 1fr;
    }


    .split-image {
        min-height: 500px;
    }


    .gallery {
        grid-template-columns:
            repeat(2, 1fr);
    }


    .player {
        grid-template-columns: 1fr auto auto;
    }


    .player-progress {
        grid-column: 1 / -1;
    }

}


@media(max-width: 600px) {

    .hero {
        padding: 0 7%;
    }


    .hero h1 {
        font-size: 65px;

        letter-spacing: -3px;
    }


    .hero-buttons {
        flex-direction: column;

        align-items: flex-start;
    }


    .section {
        padding: 90px 7%;
    }


    .albums-grid {
        grid-template-columns: 1fr;
    }


    .gallery {
        grid-template-columns: 1fr;
    }


    .modal-box {
        padding: 20px;
    }


    .modal-album {
        grid-template-columns: 1fr;

        gap: 30px;
    }


    .modal-info h2 {
        font-size: 55px;
    }


    .player {
        left: 8px;
        right: 8px;
        bottom: 8px;

        grid-template-columns: 1fr auto;
    }


    .player-controls {
        grid-column: 2;
        grid-row: 1;
    }


    .player-progress {
        grid-column: 1 / -1;
        grid-row: 2;
    }

}
