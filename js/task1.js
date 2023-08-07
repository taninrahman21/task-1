const questions = document.querySelectorAll(".question");
questions.forEach((question, idx) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    if(question.classList.contains('active')){
      question.querySelector("h2").innerText = "-";
    } else {
      question.querySelector("h2").innerText = "+";
    }
  });
})

const faqs = () => {
  fetch("questions.json")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
}