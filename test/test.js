var timeline = new TimelineMax({});
timeline.to(".block", 2, {
    x: 300,
    rotation: 30,
});

console.log("yes it ran");