var controller = new ScrollMagic.Controller();
TweenLite.defaultEase = Linear.easeNone;

titles = document.querySelectorAll(".visually-hidden");
var tl = new TimelineMax();

tl.to(".visually-hidden", 1, { yPercent: -20 }, "label1");
tl.from(titles[1], 0.5, { opacity: 1 }, "label1+=0.5");
tl.to(".visually-hidden", 1, { yPercent: 100 }, "label2");
tl.from(titles[2], 0.5, { opacity: 1 }, "label2+=0.5");

new ScrollMagic.Scene({
        triggerHook: "onLeave",
        duration: "400%"
    })
    .setTween(tl)
    .addTo(controller);

function showBar() {
    if (document.getElementById('show').value === "0") {
        document.getElementById('show').setAttribute('value', '1')
        document.getElementById('icon-search-2').setAttribute('class', 'fa fa-close')
        document.getElementById('nav').setAttribute('class', 'navbar navbar-light bg-light')
        let list = document.getElementsByClassName('nav-link')
        for (let i = 0; i < list.length; i++) {
            list[i].setAttribute("style", "display: none;");
        }
        document.getElementById('label').setAttribute('style', 'visibility: visible;width: 550px;border-top:none;border-left:none;border-right:none')
        document.getElementById('icon-search-1').setAttribute('style', 'display:default')
    } else {
        document.getElementById('show').setAttribute('value', '0')
        document.getElementById('icon-search-2').setAttribute('class', 'fa fa-search')
        document.getElementById('nav').setAttribute('class', 'navbar navbar-light')
        let list = document.getElementsByClassName('nav-link')
        for (let i = 0; i < list.length; i++) {
            list[i].setAttribute("style", "display: default;");
        }
        document.getElementById('label').setAttribute('style', 'display: none;width: 550px;border-top:none;border-left:none;border-right:none')
        document.getElementById('icon-search-1').setAttribute('style', 'display:none')
    }
}


let count = 0;
let newNum = 0;

function prevSlide(obj) {
    if (obj.value.localeCompare("1") == '-1') {
        if (count > 0) {
            if (count == 1) {
                count--;
                document.getElementById('slide0').setAttribute('style', 'margin-left: 10%; transition-duration: 0.5s;')
                document.getElementById('bar0').setAttribute('style', 'width: 80%; transition-duration: 0.5s;')
            } else if (count == 2) {
                count--;
                document.getElementById('slide0').setAttribute('style', 'margin-left: 0%; transition-duration: 0.5s;')
                document.getElementById('bar0').setAttribute('style', 'width: 90%; transition-duration: 0.5s;')
            }
        }
    } else {
        if (newNum == 1) {
            newNum--;
            document.getElementById('slide1').setAttribute('style', 'margin-left: 20%; transition-duration: 0.5s;')
            document.getElementById('bar1').setAttribute('style', 'width: 90%; transition-duration: 0.5s;')
        }
    }
}

function nextSlide(obj) {
    if (obj.value.localeCompare("1") == '-1') {
        if (count == 0) {
            count++;
            document.getElementById('slide0').setAttribute('style', 'margin-left: 0%; transition-duration: 0.5s;')
            document.getElementById('bar0').setAttribute('style', 'width: 90%; transition-duration: 0.5s;')
        } else if (count == 1) {
            count++;
            document.getElementById('slide0').setAttribute('style', 'margin-left: -10%; transition-duration: 0.5s;')
            document.getElementById('bar0').setAttribute('style', 'width: 100%; transition-duration: 0.5s;')
        }
    } else {
        if (newNum == 0) {
            newNum++;
            document.getElementById('slide1').setAttribute('style', 'margin-left: 13%; transition-duration: 0.5s;')
            document.getElementById('bar1').setAttribute('style', 'width: 100%; transition-duration: 0.5s;')
        }
    }
}

function toLeft(obj){
    let x = obj.id
    document.getElementById(`arrow${x}`).setAttribute('class', 'arrow-move-left')
}

function toRight(obj){
    let x = obj.id
    document.getElementById(`arrow${x}`).setAttribute('class', 'arrow-move-right')
}

function reScale(){
    document.getElementById('eiei').setAttribute('style', 'animation: 2s to-Big;animation-fill-mode: forwards;')
}

function reScale2(){
    document.getElementById('eiei').setAttribute('style', 'animation: 2s to-Small;animation-fill-mode: forwards;')
}


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

function test(obj) {
    document.getElementById(`circle${+obj}`).setAttribute('class', 'circle-1')
}

function test2(obj) {
    document.getElementById(`circle${+obj}`).setAttribute('class', 'circle-2')
}

function test3(obj) {
    document.getElementById(`circle${+obj}`).setAttribute('class', 'circle-3')
}

function test4(obj) {
    document.getElementById(`circle${+obj}`).setAttribute('class', 'circle-4')
}

document.getElementById("bot-box").style = 'position:relative;height:730px;width:1260px;transition-duration: 1s; left:0rem; top:-2rem';
document.getElementById("warp-text-2").style = 'position: relative; top:0px;transition-duration: 1s;';
document.getElementById("eiei1").style = 'position: relative;transition-duration: 1s;margin-top:500px;margin-left: 800px;'

function res() {
    document.getElementById("bot-box").style = 'position:relative; height:850px; width:120%; transition-duration: 1s; left:-25rem;';
    document.getElementById("warp-text-2").style = 'position: relative; top:-120px;transition-duration: 1s;';
    document.getElementById("eiei1").style = 'position: relative;transition-duration: 1s;margin-top:500px;margin-left: 1200px;'
    
}

function res1() {
    document.getElementById("bot-box").style = 'position:relative;height:730px;width:1260px;transition-duration: 1s; left:0rem;';
    document.getElementById("warp-text-2").style = 'position: relative; top:0px;transition-duration: 1s;';
    document.getElementById("eiei1").style = 'position: relative;transition-duration: 1s;margin-top:500px;margin-left: 800px;'

}
