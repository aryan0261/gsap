let tl = gsap.timeline();

tl.from("#nav img,#nav h3,#nav h4,#nav button", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});
tl.from("#main h1", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
});

tl.from("#leftimg,#leftdimg",{
   x:-100,
   duration:1,
    scale:0,
    opacity:0,
    stagger:0.4
})
tl.from("#rightuimg,#rightimg",{
    x:50,
    duration:1,
    scale:0,
    opacity:0,
    stagger:0.4
    
})
tl.from("h5", {
  scale: 0,
  opacity: 0,

});
tl.to("h5", {
  y: 30,
  repeat: -1,
  duration: 0.7,
 yoyo: true,
});
