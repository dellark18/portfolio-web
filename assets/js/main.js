//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

// Home Scroll Section
sr.reveal('.home-text',{})
sr.reveal('.btn-light',{delay: 200})
sr.reveal('.home-circle',{delay: 400})
sr.reveal('.home-social-icon',{interval: 200})

// About Scroll Section
sr.reveal('.about-img',{})
sr.reveal('.about-head',{delay: 200})
sr.reveal('.about-paragraph',{delay: 400})

// Skills Scroll Section
sr.reveal('.skills-img',{})
sr.reveal('.skills-head',{delay: 200})
sr.reveal('.skills-paragraph',{delay: 400})
sr.reveal('.skills-data',{interval: 200})

// Work Scroll Section
sr.reveal('.work-img',{interval: 200})

// Contact Scroll Section
sr.reveal('.contactForm',{interval: 200})
