var questionBank = [
  { theQuestion: "1. Can the worker make a profit or suffer a loss as a result of the work, aside from the money earned from the project?", answerA: "Yes", answerB: "No", theBlurb: "The work should involve real economic risk for the independent contractor, not just the risk of not getting paid." },
  { theQuestion: "2. Does the worker have an investment in the equipment and facilities used to do the work?", answerA: "Yes", answerB: "No", theBlurb: "The greater the investment for the individual, the more likely he or she is an independent contractor." },
  { theQuestion: "3. Does the person work for more than one company at a time?", answerA: "Yes", answerB: "No", theBlurb: "Working for multiple companies tends to indicate independent contractor status, but isn’t conclusive since employees can also work for more than one employer at a time." },
  { theQuestion: "4. Does the worker offer services to the general public?", answerA: "Yes", answerB: "No", theBlurb: "[to come]" },
  { theQuestion: "5. Do you have the right to give the worker instructions about when, where, and how to work?", answerA: "Yes", answerB: "No", theBlurb: "This shows control over the worker, and tends to indicate employee status." },
  { theQuestion: "6. Do you train the worker to do the job in a particular way?", answerA: "Yes", answerB: "No", theBlurb: "Independent contractors are already trained." },
  { theQuestion: "7. Are the worker’s services so important to your business that they have become a necessary part of the business?", answerA: "Yes", answerB: "No", theBlurb: "This may show that the worker is subject to your control." },
  { theQuestion: "8. Must the worker provide the services personally, as opposed to delegating tasks to someone else?", answerA: "Yes", answerB: "No", theBlurb: "(This indicates that you are interested in the methods employed, and not just the results." },
  { theQuestion: "9. Do you hire, supervise, and pay the worker’s assistants?", answerA: "Yes", answerB: "No", theBlurb: "Independent contractors hire and pay their own staff." },
  { theQuestion: "10. Is there an ongoing relationship between the worker and yourself?", answerA: "Yes", answerB: "No", theBlurb: "A relationship can be considered ongoing if services are performed frequently, but irregularly." },
  { theQuestion: "11. Do you set the worker’s hours?", answerA: "Yes", answerB: "No", theBlurb: "Independent contractors are masters of their own time." },
  { theQuestion: "12. Must the worker spend all of his or her time on your job?", answerA: "Yes", answerB: "No", theBlurb: "Independent contractors choose when and where they will work." },
  { theQuestion: "13. Must the individual work on your premises, or do you control the route or location where the work must be performed?", answerA: "Yes", answerB: "No", theBlurb: "Answering no doesn’t by itself mean independent contractor status." },
  { theQuestion: "14. Do you have the right to determine the order in which services are performed?", answerA: "Yes", answerB: "No", theBlurb: "This shows control over the worker." },
  { theQuestion: "15. Must the worker give you reports accounting for his or her actions?", answerA: "Yes", answerB: "No", theBlurb: "This may show lack of independence." },
  { theQuestion: "16. Do you pay the worker by hour, week, or month?", answerA: "Yes", answerB: "No", theBlurb: "Independent contractors are generally paid by the job or commission, although by industry practice, some are paid by the hour." },
  { theQuestion: "17. Do you pay the worker’s business or travel costs?", answerA: "Yes", answerB: "No", theBlurb: "This tends to show control." },
  { theQuestion: "18. Do you provide the worker with equipment, tools, or materials?", answerA: "Yes", answerB: "No", theBlurb: "Independent contractors generally supply the materials for the job and use their own tools and equipment." },
  { theQuestion: "19. Can you fire the worker?", answerA: "Yes", answerB: "No", theBlurb: "An independent contractor can’t be fired without subjecting you to the risk of breach of contract lawsuit." },
  { theQuestion: "20. Can the worker quit at any time, without incurring liability?", answerA: "Yes", answerB: "No", theBlurb: "An independent contractor has a legal obligation to complete the contract." }
]
var currentQuestion = 0; // variable to iterate through the array

// load up document; call answerBtn function 
$(document).ready(function () {
  $("#new-worker-btn").show();
  $("#new-worker-btn").text("Start Game");
  hideEverything();
  checkAgain();
  nextQuestion();
  $(".answerBtn").click(function () {
    console.log("answer button clicked");
    var hrAnswer = $(this).data("letter");
    recordAnswer(hrAnswer);
  });

  // function to capture user click and return explanation // eventually to include logic for writing results to object array
  // need to account for changed answer tho - or perhaps we just write to array when answer clicked, writing over previous reponse is 
  // answer is changed
  function recordAnswer(answer) {
    $("#askedQuestion").html(questionBank[currentQuestion - 1].theQuestion + "<p><p>" + questionBank[currentQuestion - 1].theBlurb);
    $(".answerBtn").hide()
    $("#statusBar").show();
    $("#statusBar").text("");
    $("#new-answer-btn").show();
    $("#new-question-btn").show();
    if (answer === "A") {
      $("#statusBar").html("You answered 'yes'.");
    } else {
      $("#statusBar").html("You answered 'no'.");
    }
  };

  // need function changeAnswer(); go back to change answer without loading new question

  // function to move on to next question.
  function nextQuestion() {
    $("#new-question-btn").click(function () {
      $("#statusBar").hide();
      $("#new-answer-btn").hide();
      $("#new-question-btn").hide();
      $("#askedQuestion").show();
      $(".answerBtn").show();
      $("#askedQuestion").html(questionBank[currentQuestion].theQuestion);
      $("#firstAnswer").html(questionBank[currentQuestion].answerA);
      $("#secondAnswer").html(questionBank[currentQuestion].answerB);
      currentQuestion = currentQuestion + 1;
    })
  };

  function hideEverything() {
    $("#statusBar").hide();
    $("#askedQuestion").hide();
    $(".answerBtn").hide();
    $("#additional-worker-btn").hide();
    $("#new-answer-btn").hide();
    $("#new-question-btn").hide();
  };

  function checkAgain() {
    $("#new-worker-btn").click(function () {
      $(".answerBtn").show()
      currentQuestion = 0;
      $("#new-worker-btn").hide();
      $("#statusBar").show();
      displayQuestion(questionBank[currentQuestion]);
    })
  };

  function displayQuestion() {
    $("#askedQuestion").show();
    $(".answerBtn").show();
    $("#askedQuestion").html(questionBank[currentQuestion].theQuestion);
    $("#firstAnswer").html(questionBank[currentQuestion].answerA);
    $("#secondAnswer").html(questionBank[currentQuestion].answerB);
    console.log(currentQuestion);
    currentQuestion = currentQuestion + 1;
  }

  // function countDown() {
  //   if (count < 10) {
  //     count = "0" + count;
  //   }
  //   $("#statusBar").text("00:" + count);
  //   if (count == 0) {
  //     clearInterval(intervalID);
  //     $("#statusBar").text("");
  //     missed = missed + 1;
  //     timeUp();
  //   }
  //   count--;
  // }

  // function totalScore() {
  //   $("#askedQuestion").show();
  //   $(".answerBtn").hide()
  //   $("#photoSpot").hide();
  //   $("#statusBar").text("");
  //   if (right > (wrong + missed)) {
  //     $("#askedQuestion").text("Good job! Your final score: " + right + " right answers, " + wrong + " wrong answers, and " + missed + " unanswered questions.");
  //   } else {
  //     $("#askedQuestion").text("Guess you need to spend a little more time at the movies: you got " + wrong + " wrong, " + missed + " unanswered questions, and only " + right + " questions right.");
  //   }
  //   $("#new-worker-btn").text("Play Again")
  //   $("#new-worker-btn").show();
  // }

  // function timeUp() {
  //   $(".answerBtn").hide()
  //   $("#statusBar").text("Time's up!");
  //   $("#askedQuestion").html(questionBank[currentQuestion - 1].theBlurb);
  //   $("#photoSpot").show();
  //   $("#photoSpot").html("<img src=" + questionBank[currentQuestion - 1].image + " alt=" + questionBank[currentQuestion - 1].altText + " width='500px'>");
  //   setTimeout(loadNewQuestion, 5000);
  // }

  // function questTimer() {
  //   count = 30;
  //   clearInterval(intervalID);
  //   intervalID = setInterval(countDown, 1000);
  //   countDown();
  // }

  // function loadNewQuestion() {
  //   $("#statusBar").hide();
  //   $("#new-answer-btn").hide();
  //   $("#new-question-btn").hide();
  //   displayQuestion(questionBank[currentQuestion]);
  //   if (currentQuestion == 20) {
  //   }
  // }

});
