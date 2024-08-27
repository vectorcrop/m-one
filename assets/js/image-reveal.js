
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});
gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".wptb-item--image");

revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let subtitle = container.closest('.wptb-item--inner').querySelector(".wptb-item--subtitle");
    let desc = container.closest('.wptb-item--inner').querySelector(".wptb-item.desc");
    let textItems = container.closest('.wptb-item--inner').querySelectorAll(".wptb--item");

    // Set initial opacity to zero for all elements
    gsap.set([subtitle, desc, ...textItems], { y: 20, autoAlpha: 0 });
    // [container, image, subtitle, desc, ...textItems].forEach(element => {
    //     element.style.opacity = 0;
    // });
    let isRight = container.classList.contains('order-2');
    let isWideScreen = window.matchMedia('(max-width: 600px)').matches;

    let xPercentImage = (!isRight || isWideScreen) ? 100 : -100;
    let xPercentContainer = (!isRight || isWideScreen) ? -100 : 100;

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top 80%", // Adjust this as needed
            toggleActions: "restart none none reset",
            once: true // Ensure animation runs only once
        }
    });

    // Animate container
    tl.fromTo(container, { xPercent: xPercentContainer, autoAlpha: 0 }, {
        xPercent: 0,
        autoAlpha: 1,
        ease: Power2.out,
        duration: 1.5
    });

    // Animate image
    tl.fromTo(image, { xPercent: xPercentImage, scale: 1.3, autoAlpha: 0 }, {
        xPercent: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Power2.out,
        duration: 1.5,
        delay: -1.5
    });

    // Animate subtitle
    tl.to(subtitle, {
        y: 0,
        autoAlpha: 1,
        ease: Power2.out,
        duration: 1,
        delay: -1
    });

    // Animate description
    tl.to(desc, {
        y: 0,
        autoAlpha: 1,
        ease: Power2.out,
        duration: 1,
        delay: -0.9
    });

    // Staggered animation for list items
    tl.to(textItems, {
        y: 0,
        autoAlpha: 1,
        ease: Power2.out,
        stagger: 0.3,
        duration: 1,
        delay: -0.3
    });
});
