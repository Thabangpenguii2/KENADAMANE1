window.onload = function () {

    // ❤️ Floating Hearts
    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration = (5 + Math.random() * 7) + "s";

        document.body.appendChild(heart);
    }

    // 🎵 Music Control
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (music) {

        // Restore song position
        const savedTime = localStorage.getItem("musicTime");
        const musicOn = localStorage.getItem("music") === "on";

        if (savedTime) {
            music.currentTime = parseFloat(savedTime);
        }

        if (musicOn) {
            music.play().catch(() => {});
        }

        music.addEventListener("play", () => {
            localStorage.setItem("music", "on");
        });

        music.addEventListener("pause", () => {
            localStorage.setItem("music", "off");
        });

        // Save song position every second
        setInterval(() => {
            localStorage.setItem("musicTime", music.currentTime);
        }, 1000);

        // Save before leaving page
        window.addEventListener("beforeunload", () => {
            localStorage.setItem("musicTime", music.currentTime);
        });
    }

    // 🎵 Button Control
    if (music && musicBtn) {

        musicBtn.addEventListener("click", function () {

            if (music.paused) {

                music.play();
                musicBtn.innerHTML = "⏸ Pause Music";
                localStorage.setItem("music", "on");

            } else {

                music.pause();
                musicBtn.innerHTML = "🎵 Play Music";
                localStorage.setItem("music", "off");

            }

        });

    }

    // 🖼️ Slideshow
    const images = [
        "images 2/IMG-20260220-WA0031.jpg",
        "images 2/IMG-20260224-WA0060.jpg",
        "images 2/IMG-20260520-WA0002.jpg"
    ];

    const slide = document.getElementById("slide");

    if (slide && images.length > 0) {

        let current = 0;

        setInterval(() => {

            current = (current + 1) % images.length;
            slide.src = images[current];

        }, 3000);

    }

};