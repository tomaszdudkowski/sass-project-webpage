const header = document.querySelector(".container_navigation");
const sectionOne = document.querySelector("#home");

//section observer for NAVIGATION SCROLL EFFECT
const sectionOptions = {
  rootMargin: "-5px 0px 0px 0px"
};
const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("navigation-scrolled");
      header.classList.remove("absolute");
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
      header.classList.add("absolute");
      header.classList.remove("navigation-scrolled");
    }
  });
},
sectionOptions);

sectionObserver.observe(sectionOne);

/*******************************************************/

// appearOn observer
const appearOnOptions = {
  threshold: 0,
  rootMargin: "0px 0px -500px 0px"
};
const appearObserver = new IntersectionObserver(function(entries, appearObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      console.log("no intersection");
      return; 
    } else {
      entry.target.classList.add("appear");
      appearObserver.unobserve(entry.target);
      console.log(faders);
    }
  });
}, appearOnOptions);

// effects
const faders = document.querySelectorAll(".fade-in");

faders.forEach(fader => {
  appearObserver.observe(fader);
});

const slidersRight = document.querySelectorAll(".slide-in-right");
const slidersLeft = document.querySelectorAll(".slide-in-left");

slidersRight.forEach(slider => {
  appearObserver.observe(slider);
});

slidersLeft.forEach(slider => {
  appearObserver.observe(slider);
});
