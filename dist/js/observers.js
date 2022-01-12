const header = document.querySelector(".container_navigation");
const sectionOne = document.querySelector("#home");

const faders = document.querySelector(".fade-in");

// section observer for NAVIGATION SCROLL EFFECT
const sectionOptions = {};
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

// fade-in observer for FADE-IN EFFECT
const fadeinOptions = {
  threshold: 1,
  rootMargin: "0px 0px -100px 0px"
};
const fadeinObserver = new IntersectionObserver(function(entries, fadeinObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return; 
    } else {
      entry.target.classList.add("appear");
      fadeinObserver.unobserve(entry.target);
    }
  });
}, fadeinOptions);

faders.forEach(fader => {
  fadeinObserver.observe(fader);
});