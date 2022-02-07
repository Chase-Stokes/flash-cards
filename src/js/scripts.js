import $ from 'jquery';
export default class Trivia {
  static triviaCards() {
    let request = new XMLHttpRequest();
    const url =`https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean`;
  
    request.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();
  
    function getElements(response) {
      for (let i = 0; i < 7; i++) {
        $(".question" + i).text(`${response.results[i].question}`);
        $(".answer" + i).text(`${response.results[i].correct_answer}`);
      }
    }
  }  
}