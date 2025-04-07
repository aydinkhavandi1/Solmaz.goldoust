const toggleTheme = document.getElementById("toggleTheme");
const toggleLang = document.getElementById("toggleLang");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

let isEnglish = false;
toggleLang.addEventListener("click", () => {
  isEnglish = !isEnglish;

  document.getElementById("name").textContent = isEnglish ? "Solmaz Goldoust" : "سولماز گلدوست";
  document.getElementById("job").textContent = isEnglish ? "Motion Graphic Designer" : "موشن گرافیست";
  document.getElementById("bio").textContent = isEnglish
    ? "I'm addicted to my own hope — the light must be seen."
    : "من به امیدواری خود معتادم، نور را باید دید";
  document.getElementById("instagram").textContent = isEnglish ? "Instagram" : "اینستاگرام";
  document.getElementById("linkedin").textContent = isEnglish ? "LinkedIn" : "لینکدین";

  document.body.setAttribute("dir", isEnglish ? "ltr" : "rtl");
  toggleLang.textContent = isEnglish ? "FA" : "EN";
});

function scrollToPortfolio() {
  const section = document.getElementById("portfolio");
  section.scrollIntoView({ behavior: "smooth" });
}
