var GAME = {
  running: false,
  currentQuestion: null,
  score: 0,

  openGame: function() {
    this.running = true;
    this.currentQuestion = null;
    this.score = 0;
  },

  startGame: function(){ // Sets Game.running to 'true' & ques to '0'
    this.running = true;
    this.currentQuestion = 0;
    this.score = 0;
  },

  resetGame: function(){ // Sets Game to origin state.
    this.running = false;
    this.currentQuestion = null;
    this.score = 0;
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
  },

  renderAnswer: function(index, answerIndex) {
    var answer = QUESTIONS[index];
    var htmlAnswer = "";
    if ( answerIndex == answer.correctAnswer ) {
      htmlAnswer += '<p>Correct!</p>';
      htmlAnswer += '<p>This comes from the ' + answer.answers[answer.correctAnswer] + ' tree.</p>';
      htmlAnswer += answer.questionTrivia;
      GAME.score += 1;
    } else {
      htmlAnswer += '<p class="incorrect">Incorrect</p>';
      htmlAnswer += '<p clas"trueAnswer">This leaf is from a ' + answer.answers[answer.correctAnswer] + ' tree.</p>';
      htmlAnswer += answer.questionTrivia;
      GAME.score += 0;
    }
    return htmlAnswer;
  },

  renderGameProgress: function(questionNum){
    var progress = questionNum + 1;
    var textProgress = "";
    textProgress = progress;
    return textProgress;
  },

  renderScoreSummary: function(numCorrect) {
    var score = numCorrect;
    var htmlScore = "";
    htmlScore += '<p class="scoreResult">You scored <b>' + GAME.score + '/5</b> on the quiz.</p>';
    htmlScore += '<p class="scoreResult">Thanks for playing!</p>';
    return htmlScore;
  },

  renderContinue: function(index) {
    var cont = index;
    var contGame = "";
    if ( cont < 4 ) {
      contGame = true;
      return contGame;
    } else {
      contGame = false;
      return contGame;
      }
    }

};

var OPEN = {
  source: 'images/scarlet-oak-tree.jpg',
  alt: 'Oak Tree',
  id: 'openingImg',
  msgText: '<h3>This game will test your knowledge of determing a tree by its leaf.</h3>'
}

var GAMETEXT = {
  submitAnsButton: '<input type="submit" class="button" id="submitAns" value="Answer!">',
  questionChoice: '<h3>What tree is this leaf from?</h3>',
  progressNumber: "0"
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
    questionTrivia: '<p class="trivia">Birch is a thin-leaved deciduous hardwood tree in the family that includes alders, hazels, and hornbeams, and is closely related to the beech/oak family.</p><br>' // Trivia to display after answer submitted
  },

  { // Question 2
    source: 'images/common-ash-leaf1.jpg',
    alt: 'Leaf Question 2',
    id: 'secondQuestionImg',

    answers: [ // Array of possible answers
      'Birch',
      'Ash',
      'Oak',
      'Poplar',
      'Alder'
    ],

    correctAnswer: 1, // Correct answer
    questionTrivia: '<p class="trivia">Ash, is a genus of flowering plants in the olive and lilac family. It contains 45–65 species of usually medium to large trees. The genus is widespread across much of Europe, Asia and North America.</p><br>' // Trivia to display after answer submitted
  },

  { // Question 3
    source: 'images/scarlet-oak-leaf.jpg',
    alt: 'Leaf Question 3',
    id: 'thirdQuestionImg',

    answers: [ // Array of possible answers
      'Birch',
      'Ash',
      'Oak',
      'Poplar',
      'Alder'
    ],

    correctAnswer: 2, // Correct answer
    questionTrivia: '<p class="trivia">The oak is a tree of the beech family. There are approximately 600 extant species of oaks. The common name "oak" may also appear in the names of species in related genera. The genus is native to the Northern Hemisphere.</p><br>' // Trivia to display after answer submitted
  },

  { // Question 4
    source: 'images/carolina-poplar-leaf.jpg',
    alt: 'Leaf Question 4',
    id: 'fourthQuestionImg',

    answers: [ // Array of possible answers
      'Birch',
      'Ash',
      'Oak',
      'Poplar',
      'Alder'
    ],

    correctAnswer: 3, // Correct answer
    questionTrivia: '<p class="trivia">Populus is a genus of 25–35 species of deciduous flowering plants, native to most of the Northern Hemisphere. English names variously applied to different species include poplar, aspen, and cottonwood.</p><br>' // Trivia to display after answer submitted
  },

  { // Question 5
    source: 'images/red-alder-leaf.jpg',
    alt: 'Leaf Question 5',
    id: 'fourthQuestionImg',

    answers: [ // Array of possible answers
      'Birch',
      'Ash',
      'Oak',
      'Poplar',
      'Alder'
    ],

    correctAnswer: 4, // Correct answer
    questionTrivia: '<p class="trivia">Alder is the common name of a genus of flowering plants (Alnus) belonging to the birch family. The genus comprises about 35 species and is distributed throughout the north temperate zone.</p><br>' // Trivia to display after answer submitted
  }
];


$(function(){  // JS Ready function
// Game opening
  beginGame();
// Game Begin & Reset
  function beginGame() {
    GAME.openGame();
    var openImg = DISPLAY.renderOpeningImg();
    var openTxt = DISPLAY.renderOpeningTxt();
    $('div.quesImages').html(openImg);
    $('div.messageArea').html(openTxt + '<input type="submit" value="Start Game" class="button" id="startButton">');
    $('li#progressNum').text("");
    $('div.messageArea').on('click', '#startButton', function(){
      GAME.startGame();
      DISPLAY.clearQuestion();
      gamePlay();
      });
    };
// Game play
  function gamePlay(){
    var htmlImg = DISPLAY.renderQuestionImg(GAME.currentQuestion);
    var htmlChoice = DISPLAY.renderQuestionChoice(GAME.currentQuestion);
    var htmlTxt = GAMETEXT.questionChoice;
    var htmlSubmit = GAMETEXT.submitAnsButton;
    var textProgress = DISPLAY.renderGameProgress(GAME.currentQuestion);
    $('div.quesImages').html(htmlImg);
    $('div.messageArea').html(htmlTxt + htmlChoice + htmlSubmit);
    $('li#progressNum').text(textProgress);
  };
// Submit Answer
  $('div.messageArea').on('click', 'input#submitAns', function(){
    var checkedRadio = $('input[name=selectAnswer]:checked');
    var answer = checkedRadio.val();
    var answerIndex = parseInt(checkedRadio.attr('id'));
    DISPLAY.clearQuestion();
    var htmlAnswer = DISPLAY.renderAnswer(GAME.currentQuestion, answerIndex);
    var contGame = DISPLAY.renderContinue(GAME.currentQuestion);
    GAME.currentQuestion += 1; // Question counter
    if ( contGame == true ) {
      $('div.messageArea').html(htmlAnswer + '<input type="submit" value="Continue" class="button" id="continueButton">');
      $('div.messageArea').on('click', '#continueButton', function(){
        gamePlay();
      });
    } else {
      htmlScore = DISPLAY.renderScoreSummary(GAME.score);
      $('div.messageArea').html(htmlAnswer + htmlScore + '<input type="submit" value="Reset Quiz" class="button" id="resetButton">');
      $('div.messageArea').on('click', '#resetButton', function(){
        DISPLAY.clearQuestion();
        GAME.resetGame;
        beginGame();
      });
    }
  });
});
