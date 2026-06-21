window.onload = function () {

    // Floating Hearts
    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (15 + Math.random() * 25) + "px";

        heart.style.animationDuration = (5 + Math.random() * 7) + "s";

        document.body.appendChild(heart);
    }

    // Music Button
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (musicBtn && music) {

        musicBtn.addEventListener("click", () => {

            if (music.paused) {
                music.play();
                musicBtn.innerHTML = "⏸ Pause Music";
            } else {
                music.pause();
                musicBtn.innerHTML = "🎵 Play Music";
            }

        });

    }

    // Slideshow
    const images = [
        "images/IMG-20260219-WA0072.jpg",
        "images/IMG-20260219-WA0073.jpg",
        "images/IMG-20260303-WA0029.jpg",
        "images/IMG-20260303-WA0033.jpg",
        "images/IMG-20260303-WA0035.jpg",
        "images/IMG-20260303-WA0036.jpg",
        "images/IMG-20260306-WA0004.jpg",
         "images/IMG-20260306-WA00040001.jpg",
          "images/IMG-20260527-WA0023.jpg",
    ];

    let current = 0;
    const slide = document.getElementById("slide");

    if (slide) {

        setInterval(() => {

            current = (current + 1) % images.length;
            slide.src = images[current];

        }, 3000);

    }

};