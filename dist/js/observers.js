const header = document.querySelector(".container_navigation");
const sectionOne = document.querySelector("#home");

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
