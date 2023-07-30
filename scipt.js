const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

const questions = [
  {
    question: "Quelle est la capitale de l'Espagne ?",
    options: ["Madrid", "Barcelone", "Paris", "Rome"],
    correctAnswer: "Madrid"
  },
  {
    question: "Quel est le plus grand océan du monde ?",
    options: ["Océan Atlantique", "Océan Indien", "Océan Pacifique", "Océan Arctique"],
    correctAnswer: "Océan Pacifique"
  },
  {
    question: "Quel peintre est célèbre pour avoir peint la Joconde ?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "Quel est le plus grand désert du monde ?",
    options: ["Désert du Sahara", "Désert de Mojave", "Désert d'Atacama", "Désert du Kalahari"],
    correctAnswer: "Désert du Sahara"
  },
  {
    question: "Dans quelle ville se trouve la Tour Eiffel ?",
    options: ["Paris", "Londres", "Berlin", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Quel est le pays d'origine du tango ?",
    options: ["Argentine", "Brésil", "Espagne", "Italie"],
    correctAnswer: "Argentine"
  },
  {
    question: "Qui a écrit la pièce de théâtre 'Roméo et Juliette' ?",
    options: ["William Shakespeare", "Victor Hugo", "Friedrich Schiller", "Molière"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "Quelle est la plus haute montagne du monde ?",
    options: ["Mont Everest", "Mont Kilimandjaro", "Mont Fuji", "Mont McKinley"],
    correctAnswer: "Mont Everest"
  },
  {
    question: "Quel est le plus grand fleuve du monde en termes de débit d'eau ?",
    options: ["Fleuve Amazone", "Fleuve Nil", "Fleuve Yangtsé", "Fleuve Mississippi"],
    correctAnswer: "Fleuve Amazone"
  },
  {
    question: "Quel est le principal composant de l'air que nous respirons ?",
    options: ["Azote", "Oxygène", "Dioxyde de carbone", "Argon"],
    correctAnswer: "Azote"
  },
  {
    question: "Combien font 2 + 2 ?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    question: "Quel est le résultat de 10 * 5 ?",
    options: ["30", "40", "50", "60"],
    correctAnswer: "50"
  },
  {
    question: "Résolvez l'équation suivante : 3x + 7 = 22",
    options: ["x = 3", "x = 5", "x = 8", "x = 9"],
    correctAnswer: "x = 5"
  },
  {
    question: "Quel est le périmètre d'un carré de côté 6 unités ?",
    options: ["18 unités", "24 unités", "30 unités", "36 unités"],
    correctAnswer: "24 unités"
  }
  
 
  // Mettez ici vos 60 questions sur la culture générale
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 15; // Temps en secondes pour répondre à chaque question
let interval;

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });

  startTimer();
}

function checkAnswer(selectedOption) {
  clearInterval(interval);
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  } else {
    endGame();
    return;
  }

  currentQuestionIndex++;
  updateScore();

  if (currentQuestionIndex < questions.length) {
    setTimeout(showNextQuestion, 1000); // Délai d'une seconde entre chaque question
  } else {
    endGame();
  }
}

function updateScore() {
  scoreDisplay.textContent = score;
}

function startTimer() {
  timer = 15;
  timerDisplay.textContent = timer;

  interval = setInterval(() => {
    timer--;
    if (timer <= 0) {
      clearInterval(interval);
      endGame();
    }
    timerDisplay.textContent = timer;
  }, 1000); // Mettre à jour le chronomètre chaque seconde
}

function showNextQuestion() {
  showQuestion();
}

function endGame() {
  clearInterval(interval);
  questionText.textContent = "Félicitations ! Vous avez terminé le QCM.";
  optionsContainer.innerHTML = "";
  timerDisplay.textContent = "";
}

// Mélanger les questions pour les poser dans un ordre aléatoire
questions.sort(() => Math.random() - 0.5);

// Démarrer le jeu en affichant la première question
showQuestion();





  
  