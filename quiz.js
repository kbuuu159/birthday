const questions = [
    {
      question: "What nickname do I love being called by you?",
      answers: ["kalyani", "kallu", "pillu", "Baby"],
      correct: "pillu"
    },
    {
      question: "When did we have our first kiss?",
      answers: ["10th June", "9th May", "22nd march", "i dont know"],
      correct: "9th May"
    },
    {
      question: "What do I like most about you?",
      answers: ["Your cute smile", "Your caring nature ", "Your funny side", "All of the above"],
      correct: "All of the above"
    },
    {
      question: "Which one is your secret superpower?",
      answers: ["Looking this good", "Making me laugh", "Being the kindest", "All of them 💖"],
      correct: "All of them 💖"
    },
    // Add more questions here!
  ];
  
  let current = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = questions[current];
    document.getElementById("question").innerText = q.question;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
  
    q.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.innerText = answer;
      btn.onclick = () => checkAnswer(answer);
      answersDiv.appendChild(btn);
    });
  
    document.getElementById("feedback").innerText = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("finishBtn").style.display = "none";
  }
  
  function checkAnswer(answer) {
    const correct = questions[current].correct;
    const feedback = document.getElementById("feedback");
  
    if (answer === correct) {
      feedback.innerText = "Ayyy that’s right!! You know me so well 😘";
      score++;
    } else {
      feedback.innerText = "Oops 😅 but I still love you tons 💗";
    }
  
    document.getElementById("nextBtn").style.display =
      current < questions.length - 1 ? "inline-block" : "none";
  
    if (current === questions.length - 1) {
      const kisses = "💋".repeat(score);
      document.getElementById("feedback").innerHTML =
        `You got ${score} out of ${questions.length} right!<br>You won ${score} kisses today 😘 ${kisses}`;
      document.getElementById("finishBtn").style.display = "inline-block";
    }
  }
  
  function nextQuestion() {
    current++;
    loadQuestion();
  }
  
  window.onload = loadQuestion;
  