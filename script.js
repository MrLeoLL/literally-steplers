/* ==========================================
   LITERALLY STEPLERS
   DISCOGRAPHY DATABASE
========================================== */


const albums = [

    {
        name: "Literally Steplers",
        cover: "images/albums/1 Debut Album.png",
        tracks: []
    },

    {
        name: "Yâmers",
        cover: "images/albums/2 Yamers.png",
        tracks: [
            "En La Cadeia",
            "Tem Alguma Coisa Errada",
            "The Peak",
            "Tierlist",
            "Você Vai Pagar Caro",
            "Yâmers"
        ]
    },

    {
        name: "Stemers",
        cover: "images/albums/3 Stemers.png",
        tracks: []
    },

    {
        name: "Hell's Aura",
        cover: "images/albums/4 Hell's Aura.png",
        tracks: [
            "Captivity",
            "Hell's Aura",
            "Rodrigo",
            "The Molester Tractor",
            "Two At Once"
        ]
    },

    {
        name: "The Home",
        cover: "images/albums/5 The Home.png",
        tracks: [
            "Quirathi",
            "The Yamers Path",
            "No Cap on Steplers",
            "Daigoleite",
            "Write of the Devil",
            "The Home"
        ]
    },

    {
        name: "Diabolical Dog",
        cover: "images/albums/6 Diabolical Dog.png",
        tracks: [
            "Diabolical Dog",
            "Goonaldo",
            "Hell Rodeo",
            "The Devil's Leash",
            "The Last Bark",
            "Tio"
        ]
    },

    {
        name: "Return To The Boat",
        cover: "images/albums/7 Return To The Boat.png",
        tracks: [
            "GvsA 2.0",
            "In The Boat With The Tchola 2.0",
            "Lil Bro 2.0",
            "Literally 2.0",
            "Sahur 2.0"
        ]
    },

    {
        name: "Steplers",
        cover: "images/albums/8 Steplers.png",
        tracks: [
            "There Him",
            "Mirror Realm - mlaeR rorriM",
            "I Can Breath",
            "PPN",
            "Steplers",
            "Lyndon",
            "Welcome To The Tripplers",
            "2 Peak",
            "Deguy Attractor",
            "Ngovij"
        ]
    },

    {
        name: "Herborine",
        cover: "images/albums/9 Herborine.png",
        tracks: [
            "Eat Eat",
            "Mbabi",
            "Bite And Fall",
            "Herborine",
            "Enncia",
            "The Barrier"
        ]
    },

    {
        name: "Armless John",
        cover: "images/albums/10 Armless John.png",
        tracks: [
            "The Cup Chicken",
            "Upside Down",
            "Aiming Wrong",
            "Armless John",
            "The Door",
            "The Unborn One"
        ]
    },

    {
        name: "The Cashier",
        cover: "images/albums/11 The Cashier.png",
        tracks: [
            "Waymaker",
            "Penalman",
            "The Cashier",
            "Neilitaum",
            "Who's This Guy",
            "Countability"
        ]
    },

    {
        name: "The Guy From Picture",
        cover: "images/albums/12 The Guy From Picture.png",
        tracks: [
            "The Transition",
            "Green or Purple",
            "The Guy From Picture",
            "Not Super Man",
            "The Gun",
            "Satanical Brothers"
        ]
    },

    {
        name: "The Tchola",
        cover: "images/albums/13 Tchola.png",
        tracks: [
            "Cappucined",
            "He Need to Be Fried",
            "The Tchola",
            "Mr. Skin",
            "Unbad",
            "Tendence"
        ]
    },

    {
        name: "Mausoleum",
        cover: "images/albums/14 Mausoleum.png",
        tracks: [
            "Occultism",
            "Labirynth",
            "Mausoleum",
            "Big Blue",
            "Laiopépci",
            "The Last Contact"
        ]
    },

    {
        name: "The Page",
        cover: "images/albums/15 The Page.png",
        tracks: [
            "The Page",
            "Lildiuty",
            "The Page",
            "Whiters",
            "Emiliano",
            "Classic"
        ]
    },

    {
        name: "Real South",
        cover: "images/albums/16 Real South.png",
        tracks: [
            "Palms",
            "Dream",
            "Real South",
            "The Message",
            "The Illusion",
            "First One"
        ]
    },

    {
        name: "Canada",
        cover: "images/albums/18 Canada.png",
        tracks: [
            "Rent-A-Brun",
            "The Palit",
            "Canada",
            "My Hat",
            "The Bill",
            "The Instrumental Man"
        ]
    },

    {
        name: "Laminhapal",
        cover: "images/albums/19 Laminhapal.png",
        tracks: [
            "Derby's District",
            "Dig And Bowls",
            "Grabidiqui",
            "I Will Not Sleep Today",
            "Laminhapal",
            "pal",
            "RD"
        ]
    },

    {
        name: "One Team, One Dream",
        cover: "images/albums/20 One Team One Dream.png",
        tracks: [
            "Big Liter Challenge",
            "I See, Luke!",
            "Little Strawberry",
            "One Team, One Dream",
            "PeopleS",
            "The Drop House"
        ]
    },

    {
        name: "Subconcequente",
        cover: "images/albums/21 Subconcequente.png",
        tracks: []
    },

    {
        name: "Want Want",
        cover: "images/albums/22 Want Want.png",
        tracks: []
    }

];


/* ==========================================
   CREATE ALBUM CARDS
========================================== */


const albumsGrid =
    document.getElementById("albumsGrid");


albums.forEach((album, index) => {

    const card =
        document.createElement("article");

    card.className = "album-card";

    card.innerHTML = `

        <div class="album-cover">

            <img
                src="${album.cover}"
                alt="${album.name}">

            <div class="album-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="album-hover">

                <button class="album-play">
                    ▶
                </button>

            </div>

        </div>

        <h3 class="album-name">
            ${album.name}
        </h3>

        <p class="album-meta">
            ${album.tracks.length > 0
                ? album.tracks.length + " TRACKS"
                : "NO TRACKS YET"}
        </p>

    `;


    card.addEventListener("click", () => {

        openAlbum(index);

    });


    albumsGrid.appendChild(card);

});


/* ==========================================
   ALBUM MODAL
========================================== */


const modal =
    document.getElementById("albumModal");

const modalCover =
    document.getElementById("modalCover");

const modalTitle =
    document.getElementById("modalTitle");

const tracklist =
    document.getElementById("tracklist");


function openAlbum(index) {

    const album = albums[index];

    modalCover.src = album.cover;

    modalTitle.textContent = album.name;

    tracklist.innerHTML = "";


    if (album.tracks.length === 0) {

        tracklist.innerHTML = `
            <div class="no-music">
                NO MUSIC AVAILABLE YET.
            </div>
        `;

    } else {

        album.tracks.forEach((track, trackIndex) => {

            const trackElement =
                document.createElement("div");

            trackElement.className = "track";

            trackElement.innerHTML = `

                <span class="track-number">
                    ${String(trackIndex + 1).padStart(2, "0")}
                </span>

                <span class="track-title">
                    ${track}
                </span>

                <span>
                    ▶
                </span>

            `;


            trackElement.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();

                    playTrack(
                        index,
                        trackIndex
                    );

                }
            );


            tracklist.appendChild(trackElement);

        });

    }


    modal.classList.add("active");

}


document
    .getElementById("closeModal")
    .addEventListener("click", () => {

        modal.classList.remove("active");

    });


modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* ==========================================
   MUSIC PLAYER
========================================== */


const audio =
    document.getElementById("audio");

const player =
    document.getElementById("player");

const playerCover =
    document.getElementById("playerCover");

const playerSong =
    document.getElementById("playerSong");

const playPause =
    document.getElementById("playPause");

const previous =
    document.getElementById("previous");

const next =
    document.getElementById("next");

const progress =
    document.getElementById("progress");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");


let currentAlbum = 0;

let currentTrack = 0;


/* ==========================================
   IMPORTANT:
   MUSIC FILE PATHS
========================================== */


function getMusicPath(album, track) {

    const albumFolder =
        album.name;

    const fileName =
        track + ".mp3";

    return `music/${albumFolder}/${fileName}`;

}


/* ==========================================
   PLAY TRACK
========================================== */


function playTrack(albumIndex, trackIndex) {

    const album =
        albums[albumIndex];

    const track =
        album.tracks[trackIndex];


    if (!track) return;


    currentAlbum = albumIndex;

    currentTrack = trackIndex;


    audio.src =
        getMusicPath(album, track);


    playerCover.src =
        album.cover;

    playerSong.textContent =
        track;


    player.classList.remove("hidden");


    audio.play()
        .then(() => {

            playPause.textContent = "Ⅱ";

        })
        .catch(() => {

            playPause.textContent = "▶";

            console.log(
                "Could not play:",
                audio.src
            );

        });

}


/* ==========================================
   PLAY / PAUSE
========================================== */


playPause.addEventListener(
    "click",
    () => {

        if (audio.paused) {

            audio.play();

            playPause.textContent = "Ⅱ";

        } else {

            audio.pause();

            playPause.textContent = "▶";

        }

    }
);


/* ==========================================
   NEXT
========================================== */


next.addEventListener(
    "click",
    () => {

        const album =
            albums[currentAlbum];


        if (
            currentTrack <
            album.tracks.length - 1
        ) {

            playTrack(
                currentAlbum,
                currentTrack + 1
            );

        } else if (
            currentAlbum <
            albums.length - 1
        ) {

            let nextAlbum =
                currentAlbum + 1;


            while (
                nextAlbum < albums.length &&
                albums[nextAlbum].tracks.length === 0
            ) {

                nextAlbum++;

            }


            if (
                nextAlbum < albums.length
            ) {

                playTrack(
                    nextAlbum,
                    0
                );

            }

        }

    }
);


/* ==========================================
   PREVIOUS
========================================== */


previous.addEventListener(
    "click",
    () => {

        const album =
            albums[currentAlbum];


        if (currentTrack > 0) {

            playTrack(
                currentAlbum,
                currentTrack - 1
            );

        } else if (currentAlbum > 0) {

            let previousAlbum =
                currentAlbum - 1;


            while (
                previousAlbum >= 0 &&
                albums[previousAlbum].tracks.length === 0
            ) {

                previousAlbum--;

            }


            if (
                previousAlbum >= 0
            ) {

                playTrack(
                    previousAlbum,
                    albums[previousAlbum].tracks.length - 1
                );

            }

        }

    }
);


/* ==========================================
   AUTO NEXT
========================================== */


audio.addEventListener(
    "ended",
    () => {

        next.click();

    }
);


/* ==========================================
   PROGRESS BAR
========================================== */


audio.addEventListener(
    "loadedmetadata",
    () => {

        duration.textContent =
            formatTime(audio.duration);

    }
);


audio.addEventListener(
    "timeupdate",
    () => {

        if (!audio.duration) return;


        const percentage =
            (audio.currentTime /
                audio.duration) * 100;


        progress.value =
            percentage;


        currentTime.textContent =
            formatTime(audio.currentTime);

    }
);


progress.addEventListener(
    "input",
    () => {

        if (!audio.duration) return;


        audio.currentTime =
            (progress.value / 100)
            * audio.duration;

    }
);


function formatTime(seconds) {

    if (!seconds || isNaN(seconds)) {

        return "0:00";

    }


    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60)
        .toString()
        .padStart(2, "0");


    return `${minutes}:${secs}`;

}


/* ==========================================
   CLOSE PLAYER
========================================== */


document
    .getElementById("closePlayer")
    .addEventListener("click", () => {

        audio.pause();

        player.classList.add("hidden");

    });


/* ==========================================
   MOBILE MENU
========================================== */


const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle("active");

    }
);


document.querySelectorAll(
    "#navigation a"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navigation.classList.remove(
                "active"
            );

        }
    );

});


/* ==========================================
   LOADING SCREEN
========================================== */


window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            const loader =
                document.getElementById("loader");


            loader.style.opacity = "0";


            setTimeout(() => {

                loader.style.display =
                    "none";

            }, 600);

        }, 700);

    }
);


/* ==========================================
   ESC CLOSE
========================================== */


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            modal.classList.remove("active");

        }

    }
);
