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

  // { theQuestion: "Does the worker work full-time for the employer?", answerA: "Four", answerB: "Nine", answerC: "Eleven", answerD: "Thirteen", theBlurb: "<em>Titanic</em> received 11 Academy Awards, including Best Picture, Best Director, Best Visual Effects, and Best Actress for Kate Winslet.", rightAns: "C", image: "assets/images/titanic.jpg", altText: "Titanic" },
  // { theQuestion: "Is the worker required to comply to work when, where and how the employer wants?", answerA: "<em>Life is Beautiful</em><br>(<em>La vita è bella</em>)", answerB: "<em>Crouching Tiger, Hidden Dragon</em><br>(<em>Wo hu cang long</em>)", answerC: "<em>Babette’s Feast</em><br>(<em>Babettes gæstebud</em>)", answerD: "<em>Amélie</em><br>(<em>Le fabuleux destin d'Amélie Poulain</em>)", theBlurb: "<em>Amélie</em> was nominated for five Oscars – Foreign Language Film, Best Original Screenplay, Best Cinematography, Best Sound Mixing, and Best Production Design – but did not win in any category.", rightAns: "D", image: "assets/images/amelie.jpg", altText: "Amélie" },
  // { theQuestion: "Does the worker have a mandatory schedule with set hours?", answerA: "Katharine Hepburn", answerB: "Walter Brennan", answerC: "Jack Nicholson", answerD: "Ingrid Bergman", theBlurb: "Katharine Hepburn won four Best Actress acting awards, for <em>Morning Glory</em> (1933), <em>Guess Who's Coming to Dinner?</em> (1967), <em>The Lion in Winter</em> (1968), <em>On Golden Pond</em> (1981). Jack Nicholson, Ingrid Bergman, and Walter Brennan all have won three acting Academy Awards.", rightAns: "A", image: "assets/images/katharine-hepburn.jpg", altText: "Katharine Hepburn" },
  // { theQuestion: "Does the worker use the employer’s equipment?", answerA: "Steven Spielberg", answerB: "John Ford", answerC: "William Wyler", answerD: "Frank Capra", theBlurb: "John Ford won four Best Director Oscars, for <em>The Informer</em> (1935), <em>The Grapes of Wrath</em> (1940), <em>How Green Was My Valley</em> (1941), and <em>The Quiet Man</em> (1952). He was also nominated for <em>Stagecoach</em> (1939). William Wyler and Frank Capra both have won three times.", rightAns: "B", image: "assets/images/John-Ford.jpg", altText: "John Ford" },
  // { theQuestion: "Does the worker receive payments of regular amounts and at set intervals?", answerA: "Spencer Tracy", answerB: "Laurence Olivier", answerC: "Al Pacino", answerD: "Jack Nicholson", theBlurb: "Jack Nicholson has been nominated 12 times for his performances.", rightAns: "D", image: "assets/images/JackNicholson.jpg", altText: "Jack Nicholson" },
  // { theQuestion: "Does the worker work for more than one employer at a time?", answerA: "<em>One Flew Over the Cuckoo's Nest</em>", answerB: "<em>Gone With the Wind</em>", answerC: "<em>It Happened One Night</em>", answerD: "<em>The Silence of the Lambs</em>", theBlurb: "Frank Capra's influential romantic comedy <em>It Happened One Night</em> became the first film to perform a clean sweep of the top five categories: Best Picture, Best Director, Best Actor, Best Actress and Best Screenplay. This feat would later be duplicated by <em>One Flew Over the Cuckoo's Nest</em> in 1976 and <em>The Silence of the Lambs</em> in 1992.", rightAns: "C", image: "assets/images/IT-HAPPENED-ONE-NIGHT.jpg", altText: "It Happened One Night" },
  // { theQuestion: "Does the employer’s business depend on the performance of workers’ services in order to remain viable?", answerA: "Hattie McDaniel", answerB: "Halle Berry", answerC: "Whoopi Goldberg", answerD: "Jennifer Hudson", theBlurb: "Shockingly, only one African-American has won the Best Actress award in 90+ years of Academy Awards: Halle Berry, for her performance in <em>Monster's Ball</em> (2001).", rightAns: "B", image: "assets/images/Halle-Berry.jpg", altText: "Halle Berry" },
  // { theQuestion: "Must the worker personally perform the services or tasks?", answerA: "<em>The Lord of the Rings</em>", answerB: "<em>Rocky</em>", answerC: "<em>The Godfather</em>", answerD: "<em>James Bond</em>", theBlurb: "<em>The Godfather</em> series is the only film series to win more than one Best Picture award, for <em>The Godfather</em> (1972) and <em>The Godfather: Part II<em> (1974).", rightAns: "C", image: "assets/images/Godfather.jpg", altText: "The Godfather" },
  // { theQuestion: "Must the worker submit regular reports and updates to the employer?", answerA: "Katharine Hepburn", answerB: "Helen Mirren", answerC: "Jessica Tandy", answerD: "Geraldine Page", theBlurb: "Jessica Tandy was the oldest winner of an acting award when she won the Best Actress Oscar for <em>Driving Miss Daisy</em> (1989).", rightAns: "C", image: "assets/images/Jessica-Tandy.jpg", altText: "Jessica Tandy" },
  // { theQuestion: "Does the worker have the ability to hire and pay other workers in the employer’s name?", answerA: "Katharine Hepburn", answerB: "Jack Nicholson", answerC: "Meryl Streep", answerD: "Walt Disney", theBlurb: "Walt Disney won the most Academy Awards, with 22 competitive and 4 honorary Oscars.", rightAns: "D", image: "assets/images/Walt-Disney.jpg", altText: "Walt Disney" }
]
var yes = 0; // number of "yes" answers
var no = 0; // number of "no" answers
var unsure = 0; // number of unsure answers
var rightAns = ""; // placeholder for the right answer for each question
var blurbText = ""; // placeholder for explanation of correctAnswer
var currentQuestion = 0; // variable to iterate through the array
var count; // placeholder; will be used to put 30 seconds on the clock
var intervalID; // placeholder; declare variable at global level
var anyToken = ""; // variable for translating player click into selected answer 

$(document).ready(function () {
  $("#new-game-btn").show();
  $("#new-game-btn").text("Start Game");
  hideEverything();
  playAgain();
  $(".answerBtn").click(function () {
    var playerGuess = $(this).data("letter");
    answerKey = "answer" + playerGuess;
    evaluateGuess(playerGuess);
  });

  function questTimer() {
    count = 30;
    clearInterval(intervalID);
    intervalID = setInterval(countDown, 1000);
    countDown();
  }

  function evaluateGuess(guess) {
    $("#askedQuestion").html(questionBank[currentQuestion - 1].theBlurb);
    $(".answerBtn").hide()
    $("#statusBar").text("");
    $("#photoSpot").show();
    $("#photoSpot").html("<img src=" + questionBank[currentQuestion - 1].image + " alt=" + questionBank[currentQuestion - 1].altText + " id='photoSpot'>");
    clearInterval(intervalID);
    if (guess === rightAns) {
      $("#statusBar").html(questionBank[currentQuestion - 1][answerKey] + " is right!");
      right = right + 1;
    } else {
      $("#statusBar").html("Nope, it's not " + questionBank[currentQuestion - 1][answerKey] + ".");
      wrong = wrong + 1;
    }
    setTimeout(loadNewQuestion, 5000);
  }

  function loadNewQuestion() {
    if (currentQuestion == 10) {
      totalScore();
    } else {
      displayQuestion(questionBank[currentQuestion]);
    }
  }

  function totalScore() {
    $("#askedQuestion").show();
    $(".answerBtn").hide()
    $("#photoSpot").hide();
    $("#statusBar").text("");
    if (right > (wrong + missed)) {
      $("#askedQuestion").text("Good job! Your final score: " + right + " right answers, " + wrong + " wrong answers, and " + missed + " unanswered questions.");
    } else {
      $("#askedQuestion").text("Guess you need to spend a little more time at the movies: you got " + wrong + " wrong, " + missed + " unanswered questions, and only " + right + " questions right.");
    }
    $("#new-game-btn").text("Play Again")
    $("#new-game-btn").show();
  }

  function hideEverything() {
    $("#statusBar").hide();
    $("#askedQuestion").hide();
    $("#photoSpot").hide();
    $(".answerBtn").hide();
    $("#blurbBar").hide();
  }

  function displayQuestion(foo) {
    questTimer();
    $("#photoSpot").hide();
    $("#blurbBar").empty();
    $("#askedQuestion").show();
    $(".answerBtn").show();
    $("#askedQuestion").html(foo.theQuestion);
    $("#firstAnswer").html(foo.answerA);
    $("#secondAnswer").html(foo.answerB);
    $("#thirdAnswer").html(foo.answerC);
    $("#fourthAnswer").html(foo.answerD);
    rightAns = foo.rightAns;
    currentQuestion++;
  }

  function countDown() {
    if (count < 10) {
      count = "0" + count;
    }
    $("#statusBar").text("00:" + count);
    if (count == 0) {
      clearInterval(intervalID);
      $("#statusBar").text("");
      missed = missed + 1;
      timeUp();
    }
    count--;
  }

  function timeUp() {
    $(".answerBtn").hide()
    $("#statusBar").text("Time's up!");
    $("#askedQuestion").html(questionBank[currentQuestion - 1].theBlurb);
    $("#photoSpot").show();
    $("#photoSpot").html("<img src=" + questionBank[currentQuestion - 1].image + " alt=" + questionBank[currentQuestion - 1].altText + " width='500px'>");
    setTimeout(loadNewQuestion, 5000);
  }

  function playAgain() {
    $("#new-game-btn").click(function () {
      $(".answerBtn").show()
      right = 0;
      wrong = 0;
      missed = 0;
      currentQuestion = 0;
      $("#new-game-btn").hide();
      $("#statusBar").show();
      displayQuestion(questionBank[currentQuestion]);
    })
  }
});
