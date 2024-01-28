// Popup
$(document).ready(function () {

  var modal = $(".popup");
  const Music = new Audio("assets/images/music.mp3");
  Music.volume = 0.6;

  modal.on("click", ".popup-box", function () {
    modal.css("display", "none");
    Music.play();
  });

  Music.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  });

});