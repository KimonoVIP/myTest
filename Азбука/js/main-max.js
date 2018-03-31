/* js Максима */

  var $hamburger = $(".hamburger");
  var $menu = $(".topMenu");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $menu.toggleClass("topMenu-active");
    // Do something else, like open/close menu
  });