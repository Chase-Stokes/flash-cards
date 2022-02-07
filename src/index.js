import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("#card-1").click(function() {
    $("#p-1").toggle();
    $("#card-1").addClass("inset");
    setTimeout(function(){
      $("#card-1").removeClass("inset");
    }, 125);
  });
  $("#card-2").click(function() {
    $("#p-2").toggle();
    $("#card-2").addClass("inset");
    setTimeout(function(){
      $("#card-2").removeClass("inset");
    }, 125);
  });
  $("#card-3").click(function() {
    $("#p-3").toggle();
    $("#card-3").addClass("inset");
    setTimeout(function(){
      $("#card-3").removeClass("inset");
    }, 125);
  });
  $("#card-4").click(function() {
    $("#p-4").toggle();
    $("#card-4").addClass("inset");
    setTimeout(function(){
      $("#card-4").removeClass("inset");
    }, 125);
  });
  $("#card-5").click(function() {
    $("#p-5").toggle();
    $("#card-5").addClass("inset");
    setTimeout(function(){
      $("#card-5").removeClass("inset");
    }, 125);
  });
  $("#card-6").click(function() {
    $("#p-6").toggle();
    $("#card-6").addClass("inset");
    setTimeout(function(){
      $("#card-6").removeClass("inset");
    }, 125);
  });
});