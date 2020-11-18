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
timeline2.to("#cir", 1, {
    left: "50rem"
});
timeline3.to(".img1", 1, {
    opacity: 1
});




var controller = new ScrollMagic.Controller();

var tweenSecur = gsap.to("#move1", {
    x: -600
});
var tweenWellbe = gsap.to("#move11", {
    x: -1200
});
var tweenFirstCir = gsap.to("#cir", {
    x: 600
});


animate("#cir", 2000, tweenFirstCir);
animate("#move1", 2000, tweenSecur);
animate("#move11", 2000, tweenWellbe);

function animate(tag, dur, tween) {
    var sceen1 = new ScrollMagic.Scene({
            triggerElement: tag,
            duration: dur,
        })
        .setTween(tween)
        .addTo(controller)
}

var number2 = 0

function go_left1(n) {
    switch (number2 + n) {
        case 0:
            var wid = "70%";
            document.getElementById('wapper-card').style = 'left:22.5rem; transition-duration: 1s;'
            break;
        case 1:
            var wid = "85%";
            document.getElementById('wapper-card').style = 'left:-10rem; transition-duration: 1s;'
            number2 = number2 + n;
            break;
        case 2:
            var wid = "100%";
            document.getElementById('wapper-card').style = 'left:-45rem; transition-duration: 1s;'
            number2 = number2 + n;
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

            number2 = number2 + n;
            break;
        case 1:
            var wid = "85%";
            document.getElementById('wapper-card').style = 'left:-10rem; transition-duration: 1s;'
            number2 = number2 + n;
            break;
        case 2:
            var wid = "100%";
            document.getElementById('wapper-card').style = 'left:-45rem; transition-duration: 1s;'
            number2 = number2 + n;
            break;
    }
    gsap.to(".sec-nav", 0.5, {
        width: wid
    });
}
document.getElementById("bot-box").style = 'position:relative;height:730px;width:1260px;transition-duration: 1s; left:0rem; top:-2rem';
document.getElementById("warp-text-2").style = 'position: relative; top:0px;transition-duration: 1s;';
document.getElementById("eiei1").style = 'position: relative;left:50rem;transition-duration: 1s;'

function res() {
    document.getElementById("bot-box").style = 'position:relative; height:850px; width:120%; transition-duration: 1s; left:-25rem;';
    document.getElementById("warp-text-2").style = 'position: relative; top:-120px;transition-duration: 1s;';
    document.getElementById("eiei1").style = 'position: relative;left:75rem;transition-duration: 1s;'
}

function res1() {
    document.getElementById("bot-box").style = 'position:relative;height:730px;width:1260px;transition-duration: 1s; left:0rem;';
    document.getElementById("warp-text-2").style = 'position: relative; top:0px;transition-duration: 1s;';
    document.getElementById("eiei1").style = 'position: relative;left:50rem;transition-duration: 1s;'

}