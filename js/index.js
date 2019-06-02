
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})