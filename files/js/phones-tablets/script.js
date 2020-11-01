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

function prevSlide() {
    if (count > 0) {
        if (count == 1) {
            count--;
            document.getElementById('slide ').setAttribute('style', 'margin-left: 10%; transition-duration: 0.5s;')
            document.getElementById('bar').setAttribute('style', 'width: 80%; transition-duration: 0.5s;')
        } else if (count == 2) {
            count--;
            document.getElementById('slide ').setAttribute('style', 'margin-left: 0%; transition-duration: 0.5s;')
            document.getElementById('bar').setAttribute('style', 'width: 90%; transition-duration: 0.5s;')
        }
    }
}

function nextSlide() {
    if (count == 0) {
        count++;
        document.getElementById('slide ').setAttribute('style', 'margin-left: 0%; transition-duration: 0.5s;')
        document.getElementById('bar').setAttribute('style', 'width: 90%; transition-duration: 0.5s;')
    } else if (count == 1) {
        count++;
        document.getElementById('slide ').setAttribute('style', 'margin-left: -10%; transition-duration: 0.5s;')
        document.getElementById('bar').setAttribute('style', 'width: 100%; transition-duration: 0.5s;')
    }
}

// function circleSizeUp(obj) {
//     obj.setAttribute('class', 'around')
// }