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
var number = 0
const but1_left = document.querySelector("#left-always")
const but1_right = document.querySelector("#right-always")
    // read more read less
function go_left(n) {


    switch (number + n) {
        case 0:
            var wid = "25%";
            break;
        case 1:
            var wid = "50%";
            number = number + n;
            break;
        case 2:
            var wid = "75%";
            number = number + n;
            break;
        case 3:
            var wid = "100%";
            number = number + n;
            break;
    }
    gsap.to(".first-nav", 0.5, {
        width: wid
    });
    gsap.to(".narv-box", 0.5, {

    });
}

function go_right(n) {
    switch (number + n) {
        case 0:
            var wid = "25%";
            number = number + n;
            break;
        case 1:
            var wid = "50%";
            number = number + n;
            break;
        case 2:
            var wid = "75%";
            number = number + n;
            break;
        case 3:
            var wid = "100%";
            number = number + n;
            break;
    }
    gsap.to(".first-nav", 0.5, {
        width: wid
    });

}