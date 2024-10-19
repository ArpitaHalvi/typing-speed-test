const setOfWords = [
    "These are the words for you to practice typing dude.",
    "Always be ready to grab the opportunity in our lives.",
    "Try try but don't cry my dude.",
    "Always keep smiling everyone.",
    "I am beautiful."
]

const btn = document.getElementById("main-btn");
const textarea = document.getElementById("textarea");
const msg = document.getElementById("msg");
let startTime, endTime;

const startGame = () => {
    const randomIdx = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomIdx];
    const dateObj = new Date();
    startTime = dateObj.getTime();
    btn.innerText = "DONE";

}

const endGame = () => {
    const dateObj = new Date();
    endTime = dateObj.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);

    let sentence = textarea.value;
    let wordCount = countWords(sentence);
    let speed = Math.round((wordCount / totalTime) * 60);
    let finalText = `You typed total ${speed} words per minute.`;
    finalText += compareWords(msg.innerText, sentence);
    msg.innerText = finalText;
}

const countWords = (sentence) => {
    let res = sentence.split(" ").length;
    console.log(res);
    return res;
}

const compareWords = (sen1, sen2) => {
    sen1 = sen1.split(" ");
    sen2 = sen2.split(" ");
    let count = 0;
    sen1.forEach((word, idx) => {
        if (word === sen2[idx]) {
            count++;
        }
    })
    return `You typed total ${count} words out of ${sen1.length} and the error words are ${sen1.length - count}`;
}

btn.addEventListener("click", function () {
    if (this.innerText === "START") {
        textarea.removeAttribute('disabled');
        startGame();
    }
    else if (this.innerText === "DONE") {
        textarea.disabled = true;
        btn.innerText = "START";
        endGame();
        textarea.value = "";
    }
})
