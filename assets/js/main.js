// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};



// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '400px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.hero-content h1', { origin: 'left', distance: '0px', delay: 200 });
ScrollReveal().reveal('.hero-content h2', { origin: 'left', distance: '0px', delay: 300 });
ScrollReveal().reveal('.hero-content p', { origin: 'left', distance: '0px', delay: 400 });
ScrollReveal().reveal('.hero-buttons', { origin: 'left', distance: '0px', delay: 600 });
ScrollReveal().reveal('.marketplaces', { origin: 'top', distance: '0px', delay: 300 });
ScrollReveal().reveal('.contract', { origin: 'top', distance: '0px', delay: 300 });
ScrollReveal().reveal('.about-title h2', { origin: 'left', distance: '0px', delay: 200 });
ScrollReveal().reveal('.about-title p', { origin: 'left', distance: '0px', delay: 300 });
ScrollReveal().reveal('.about-content', { origin: 'left', distance: '0px', delay: 400 });

// Navbar anchor + hiding # in URL
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top + 4 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    }, 300);
  }
});