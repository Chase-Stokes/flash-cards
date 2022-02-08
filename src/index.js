import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Trivia from './js/scripts.js';

$(document).ready(function() {

  Trivia.triviaCards();
  let promise = Trivia.triviaCards();
  promise.then(function(response) {
    const body = JSON.parse(response);
    for (let i = 0; i < 7; i++) {
      $(".question" + i).text(`${body.results[i].question}`);
      $(".answer" + i).text(`${body.results[i].correct_answer}`);
    }
    $(".showErrors").text("");
  }, function(error) {
    $(".showErrors").text(`There was an error processing your request: ${error}`);
  });
  
  for (let i = 0; i < 7; i++) {
    $(".q"+i+"-btn").click(function() {
      $(".flip-card"+i).toggleClass('flipped');
      let answer = $(".answer"+i).text();
      let radio = $("input:radio[name=q"+i+"]:checked").val();
      if (radio === answer) {
        $("#result" + i).text("You are correct!");
      } else {
        $("#result" + i).text("You are wrong.. sucka");
      }
    });
  }
});