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

};
    // Music Button
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (music && musicBtn) {

        musicBtn.addEventListener("click", function () {

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
        "images 2/IMG-20260220-WA0031.jpg",
        "images 2/IMG-20260224-WA0060.jpg",
        "images 2/IMG-20260520-WA0002.jpg"
    ];

    const slide = document.getElementById("slide");

    if (slide) {

        let current = 0;

        setInterval(function () {

            current++;

            if (current >= images.length) {
                current = 0;
            }

            slide.src = images[current];

        }, 3000);

    }

};