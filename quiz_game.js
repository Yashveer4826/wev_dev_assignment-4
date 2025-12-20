// Simple JavaScript Quiz Game (browser console ke liye)
const quiz = [
  { question: "What is the capital of India?", answer: "New Delhi" },
  { question: "What is 5 + 5?", answer: "10" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "Who wrote the Ramayana?", answer: "Valmiki" }
];

function startQuiz() {
  let score = 0;
  for (let i = 0; i < quiz.length; i++) {
    let userAnswer = prompt(quiz[i].question);
    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }
    userAnswer = userAnswer.toLowerCase().trim();
    const correctAnswer = quiz[i].answer.toLowerCase().trim();
    if (userAnswer === correctAnswer) {
      alert("Correct! 🎉");
      score++;
    } else {
      alert(`Wrong ❌. Correct answer is: ${quiz[i].answer}`);
    }
  }
  alert(`Quiz completed!\nYour final score: ${score} out of ${quiz.length}`);
}