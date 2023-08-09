const questions = document.querySelectorAll(".question");
const pricingDivs = document.querySelectorAll(".pricing-div");
const pricingBtnsYearly = document.getElementById("pricing-btn-yearly");
const pricingBtnsMonthly = document.getElementById("pricing-btn-monthly");
const pricingYearly = document.getElementById("yearly");
const pricingMonthly = document.getElementById("monthly");
const menuBar = document.querySelector('.menu-bar')
const navbar = document.querySelector(".nav-links");

menuBar.addEventListener("click", () => {
  navbar.classList.toggle("show-links");
})

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

pricingDivs.forEach((pricingDiv, idx) => {
    pricingDiv.addEventListener("click", () => {
    pricingDiv.classList.toggle("active-price-div")
});
})

pricingBtnsYearly.addEventListener('click', () => {
  pricingBtnsMonthly.classList.remove('active-monthly');
  pricingBtnsYearly.classList.add('active-yearly');
  pricingYearly.classList.remove('yearly-pricing');
  pricingMonthly.classList.add('monthly-pricing');

})
pricingBtnsMonthly.addEventListener('click', () => {
  console.log("monthly clicked");
  pricingBtnsYearly.classList.remove('active-yearly');
  pricingBtnsMonthly.classList.add('active-monthly');
  pricingYearly.classList.add('yearly-pricing');
  pricingMonthly.classList.remove('monthly-pricing');
})