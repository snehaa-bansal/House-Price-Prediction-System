// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

// Navbar Shadow

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 40) {

        nav.style.background = "rgba(15,23,42,.85)";

    }

    else {

        nav.style.background = "rgba(255,255,255,.06)";

    }

});
// ===== Mouse Tilt =====

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * 15;
        const rotateY = ((x / rect.width) - 0.5) * -15;

        card.style.transform =
            `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});
const reveal = document.querySelectorAll(".card,.glass");

function revealItems() {

    reveal.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            item.style.opacity = 1;

            item.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealItems);

revealItems();