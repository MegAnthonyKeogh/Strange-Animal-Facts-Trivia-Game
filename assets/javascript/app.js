alert("connected!");

var panel = $("#quiz-area");
var countStartNumber = 30;

var questions = [{
  question: "In 1975, a ____, co-authored a physics paper.",
  answers: ["dog", "robot", "ghost", "cat", "none of the above, this is crazy!"],
  correctAnswer: "cat",
  image: "assets/images/cat-wiggle.gif"
},
 {
  question: "A ____ can belch fire.",
  answers: ["dog", "lion", "frog", "snake", "none of the above, this is crazy talk!"],
  correctAnswer: "snake",
  image: "assets/images/snake.gif"
}, 
{
  question: "In Queensland, Australia, it's illegal to own a pet ___ unless you're a magician.",
  answers: ["rabbit", "lion", "frog", "snake", "none of the above"],
  correctAnswer: "rabbit",
  image: "assets/images/rabbits.gif"
}, 
{
  question: "____ have a pouch under their forearm to store their favorite rocks.",
  answers: ["Kangaroos", "Platypuses", "Sea otters", "Panda bears", "None of the above"],
  correctAnswer: "Sea otters",
  image: "assets/images/sea otters.gif"
},
 {
  question: "There's a high school in Minnesota that gives ______ yearbook photos too",
  answers: ["teachers", "school mascots", "service animals", "All of the above", "None of the above"],
  correctAnswer: "All of the above",
  image: "assets/images/Ready_For_School.jpg"
}, 
{
  question: "In 1981, a _____ named Bosco was elected honorary mayor of Sunol, California.",
  answers: ["dog", "cat", "rabbit", "parrot", "none of the above"],
  correctAnswer: "dog",
  image: "assets/images/dog.gif"
}, 
{
  question: "Iceland has a(n) ___ whisperer who inspects construction sites before anything gets built to make sure no ____ are hanging around.",
  answers: ["elf and elves", "troll and trolls", "cockroach and cockroaches", "bat and bats"],
  correctAnswer: "elf and elves",
  image: "assets/images/elf.gif"
}, 
{
  question: "It's illegal to own just one _______ in Switzerland because they get lonely.",
  answers: ["guinea pig", "cat", "dog", "parrot"],
  correctAnswer: "guinea pig",
  image: "assets/images/ginea pig.gif"
},
{
    question: "There are more _____ in the U.S, than real ones!",
    answers: ["wooden deer", "teddy bears", "plastic flamingos", "fake beanie babies", "none of the above"],
    correctAnswer: "plastic flamingos",
    image: "assets/images/flamingos.gif"
  }, 
  {
    question: "____ can sleep for three years.",
    answers: [" I (seriously, I could)", " An octopus", "A lobster", "A snail", "none of the above"],
    correctAnswer: "A snail",
    image: "assets/images/snail.gif"
  }, 
  {
    question: "_____ have no vocal chords",
    answers: ["Turles", "Rabbits", "Giraffes", "snakes", "None of the above"],
    correctAnswer: "Giraffes",
    image: "assets/images/giraffes.gif"
  }, 
  {
    question: "It takes a ____ two weeks to digest its food.",
    answers: ["sloth", "python", "cow", "all of the above", "none of the above"],
    correctAnswer: "sloth",
    image: "assets/images/sloth.gif"
  }, 
  {
    question: "It is possible to hypnotize a ___ by placing it on its back and gently stroking its stomach.",
    answers: ["dog", "frog", "rabbit", "parrot", "none of the above"],
    correctAnswer: "frog",
    image: "assets/images/frog.gif"
  },
   {
    question: "A rhinoceros' horn is made of __.",
    answers: ["bone", "hair", "cartilage", "skin"],
    correctAnswer: "hair",
    image: "assets/images/rhino.gif"
  }, 
  {
    question: "____ have four noses.",
    answers: ["Slugs", "Worms", "Flies", "Anteaters"],
    correctAnswer: "Slugs",
    image: "assets/images/snail.gif"
  },
  {
      question: "The fingerprints of a ____ are so indistinguishable from humans that they have on occasion been confused at a crime scene.",
      answers: ["chimpanzee", "gorilla", "sloth", "koala", "none of the above"],
      correctAnswer: "koala",
      image: "assets/images/koala.gif"
    }, 
    {
      question: "male ___ drink female ____ to gauge ideal mating times.",
      answers: ["humans", "bears", "koalas", "giraffes", "none of the above"],
      correctAnswer: "giraffes",
      image: "assets/images/giraffes.gif"
    }, 
    {
      question: "____ cannot walk backwards.",
      answers: ["Emus", "Lizards", "Flamingos", "Rhinoceros", "None of the above"],
      correctAnswer: "Emus",
      image: "assets/images/emu2.gif"
    }, 
    {
      question: "The closest living relatives to the Tyrannosaurus Rex are ____.",
      answers: ["chickens", "alligators", "bears", "alligators", "Mexican beaded lizard", "all of the above", "none of the above"],
      correctAnswer: "chickens",
      image: "assets/images/chicken 2.gif"
    }, 
    {
      question: "____ can reproduce without having sex.",
      answers: ["Dolphins", "Turkeys", "Kangaroos", "Dogs", "none of the above"],
      correctAnswer: "Turkeys",
      image: "assets/images/turkey.gif"
    }];

    var timer;

    var game = {

        questions: questions,
        currentQuestion: 0,
        counter: countStartNumber,
        correct: 0,
        incorrect: 0,
      
        countdown: function() {
          game.counter--;
          $("#counter-number").text(game.counter);
          if (game.counter === 0) {
            console.log("TIME UP");
            game.timeUp();
          }
        },
      
        loadQuestion: function() {
      
          timer = setInterval(game.countdown, 1000);
      
          panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
      
          for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
            + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
          }
        },
      
        nextQuestion: function() {
          game.counter = countStartNumber;
          $("#counter-number").text(game.counter);
          game.currentQuestion++;
          game.loadQuestion();
        },
      
        timeUp: function() {
      
          clearInterval(timer);
      
          $("#counter-number").html(game.counter);
      
          panel.html("<h2>Out of Time!</h2>");
          panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
          panel.append("<img src='" + questions[this.currentQuestion].image + "' />");
      
          if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
          }
          else {
            setTimeout(game.nextQuestion, 3 * 1000);
          }
        },
      
        results: function() {
      
          clearInterval(timer);
      
          panel.html("<h2>All done, heres how you did!</h2>");
      
          $("#counter-number").text(game.counter);
      
          panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
          panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
          panel.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
          panel.append("<br><button id='start-over'>Start Over?</button>");
        },
      
        clicked: function(e) {
          clearInterval(timer);
          if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
          }
          else {
            this.answeredIncorrectly();
          }
        },
      
        answeredIncorrectly: function() {
      
          game.incorrect++;
      
          clearInterval(timer);
      
          panel.html("<h2>Nope!</h2>");
          panel.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
          panel.append("<img src='" + questions[game.currentQuestion].image + "' />");
      
          if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
          }
          else {
            setTimeout(game.nextQuestion, 3 * 1000);
          }
        },
      
        answeredCorrectly: function() {
      
          clearInterval(timer);
      
          game.correct++;
      
          panel.html("<h2>Correct!</h2>");
          panel.append("<img src='" + questions[game.currentQuestion].image + "' />");
      
          if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
          }
          else {
            setTimeout(game.nextQuestion, 3 * 1000);
          }
        },
      
        reset: function() {
          this.currentQuestion = 0;
          this.counter = countStartNumber;
          this.correct = 0;
          this.incorrect = 0;
          this.loadQuestion();
        }
      };
// CLICK EVENTS

$(document).on("click", "#start-over", function() {
    game.reset();
  });
  
  $(document).on("click", ".answer-button", function(e) {
    game.clicked(e);
  });
  
  $(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion();
  });
  