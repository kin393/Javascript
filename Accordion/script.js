let questions = Array.from(document.getElementsByClassName("question"));
let answer = Array.from(document.getElementsByClassName("answer"));

let accWrapper = document.querySelector(".accordionWrapper");

let toggle = document.querySelector("button");

for (let i = 0; i < questions.length; i++) {
  let currSelectionQuestion = questions[i];
  let currSelectionAnswer = answer[i];
  currSelectionQuestion.addEventListener("click", function () {
    for (let j = 0; j < answer.length; j++) {
      if(j != i) answer[j].style.display = 'none'
    }
    console.log(currSelectionAnswer.style.display )
    if(currSelectionAnswer.style.display == 'block')
      currSelectionAnswer.style.display = 'none'
    else
      currSelectionAnswer.style.display = 'block'
  });
}

toggle.addEventListener("click", () => {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].style.display == "block") {
      answer[i].style.display = "none";
    } else {
      answer[i].style.display = "block";
    }
  }
});
