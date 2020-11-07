var timeline = new TimelineMax({});
var timeline1 = new TimelineMax({});
var timeline2 = new TimelineMax({});
var timeline3 = new TimelineMax({});
timeline.to(".all", 1, {
    opacity: 1
});
timeline1.to(".first-sec-box", 1, {
    opacity: 1
});
timeline2.to(".first-sec-circle", 1, {
    height: "920px",
    width: "920px"
});

timeline3.to(".top-img", 1, {
    opacity: 1,
    left: "63.5rem"
});
var tl = new TimelineMax();

// create timeline
// this could also be created in a loop
tl.to(".back-font", 1, { xPercent: 2 }, "label1");
tl.from(titles[1], 0.5, { opacity: 0 }, "label1+=0.5");
tl.to(".back-font", 1, { xPercent: -25 }, "label2");
tl.from(titles[2], 0.5, { opacity: 0 }, "label2+=0.5");

new ScrollMagic.Scene({
        triggerHook: "onLeave",
        duration: "400%"
    })
    .setTween(tl)
    .addTo(controller);

// read more read less
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}