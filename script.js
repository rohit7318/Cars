document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("visited")) {
      localStorage.setItem("visited", "true");
      const one = document.querySelector(".content");
      one.classList.add("animate-on-first-visit");
    }
  });
  