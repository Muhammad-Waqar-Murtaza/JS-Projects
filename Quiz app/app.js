const questions = [

    {
        question: "Which is the biggest shark?",
        answer: [
            { text: 'Blacknose', correct: false },
            { text: 'Megalodon', correct: true },
            { text: 'Frilled', correct: false },
            { text: 'Crocodile', correct: false },
        ]
    },

    {
        question: "Which is more closer to sun?",
        answer: [
            { text: 'Saturn', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Earth', correct: true },
            { text: 'Jupiter', correct: false },
        ]
    },

    {
        question: "Which is the smallest continent in the world?",
        answer: [
            { text: 'Australia', correct: true },
            { text: 'Asia', correct: false },
            { text: 'Arctic', correct: false },
            { text: 'Africa', correct: false },
        ]
    },

    {
        question: "Which is the largest desert in the world?",
        answer: [
            { text: 'Sahara', correct: false },
            { text: 'Kalahari', correct: false },
            { text: 'Gobi', correct: false },
            { text: 'Antarctica', correct: true },
        ]
    }

]

const questionElement = document.querySelector('.question')
const answerButtons = document.querySelector('.answer-buttons')
const nextButton = document.querySelector('.btn-next')
const newAnswer = document.querySelector('.btn')

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () =>{

    currentQuestionIndex = 0
    score = 0
    showQuestion()

}

const resetState = () =>{

    nextButton.style.display = 'none'
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
    nextButton.innerHTML = 'Next'
}

const showQuestion = () =>{
    resetState()
    const currentQuestion = questions[currentQuestionIndex]
    const questionNumber = currentQuestionIndex + 1
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question


    currentQuestion.answer.forEach((answer) =>{
        const button = document.createElement('button') 
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButtons.appendChild(button)

        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', showAnswers)
    })

}

const showAnswers = (e) =>{

    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add('rightanswer')
        score++
    } else {
        selectedBtn.classList.add('wronganswer')
    }

    Array.from(answerButtons.children).forEach( button =>{

        if(button.dataset.correct === "true"){
            button.classList.add('rightanswer')
        }
        button.disabled = true

    })
    nextButton.style.display = 'block'

}

const showScore = () =>{
    resetState()
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`

    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'

}

const questionHandler = () =>{

    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }

}

nextButton.addEventListener('click', ()=>{

    if(currentQuestionIndex < questions.length){
       questionHandler()

    } else{
        startQuiz()
    }

})

startQuiz()