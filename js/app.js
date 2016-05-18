var GAME = {
  running: false,
  currentQuestion: null,

  openGame: function() {
    this.running = true;
    this.currentQuestion = null;
  },

  startGame: function(){ // Sets Game.running to 'true' & ques to '0'
    this.running = true;
    this.currentQuestion = 0;
  },

  resetGame: function(){ // Sets Game to origin state.
    this.running = false;
    this.currentQuestion = null;
  }
}

var DISPLAY = { // Object that puts questions and answers together
  renderOpeningImg: function(){
    var open = OPEN;
    var htmlStartImg = "";
    htmlStartImg +=' <img src=' + open.source + ' alt=' + open.alt + ' id=' + open.id + '>';
    return htmlStartImg;
  },

  renderOpeningTxt: function(){
    var open = OPEN;
    var htmlStartTxt = "";
    htmlStartTxt +='<p class="instrutions">' + open.msgText + '</p>';
    return htmlStartTxt;
  },

  renderQuestionImg: function(index){ // Object that determines ques to show
    var question = QUESTIONS[index]; // Pull question from QUESTIONS array using 'index'
    var htmlImg = ""; // Set html variable to 'empty'
    // Set html variable to = question + appro html elements
    htmlImg += '<img src=' + question.source + ' alt=' + question.alt + ' id=' + question.id + '>';
    return htmlImg; // Returns question in html format
  },

  renderQuestionChoice: function(index){ // Object that determines ques to show
    var question = QUESTIONS[index]; // Pull question from QUESTIONS array using 'index'
    var htmlChoice = ""; // Set html variable to 'empty'
    // Set html variable to = question + appro html elements
    question.answers.forEach(function(answer, index){ // Grabs 'answers' property from QUESTIONS array and iterates over it's index
    htmlChoice += '<input type="radio" class="answerItem" id="' + index + '-answer" name="selectAnswer" value="' + answer + '"> ' + answer + '<br>';
    });
    return htmlChoice; // Returns question in html format
  },

  clearQuestion: function(){ // Clears the html elements with class of 'question'
    $('.messageArea').empty();
  }

};

var OPEN = {
  source: 'images/scarlet-oak-tree.jpg',
  alt: 'Oak Tree',
  id: 'openingImg',
  msgText: '<h2>This game will test your knowledge of determing a tree by its leaf.</h2>'
}

var GAMETEXT = {
  submitAnsButton: '<input type="submit" id="submitAns" value="Answer!">',
  questionChoice: '<h2>What tree is this leaf from?</h2>'
}

var QUESTIONS = [ // Array of questions to be asked and their answers
  { // Question 1
    source: 'images/black-birch-leaf.jpg',
    alt: 'Leaf Question 1',
    id: 'firstQuestionImg',

    answers: [ // Array of possible answers
      'Birch',
      'Ash',
      'Oak',
      'Poplar',
      'Alder'
    ],

    correctAnswer: 0, // Correct answer
    questionTrivia: 'Blah blah blah' // Trivia to display after answer submitted
  },

  { // Question 2
    text: "This is the second question?",
    answers: [
      'ash.jpg',
      'fig.jpg'
    ],

    correctAnswer: 1
  }

];


$(function(){  // JS Ready function
// Game opening
  GAME.openGame();
    var openImg = DISPLAY.renderOpeningImg();
    var openTxt = DISPLAY.renderOpeningTxt();
    $('div.quesImages').html(openImg);
    $('div.messageArea').html(openTxt + '<input type="submit" value="Start Game" class="button" id="startButton">');

  $('#startButton').on('click', function(){ // Start button listener
    GAME.startGame(); // Call func that sets game to start
    DISPLAY.clearQuestion();
    var htmlImg = DISPLAY.renderQuestionImg(GAME.currentQuestion);
    var htmlChoice = DISPLAY.renderQuestionChoice(GAME.currentQuestion);
    var htmlTxt = GAMETEXT.questionChoice;
    var htmlSubmit = GAMETEXT.submitAnsButton;
    console.log(htmlTxt);
    console.log(htmlChoice);
    console.log(htmlSubmit);
    $('div.quesImages').html(htmlImg);
    $('div.messageArea').html(htmlTxt + htmlChoice + htmlSubmit);
  });

  $('.question').on('click', '#answerButton', function(){ // Submit button action
      // Collect player's answer
    var checkedRadio = $('input[name=selectAnswer]:checked');
    var answer = checkedRadio.val();
    var answerIndex = parseInt(checkedRadio.attr('id'));

    console.log("checkedRadio:", checkedRadio);
    console.log("answer:", answer);
    console.log("answerIndex:", answerIndex);
    // if answer is correct
    DISPLAY.clearQuestion();
    $('.answer-trivia').text(); // Call function that displays trivia about answer

  });



    /**
     * <div class="question">
     *  <div id="questionText">
     *    <img src="ash.jpg">
     *  </div>
     *  <div class="answerSelection">
     *    <div class="answer" id="answer-1">
     *    </div>
     *  </div>
     * </div>
     */

});
