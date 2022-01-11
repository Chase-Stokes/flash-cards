$(document).ready(function() {
  $("#card-1").click(function() {
    $("#card-1").addClass("inset");
    $("#card-1").removeClass("inset");
    $("#p-1").toggle();
  });
  $("#card-2").click(function() {
    $("#p-2").toggle();
  });
  $("#card-3").click(function() {
    $("#p-3").toggle();
  });
  $("#card-4").click(function() {
    $("#p-4").toggle();
  });
  $("#card-5").click(function() {
    $("#p-5").toggle();
  });
  $("#card-6").click(function() {
    $("#p-6").toggle();
  });
});