
const player = document.getElementById('player')
const icons = document.getElementById('icons')

icons.addEventListener('click', startgame)

function startgame() {
    startbutton.classList.add('hide')
    shuffledquestions = questions.sort(() => Math.random() - .5)
    currentquestionindex = 0
    questioncontainerelement.classList.remove('hide')
    setnextquestion()

}
document.getElementById('folder').addEventListener('click', opengithub)
function opengithub() {
    window.open("https://www.github.com");
}
function setnextquestion() {
    resetstate()
    showquestion(shuffledquestions[currentquestionindex])
}


function showquestion(question){
    questionelement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectanswer)
        answerbuttonselement.appendChild(button)
    })
}

function resetstate() {
    clearStatusClass(document.body)
    nextbutton.classList.add('hide')
    while (answerbuttonselement.firstChild) {
        answerbuttonselement.removeChild(answerbuttonselement.firstChild)
    }
}
function selectanswer(e) {
    console.log('clocked')
    const selectedbutton = e.target
    const correct = selectedbutton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerbuttonselement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledquestions.length > currentquestionindex +1) {
        nextbutton.classList.remove('hide')
    }   else {
        startbutton.innerText = 'Restart'
        startbutton.classList.remove('hide')
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
        question: 'What is 2 + 2?',
        answers:[
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]