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



// Feedback Slider
const nodes = document.querySelectorAll(".item")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

let active = 1;
const fireFn = () => {
    let count = 0

    nodes[active].style.transform = `none`
    nodes[active].style.zIndex = 1
    nodes[active].style.filter = `none`
    nodes[active].style.opacity = 1;

    for (let i = active + 1; i < nodes.length; i++) {
        count++;
        nodes[i].style.transform = `translateX(${ 120 * count }px) scale(${ 1 - 0.2 * count }) `
        nodes[i].style.zIndex = -count
        nodes[i].style.filter = `blur(2px)`
        nodes[i].style.opacity = count > 2 ? 0 : 0.6;
    }

    count = 0
    for (let i = active - 1; i >= 0; i--) {
        count++;
        nodes[i].style.transform = `translateX(${ -120 * count }px) scale(${ 1 - 0.2 * count })`
        nodes[i].style.zIndex = -count
        nodes[i].style.filter = `blur(2px)`
        nodes[i].style.opacity = count > 2 ? 0 : 0.6;
    }
}

fireFn()

next.addEventListener('click', () => {
    active = active + 1 < nodes.length ? active + 1 : active
    fireFn()
})

prev.addEventListener("click", () => {
    active = active - 1 >= 0 ? active - 1 : active
    fireFn()
})