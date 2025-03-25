const quizData = [
    {
        question: "Which group released 'Butter'?",
        options: ["BTS", "BLACKPINK", "EXO", "TWICE"],
        answer: "BTS"
    },
    {
        question: "Who is the leader of LE SSERAFIM?",
        options: ["Chaewon", "Yunjin", "Kazuha", "Sakura", "Eunchae"],
        answer: "Chaewon"
    },
    {
        question: "Which group debuted first?",
        options: ["TXT", "Stray Kids", "EXO", "NCT", "SEVENTEEN"],
        answer: "EXO"
    },
    {
        question: "What is Twice's most recent album called?",
        options: ["DIVE", "STRATEGY", "One Spark", "READY TO BE", "With YOU-th"],
        answer: "STRATEGY"
    },
    {
        question: "Which group had a collaboration with Sabrina Carpenter?",
        options: ["BLACKPINK", "NewJeans", "ITZY", "FIFTY FIFTY", "(G)I-DLE"],
        answer: "FIFTY FIFTY"
    },
    {
        question: "Which of these songs has more streams on spotify?",
        options: ["What is Love? - TWICE", "How You Like That - BLACKPINK", "Seven(feat.Latto) - Jungkook", "OMG - NewJeans", "Dynamite - BTS"],
        answer: "Seven(feat.Latto) - Jungkook"
    },
    {
        question: "Who is the oldest TWICE member?",
        options: ["Nayeon", "Jeongyeon", "Sana", "Momo", "Tzuyu"],
        answer: "Nayeon"
    },
    {
        question: "What is aespa's fandom name?",
        options: ["Miracle", "Neverland", "MY", "MIDZY", "Insomnia"],
        answer: "MY"
    },
    {
        question: "Which Red Velvet member has the most Instagram followers?",
        options: ["Yeri", "Seulgi", "Irene", "Joy", "Wendy"],
        answer: "Joy"
    },
    {
        question: "What companies are the Big 3 of K-pop?",
        options: ["HYBE, YG, SM", "Cube, HYBE, JYP", "BigHit, Cube, SM", "YG, JYP, SM"],
        answer: "YG, JYP, SM"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";

        let message = "";
        let imageSrc = "";

        if (score == quizData.length) {
            message = "Amazing! Perfect score! 🎉";
            imageSrc = "https://pbs.twimg.com/media/GBgmGS6akAAcZAT.jpg";
        } else if (score >= 7) {
            message = "Good Job! 😊";
            imageSrc = "https://64.media.tumblr.com/9f370ab11e2b090cacc886970461a470/4f49d46cd2e60fae-2c/s1280x1920/8ac60a209c5d16db14dd9419694c79c5bda01965.jpg";
        } else if (score >= 4) {
            message = "Could've done better 😡";
            imageSrc = "https://i.pinimg.com/736x/e7/49/89/e749892384f351b48e57837a5de622f0.jpg";
        } else {
            message = "How disappointing 😢";
            imageSrc = "https://i.pinimg.com/736x/b2/e2/3a/b2e23ae7343ebab3efec6bd0b9f3e442.jpg";
        }

        resultElement.classList.remove("hidden");
        resultElement.querySelector("#score").textContent = `${score} out of ${quizData.length}! ${message}`;

        const resultImage = document.getElementById("resultImage");
        if (resultImage) {
            resultImage.src = imageSrc;
            resultImage.classList.remove("hidden");
            resultImage.style.display = "block";
        } else {
            console.error("Result image element not found in HTML!");
        }

        nextButton.style.display = "none";
        return;
    }

    let currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    optionsElement.innerHTML = "";

    currentQuiz.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsElement.appendChild(btn);
    });
}


function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

loadQuestion();
