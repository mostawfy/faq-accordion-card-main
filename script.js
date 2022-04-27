const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    question.parentNode.classList.toggle("open");
  });
});
