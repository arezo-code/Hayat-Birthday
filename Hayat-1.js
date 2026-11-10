
// SELECT ELEMENTS

const flame = document.getElementById("flame");
const blowBtn = document.getElementById("blowBtn");
const candleText = document.getElementById("candleText");
const wishMessage = document.getElementById("wishMessage");

const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("openLetterBtn");

const surpriseBtn = document.getElementById("surpriseBtn");
const finalMessage = document.getElementById("finalMessage");

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");


// 1. BLOW OUT THE CANDLE

function blowCandle() {
    if (!flame || flame.dataset.blown === "true") return;

    flame.dataset.blown = "true";
    flame.textContent = "♡";
    flame.style.animation = "none";
    flame.style.color = "#A58A70";

    candleText.textContent = "YOUR WISH IS ON ITS WAY.";

    wishMessage.classList.remove("hidden");
}

if (flame) {
    flame.addEventListener("click", blowCandle);
}

if (blowBtn) {
    blowBtn.addEventListener("click", blowCandle);
}


// 2. OPEN THE LETTER

function openLetter() {
    if (!envelope) return;

    envelope.classList.toggle("open");

    openLetterBtn.textContent =
        envelope.classList.contains("open")
        ? "CLOSE YOUR LETTER"
        : "OPEN YOUR LETTER ✦";
}

if (envelope) {
    envelope.addEventListener("click", openLetter);
}

if (openLetterBtn) {
    openLetterBtn.addEventListener("click", openLetter);
}


// 3. FINAL SURPRISE

if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {

        finalMessage.classList.remove("hidden");

        surpriseBtn.textContent = "A LITTLE LOVE FOR YOU ♡";

        createCelebration();

    });
}


// 4. CELEBRATION PARTICLES

function createCelebration() {

    const symbols = ["✦", "✧", "♡"];

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("span");

        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.position = "fixed";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = "-30px";
        particle.style.color = "#B49A7A";
        particle.style.fontSize = "20px";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "999";

        document.body.appendChild(particle);

        const duration = 2000 + Math.random() * 2000;

        particle.animate(
            [
                { transform: "translateY(0)", opacity: 1 },
                { transform: "translateY(110vh) rotate(360deg)", opacity: 0 }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        setTimeout(() => particle.remove(), duration);
    }
}


// 5. IMAGE GALLERY

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        lightboxImage.src = img.src;

        lightbox.classList.remove("hidden");

    });

});

if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
        lightbox.classList.add("hidden");
    });
}

if (lightbox) {
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.classList.add("hidden");
        }
    });
}


// 6. BACKGROUND MUSIC

if (musicBtn) {

    musicBtn.addEventListener("click", async () => {

        try {

            if (music.paused) {

                await music.play();

                musicBtn.textContent = "Ⅱ PAUSE MUSIC";

            } else {

                music.pause();

                musicBtn.textContent = "♫ MUSIC";

            }

        } catch (error) {

            musicBtn.textContent = "MUSIC UNAVAILABLE";

        }

    });

}


// 7. NAVIGATION MENU

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menuOverlay.classList.add("active");
    });
}

if (closeMenu) {
    closeMenu.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });
}

document.querySelectorAll(".menu-overlay a").forEach((link) => {

    link.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });

});
