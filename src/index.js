import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Trivia from './js/scripts.js';

$(document).ready(function() {

  Trivia.triviaCards();

  for (let i = 0; i < 7; i++) {
    $(".q"+i+"-btn").click(function() {
      $(".flip-card"+i).toggleClass('flipped');
      let answer = $(".answer"+i).text();
      let radio = $("input:radio[name=q"+i+"]:checked").val();
      if (radio === answer) {
        $("#result" + i).text("You are correct!");
        // $(".flip-card"+i).hide();
      } else {
        $("#result" + i).text("You are wrong..");
      }
    });
  }
});