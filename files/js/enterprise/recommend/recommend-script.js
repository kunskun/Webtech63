var controller = new ScrollMagic.Controller();
TweenLite.defaultEase = Linear.easeNone;

gsap.to(".c1", {x: 1000, y: -500,opacity: 1, duration: 0.7, delay: 0.5});
gsap.to("#bg-round-anim", {x: 1050,opacity: 1, duration: 0.7, delay: 0.5});
gsap.to("#fly-text", {y: 0,opacity: 1, duration: 0.5, delay: 0.5});
gsap.to("#warp-img", {opacity: 1, duration: 0.5, delay: 1});

var scene = new ScrollMagic.Scene({triggerElement: "#p-botright", duration: 1200})
// animate color and top border in relation to scroll position
.setTween("#full-img", {scale: 0.61, x:370, y:350, delay: 0.9}) 
.addTo(controller);

//learn more
gsap.registerEffect({
    name: "arrowMoveTop",
    defaults: {
        duration:0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            top:-16,
            left:10,
            ease: Linear.easeNone,
        });
    }
  })
  gsap.registerEffect({
    name: "arrowMoveRight",
    defaults: {
        duration:0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            left:10,
            ease: Linear.easeNone,
        });
    }
  })
  gsap.registerEffect({
    name: "arrowMoveOut",
    defaults: {
        duration: 0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            top:-13,
            left:7,
            ease: Linear.easeNone,
        });
    }
  })
  gsap.registerEffect({
    name: "arrowMoveOut2",
    defaults: {
        duration: 0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            left:5,
            ease: Linear.easeNone,
        });
    }
  })
  // arrow-to-top
  document.querySelectorAll(".learnMore").forEach(function (box) {
    box.addEventListener("mouseenter", function () {
        gsap.effects.arrowMoveTop(this.children[1]);
    });
  });
  document.querySelectorAll(".learnMore").forEach(function (box) {
    box.addEventListener("mouseleave", function () {
        gsap.effects.arrowMoveOut(this.children[1]);
    });
  });
  document.querySelectorAll(".learnMore2").forEach(function (box) {
    box.addEventListener("mouseenter", function () {
        gsap.effects.arrowMoveRight(this.children[1]);
    });
  });
  document.querySelectorAll(".learnMore2").forEach(function (box) {
    box.addEventListener("mouseleave", function () {
        gsap.effects.arrowMoveOut2(this.children[1]);
    });
  });
  function nextSlide2(){
    document.getElementById('hovf2').style = 'margin-left:0%; margin-top: 5%; transition-duration: 0.2s;'
    document.getElementById('progress-bar').style = 'width: 100%; transition-duration: 0.2s;'
    document.getElementById('vbar1').style = 'fill: black; transition-duration: 0.2s;'
    document.getElementById('vbar2').style = 'fill: #EAECEE; transition-duration: 0.2s; delay: 1.2s;'
  }
  
  function prevSlide2(){
    document.getElementById('hovf2').style = 'margin-left:18%; margin-top: 5%; transition-duration: 0.4s;'
    document.getElementById('progress-bar').style = 'width: 85%; transition-duration: 0.4s;'
    document.getElementById('vbar1').style = 'fill: #EAECEE; transition-duration: 0.4s; delay: 1.4s;'
    document.getElementById('vbar2').style = 'fill: black; transition-duration: 0.4s;'
  }

    var play = true;
     $(document).ready(function() {
            // Get media - with autoplay disabled (audio or video)
            var media = $('video').not("[autoplay='autoplay']");
            var tolerancePixel = 40;

            function checkMedia(){
                // Get current browser top and bottom
                var scrollTop = $(window).scrollTop() + tolerancePixel;
                var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;
                // console.log("t="+scrollTop, "b="+scrollBottom)
                media.each(function(index, el) {
                    var yTopMedia = $(this).offset().top;
                    var yBottomMedia = $(this).height() + yTopMedia;
                    // console.log("tm="+yTopMedia, "bm="+yBottomMedia)
                    if(scrollTop > yBottomMedia || scrollBottom < yTopMedia){ //view explaination in `In brief` section above
                        play = true;
                    } else {
                        if(play){
                            $(this).get(0).play();
                        }
                        play = false;
                    }
                });

                //}
            }
            $(document).on('scroll', checkMedia);
        });
    


    //wave 
let gsapBgWave = gsap.timeline().from(".bg-wave", {
    repeat: -1,
    opacity: 1,
    scale: 0,
    duration: 4,
    stagger: {
        each: 4,
        opacity: 0,
        from: "center",
        yoyo: true,
    },

    ease: Power1.easeOut,
})
let gsapBgWave2 = gsap.timeline().from(".bg-wave2", {
    repeat: -1,
    opacity: 0.5,
    scale: 0.5,
    duration: 4,
    stagger: {
        each: 4,
        opacity: 0,
        from: "center",
        yoyo: true,
    },

    ease: Power1.easeOut,
})

//open video
let isVideo = ["https://www.youtube.com/embed/Vd2iUYm8PuY", "https://www.youtube.com/embed/Cb3yx070mRc"]

function openVideo(index){
    document.querySelector(".pos-f-t").setAttribute("style","bisibility:hidden;")
    let body = document.querySelector("body")
    body.style.overflowY = "hidden"
    let stageBg = document.querySelector(".stageBg")
    let video = document.querySelector(".video-content")
    let button = document.querySelector(".closeButton")
    let nav = document.querySelector(".pos-f-t")
    video.setAttribute("src", isVideo[index])
    button.removeAttribute("hidden")
    video.removeAttribute("hidden")
    stageBg.removeAttribute("hidden")
    nav.setAttribute("hidden", true)
}

function closeVideo() {
    let body = document.querySelector("body")
    body.style.overflowY = "scroll"
    let stageBg = document.querySelector(".stageBg")
    let video = document.querySelector(".video-content")
    let button = document.querySelector(".closeButton")
    let nav = document.querySelector(".pos-f-t")
    video.setAttribute("hidden", true)
    stageBg.setAttribute("hidden", true)
    button.setAttribute("hidden", true)
    video.removeAttribute("src")
    nav.removeAttribute("hidden")
}

                    