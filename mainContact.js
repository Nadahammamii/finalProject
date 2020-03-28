//quiz 
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'This famous Dutch artist was famous for painting sunflowers and "Starry Night", what is his name?',
    answers: [
      { text: 'Van Gogh', correct: true },
      { text: 'Monet', correct: false },
      { text: 'Rembrandt', correct: false },
      { text: 'Da Vinci', correct: false }

    ]
  },
  {
    question: 'Famous for his "abstract" paintings, this Spanish painter was known for his melting clocks in "The Persistence of Time."',
    answers: [
     
      { text: 'Any Warhol', correct: false },
      { text: 'Rembrandt', correct: false },
      { text: 'Salvador Dali', correct: true },
      { text: 'Jackson Pollock', correct: false }
    ]
  },
  {
    question: 'The epic ceiling of the Sistine Chapel in Vatican City was painted by which Italian Renaissance painter?',
    answers: [
      { text: 'Raphael', correct: false },
      { text: 'Michaelangelo', correct: true },
      { text: 'Leonardo', correct: false },
      { text: 'Donatello', correct: false }
    ]
  },
  {
    question: 'The Mona Lisa is famous for her secretive smile, but do you know who painted her?',
    answers: [
      { text: 'Da Vinci', correct: true },
      { text: 'Modigliani', correct: false },
      { text: 'Caravaggio', correct: false },
      { text: 'Donatello', correct: false }
    ]
  },
  {
    question: 'The Mona Lisa is famous for her secretive smile, but do you know who painted her?',
    answers: [
      { text: 'Da Vinci', correct: true },
      { text: 'Modigliani', correct: false },
      { text: 'Caravaggio', correct: false },
      { text: 'Donatello', correct: false }
    ]
  },
  {
    question: 'This female American painter was famous for her large flowers, do you know who she is?',
    answers: [
      { text: 'Georgia O"Keefe', correct: false },
      { text: 'Caravaggio', correct: false },
      { text: 'Frida Kahlo', correct: true },
      { text: 'Donatello', correct: false }
    ]
  },
  {
    question: 'Can you name the Norwegian painter who created The Scream ?',
    answers: [
      { text: 'Mucha', correct: false },
      { text: 'Frida Kahlo', correct: false },
      { text: 'Gustav Klimt', correct: false },
      { text: 'Edvard Munch', correct: true }
    ]
  },

]
//liaison avec FireBase
document.getElementById('myform').addEventListener("submit",function(event){
  event.preventDefault();
  submitContact();
})
var firebaseConfig = {
  apiKey: "AIzaSyAJmZkLTeIyXX3e9HygPk_IvcxLHGEwWoA",
  authDomain: "checkpoint-contact.firebaseapp.com",
  databaseURL: "https://checkpoint-contact.firebaseio.com",
  projectId: "checkpoint-contact",
  storageBucket: "checkpoint-contact.appspot.com",
  messagingSenderId: "1024172895009",
  appId: "1:1024172895009:web:738443f4ef332ea3186c60",
  measurementId: "G-VQE2FJNW7S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

let ref = database.ref("contact");
function submitContact(){
    let data={
         sugg : document.getElementById('exampleFormControlTextarea1').value , 
         email : document.getElementById('exampleInputEmail1').value , 
  }
  ref.push(data);
}
