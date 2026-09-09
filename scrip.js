// =========================
// MOBILE NAVIGATION
// =========================

const navLinks = document.querySelector(".nav-links");
const navContainer = document.querySelector(".nav-container");

// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.className = "menu-btn";
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Open Menu");

navContainer.appendChild(menuButton);

// Toggle mobile menu
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }
});


// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.innerHTML = "☰";
    });
});


// =========================
// TYPING EFFECT
// =========================

const typingElement = document.querySelector(".hero h3");

const typingText = [
    "Web Designer",
    "Web Developer",
    "Freelancer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    const currentText = typingText[textIndex];

    if (!deleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {
            deleting = true;

            setTimeout(typingEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            textIndex++;

            if (textIndex >= typingText.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );
}

typingEffect();


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section, header");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }
    });
});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".section-title, .about-container, .card, .skill, .project-card, .education-card, .contact-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }
        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// =========================
// SKILL BAR ANIMATION
// =========================

const skillsSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                progressBars.forEach(bar => {

                    bar.style.transition = "width 1.5s ease";

                });

                skillObserver.unobserve(entry.target);
            }
        });

    },
    {
        threshold: 0.3
    }
);

if (skillsSection) {
    skillObserver.observe(skillsSection);
}


// =========================
// BACK TO TOP BUTTON
// =========================

const topButton = document.createElement("button");

topButton.className = "top-btn";
topButton.innerHTML = "↑";
topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// CURRENT YEAR
// =========================

const footer = document.querySelector("footer");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = `
        <p>© ${year} Kamran. All Rights Reserved.</p>
        <p>Designed & Developed by <span>Kamran</span></p>
    `;
}


// =========================
// PAGE LOAD
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
