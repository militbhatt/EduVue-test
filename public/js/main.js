var ScrollButton = document.getElementById("scroll-btn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    ScrollButton.style.display = "block";
  } else {
    ScrollButton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}