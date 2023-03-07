$(".first-slide").on("click", function () {
  $("#firstDrop").slideToggle();
});

$(".second-slide").on("click", function () {
  $("#secondDrop").slideToggle();
});

var clicked = 1;
$(".navbar-toggler").on("click", function () {
  if (clicked == 1) {
    do {
      $(".navbar-toggler-icon").addClass("btn-close");
      clicked--;
    } while (clicked == 1);
  } else {
    do {
      $(".navbar-toggler-icon").removeClass("btn-close");
      clicked++;
    } while (clicked == 0);
  }
});

hamburger();
