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