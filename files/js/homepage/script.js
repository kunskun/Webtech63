gsap.to(".hid", { y: -1, opacity: 1, duration: 0.5, delay: 1 });
gsap.to(".img1", { x: 40, y: 0, duration: 1.3 });
gsap.to(".img2", { x: 260, y: -60, duration: 1 });
gsap.to(".img3", { x: -40, y: 170, duration: 1.5 });
gsap.to(".img4", { x: 50, y: -90, duration: 1.7 });
gsap.to(".c1", { scale: 4.2, duration: 1.8 });
gsap.to(".c2", { x: -1340, y: -680, duration: 1.5 });

gsap.utils.toArray(".d1").forEach(dhov => {
    const c = document.querySelector(".c3");
    let hover = gsap.to(c, {
        scale: 5,
        duration: 0.5,
        y: -600,
        paused: true,
        ease: "power1.inOut"
    });
    dhov.addEventListener("mouseenter", () => hover.play());
    dhov.addEventListener("mouseleave", () => hover.reverse());
});
gsap.utils.toArray(".d2").forEach(dhov => {
    const c = document.querySelector(".c4");
    let hover = gsap.to(c, {
        scale: 5,
        duration: 0.5,
        y: -600,
        paused: true,
        ease: "power1.inOut"
    });
    dhov.addEventListener("mouseenter", () => hover.play());
    dhov.addEventListener("mouseleave", () => hover.reverse());
});
gsap.utils.toArray(".d3").forEach(dhov => {
    const c = document.querySelector(".c5");
    let hover = gsap.to(c, {
        scale: 5,
        duration: 0.5,
        y: -600,
        paused: true,
        ease: "power1.inOut"
    });
    dhov.addEventListener("mouseenter", () => hover.play());
    dhov.addEventListener("mouseleave", () => hover.reverse());
});

TweenLite.defaultEase = Linear.easeNone;
var titles = document.querySelectorAll(".pmove");
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

// create timeline
// this could also be created in a loop
tl.to(".pmain", 1, { xPercent: 2 }, "label1");
tl.from(titles[1], 0.5, { opacity: 0 }, "label1+=0.5");
tl.to(".pmain", 1, { xPercent: -25 }, "label2");
tl.from(titles[2], 0.5, { opacity: 0 }, "label2+=0.5");

new ScrollMagic.Scene({
        triggerHook: "onLeave",
        duration: "400%"
    })
    .setTween(tl)
    .addTo(controller);
// move learn more vector right
gsap.utils.toArray(".pr").forEach(vec => {
    let hover = gsap.to(vec, {
        duration: 0.5,
        x: 10,
        paused: true,
        ease: "easeIn"
    });
    vec.addEventListener("mouseenter", () => hover.play());
    vec.addEventListener("mouseleave", () => hover.reverse());
});
// move learn more vector top-right
gsap.utils.toArray(".pa").forEach(vec => {
    let hover = gsap.to(vec, {
        duration: 0.5,
        x: 210,
        y: -145,
        paused: true,
        ease: "easeIn"
    });
    vec.addEventListener("mouseenter", () => hover.play());
    vec.addEventListener("mouseleave", () => hover.reverse());
});


function nextSlide() {
    document.getElementById('hovf').style = 'margin-left:6.5%; transition-duration: 0.5s;'
    document.getElementById('progress-bar').style = 'width: 100%; transition-duration: 0.5s;'
    document.getElementById('vbar1').style = 'fill: black; transition-duration: 0.5s;'
    document.getElementById('vbar2').style = 'fill: #EAECEE; transition-duration: 0.5s;'
}

function prevSlide() {
    document.getElementById('hovf').style = 'margin-left:20%; transition-duration: 0.5s;'
    document.getElementById('progress-bar').style = 'width: 90%; transition-duration: 0.5s;'
    document.getElementById('vbar1').style = 'fill: #EAECEE; transition-duration: 0.5s;'
    document.getElementById('vbar2').style = 'fill: black; transition-duration: 0.5s;'
}