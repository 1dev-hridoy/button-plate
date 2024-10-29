function rippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${event.clientX - button.offsetLeft}px`;
    ripple.style.top = `${event.clientY - button.offsetTop}px`;
    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function morphButton(button) {
    button.classList.toggle("clicked");
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header elements
    gsap.from("#mainTitle", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from("#mainDesc", { opacity: 0, y: 50, duration: 1, delay: 0.7 });
    gsap.from("#headerButtons", { opacity: 0, y: 50, duration: 1, delay: 0.9 });

    // Animate button grid
    gsap.from("#buttonTitle", {
        scrollTrigger: "#buttonTitle",
        opacity: 0,
        y: 50,
        duration: 1
    });

    gsap.from("#buttonGrid > div", {
        scrollTrigger: "#buttonGrid",
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1
    });

    // Animate usage section
    gsap.from("#usageTitle", {
        scrollTrigger: "#usageTitle",
        opacity: 0,
        y: 50,
        duration: 1
    });

    gsap.from("#usageDesc", {
        scrollTrigger: "#usageDesc",
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2
    });

    // Animate footer
    gsap.from("#footer", {
        scrollTrigger: "#footer",
        opacity: 0,
        y: 50,
        duration: 1
    });

    // Add floating animation to buttons
    gsap.utils.toArray(".button").forEach((button, i) => {
        gsap.to(button, {
            y: "random(-10, 10)",
            duration: "random(1.5, 2.5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1
        });
    });
});