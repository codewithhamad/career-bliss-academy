const questions = document.querySelectorAll(".faq-question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const arrow = q.querySelector(".arrow");
    const isOpen = answer.style.display === "block";
    document
      .querySelectorAll(".faq-answer")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".arrow")
      .forEach((ar) => ar.classList.remove("open"));

    if (!isOpen) {
      answer.style.display = "block";
      arrow.classList.add("open");
    }
  });
});
