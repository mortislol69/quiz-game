let questions = [
  {
    question: "Has Arsenal Won a Premier League?",
    options: [
      "Yes", // Correct
      "No",

    ],
    correctAnswer: "Yes",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "How Many Times Has Arsenal Won a Premier League?",
    options: [
      "13", // Correct
      "12",
      "15",
      "20",
    ],
    correctAnswer: "13",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "When Was Arsenal FC Founded?",
    options: [
      "1886", // Correct
      "1949",
      "1990",
      "1884",
    ],
    correctAnswer: "1886",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "What is the name of Arsenal's Home Stadium?",
    options: [
      "The Emirates Stadium", // Correct
      "The Arsenal Stadium",
      "The Stadium of England",
    ],
    correctAnswer: "The Emirates Stadium",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },


]

let limit = questions.length
let score = 0
let count = 0

function render(questions) {
  let quizContainer = document.querySelector('.quiz-container')
  let count = 0;

  quizContainer.innerHTML = ''
  questions.forEach((el, index) => {
    let item = `
        <div>
           <p class="question">${el.question}</p>
           ${el.options.map((option, optionIndex) => {
      if (el.isAnswered) {
        return (
          `<button disabled="true" onclick="checkAnswer(${index},'${option}')" class="answer ${el.answer === optionIndex && el.isAnsweredCorrect ? "correct" : "incorrect"} ">${option}</button>`
        )
      } else {
        return (
          `<button onclick="checkAnswer(${index},'${option}',${optionIndex})" class="answer ">${option}</button>`
        )
      }
    }).join('')}
        </div>
        `
    quizContainer.insertAdjacentHTML('beforeend', item)
  })
}

render(questions)


function checkAnswer(index, choosenAnswer, optionIndex) {
  count++
  if (questions[index].correctAnswer === choosenAnswer) {
    questions[index].isAnswered = true
    questions[index].isAnsweredCorrect = true
    questions[index].answer = optionIndex
    score += 10
  } else {
    questions[index].isAnswered = true
    questions[index].isAnsweredCorrect = false
    questions[index].answer = optionIndex
  }
  render(questions)
  
  setTimeout(() => {
    if (limit === count) {
      alert(`score:${score}`)
    }
  }, 0);

}


