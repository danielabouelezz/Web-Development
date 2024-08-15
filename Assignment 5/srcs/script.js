const quizQuestions = [
    {
        question: "What is the capital of lebanon?",
        options: ["Rome", "Paris", "Beirut", "London"],
        answer: "Beirut"
    },
    {
        question: "What does the S in HTTPS stand for?", 
        options: ["Secure", "System", "Speed", "Size"],
        answer: "Secure"
    },
    {
        question: "What language runs in a web browser?",
        options: ["Python", "JavaScript", "C++", "C#"],
        answer: "JavaScript"
    },
    {
        question: "How to get the length of an array in javascript?",
        options: ["count", "size", "items", "length"],
        answer: "length" 
    }
];

let currentQuestionIndex = 0;
let score = 0;
let didAnswer = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const questionsAnswerEl = document.getElementById("questionAnswer");

function displayQuestion(){
    questionEl.innerHTML = "";
    questionsAnswerEl.innerHTML = "";
    optionsEl.innerHTML = "";

    let currentQuestion = quizQuestions[currentQuestionIndex];
    questionEl.innerHTML = currentQuestion.question;

    currentQuestion.options.forEach(function(option){
        const optionEl = document.createElement("li");
        optionEl.innerHTML = option;
        optionEl.style.cursor = "pointer";
        optionEl.onclick = function(){
            selectOption(option);
        };
            
        optionsEl.appendChild(optionEl)
    })
}

function selectOption(option){
    if(didAnswer){
        return;
    }
    let currentQuestion = quizQuestions[currentQuestionIndex];
    if(option == currentQuestion.answer){
        score++;
        questionsAnswerEl.innerHTML = "Your answer is correct";
        questionsAnswerEl.style.color = "green";
    }else{
        questionsAnswerEl.innerHTML = "Wrong! The correct answer is " + currentQuestion.answer;
        questionsAnswerEl.style.color = "red";
    }
    didAnswer = true;
}

function nextQuestion(){
    currentQuestionIndex++;
    didAnswer = false;
    if(currentQuestionIndex == quizQuestions.length){
        showScore();
    }else{
        displayQuestion();
    }
}

function showScore(){
    const cont = document.getElementById("quiz-container");
    cont.innerHTML = "<h1>Your score is " + score + "/" + quizQuestions.length + "</h1>";
}
displayQuestion();