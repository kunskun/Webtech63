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