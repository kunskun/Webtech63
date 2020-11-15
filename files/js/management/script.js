var timeline = new TimelineMax({});
var timeline1 = new TimelineMax({});
var timeline2 = new TimelineMax({});
var timeline3 = new TimelineMax({});
timeline.to(".all", 1, {
    opacity: 1
});
timeline1.to("#warp-circle", 1, {
    left: "10rem"
});
timeline3.to(".img1", 1, {
    opacity: 1,
    left: "60.5rem"
});
timeline2.to("#cir", 1, {
    left: "50rem"
});

var controller = new ScrollMagic.Controller();
var tweenMove = gsap.to("#move1", {
    x: -800
});
var tweenMove1 = gsap.to("#move11", {
    x: -800
});
animate("#move1", 900, tweenMove);
animate("#move11", 900, tweenMove1);




function animate(tag, dur, tween) {
    var sceen1 = new ScrollMagic.Scene({
            triggerElement: tag,
            duration: dur,
        })
        .setTween(tween)
        .addTo(controller)
        .addIndicators()
}


number2 = 0
number3 = 0

function go_left1(n) {
    switch (number2 + n) {
        case 0:
            var wid = "70%";
            number2 = number + n
            break;
        case 1:
            var wid = "85%";
            document.getElementById('wapper-card').style = 'left:-10rem; transition-duration: 1s;'
            number2 = number2 + n;
            break;
        case 2:
            number2 = number2 + n;
            document.getElementById('wapper-card').style = 'left:-42.5rem; transition-duration: 1s;'
            var wid = "100%"
            break;
    }
    gsap.to(".sec-nav", 0.5, {
        width: wid
    });

}

function go_right1(n) {
    switch (number2 + n) {
        case 0:
            var wid = "70%";
            document.getElementById('wapper-card').style = 'left:22.5rem; transition-duration: 1s;'
            number = number2 + n;
            break;
        case 1:
            var wid = "85%";
            document.getElementById('wapper-card').style = 'left:-10rem; transition-duration: 1s;'
            number2 = number2 + n;
            break;
        case 2:
            var wid = "100%";
            number2 = number2 + n;
            break;
    }
    gsap.to(".sec-nav", 0.5, {
        width: wid
    });
}