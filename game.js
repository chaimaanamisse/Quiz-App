const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text')); // La méthode Array.from() permet de créer une nouvelle instance d'Array (une copie superficielle) à partir d'un objet itérable ou semblable à un tableau.
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        que : 'what is 2 + 2 ?',
        choice1: '4',
        choice2: '6',
        choice3: '8',
        choice4: '3',

        answer: 1,

    },

    {
        que : 'what is 2 + 3 ?',
        choice1: '4',
        choice2: '5',
        choice3: '8',
        choice4: '3',

        answer: 2,

    },

    {
        que : "what is 2 + 4 ?",
        choice1: "4",
        choice2: "6",
        choice3: "8",
        choice4: "3",

        answer: 2,

    },

    {
        que : 'what is 2 + 1 ?',
        choice1: '0',
        choice2: '0',
        choice3: '8',
        choice4: '3',

        answer: 4,

    }



    

]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4


startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]  //The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) // floor btafrit ceil b2ifrat

    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.que
    
    choices.forEach(choice => { const number = choice.dataset['number'] // choice.dataset.number   // notation par crochet
    choice.innerText = currentQuestion['choice' + number]})

    availableQuestions.splice(questionsIndex, 1) // at position "questionsIndex" remove one item

    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers)
        return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)   
        }

        selectedChoice.parentElement.classList.add(classToApply)
        // selectedChoice.parentElement.classList.remove(classToApply)
        // getNewQuestion()

        setTimeout(() => {selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
    }, 1000)
})
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()


// let sert à protéger une variable dans un block de code









