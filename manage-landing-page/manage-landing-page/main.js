const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector(".primary-header");
navToggle.addEventListener('click', () =>{
    primaryNav.hasAttribute('data-visible') 
    ? navToggle.setAttribute('area-expended', false)
    : navToggle.setAttribute('area-expended', true) 
    primaryHeader.toggleAttribute('data-overlay')
    primaryNav.toggleAttribute('data-visible')
})

const slider = new A11YSlider(document.querySelector(".slider"), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
      480: {
        dots: false, // dots enabled 1280px and up
      },
    },
  });