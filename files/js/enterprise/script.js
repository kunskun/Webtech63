var controller = new ScrollMagic.Controller();
TweenLite.defaultEase = Linear.easeNone;

var titles = document.querySelectorAll(".c1");
var tl = new TimelineMax();

tl.to(".c1", 1, {xPercent: 35}, "label1");
tl.from(titles[1], 0.5, {opacity:0}, "label1+=0.5");
tl.to(".c1", 1, {xPercent: 10}, "label2");
tl.from(titles[2], 0.5, {opacity:0}, "label2+=0.5");

new ScrollMagic.Scene({
  triggerHook: "onLeave",
  duration: "400%"
})
  .setTween(tl)
  .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#p-botright", duration: 1200})
// animate color and top border in relation to scroll position
.setTween("#full-img", {scale: 0.63, x:370, y:350, delay: 0.9}) 
.addTo(controller);

  gsap.utils.toArray(".hightlight-box").forEach(box => {
    let hover = gsap.to(box, {
        duration: 0.2,
        y: -10,
        paused: true, 
        ease: Linear.easeNone
    });
    box.addEventListener("mouseenter", () => hover.play());
    box.addEventListener("mouseleave", () => hover.reverse());
});

gsap.utils.toArray(".pr").forEach(vec => {
    let hover = gsap.to(vec, {
        duration: 0.5,
        x: 170,
        paused: true, 
        ease: "easeIn"
    });
    vec.addEventListener("mouseenter", () => hover.play());
    vec.addEventListener("mouseleave", () => hover.reverse());
});

titles = document.querySelectorAll(".visually-hidden");
var tl = new TimelineMax();

tl.to(".visually-hidden", 1, {xPercent: 35}, "label1");
tl.from(titles[1], 0.5, {opacity:0}, "label1+=0.5");
tl.to(".visually-hidden", 1, {xPercent: 10}, "label2");
tl.from(titles[2], 0.5, {opacity:0}, "label2+=0.5");
tl.to(".visually-hidden", 1, {xPercent: -25}, "label3");
tl.from(titles[3], 0.5, {opacity:0}, "label3+=0.5");

new ScrollMagic.Scene({
  triggerHook: "onLeave",
  duration: "400%"
})
  .setTween(tl)
  .addTo(controller);

  gsap.utils.toArray(".hightlight-box").forEach(box => {
    let hover = gsap.to(box, {
        duration: 0.2,
        y: -10,
        paused: true, 
        ease: Linear.easeNone
    });
    box.addEventListener("mouseenter", () => hover.play());
    box.addEventListener("mouseleave", () => hover.reverse());
});

var scene = new ScrollMagic.Scene({triggerElement: ".pmain", duration: 1200})
// animate color and top border in relation to scroll position
.setTween(".pmove", {xPercent:-10, delay:0.2}) // the tween durtion can be omitted and defaults to 1
.addTo(controller);

