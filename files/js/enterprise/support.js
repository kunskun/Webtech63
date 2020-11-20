
var controller = new ScrollMagic.Controller();
let tl = gsap.timeline()

// section1
var moveSt1 = gsap.to("#move-st1", {
    left: -500,
    ease: Linear.easeNon,
});
myScene(moveSt1, 1500, "#move-st1")


// section2
var moveSt2 = gsap.from(".shape-circle-st2", {
    top: 100,
    ease: Linear.easeNon,
});

myScene(moveSt2, 1000, ".shape-circle-st2")

//learn more
gsap.registerEffect({
    name: "arrowMoveTop",
    defaults: {
        duration: 0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            y: -5,
            x: 5,
            ease: Linear.easeNone,
        });
    }
})

gsap.registerEffect({
    name: "arrowMoveRight",
    defaults: {
        duration: 0.2,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            left: 10,
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
            y: 0,
            x: 0,
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
            left: 0,
            ease: Linear.easeNone,
        });
    }
})


// section3

var moveSt3 = gsap.from(".shape-pills-st3", {
    top: 200,
    ease: Linear.easeNon,
});

myScene(moveSt3, 1000, ".shape-pills-st3")

let currentId = 0;

function changBG(id) {
    // let arrayButton = ["1-bt-st3", "2-bt-st3", "3-bt-st3", "4-bt-st3", "5-bt-st3"]
    let arrayButton = ["1-bt-st3", "2-bt-st3", "3-bt-st3", "4-bt-st3", "5-bt-st3", ]

    if (id === currentId) {
        console.log('pass')
    } else {
        currentId = id;
        for (let i = 0; i < 5; i++) {
            if (i !== id) {
                let button1 = document.getElementById(arrayButton[i])
                // let button1 = document.querySelector(arrayButton[i])
                button1.classList.remove("button-sec6-select")
                button1.style.backgroundColor = "White"
                button1.style.color = "#073042"

            } else {
                let button1 = document.getElementById(arrayButton[i])

                button1.classList.add("button-sec6-select")
                button1.style.backgroundColor = "#073042"
                button1.style.color = "White"
            }
        }
    }
}



gsap.registerEffect({
    name: "buttonEnter",
    defaults: {
        duration: 0.3,
        ease: Linear.easeNone,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            backgroundColor: "#073042",
            color: "white",
            ease: Linear.easeNone,
        });
    }
});
gsap.registerEffect({
    name: "buttonOut",
    defaults: {
        duration: 0.3,
        ease: Linear.easeNone
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            backgroundColor: "white",
            color: "#073042",
            ease: Linear.easeNone,
        });
    }
})

document.querySelectorAll(".button-sec3").forEach(function (box) {
    box.addEventListener("mouseenter", function () {
        gsap.effects.buttonEnter(this);
    });
});

document.querySelectorAll(".button-sec3").forEach(function (box) {
    let arrayButton = ["1-bt-st3", "2-bt-st3", "3-bt-st3", "4-bt-st3", "5-bt-st3", ]
    box.addEventListener("mouseout", function () {
        if (box.id != arrayButton[currentId]) {
            gsap.effects.buttonOut(this);
        }
    });
});






//section4


// section5


// section6
var moveSt6 = gsap.from(".shape-circle-st6", {
    top: -100,
    ease: Linear.easeNon,
});

myScene(moveSt6, 1000, ".shape-circle-st6")

// section7
var moveSt7 = gsap.from(".shape-circle-st7", {
    top: 200,
    ease: Linear.easeNon,
});

myScene(moveSt7, 1000, ".shape-circle-st7")

//section8



function myScene(tween, time, trigger) { // function scroll down
    var scene = new ScrollMagic.Scene({
            triggerElement: trigger,
            duration: time,
            // offset: 250
        })
        .setTween(tween)
        .addTo(controller);
}

let count = 12
let albumLen = 280;
let step = 0;

gsap.registerPlugin()
gsap.registerEffect({
    name: "moveRight",
    defaults: {
        duration: 0.1,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            width: count + "%",
            ease: Linear.easeNone,
        });
    }
})
gsap.registerEffect({
    name: "moveLeft",
    defaults: {
        duration: 0.1,
    }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            width: count + "%",
            ease: Linear.easeNone,
        });
    }
})
// arrow-to-top
document.querySelectorAll("#bt-right").forEach(function (box) {
    box.addEventListener("click", function () {
        if ((count + 12) >= 100) {
            gsap.to("#bt-right", {
                duration: 0.1,
                opacity: 0.2
            })
            gsap.to("#bt-left", {
                duration: 0.1,
                opacity: 1
            })
        }
        if (count < 100) {
            step += 1;
            count = count < 100 ? count + 12 : 100;
            let bar = document.querySelector(".progress-bar")
            gsap.effects.moveRight(bar)
            albumLen += (-1600)
            gsap.to("#album-st7", {
                duration: 0.3,
                left: albumLen
            })
            gsap.to("#bt-left", {
                duration: 0.1,
                opacity: 1
            })
        }
    });
});
document.querySelectorAll("#bt-left").forEach(function (box) {
    box.addEventListener("click", function () {
        if ((count - 12) <= 12) {
            gsap.to("#bt-left", {
                duration: 0.1,
                opacity: 0.2
            })
            gsap.to("#bt-right", {
                duration: 0.1,
                opacity: 1
            })
        }
        if (count > 12) {
            count = count <= 12 ? 12 : count - 12;
            let bar = document.querySelector(".progress-bar")
            gsap.effects.moveLeft(bar)
            albumLen += 1600
            gsap.to("#album-st7", {
                duration: 0.3,
                left: albumLen
            })
            gsap.to("#bt-right", {
                duration: 0.1,
                opacity: 1
            })
        }
    });
});

// video
function openVideo(link) {
    let body = document.querySelector("body")
    body.style.overflowY = "hidden"
    let stageBg = document.querySelector(".stageBg")
    let video = document.querySelector(".video-content")
    let button = document.querySelector(".closeButton")
    button.removeAttribute("hidden")
    video.setAttribute("src", link.id)
    video.removeAttribute("hidden")
    stageBg.removeAttribute("hidden")
}

function closeVideo() {
    let body = document.querySelector("body")
    body.style.overflowY = "scroll"
    let stageBg = document.querySelector(".stageBg")
    let video = document.querySelector(".video-content")
    let button = document.querySelector(".closeButton")

    video.removeAttribute("src")
    video.setAttribute("hidden", true)
    stageBg.setAttribute("hidden", true)
    button.setAttribute("hidden", true)
}




let jsonSt7 = [{
    "video": "OIvnz7fb0p0",
    "img": "https://lh3.googleusercontent.com/q7GA8_6RdFf2WeReYEI73qphEsvZG_SPTiOH-aCdAmfezpyOuDMajpjUAzzhcQf1rosEqTQ8JE6YuHb3S3-TcNH29hRhEf3vcMNQ=w933-e365-v1",
    "logo": "https://lh3.googleusercontent.com/-A3PyTqcdPy-VJKiNvRo32b4I3idWx-w81gt5VUGR762ZhtBZodrt7JHgBYwBBvRy_TqV5lnt3zQLGeLhmxUTJ2RXeQ11j4RiKy93A=w200-e365-v1",
    "headText": "Walmart turned to Android for more accuracy and better productivity.",
    "quote": "“There were so many frameworks for developers that it was an easy pick for us.”",
    "subText": "Travis Folck, Head of Design Systems, Walmart"
}, {
    "video": "oCw3zhHGU5I",
    "img": "https://lh3.googleusercontent.com/UBr4WXTZtrnsKLFBuWsO6MD8R5tKWfbdAijP6MVxrUti4QVUABZfFJ26ugdsGPPCrd2PGMNPbHGezJLvfU1VlIccHBR62rGZxplJDg=w200-rw-e365-v1",
    "logo": "https://lh3.googleusercontent.com/UBr4WXTZtrnsKLFBuWsO6MD8R5tKWfbdAijP6MVxrUti4QVUABZfFJ26ugdsGPPCrd2PGMNPbHGezJLvfU1VlIccHBR62rGZxplJDg=w200-rw-e365-v1",
    "headText": "SNCF partners with Android for more mobile agility.",
    "quote": "“For the business CIO, the value of Android Enterprise is to give them much more agility and opportunities in their mobility infrastructure management.”",
    "subText": "Antoine Houllgatte, Digital Workplace Project Deployment Manager, SNCF"
}, {
    "video": "LNEYdxi9ygM",
    "img": "https://lh3.googleusercontent.com/LXYCimidv7prkjdDyB4gwvJjfRJJFI22-HMI2ZUUOcP0ehYiWmAn816Zl-bGMOrY8vE73aL7b63W532bQivoRpOqsyiM8fKziEh0kg=w200-rw-e365-v1",
    "logo": "https://lh3.googleusercontent.com/UBr4WXTZtrnsKLFBuWsO6MD8R5tKWfbdAijP6MVxrUti4QVUABZfFJ26ugdsGPPCrd2PGMNPbHGezJLvfU1VlIccHBR62rGZxplJDg=w200-rw-e365-v1",
    "headText": "Driving product innovation at Pitney Bowes.",
    "quote": "“The Android platform is probably one of the most exciting things we’ve added to our products in a long, long time, because the possibilities are endless.”",
    "subText": "Chris Giles, VP, Global Product Management, Pitney Bowes"
}, {
    "video": "KdkBcq0o6Ic",
    "img": "https://lh3.googleusercontent.com/BO0d7yw5eR303fBe0HSYliNNQim-DH4EYSk1ISM7UxDCX4dhz3SlrozeoG06ndmD1G4Tb41qBIInUHpHlJ1jazp6G61ehm_kjRii5Eg=w933-rw-e365-v1",
    "logo": "https://lh3.googleusercontent.com/UJRRgPZXZ9RQ9jkZs3l9qpAyezkNNpzXs2OInc7qiKp6gTllippJOPTCuAZyhJ0z0WYbpexIu6xa6sG5ZmJq9DKjYcEKhVHJnulBlA=w200-rw-e365-v1",
    "headText": "Safelite Autoglass empowers their field techs to work smarter and more efficiently.",
    "quote": "“Anything that we could build into this functionality to make it easy for techs to use was important, and the very flexible framework that Android gave us allowed us to get this down to one click.”",
    "subText": "Nate Beckman, Field Systems Business Analyst, Safelite AutoGlass"
}, {
    "video": "UAhH21YfLP4",
    "img": "https://lh3.googleusercontent.com/ntAWsKrKcHV6uIRCmcGwa-e274LAdLw3v1jXya-t4HFqkkG6spzeU-RsIYlSJjUCiB1G731b8dlqnu8Kzy6pKKytv8ONZkZ5XQc-ww=w933-rw-e365-v1",
    "logo": "https://lh3.googleusercontent.com/775oFkHCS4Eay_jq9IHQvhhwC-mGBziPVnf4pmV2SXckJ4p-bsHTNQj5gZB9il3Bsj89cRR49upnw6-erGVbep-Um3ME8GwQ7IH1=w200-rw-e365-v1",
    "headText": "Marks & Spencer used the Android platform to solve key retail challenges.",
    "quote": "“The implementation was really smooth. We surprised a lot of people by rolling out 9,000 devices in six months.”",
    "subText": "Andrew Bull, IT Business Solution Manager, Marks & Spencer"
}, {
    "video": "gHDP4CTfFP8",
    "img": "https://lh3.googleusercontent.com/Sqzy_L26gmH7KhCxUtI86bwDJQBImsAPJVLLwTnlhCnOPXqFGcok6yksk-csN9TqKS9RePVSCzuPa7vKzl6x_d1IfEw0Pb2cfj-9Ww=w820-rw-e365-v1",
    "logo": "https://lh3.googleusercontent.com/hQqWNokqANpQAHU5CGjrwZIyaEhdSe8xyo9gq2s3TnHTUjQsdpvKiTY32IcK0sThRjl5Ncm2-nLLOLmAH1jY1eDwqnI7f6KL_CD15Q=w176-rw-e365-v1",
    "headText": "With Android, Guardian Life boosts productivity.",
    "quote": "“The Android platform creates a lot of opportunity around productivity tools. In addition to that, we also have an opportunity to deploy applications.”",
    "subText": "Daniel Johnson, CTO, Guardian Life Insurance"
}, {
    "video": "GWmz4QiZeQs",
    "img": "https://lh3.googleusercontent.com/S0AetUIeTRSQhZX2u6sAqlWMkwYV5tdV3SKk2Ce8NjW-6eRNf4BrgEMajat4x7c46IicFLBtl-Z6EB5MzPeIy5sm1Y4Y7DCM_xeoDz0=w820-rw-e365-v1",
    "logo": "https://lh3.googleusercontent.com/8mQI5sbTTLtIcbnTpAzoTdYBRT1D690wDJW3Ma3vF-0qoJC23g5K27W3KwIDTfj3BN-4Op4rXIs4w8Qg6WGzZBNyMsE62-TKhm5e=w176-rw-e365-v1",
    "headText": "Transforming the guest experience at The Peninsula Hotels.",
    "quote": "“Android is definitely a flexible tool for us to go above and beyond what our guests require, and above and beyond what we’d like our technology and devices to become.”",
    "subText": "Christopher Chan, Senior Manager, R&D, The Hongkong and Shanghai Hotels, Limited"
}, {
    "video": "oHMLI_CALLk",
    "img": "https://lh3.googleusercontent.com/bsQ7sbg9uRqb0i60sZnitf7u-aAWQ2kIwThWzalX9DVXh--AAmSv9CERsEEVqc4tOKUwpuuDLFTLKSLsUX5wIj4m1FMWwiOdF3er=w820-rw-e365-v1",
    "logo": "https://lh3.googleusercontent.com/CyPZu-kgdzq7yP_mYluNDQYfiibwglK3D1rOWhbvBw6g_CNXa4MCKI5vkCbOgso7ok80oA41SUA-q79UwOQlh7naBznx0qs_9wS1FA=w176-rw-e365-v1",
    "headText": "Android helps MiCab manage devices and protect data.",
    "quote": "“We're actually managing all of our devices via the cloud, remotely, instead of individually managing it.”",
    "subText": "Eddie Ybañez, Co-founder, MiCab"
}, {
    "video": "2kuGv9GNbTQ",
    "img": "https://lh3.googleusercontent.com/5yMP-Ay_B-oU3pM-CyfTrG7au413b5bINcSScVsBAOx3b-IXS90quB6bn57Mmi-JkFT6odpio04DtEgNT8064_zoyWsi6Kq_mAHaadI=w820-rw-e365-v1",
    "logo": "https://lh3.googleusercontent.com/RyCdOpLuIRf8lN0f3nxmU94ScnwS1QuZC_mCCRu5FB70KWjbsyS_PV_0xqaYOoxNcwZd4ANIwztp1M9pZKJHAyJqu5YdYQ8DzVqx1w=w176-rw-e365-v1",
    "headText": "Timely deliveries and satisfied customers at Chronopost.",
    "quote": "“Chronopost chose Android Enterprise to benefit from this solution in terms of data security, oversight of mobile devices and management of applications via Google Play.”",
    "subText": "Chams Fathallah, Director of IT Systems for Transport, Chronopost"
}, ]

let albumSt7 = document.querySelector("#album-st7");
for (let i = 0; i < jsonSt7.length; i++) {
    albumSt7.innerHTML += `
                    <div class="p-0 d-flex" style="width: 100%;">
                        <div class="card" style="width: 626px;border: none;">
                            <div id="${'https://www.youtube.com/embed/'+jsonSt7[i].video}" style="cursor: pointer;" onclick="openVideo(this)">
                                <svg style="z-index: 3;position:absolute; left:260;top:140px" class="modal-opener__play-icon"
                                    width="96" height="96" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
                                        <circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"></circle>
                                        <path class="play-icon"
                                            d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z"
                                            fill="#073042" fill-rule="nonzero"></path>
                                    </g>
                                </svg>
                                <img class="card-img-top"
                                    src="${jsonSt7[i].img}"
                                    alt="Card image cap">
                            </div>
                        </div>
                        <div class="card-body mt-4"
                            style="width: 500px; padding: 0px 80px 0px 0px;position: relative; margin: 0px 100px;">
                            <img class="mb-5" style="width: 35%;" src="${jsonSt7[i].logo}" alt="">
                            <p class="font-android font-weight-bold mb-5" style="font-size: 32px; line-height: 100%;">${jsonSt7[i].headText}</p>
                            <p class="font-android mb-4" style="font-size: 20px;">${jsonSt7[i].quote}</p>
                            <p class="font-roboto" style="font-size: 16px;">${jsonSt7[i].subText}</p>
                        </div>
                    </div>
                `
}

let jsonSt3 = [
    {
        "allTopic": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/F79z4lD2DMPRsRimwSB3tIapDx5_zb1FR8zZs532z2XouN7Nm2mFYXA0WYJvb0_dcho-l4c1aGRMWbcG-P7ADOQnc08MLEVag49qtJI=w1707-e365-v1",
                "topic": "Android Enterprise eBook: Every Worker. Every Use Case.",
                "subText": "Report/PDF",
                "body": "Android Enterprise is built to help employees work smarter without sacrificing privacy or controls. Learn more about the key benefits of Android Enterprise for your business by downloading our new eBook.",
                "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Android-Enterprise-eBook.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": [{
                    "video": "1DXpuIbHmRk",
                    "pic": "https://lh3.googleusercontent.com/xg-hyQXHQG6IgHthW3povj68xPhkmIQAPEhGOSQHaFcZpm8WlLWcs4xlarzmgXGws6laxQ3AWW-7TIJe00mqT3FRH9xSCBE02OPT=w667-e365-v1",
                    "topic": "The Android Work Profile overview video",
                    "subText": "Management · Video",
                    "body": "The Android work profile separates work and personal apps on a single device -- here's how.",
                    "link": "1DXpuIbHmRk",
                    "linkName": "Watch the video",
                    "arrow": "right"
                },
                {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/VTYSjZC62AJ_hpduct5GDy7OAwZkRkk_E-XB5ONvgLTe0qYPTb3Ex1JPWVX4YUVvgvZWsKXbMr7crUuYNNeq3ldLDg3PN-3P6BuJ=w667-e365-v1",
                    "topic": "Work Profile Security on Company-Owned Devices in Android 11",
                    "subText": "Security · Report/PDF",
                    "body": "Learn how Android 11 work profile security enhancements for company-owned devices preserve privacy without compromising security.",
                    "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Work-Profile-Security-on-Company-Owned-Devices-Paper.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                },
                {
                    "video": "1DXpuIbHmRk",
                    "pic": "https://lh3.googleusercontent.com/ZgOIXiiWcK4OYZqQ452wR5Hsxag20ze7o4y0z0PF0wVrswt-IWF4xi_QrXzWnYbvPAXh1MqmbysQhXAY55kO1hTMWl2ahnjHIrOI=w667-rw-e365-v1",
                    "topic": "Zero-touch enrollment overview video",
                    "subText": "Management · Video",
                    "body": "The Android work profile separates work and personal apps on a single device -- here's how.",
                    "link": "1DXpuIbHmRk",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": "u05cMfcNSWg",
                    "pic": "https://lh3.googleusercontent.com/sIr9Gt3R0QI4BlLU-wG-REgO9CmQq7Az2pc3gFTNxSYEQ8tr0poRFaLZZLVBoJNb_ePnjEUvr8zVOH34scZl6rqEOBDmDd1aWnxtjQ=w667-rw-e365-v1",
                    "topic": "App Management with Android Enterprise video",
                    "subText": "Management · Video",
                    "body": "Learn how to use Android Enterprise and Managed Play to publish, distribute, and manage apps.",
                    "link": "u05cMfcNSWg",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/ebuJW1M1DfXoUDuTGzpZ1BUkRdLWzGAS2CHRS3cWuL7qzl4IV1g1FPoGVZYLArnVtxuBn47iB-riKnPEDVdyfgLPGCFUzMkr0XzpMw=w667-rw-e365-v1",
                    "topic": "Zero-touch enrollment datasheet",
                    "subText": "Management · Datasheet",
                    "body": "Get an overview of how Android zero-touch enrollment works.",
                    "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Work-Profile-Security-on-Company-Owned-Devices-Paper.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/98sjeM746jxyRu-KwmLRd6_9gVo7Wq7fiRK14kve9oZh7umrOl0fXrsk_WU-pjV3smdHUkqPlg6sJaDbvU6AFoJb33c9vUTVZI4vKg=w667-rw-e365-v1",
                    "topic": "Zero-touch enrollment datasheet",
                    "subText": "User Adoption Kit",
                    "body": "This guide is designed to help your IT team communicate the features and benefits of Android Enterprise to new users across your organization. Use the contents of the kit to accelerate deployment, increase user satisfaction, and enhance your communication plan.",
                    "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Work-Profile-Security-on-Company-Owned-Devices-Paper.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }, {
                    "video": "EDsQHDSw2Go",
                    "pic": "https://lh3.googleusercontent.com/1kPVxOm_SFErwPOOWto1B9WCpxiyL8-Re3ll_BdsOFnNXMpT7PyrFUH5_Fe-m535PQ-VuC2yrMTDjPw0YJDXNFqJCXnUMsmYEj8VYA=w667-rw-e365-v1",
                    "topic": "Android Enterprise: flexibility and choice",
                    "subText": "Devices · Video",
                    "body": "Android provides the greatest flexibility, security and ease in managing your devices.",
                    "link": "EDsQHDSw2Go",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": "Vd2iUYm8PuY",
                    "pic": "https://lh3.googleusercontent.com/jkyDSN6_J8Z_7wo9RcI6CFkjgizSPVPNO4wcbHZ_2Sp-323xkVDfCqYFIci0iSkMeMo01bgwgwC4nJFe0lpJ3IdA3JBWlnpSIa_-U_g=w667-rw-e365-v1",
                    "topic": "Android Enterprise: management overview",
                    "subText": "Management · Video",
                    "body": "Android offers management options for any deployment, from strict lock‑down devices to personally‑enabled and single‑use scenarios.",
                    "link": "Vd2iUYm8PuY",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w667-rw-e365-v1",
                    "topic": "Android Enterprise management datasheet",
                    "subText": "Management · Datasheet",
                    "body": "Android makes it easy to manage every enterprise device use case.",
                    "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_One_pager-Management.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/CEha25RPOVbRah1ssMoXPB5qQ2b-Ym1C_E2DTpRrwGK5MGQovvH32TTjjjEYlm_odTNawGsWHTDKdhGXIYXkrgpXrlXxHo49cO6i=w667-rw-e365-v1",
                    "topic": "Company-owned devices datasheet",
                    "subText": "Management · Datasheet",
                    "body": "Learn how Android offers flexible and secure management options for corporate-owned devices.",
                    "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Company_owned_devices_datasheet_new_design.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }
            ]

        },
        "Management": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/F79z4lD2DMPRsRimwSB3tIapDx5_zb1FR8zZs532z2XouN7Nm2mFYXA0WYJvb0_dcho-l4c1aGRMWbcG-P7ADOQnc08MLEVag49qtJI=w1707-e365-v1",
                "topic": "Android Enterprise eBook: Every Worker. Every Use Case.",
                "subText": "Report/PDF",
                "body": "Android Enterprise is built to help employees work smarter without sacrificing privacy or controls. Learn more about the key benefits of Android Enterprise for your business by downloading our new eBook.",
                "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Android-Enterprise-eBook.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": [{
                    "video": "1DXpuIbHmRk",
                    "pic": "https://lh3.googleusercontent.com/xg-hyQXHQG6IgHthW3povj68xPhkmIQAPEhGOSQHaFcZpm8WlLWcs4xlarzmgXGws6laxQ3AWW-7TIJe00mqT3FRH9xSCBE02OPT=w667-e365-v1",
                    "topic": "The Android Work Profile overview video",
                    "subText": "Management · Video",
                    "body": "The Android work profile separates work and personal apps on a single device -- here's how.",
                    "link": "1DXpuIbHmRk",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": "1DXpuIbHmRk",
                    "pic": "https://lh3.googleusercontent.com/ZgOIXiiWcK4OYZqQ452wR5Hsxag20ze7o4y0z0PF0wVrswt-IWF4xi_QrXzWnYbvPAXh1MqmbysQhXAY55kO1hTMWl2ahnjHIrOI=w667-rw-e365-v1",
                    "topic": "Zero-touch enrollment overview video",
                    "subText": "Management · Video",
                    "body": "The Android work profile separates work and personal apps on a single device -- here's how.",
                    "link": "1DXpuIbHmRk",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": "u05cMfcNSWg",
                    "pic": "https://lh3.googleusercontent.com/sIr9Gt3R0QI4BlLU-wG-REgO9CmQq7Az2pc3gFTNxSYEQ8tr0poRFaLZZLVBoJNb_ePnjEUvr8zVOH34scZl6rqEOBDmDd1aWnxtjQ=w667-rw-e365-v1",
                    "topic": "App Management with Android Enterprise video",
                    "subText": "Management · Video",
                    "body": "Learn how to use Android Enterprise and Managed Play to publish, distribute, and manage apps.",
                    "link": "u05cMfcNSWg",
                    "linkName": "Watch the video",
                    "arrow": "right"
                },
                {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/ebuJW1M1DfXoUDuTGzpZ1BUkRdLWzGAS2CHRS3cWuL7qzl4IV1g1FPoGVZYLArnVtxuBn47iB-riKnPEDVdyfgLPGCFUzMkr0XzpMw=w667-rw-e365-v1",
                    "topic": "Zero-touch enrollment datasheet",
                    "subText": "Management · Datasheet",
                    "body": "Get an overview of how Android zero-touch enrollment works.",
                    "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Zero-touch-data-sheet-2020.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/98sjeM746jxyRu-KwmLRd6_9gVo7Wq7fiRK14kve9oZh7umrOl0fXrsk_WU-pjV3smdHUkqPlg6sJaDbvU6AFoJb33c9vUTVZI4vKg=w667-rw-e365-v1",
                    "topic": "User Adoption Kit",
                    "subText": "Management · Datasheet",
                    "body": "This guide is designed to help your IT team communicate the features and benefits of Android Enterprise to new users across your organization. Use the contents of the kit to accelerate deployment, increase user satisfaction, and enhance your communication plan.",
                    "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Android_Enterprise_User_Adoption_Overview%20(Digital).pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }, {
                    "video": "EDsQHDSw2Go",
                    "pic": "https://lh3.googleusercontent.com/jkyDSN6_J8Z_7wo9RcI6CFkjgizSPVPNO4wcbHZ_2Sp-323xkVDfCqYFIci0iSkMeMo01bgwgwC4nJFe0lpJ3IdA3JBWlnpSIa_-U_g=w667-rw-e365-v1",
                    "topic": "Android Enterprise: flexibility and choice",
                    "subText": "Management · Video",
                    "body": "Android provides the greatest flexibility, security and ease in managing your devices.",
                    "link": "EDsQHDSw2Go",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w667-rw-e365-v1",
                    "topic": "Android Enterprise management datasheet",
                    "subText": "Management · Datasheet",
                    "body": "Android makes it easy to manage every enterprise device use case.",
                    "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_One_pager-Management.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/CEha25RPOVbRah1ssMoXPB5qQ2b-Ym1C_E2DTpRrwGK5MGQovvH32TTjjjEYlm_odTNawGsWHTDKdhGXIYXkrgpXrlXxHo49cO6i=w667-rw-e365-v1",
                    "topic": "Company-owned devices datasheet",
                    "subText": "Management · Datasheet",
                    "body": "Learn how Android offers flexible and secure management options for corporate-owned devices.",
                    "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Company_owned_devices_datasheet_new_design.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }
            ]

        },
        "Security": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/VTYSjZC62AJ_hpduct5GDy7OAwZkRkk_E-XB5ONvgLTe0qYPTb3Ex1JPWVX4YUVvgvZWsKXbMr7crUuYNNeq3ldLDg3PN-3P6BuJ=w667-rw-e365-v1",
                "topic": "Work Profile Security on Company-Owned Devices in Android 11",
                "subText": "Security · Report/PDF",
                "body": "Learn how Android 11 work profile security enhancements for company-owned devices preserve privacy without compromising security.",
                "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Work-Profile-Security-on-Company-Owned-Devices-Paper.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": [{
                    "video": "Cb3yx070mRc",
                    "pic": "https://lh3.googleusercontent.com/r7Tip12TI2h806TMLgLg6rV3qF5tAO8ChzWEATt-MAY6qkWH4vBvd1XWcTrvfUuuGF4ZfDnRSSd33D0t1d7z0qxIUhCehDFmpoil6w=w667-rw-e365-v1",
                    "topic": "Android Enterprise: security overview",
                    "subText": "Security · Video",
                    "body": "With multi-layered security protections built in, Android Enterprise works to keep company data safe and personal data private on all mobile devices.",
                    "link": "Cb3yx070mRc",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/IzyAwCKex5WZrLMyOA9OdvkQt9kmzNhIzjjekgix5Reg_rRwbY8gZWSV3w1UbRhw3hn0hmwJPPiqmYiixGfgNExZsAneuGOHIjqeDJE=w667-rw-e365-v1",
                    "topic": "Android security white paper",
                    "subText": "Security · Report/PDF",
                    "body": "Learn how our industry-leading security practices protect organizations of all kinds.",
                    "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Security_White_Paper_2019.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }, {
                    "video": "nV3Kln7sgG4",
                    "pic": "https://lh3.googleusercontent.com/pOIlUrCOOZGKOlALjGpL9nB3rAsEYn1quX1G3s_-y-la7bq7Oc3-2axEgGQEbUNit8NVTSe4KGB9CZdtCykpbUMgg5WJeX7Gtbpp=w667-rw-e365-v1",
                    "topic": "Google Security Services on Android",
                    "subText": "Security · Video",
                    "body": "Learn how Google Security Services such as SafetyNet, Play Protect, and Safe Browsing extend the security of Android devices.",
                    "link": "nV3Kln7sgG4",
                    "linkName": "Watch the video",
                    "arrow": "right"
                },
                {
                    "video": "JAg5QzF3Kjs",
                    "pic": "https://lh3.googleusercontent.com/cSCwLqzL4N1MuLqpr-bu4PoPJAJYemXo1fjeh8WIUjg3Pm3MoekWOVyhpdxFo307DyHaXaxOSkkiDPs8IPxBwrfsnzVWphauC0ZG4A=w667-rw-e365-v1",
                    "topic": "Deploying Android Devices Securely (Best Practices)",
                    "subText": "Security · Video",
                    "body": "Learn the best practices for securely deploying Android devices.",
                    "link": "JAg5QzF3Kjs",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": "slOLAH7BlVI",
                    "pic": "https://lh3.googleusercontent.com/k095TKuQh7ddrskShEqvDrEw_nWIkZLplV3C8ODQYtm9NdrI_IOl7pjgLdTPvIajPjmUzTvzjTwIxVmDXBu_POj0EiF2czsyfM_N2lY=w667-rw-e365-v1",
                    "topic": "Android Vulnerabilities, Exploits, and Malware Explained",
                    "subText": "Security · Video",
                    "body": "Learn how Android can help you mitigate vulnerabilities, exploits, and malware risks.",
                    "link": "slOLAH7BlVI",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": "7BURjgClVCw",
                    "pic": "https://lh3.googleusercontent.com/YV6NEAdVx94cN0hQvQOSI8bq2KHpHiBFkvquLCDXAXMOAQhSvcOg-8DUtx-etieMfJp1150GRAKpZPXHc1QIaIQgXm16Xy5aieTk-oc=w667-rw-e365-v1",
                    "topic": "Learn the truth about Android updates",
                    "subText": "Security · Video",
                    "body": "Learn how Google is ensuring more regular updates and security patching for Android devices.",
                    "link": "7BURjgClVCw",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/kM7eybFnZ805Pu1JKRU4R-Or-aA1nmDA_qHzI2W8ngLx89rZz-HCSjAefiq_cZ-59GJ_xEM2zZbXMFnAzJmgs3nt8vgoC5d4LlJ2pw=w667-rw-e365-v1",
                    "topic": "Android security datasheet",
                    "subText": "Security · Datasheet",
                    "body": "Learn how Android Enterprise Recommended makes it easy for businesses to select, deploy and manage Android devices.",
                    "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Security_Data_Sheet.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/vEdyigIBs0ZETY2I4YId1cyEO_llMs-jVgGzi1ZwPrcagy35142QFf18fTUukLeVaxhkrKczIVdGrUwojBHjaC04cmcYH2VAKsoOiA=w667-rw-e365-v1",
                    "topic": "Android security: 2018 year in review",
                    "subText": "Security · Report/PDF",
                    "body": "Get an overview of our security protections and read how Google services protect the Android ecosystem.",
                    "link": "https://source.android.com/security/reports/Google_Android_Security_2018_Report_Final.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }
            ]

        },
        "Device": {
            "main": {
                "video": "EDsQHDSw2Go",
                "pic": "https://lh3.googleusercontent.com/1kPVxOm_SFErwPOOWto1B9WCpxiyL8-Re3ll_BdsOFnNXMpT7PyrFUH5_Fe-m535PQ-VuC2yrMTDjPw0YJDXNFqJCXnUMsmYEj8VYA=w1334-rw-e365-v1",
                "topic": "Android Enterprise: flexibility and choice",
                "subText": "Device · Video",
                "body": "Android provides the greatest flexibility, security and ease in managing your devices.",
                "link": "EDsQHDSw2Go",
                "linkName": "Watch the video",
                "arrow": "right"
            },
            "other": [{
                "video": false,
                "pic": "https://lh3.googleusercontent.com/OujyUr91hauu5O8I7TiQLapfhTsLQw57Di_lL4vFv1ZuX-aNJwfFeGk3K0QViBG6QTeSIxIlOtKJI-6lD5G3Vtz-QSzA8NkXtWFC8g=w667-rw-e365-v1",
                "topic": "Android device choice datasheet",
                "subText": "Device · Datasheet",
                "body": "Android offers the world's broadest mobility hardware ecosystem.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Choice_datasheet_new_design.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/ZZqJCbVU0cwtNFJq5zys-AUzHxcxl3rVVwfQuMIW1G2nlAwzhNZOFIDtd0dhhC9HOv03VTir2R7phHAqROqtsi-hBjVAdSw-03h0fg=w667-rw-e365-v1",
                "topic": "Android Enterprise Recommended (Rugged)",
                "subText": "Device · Datasheet",
                "body": "Making it easier to identify and select validated rugged devices.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Recommended_RUGGED_One_Pager.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/ht5LoSoOXfj37mcU5eZyeOVLJ-RrdFOzfGr8B0C2dPcP-h7Sk4z6Ah9vXReNn6faBKJ3JnQXC0k5LMZZrbvdeuLqHuvz7vH4tcvS_Q=w667-rw-e365-v1",
                "topic": "Android Enterprise Recommended datasheet",
                "subText": "Device · Datasheet",
                "body": "With Android Enterprise Recommended, there's a simple way to find the devices and services that meet your Enterprise requirements.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Recommended_Datasheet_w_o_carrier.pdf",
                "linkName": "Watch the video",
                "arrow": "right"
            }]

        },
        "Employees": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/oQpGs99ipcf6v-LDVURnaEPK62rx__m_7Nzl698yHlMqTpPxKjIzO277ybeCBWnKeRIxFCZQ0N-N4UvI_ZbwZSo9GtaGPb0rcXEbaw=w1334-rw-e365-v1",
                "topic": "BYOD datasheet",
                "subText": "Employees · Datasheet",
                "body": "Learn how Android privacy and productivity works on employee-owned devices using the work profile.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/BYOD_datasheet_new_design.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": false
        }
    },
    {
        "allTopic": {
            "main": {
                "video": "1DXpuIbHmRk",
                "pic": "https://lh3.googleusercontent.com/xg-hyQXHQG6IgHthW3povj68xPhkmIQAPEhGOSQHaFcZpm8WlLWcs4xlarzmgXGws6laxQ3AWW-7TIJe00mqT3FRH9xSCBE02OPT=w1334-e365-v1",
                "topic": "The Android Work Profile overview video",
                "subText": "Management · Video",
                "body": "The Android work profile separates work and personal apps on a single device -- here's how.",
                "link": "1DXpuIbHmRk",
                "linkName": "Watch the video",
                "arrow": "right"
            },
            "other": [{
                "video": "1DXpuIbHmRk",
                "pic": "https://lh3.googleusercontent.com/ZgOIXiiWcK4OYZqQ452wR5Hsxag20ze7o4y0z0PF0wVrswt-IWF4xi_QrXzWnYbvPAXh1MqmbysQhXAY55kO1hTMWl2ahnjHIrOI=w667-rw-e365-v1",
                "topic": "Zero-touch enrollment overview video",
                "subText": "Management · Video",
                "body": "The Android work profile separates work and personal apps on a single device -- here's how.",
                "link": "1DXpuIbHmRk",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "u05cMfcNSWg",
                "pic": "https://lh3.googleusercontent.com/VTYSjZC62AJ_hpduct5GDy7OAwZkRkk_E-XB5ONvgLTe0qYPTb3Ex1JPWVX4YUVvgvZWsKXbMr7crUuYNNeq3ldLDg3PN-3P6BuJ=w667-e365-v1",
                "topic": "App Management with Android Enterprise video",
                "subText": "Management · Video",
                "body": "Learn how to use Android Enterprise and Managed Play to publish, distribute, and manage apps.",
                "link": "u05cMfcNSWg",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "EDsQHDSw2Go",
                "pic": "https://lh3.googleusercontent.com/1kPVxOm_SFErwPOOWto1B9WCpxiyL8-Re3ll_BdsOFnNXMpT7PyrFUH5_Fe-m535PQ-VuC2yrMTDjPw0YJDXNFqJCXnUMsmYEj8VYA=w667-rw-e365-v1",
                "topic": "Android Enterprise: flexibility and choice",
                "subText": "Devices · Video",
                "body": "Android provides the greatest flexibility, security and ease in managing your devices.",
                "link": "EDsQHDSw2Go",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "Vd2iUYm8PuY",
                "pic": "https://lh3.googleusercontent.com/jkyDSN6_J8Z_7wo9RcI6CFkjgizSPVPNO4wcbHZ_2Sp-323xkVDfCqYFIci0iSkMeMo01bgwgwC4nJFe0lpJ3IdA3JBWlnpSIa_-U_g=w667-rw-e365-v1",
                "topic": "Android Enterprise: management overview",
                "subText": "Management · Video",
                "body": "Android offers management options for any deployment, from strict lock‑down devices to personally‑enabled and single‑use scenarios.",
                "link": "Vd2iUYm8PuY",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "nV3Kln7sgG4",
                "pic": "https://lh3.googleusercontent.com/pOIlUrCOOZGKOlALjGpL9nB3rAsEYn1quX1G3s_-y-la7bq7Oc3-2axEgGQEbUNit8NVTSe4KGB9CZdtCykpbUMgg5WJeX7Gtbpp=w667-rw-e365-v1",
                "topic": "Google Security Services on Android",
                "subText": "Security · Video",
                "body": "Learn how Google Security Services such as SafetyNet, Play Protect, and Safe Browsing extend the security of Android devices.",
                "link": "nV3Kln7sgG4",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "JAg5QzF3Kjs",
                "pic": "https://lh3.googleusercontent.com/cSCwLqzL4N1MuLqpr-bu4PoPJAJYemXo1fjeh8WIUjg3Pm3MoekWOVyhpdxFo307DyHaXaxOSkkiDPs8IPxBwrfsnzVWphauC0ZG4A=w667-rw-e365-v1",
                "topic": "Android Enterprise: management overview",
                "subText": "Security · Video",
                "body": "Learn the best practices for securely deploying Android devices.",
                "link": "JAg5QzF3Kjs",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "Vd2iUYm8PuY",
                "pic": "https://lh3.googleusercontent.com/k095TKuQh7ddrskShEqvDrEw_nWIkZLplV3C8ODQYtm9NdrI_IOl7pjgLdTPvIajPjmUzTvzjTwIxVmDXBu_POj0EiF2czsyfM_N2lY=w667-rw-e365-v1",
                "topic": "Android Vulnerabilities, Exploits, and Malware Explained",
                "subText": "Security · Video",
                "body": "Learn how Android can help you mitigate vulnerabilities, exploits, and malware risks",
                "link": "Vd2iUYm8PuY",
                "linkName": "Watch the video",
                "arrow": "right"
            }]

        },
        "Management": {
            "main": {
                "video": "1DXpuIbHmRk",
                "pic": "https://lh3.googleusercontent.com/xg-hyQXHQG6IgHthW3povj68xPhkmIQAPEhGOSQHaFcZpm8WlLWcs4xlarzmgXGws6laxQ3AWW-7TIJe00mqT3FRH9xSCBE02OPT=w1334-e365-v1",
                "topic": "The Android Work Profile overview video",
                "subText": "Management · Video",
                "body": "The Android work profile separates work and personal apps on a single device -- here's how.",
                "link": "1DXpuIbHmRk",
                "linkName": "Watch the video",
                "arrow": "right"
            },
            "other": [{
                "video": "1DXpuIbHmRk",
                "pic": "https://lh3.googleusercontent.com/ZgOIXiiWcK4OYZqQ452wR5Hsxag20ze7o4y0z0PF0wVrswt-IWF4xi_QrXzWnYbvPAXh1MqmbysQhXAY55kO1hTMWl2ahnjHIrOI=w667-rw-e365-v1",
                "topic": "Zero-touch enrollment overview video",
                "subText": "Management · Video",
                "body": "The Android work profile separates work and personal apps on a single device -- here's how.",
                "link": "1DXpuIbHmRk",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "u05cMfcNSWg",
                "pic": "https://lh3.googleusercontent.com/VTYSjZC62AJ_hpduct5GDy7OAwZkRkk_E-XB5ONvgLTe0qYPTb3Ex1JPWVX4YUVvgvZWsKXbMr7crUuYNNeq3ldLDg3PN-3P6BuJ=w667-e365-v1",
                "topic": "App Management with Android Enterprise video",
                "subText": "Management · Video",
                "body": "Learn how to use Android Enterprise and Managed Play to publish, distribute, and manage apps.",
                "link": "u05cMfcNSWg",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "EDsQHDSw2Go",
                "pic": "https://lh3.googleusercontent.com/1kPVxOm_SFErwPOOWto1B9WCpxiyL8-Re3ll_BdsOFnNXMpT7PyrFUH5_Fe-m535PQ-VuC2yrMTDjPw0YJDXNFqJCXnUMsmYEj8VYA=w667-rw-e365-v1",
                "topic": "Android Enterprise: flexibility and choice",
                "subText": "Management · Video",
                "body": "Android provides the greatest flexibility, security and ease in managing your devices.",
                "link": "EDsQHDSw2Go",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "Y5sDMOb6Nzc",
                "pic": "https://lh3.googleusercontent.com/Ny6p8G7ACzo6UcP4ZLwfK2oxScTIh2LStCXl1BAv2asI-sC4PMsncnpbMQXuSCK7woky4uZAhy15SX3zR5p-lGiUmKirIU1zCYLqYg=w667-rw-e365-v1",
                "topic": "Android Enterprise vs Device Admin",
                "subText": "Management · Video",
                "body": "Why you should migrate from Device Admin to Android Enterprise.",
                "link": "Y5sDMOb6Nzc",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "CMzpljLcwFk",
                "pic": "https://lh3.googleusercontent.com/W-skYa0pw-cEa394kaTCHWARDDyeQtSC8YJv-HQLlA29OuE31BL4EmQC1VEH0-MQg1KRPEoomDbR516Btax7n6X2dRVCx6qMChxeKQ=w667-rw-e365-v1",
                "topic": "Zero-touch enrollment setup video",
                "subText": "Management · Video",
                "body": "See how easy it is to set up zero-touch enrollment for your organization.",
                "link": "CMzpljLcwFk",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "tRdxqQD3Opk",
                "pic": "https://lh3.googleusercontent.com/0gFzllki6V1yYobZef10647R9ZeCNtWuDAOmniHmQWyoP7s-QPuGanuOAzYmK0SmJ_S195eAKbJOlwk8gZCHys0r2Fjol8n0N4GkCII=w741-rw-e365-v1",
                "topic": "Android Enterprise: Device Deprecation 2020",
                "subText": "Management · Video",
                "body": "Here's how to prepare for Device Admin deprecation.",
                "link": "tRdxqQD3Opk",
                "linkName": "Watch the video",
                "arrow": "right"
            }, {
                "video": "SIf7WnOBbuc",
                "pic": "https://lh3.googleusercontent.com/iMKmMH4b0cR0NrhPoxAYzm-1AFas_tBNVPwWxvDix6zxpD9XYqFSpryyO_Ui7M_fRYRm_WscuWvW9OQ4bbxGHxQGE6JgyAfx80gnbQ=w741-rw-e365-v1",
                "topic": "Android Enterprise: migration plan",
                "subText": "Management · Video",
                "body": "Best practices for migrating from Device Admin to Android Enterprise.",
                "link": "SIf7WnOBbuc",
                "linkName": "Watch the video",
                "arrow": "right"
            }]

        },
        "Security": {
            "main": {
                "video": "Cb3yx070mRc",
                "pic": "https://lh3.googleusercontent.com/r7Tip12TI2h806TMLgLg6rV3qF5tAO8ChzWEATt-MAY6qkWH4vBvd1XWcTrvfUuuGF4ZfDnRSSd33D0t1d7z0qxIUhCehDFmpoil6w=w1334-e365-v1",
                "topic": "Android Enterprise: security overview",
                "subText": "Security · Video",
                "body": "With multi-layered security protections built in, Android Enterprise works to keep company data safe and personal data private on all mobile devices.",
                "link": "Cb3yx070mRc",
                "linkName": "Watch the video",
                "arrow": "right"
            },
            "other": [{
                    "video": "nV3Kln7sgG4",
                    "pic": "https://lh3.googleusercontent.com/pOIlUrCOOZGKOlALjGpL9nB3rAsEYn1quX1G3s_-y-la7bq7Oc3-2axEgGQEbUNit8NVTSe4KGB9CZdtCykpbUMgg5WJeX7Gtbpp=w667-rw-e365-v1",
                    "topic": "Google Security Services on Android",
                    "subText": "Security · Video",
                    "body": "Learn how Google Security Services such as SafetyNet, Play Protect, and Safe Browsing extend the security of Android devices.",
                    "link": "nV3Kln7sgG4",
                    "linkName": "Watch the video",
                    "arrow": "right"
                },
                {
                    "video": "JAg5QzF3Kjs",
                    "pic": "https://lh3.googleusercontent.com/ebuJW1M1DfXoUDuTGzpZ1BUkRdLWzGAS2CHRS3cWuL7qzl4IV1g1FPoGVZYLArnVtxuBn47iB-riKnPEDVdyfgLPGCFUzMkr0XzpMw=w667-rw-e365-v1",
                    "topic": "Deploying Android Devices Securely (Best Practices)",
                    "subText": "Security · Video",
                    "body": "Learn the best practices for securely deploying Android devices.",
                    "link": "JAg5QzF3Kjs",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": "slOLAH7BlVI",
                    "pic": "https://lh3.googleusercontent.com/k095TKuQh7ddrskShEqvDrEw_nWIkZLplV3C8ODQYtm9NdrI_IOl7pjgLdTPvIajPjmUzTvzjTwIxVmDXBu_POj0EiF2czsyfM_N2lY=w667-rw-e365-v1",
                    "topic": "Android Vulnerabilities, Exploits, and Malware Explained",
                    "subText": "Security · Video",
                    "body": "Learn how Android can help you mitigate vulnerabilities, exploits, and malware risks.",
                    "link": "slOLAH7BlVI",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": "7BURjgClVCw",
                    "pic": "https://lh3.googleusercontent.com/YV6NEAdVx94cN0hQvQOSI8bq2KHpHiBFkvquLCDXAXMOAQhSvcOg-8DUtx-etieMfJp1150GRAKpZPXHc1QIaIQgXm16Xy5aieTk-oc=w667-rw-e365-v1",
                    "topic": "Learn the truth about Android updates",
                    "subText": "Security · Video",
                    "body": "Learn how Google is ensuring more regular updates and security patching for Android devices.",
                    "link": "7BURjgClVCw",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }, {
                    "video": "6Ct1RBFjwI0",
                    "pic": "https://lh3.googleusercontent.com/e1fuVmrmMOHH5Ss3KbdMcWh8nOcS54eai9O1YFCNmOucyqZw9HdVgxdJJ4eFcS85rB6jBgRQhToUonGpdpOXsv33PAvxbscLdwcRHQ=w741-rw-e365-v1",
                    "topic": "Android Security and Privacy 2018 Year in Review overview",
                    "subText": "Security · Video",
                    "body": "Dave Kleidermacher, Vice President of Android Security and Privacy discusses the highlights from the Android Security & Privacy 2018 Year in Review report.",
                    "link": "6Ct1RBFjwI0",
                    "linkName": "Watch the video",
                    "arrow": "right"
                }
            ]

        },
        "Device": {
            "main": {
                "video": "EDsQHDSw2Go",
                "pic": "https://lh3.googleusercontent.com/1kPVxOm_SFErwPOOWto1B9WCpxiyL8-Re3ll_BdsOFnNXMpT7PyrFUH5_Fe-m535PQ-VuC2yrMTDjPw0YJDXNFqJCXnUMsmYEj8VYA=w1334-e365-v1 ",
                "topic": "Android Enterprise: flexibility and choice",
                "subText": "Device · Video",
                "body": "Android provides the greatest flexibility, security and ease in managing your devices.",
                "link": "EDsQHDSw2Go",
                "linkName": "Watch the video",
                "arrow": "right"
            },
            "other": false
        },
        "Employees": {
            "main": false,
            "other": false
        }
    },
    {
        "allTopic": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/ebuJW1M1DfXoUDuTGzpZ1BUkRdLWzGAS2CHRS3cWuL7qzl4IV1g1FPoGVZYLArnVtxuBn47iB-riKnPEDVdyfgLPGCFUzMkr0XzpMw=w667-rw-e365-v1",
                "topic": "Zero-touch enrollment datasheet",
                "subText": "Management · Datasheet",
                "body": "Get an overview of how Android zero-touch enrollment works.",
                "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Work-Profile-Security-on-Company-Owned-Devices-Paper.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": [{
                "video": false,
                "pic": "https://lh3.googleusercontent.com/ebuJW1M1DfXoUDuTGzpZ1BUkRdLWzGAS2CHRS3cWuL7qzl4IV1g1FPoGVZYLArnVtxuBn47iB-riKnPEDVdyfgLPGCFUzMkr0XzpMw=w667-rw-e365-v1",
                "topic": "Zero-touch enrollment datasheet",
                "subText": "User Adoption Kit",
                "body": "This guide is designed to help your IT team communicate the features and benefits of Android Enterprise to new users across your organization. Use the contents of the kit to accelerate deployment, increase user satisfaction, and enhance your communication plan.",
                "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Work-Profile-Security-on-Company-Owned-Devices-Paper.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w667-rw-e365-v1",
                "topic": "Android Enterprise management datasheet",
                "subText": "Management · Datasheet",
                "body": "Android makes it easy to manage every enterprise device use case.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_One_pager-Management.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/CEha25RPOVbRah1ssMoXPB5qQ2b-Ym1C_E2DTpRrwGK5MGQovvH32TTjjjEYlm_odTNawGsWHTDKdhGXIYXkrgpXrlXxHo49cO6i=w667-rw-e365-v1",
                "topic": "Company-owned devices datasheet",
                "subText": "Management · Datasheet",
                "body": "Learn how Android offers flexible and secure management options for corporate-owned devices.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Company_owned_devices_datasheet_new_design.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/kM7eybFnZ805Pu1JKRU4R-Or-aA1nmDA_qHzI2W8ngLx89rZz-HCSjAefiq_cZ-59GJ_xEM2zZbXMFnAzJmgs3nt8vgoC5d4LlJ2pw=w741-rw-e365-v1",
                "topic": "Android security datasheet",
                "subText": "Security · Datasheet",
                "body": "Learn how Android Enterprise Recommended makes it easy for businesses to select, deploy and manage Android devices.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Security_Data_Sheet.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/OujyUr91hauu5O8I7TiQLapfhTsLQw57Di_lL4vFv1ZuX-aNJwfFeGk3K0QViBG6QTeSIxIlOtKJI-6lD5G3Vtz-QSzA8NkXtWFC8g=w741-rw-e365-v1",
                "topic": "Android device choice datasheet",
                "subText": "Devices · Datasheet",
                "body": "Android offers the world's broadest mobility hardware ecosystem.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Choice_datasheet_new_design.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/ZZqJCbVU0cwtNFJq5zys-AUzHxcxl3rVVwfQuMIW1G2nlAwzhNZOFIDtd0dhhC9HOv03VTir2R7phHAqROqtsi-hBjVAdSw-03h0fg=w741-rw-e365-v1",
                "topic": "Android Enterprise Recommended (Rugged)",
                "subText": "Devices · Datasheet",
                "body": "Learn how Android offers flexible and secure management options for corporate-owned devices.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Recommended_RUGGED_One_Pager.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w741-rw-e365-v1",
                "topic": "Device Admin deprecation datasheet",
                "subText": "Management · Datasheet",
                "body": "Learn how to migrate from Device Admin to modern management with Android Enterprise.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Device_Admin_Deprecation_Data_Sheet.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/oQpGs99ipcf6v-LDVURnaEPK62rx__m_7Nzl698yHlMqTpPxKjIzO277ybeCBWnKeRIxFCZQ0N-N4UvI_ZbwZSo9GtaGPb0rcXEbaw=w741-rw-e365-v1",
                "topic": "BYOD datasheet",
                "subText": "Management · Datasheet",
                "body": "Learn how Android privacy and productivity works on employee-owned devices using the work profile.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/BYOD_datasheet_new_design.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }]

        },
        "Management": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/ebuJW1M1DfXoUDuTGzpZ1BUkRdLWzGAS2CHRS3cWuL7qzl4IV1g1FPoGVZYLArnVtxuBn47iB-riKnPEDVdyfgLPGCFUzMkr0XzpMw=w667-rw-e365-v1",
                "topic": "Zero-touch enrollment datasheet",
                "subText": "Management · Datasheet",
                "body": "Get an overview of how Android zero-touch enrollment works.",
                "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Zero-touch-data-sheet-2020.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": [{
                "video": false,
                "pic": "https://lh3.googleusercontent.com/98sjeM746jxyRu-KwmLRd6_9gVo7Wq7fiRK14kve9oZh7umrOl0fXrsk_WU-pjV3smdHUkqPlg6sJaDbvU6AFoJb33c9vUTVZI4vKg=w667-rw-e365-v1",
                "topic": "User Adoption Kit",
                "subText": "Management · Datasheet",
                "body": "This guide is designed to help your IT team communicate the features and benefits of Android Enterprise to new users across your organization. Use the contents of the kit to accelerate deployment, increase user satisfaction, and enhance your communication plan.",
                "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Android_Enterprise_User_Adoption_Overview%20(Digital).pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w667-rw-e365-v1",
                "topic": "Android Enterprise management datasheet",
                "subText": "Management · Datasheet",
                "body": "Android makes it easy to manage every enterprise device use case.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_One_pager-Management.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/CEha25RPOVbRah1ssMoXPB5qQ2b-Ym1C_E2DTpRrwGK5MGQovvH32TTjjjEYlm_odTNawGsWHTDKdhGXIYXkrgpXrlXxHo49cO6i=w667-rw-e365-v1",
                "topic": "Company-owned devices datasheet",
                "subText": "Management · Datasheet",
                "body": "Learn how Android offers flexible and secure management options for corporate-owned devices.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Company_owned_devices_datasheet_new_design.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w741-rw-e365-v1",
                "topic": "Device Admin deprecation datasheet",
                "subText": "Management · Datasheet",
                "body": "Learn how to migrate from Device Admin to modern management with Android Enterprise.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Device_Admin_Deprecation_Data_Sheet.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }]

        },
        "Security": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/kM7eybFnZ805Pu1JKRU4R-Or-aA1nmDA_qHzI2W8ngLx89rZz-HCSjAefiq_cZ-59GJ_xEM2zZbXMFnAzJmgs3nt8vgoC5d4LlJ2pw=w667-rw-e365-v1",
                "topic": "Android security datasheet",
                "subText": "Security · Datasheet",
                "body": "Learn how Android Enterprise Recommended makes it easy for businesses to select, deploy and manage Android devices.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Security_Data_Sheet.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": false
        },
        "Device": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/OujyUr91hauu5O8I7TiQLapfhTsLQw57Di_lL4vFv1ZuX-aNJwfFeGk3K0QViBG6QTeSIxIlOtKJI-6lD5G3Vtz-QSzA8NkXtWFC8g=w667-rw-e365-v1",
                "topic": "Android device choice datasheet",
                "subText": "Device · Datasheet",
                "body": "Android offers the world's broadest mobility hardware ecosystem.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Choice_datasheet_new_design.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": [{
                "video": false,
                "pic": "https://lh3.googleusercontent.com/ZZqJCbVU0cwtNFJq5zys-AUzHxcxl3rVVwfQuMIW1G2nlAwzhNZOFIDtd0dhhC9HOv03VTir2R7phHAqROqtsi-hBjVAdSw-03h0fg=w667-rw-e365-v1",
                "topic": "Android Enterprise Recommended (Rugged)",
                "subText": "Device · Datasheet",
                "body": "Making it easier to identify and select validated rugged devices.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Recommended_RUGGED_One_Pager.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/ht5LoSoOXfj37mcU5eZyeOVLJ-RrdFOzfGr8B0C2dPcP-h7Sk4z6Ah9vXReNn6faBKJ3JnQXC0k5LMZZrbvdeuLqHuvz7vH4tcvS_Q=w667-rw-e365-v1",
                "topic": "Android Enterprise Recommended datasheet",
                "subText": "Device · Datasheet",
                "body": "With Android Enterprise Recommended, there's a simple way to find the devices and services that meet your Enterprise requirements.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Recommended_Datasheet_w_o_carrier.pdf",
                "linkName": "Watch the video",
                "arrow": "right"
            }]

        },
        "Employees": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/oQpGs99ipcf6v-LDVURnaEPK62rx__m_7Nzl698yHlMqTpPxKjIzO277ybeCBWnKeRIxFCZQ0N-N4UvI_ZbwZSo9GtaGPb0rcXEbaw=w667-rw-e365-v1",
                "topic": "BYOD datasheet",
                "subText": "Employees · Datasheet",
                "body": "Learn how Android privacy and productivity works on employee-owned devices using the work profile.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/BYOD_datasheet_new_design.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": false
        }
    }, {
        "allTopic": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/F79z4lD2DMPRsRimwSB3tIapDx5_zb1FR8zZs532z2XouN7Nm2mFYXA0WYJvb0_dcho-l4c1aGRMWbcG-P7ADOQnc08MLEVag49qtJI=w1707-e365-v1",
                "topic": "Android Enterprise eBook: Every Worker. Every Use Case.",
                "subText": "Report/PDF",
                "body": "Android Enterprise is built to help employees work smarter without sacrificing privacy or controls. Learn more about the key benefits of Android Enterprise for your business by downloading our new eBook.",
                "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Android-Enterprise-eBook.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": [{
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/VTYSjZC62AJ_hpduct5GDy7OAwZkRkk_E-XB5ONvgLTe0qYPTb3Ex1JPWVX4YUVvgvZWsKXbMr7crUuYNNeq3ldLDg3PN-3P6BuJ=w667-rw-e365-v1",
                    "topic": "Work Profile Security on Company-Owned Devices in Android 11",
                    "subText": "Security · Report/PDF",
                    "body": "Learn how Android 11 work profile security enhancements for company-owned devices preserve privacy without compromising security.",
                    "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Work-Profile-Security-on-Company-Owned-Devices-Paper.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/IzyAwCKex5WZrLMyOA9OdvkQt9kmzNhIzjjekgix5Reg_rRwbY8gZWSV3w1UbRhw3hn0hmwJPPiqmYiixGfgNExZsAneuGOHIjqeDJE=w667-rw-e365-v1",
                    "topic": "Android security white paper",
                    "subText": "Security · Report/PDF",
                    "body": "Learn how our industry-leading security practices protect organizations of all kinds.",
                    "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Security_White_Paper_2019.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                },
                {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/vEdyigIBs0ZETY2I4YId1cyEO_llMs-jVgGzi1ZwPrcagy35142QFf18fTUukLeVaxhkrKczIVdGrUwojBHjaC04cmcYH2VAKsoOiA=w667-rw-e365-v1",
                    "topic": "Android security: 2018 year in review",
                    "subText": "Security · Report/PDF",
                    "body": "Get an overview of our security protections and read how Google services protect the Android ecosystem.",
                    "link": "https://source.android.com/security/reports/Google_Android_Security_2018_Report_Final.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }, {
                    "video": false,
                    "pic": "https://lh3.googleusercontent.com/Oybjx-i0c2EPhovmWD1TptQTQ9A1wbk3CkfXunJStBV3alGiNcIsCNumQAs87BA3Sxwi7-5GME5QMJQezJCQQE3BKSw5FH7fhgT2Uw=w741-rw-e365-v1",
                    "topic": "Android security: 2017 year in review",
                    "subText": "Security · Report/PDF",
                    "body": "Get an overview of our security protections and read how Google services protect the Android ecosystem.",
                    "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Company_owned_devices_datasheet_new_design.pdf",
                    "linkName": "Read more",
                    "arrow": "top"
                }
            ]

        },
        "Management": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/F79z4lD2DMPRsRimwSB3tIapDx5_zb1FR8zZs532z2XouN7Nm2mFYXA0WYJvb0_dcho-l4c1aGRMWbcG-P7ADOQnc08MLEVag49qtJI=w1707-e365-v1",
                "topic": "Android Enterprise eBook: Every Worker. Every Use Case.",
                "subText": "Report/PDF",
                "body": "Android Enterprise is built to help employees work smarter without sacrificing privacy or controls. Learn more about the key benefits of Android Enterprise for your business by downloading our new eBook.",
                "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Android-Enterprise-eBook.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": false
        },
        "Security": {
            "main": {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/VTYSjZC62AJ_hpduct5GDy7OAwZkRkk_E-XB5ONvgLTe0qYPTb3Ex1JPWVX4YUVvgvZWsKXbMr7crUuYNNeq3ldLDg3PN-3P6BuJ=w667-rw-e365-v1",
                "topic": "Work Profile Security on Company-Owned Devices in Android 11",
                "subText": "Security · Report/PDF",
                "body": "Learn how Android 11 work profile security enhancements for company-owned devices preserve privacy without compromising security.",
                "link": "https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Work-Profile-Security-on-Company-Owned-Devices-Paper.pdf",
                "linkName": "Read more",
                "arrow": "top"
            },
            "other": [{
                "video": false,
                "pic": "https://lh3.googleusercontent.com/IzyAwCKex5WZrLMyOA9OdvkQt9kmzNhIzjjekgix5Reg_rRwbY8gZWSV3w1UbRhw3hn0hmwJPPiqmYiixGfgNExZsAneuGOHIjqeDJE=w667-rw-e365-v1",
                "topic": "Android security white paper",
                "subText": "Security · Report/PDF",
                "body": "Learn how our industry-leading security practices protect organizations of all kinds.",
                "link": "https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Security_White_Paper_2019.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/vEdyigIBs0ZETY2I4YId1cyEO_llMs-jVgGzi1ZwPrcagy35142QFf18fTUukLeVaxhkrKczIVdGrUwojBHjaC04cmcYH2VAKsoOiA=w667-rw-e365-v1",
                "topic": "Android security: 2018 year in review",
                "subText": "Security · Report/PDF",
                "body": "Get an overview of our security protections and read how Google services protect the Android ecosystem.",
                "link": "https://source.android.com/security/reports/Google_Android_Security_2018_Report_Final.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }, {
                "video": false,
                "pic": "https://lh3.googleusercontent.com/Oybjx-i0c2EPhovmWD1TptQTQ9A1wbk3CkfXunJStBV3alGiNcIsCNumQAs87BA3Sxwi7-5GME5QMJQezJCQQE3BKSw5FH7fhgT2Uw=w741-rw-e365-v1",
                "topic": "Get an overview of our security protections and read how Google services protect the Android ecosystem.",
                "subText": "Security · Report/PDF",
                "body": "Get an overview of our security protections and read how Google services protect the Android ecosystem.",
                "link": "https://source.android.com/security/reports/Google_Android_Security_2017_Report_Final.pdf",
                "linkName": "Read more",
                "arrow": "top"
            }]

        },
        "Device": {
            "main": false,
            "other": false
        },
        "Employees": {
            "main": false,
            "other": false
        }
    }
]

let state = 0


let arraySelect = {
    "1-bt-st3": "allTopic",
    "2-bt-st3": "Management",
    "3-bt-st3": "Security",
    "4-bt-st3": "Device",
    "5-bt-st3": "Employees"
}

let arrayButton = ["1-bt-st3", "2-bt-st3", "3-bt-st3", "4-bt-st3", "5-bt-st3", ]
let otherLen = jsonSt3[state][arraySelect[arrayButton[currentId]]]["other"] == false ? 0 : jsonSt3[state][arraySelect[arrayButton[currentId]]]["other"].length

let countRun = otherLen < 4 ? otherLen : 4
let seeMore = document.querySelector("#containSeeMore")

document.querySelectorAll(".btSelect").forEach(function (box) {
    box.addEventListener("click", function () {
        //console.log("state -> "+jsonSt3[state],arraySelect[arrayButton[currentId]])
        //console.log(jsonSt3[state][arraySelect[arrayButton[currentId]]])
        otherLen = jsonSt3[state][arraySelect[arrayButton[currentId]]]["other"] == false ? 0 : jsonSt3[state][arraySelect[arrayButton[currentId]]]["other"].length
        countRun = otherLen < 4 ? otherLen : 4
        if (jsonSt3[state][arraySelect[arrayButton[currentId]]]["other"] == false || otherLen <= 4) {
            seeMore.setAttribute("hidden", "true")
        } else {
            seeMore.removeAttribute("hidden")
        }
        //console.log("t1="+jsonSt3[state][arraySelect[arrayButton[currentId]]]["other"])
        mySelect(arraySelect[box.id], countRun)
    });
});
document.querySelectorAll("#seeMore").forEach(function (box) {
    box.addEventListener("click", function () {
        let arrayButton = ["1-bt-st3", "2-bt-st3", "3-bt-st3", "4-bt-st3", "5-bt-st3", ]
        countRun = (countRun + 4) > otherLen ? otherLen : countRun + 4;
        if (otherLen == countRun) {
            document.querySelector("#containSeeMore").setAttribute("hidden", "true")
        }
        console.log(arraySelect[arrayButton[currentId]])
        mySelect(arraySelect[arrayButton[currentId]], countRun)
    });
});

mySelect("allTopic", 4)

function mySelect(id, num) {
    let idMain = jsonSt3[state][id]["main"]
    let isOther = jsonSt3[state][id]["other"]
    let bodySt3 = document.querySelector("#body-st3")
    console.log(idMain)
    
    if(idMain == false) {
        bodySt3.innerHTML = `<div class="noResults mb-5">
            <p class="font-android" style="font-size:88px">No Results.</p>
            <p class="font-roboto" style="font-size:20px">Sorry, no results matched your criteria.</p>
        </div> `;
    } else {
        bodySt3.innerHTML = `<div class="card m-0 mr-2 mb-5" style="border: none;">`
        if (idMain.video != false) {
            bodySt3.innerHTML += ` <div id="${'https://www.youtube.com/embed/'+idMain.video}" style="cursor: pointer;" onclick="openVideo(this)">
            <svg style="z-index: 3;position:absolute; left:480;top:250px" class="modal-opener__play-icon"
                width="96" height="96" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
                    <circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"></circle>
                    <path class="play-icon"
                        d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z"
                        fill="#073042" fill-rule="nonzero"></path>
                </g>
            </svg>
            <img class="card-img-top"
                src="${idMain.pic}"
                alt="Card image cap">
        </div>`
        } else {
            bodySt3.innerHTML += ` <img class="card-img-top"
            src="${idMain.pic}"
            alt="Card image cap"></img> `
        }
        bodySt3.innerHTML += `
        <div class="card-body mt-3" style="padding:0px 0px 0px 0px">
            <p class="font-android-M " style="font-size: 20px;">${idMain.subText}/PDF</p>
            <p class="font-android font-weight-bold mb-5 mt-4" style="font-size: 35px; line-height: 100%;">
            ${idMain.topic}</p>
            <p class="font-roboto mt-4" style="font-size: 20px; line-height: 30px; padding-right:20px">${idMain.body}</p>
            <div class="row ${idMain.arrow == "top"? "learnMore": "learnMore2"}"
                style="width: ${idMain.arrow == "top"? "150px": "200px"};height: 50px;position: relative;margin: 0px 0px 0px 0px;">
                <p class=" d-flex" class="card-text" style="color: #073042;font-size: 1.25rem;">
                    <b>${idMain.linkName}</b>
                </p>
                <svg id="arrow-to-top" style="transform: rotate(${idMain.arrow == "top"? "30deg": "90deg"});position:relative;top:-10px"
                    width="30px" viewBox="0 0 16 16" class="bi bi-arrow-up-short" fill=" #073042"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                </svg>
            </div>
        </div>
         </div>`
        // 0 + steppRun jsonSt3[0][id]["other"].length
        for (let i = 0; i < num; i++) {
    
            let card = document.createElement("div")
            let cardBody = document.createElement("div")
            let learnMore = document.createElement("div")
            let cardImg = document.createElement("img")
            let topicText = document.createElement("p");
            let subText = document.createElement("p");
            let bodyText = document.createElement("p");
            //setting card
            card.classList = (i % 2 == 0) ? "card m-0 mr-2 mb-3" : "card m-0 ml-3 mb-3"
            //card.setAttribute("class", "card m-0 mr-2")
            card.style.border = "none"
            card.style.width = "48%"
    
            if (isOther[i].video != false) {
    
                card.innerHTML = ` <div id="${'https://www.youtube.com/embed/'+isOther[i].video}" style="cursor: pointer;" onclick="openVideo(this)">
                                    <svg style="z-index: 3;position:absolute; left:210;top:100px" class="modal-opener__play-icon"
                                        width="96" height="96" xmlns="http://www.w3.org/2000/svg">
                                        <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
                                            <circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"></circle>
                                            <path class="play-icon"
                                                d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z"
                                                fill="#073042" fill-rule="nonzero"></path>
                                        </g>
                                    </svg>
                                    <img class="card-img-top"
                                        src="${isOther[i].pic}"
                                        alt="Card image cap">
                                </div>`
            } else {
                //setting img
                cardImg.classList.add("card-img-top")
                cardImg.setAttribute("src", isOther[i].pic)
            }
    
            //setting card body
            cardBody.classList.add("card-body", "mt-3", "p-0")
    
            //setting text
            subText.classList.add("font-android-M")
            subText.style.fontSize = "20px"
            subText.innerText = isOther[i].subText
    
            topicText.classList.add("font-android", "font-weight-bold", "mb-5", "mt-4")
            topicText.style.fontSize = "35px";
            topicText.lineHeight = "100%";
            topicText.innerText = (isOther[i].topic)
    
            bodyText.classList.add("font-roboto", "mt-4")
            bodyText.style.fontSize = "20px"
            bodyText.style.lineHeight = "30px"
            bodyText.style.paddingRight = "20px"
            bodyText.innerText = (isOther[i].body)
    
            // learnMore.classList = "row learnMore m-0"
    
            if (isOther[i].arrow == "top") {
                learnMore.setAttribute("class", "row learnMore m-0")
                learnMore.style.width = "150px"
                learnMore.style.height = "50px"
                learnMore.style.position = "relative"
                learnMore.innerHTML = `
                <p class=" d-flex" class="card-text" style="color: #073042;font-size: 1.25rem;">
                                                <b> ${isOther[i].linkName} </b>
                                            </p>
                                            <svg id="arrow-to-top" style="transform: rotate(30deg);position:relative;top:-10px"
                                                width="30px" viewBox="0 0 16 16" class="bi bi-arrow-up-short" fill=" #073042"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                                            </svg>
                    `
            } else {
                learnMore.setAttribute("class", "row learnMore2 m-0")
                learnMore.style.width = "200px"
                learnMore.style.height = "50px"
                learnMore.style.position = "relative"
                learnMore.innerHTML = `
                <p class=" d-flex" class="card-text" style="color: #073042;font-size: 1.25rem;">
                            <b>${isOther[i].linkName}</b>
                        </p>
                        <svg id="arrow-to-right" style="transform: rotate(90deg);position:relative;top:-10px" width="30px"
                            viewBox="0 0 16 16" class="bi bi-arrow-up-short" fill="#073042"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                        </svg>
                    `
            }
            cardBody.appendChild(subText)
            cardBody.appendChild(topicText)
            cardBody.appendChild(bodyText)
            cardBody.appendChild(learnMore)
            card.appendChild(cardImg)
            card.appendChild(cardBody)
            bodySt3.appendChild(card)
        }

    }
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
}


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

//dropdown
document.querySelectorAll(".drop").forEach(function (box) {
    box.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "rgb(255,255,255, 0.8)"
        this.style.color = "#073042"
    });
});

document.querySelectorAll(".drop").forEach(function (box) {
    box.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "rgb(255,255,255, 0.8)"
        this.style.color = "#073042"
    });
});

document.querySelectorAll(".drop").forEach(function (box) {
    box.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "rgb(255,255,255, 0)"
        this.style.color = "white"
    });
});

document.querySelectorAll(".drop").forEach(function (box) {
    box.addEventListener("click", function () {
        state = parseInt(this.getAttribute("value"));
        console.log(typeof state)
        let getDrop = document.querySelector("#drop-main")
        getDrop.textContent = this.text
        console.log(arraySelect[currentId])
        mySelect(arraySelect[arrayButton[currentId]], countRun)
    });
});

document.querySelectorAll(".dropdown").forEach(function (box) {
    box.addEventListener("mouseenter", function () {
        gsap.to("#drop-main", {
            duration: 0.1,
            backgroundColor: "#073042",
            color:"white"
        })
    });
});
document.querySelectorAll(".dropdown").forEach(function (box) {
    box.addEventListener("mouseleave", function () {
        gsap.to("#drop-main", {
            duration: 0.1,
            backgroundColor: "white",
            color:"#073042"
        })
    });
});
