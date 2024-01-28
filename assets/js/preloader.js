// Preloader
document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.getElementById('preloader');

  window.addEventListener('load', function () {
    preloader.style.display = 'block';
  
    setTimeout(function () {
      preloader.style.display = 'none';
      window.scrollTo({ top: 0 });
    }, 3000);
  });
});