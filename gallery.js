window.onload = function () {

    // 🖼️ Slideshow images
    const images = [
        "images/IMG-20260219-WA0072.jpg",
        "images/IMG-20260219-WA0073.jpg",
        "images/IMG-20260303-WA0029.jpg",
        "images/IMG-20260303-WA0033.jpg",
        "images/IMG-20260303-WA0035.jpg",
        "images/IMG-20260303-WA0036.jpg",
        "images/IMG-20260306-WA0004.jpg",
        "images/IMG-20260306-WA00040001.jpg",
        "images/IMG-20260527-WA0023.jpg"
    ];

    const slide = document.getElementById("slide");

    if (slide && images.length > 0) {
        let current = 0;

        setInterval(() => {
            current = (current + 1) % images.length;
            slide.src = images[current];
        }, 3000);
    }

    // 🎵 Music
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (music) {

        const savedTime = localStorage.getItem("musicTime");
        const musicOn = localStorage.getItem("music") === "on";

        if (savedTime) {
            music.currentTime = parseFloat(savedTime);
        }

        if (musicOn) {
            music.play().catch(() => {});
        }

        setInterval(() => {
            localStorage.setItem("musicTime", music.currentTime);
        }, 1000);

        window.addEventListener("beforeunload", () => {
            localStorage.setItem("musicTime", music.currentTime);
        });
    }

    // 🎵 Button Control
    if (music && musicBtn) {

        musicBtn.addEventListener("click", function () {

            if (music.paused) {

                music.play()
                    .then(() => {
                        musicBtn.innerHTML = "⏸ Pause Music";
                        localStorage.setItem("music", "on");
                    })
                    .catch(err => console.log(err));

            } else {

                music.pause();
                musicBtn.innerHTML = "🎵 Play Music";
                localStorage.setItem("music", "off");

            }

        });

    }

};