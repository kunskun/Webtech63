 let x = 3;
 let count = 0;
 window.addEventListener('wheel', function(event) {
     if (event.deltaY < 0) {
         console.log('scrolling up');
         document.getElementById('eiei').setAttribute('style', `margin-top:${+x}px`)
     } else if (event.deltaY > 0) {
         console.log('scrolling down');
         document.getElementById('eiei').style.marginTop -= x;
     }
 });

 function toLeft(obj){
    let x = obj.id
    document.getElementById(`arrow${x}`).setAttribute('class', 'arrow-move-left')
}

function toRight(obj){
    let x = obj.id
    document.getElementById(`arrow${x}`).setAttribute('class', 'arrow-move-right')
}

function prevSlide(obj) {
    if(count > 0){
        document.getElementById('slide5').setAttribute('style', 'position: absolute;margin-top: 5%;margin-left: 15%;transition-duration: 0.5s;')
        document.getElementById('bar5').setAttribute('style', 'width: 90%;transition-duration: 0.5s;')
        count--;
    }
    
}

function nextSlide(obj) {
    if(count == 0){
        document.getElementById('slide5').setAttribute('style', 'position: absolute;margin-top: 5%;margin-left: 0%;transition-duration: 0.5s;')
        document.getElementById('bar5').setAttribute('style', 'width: 100%;transition-duration: 0.5s;')
        count++;
    }
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