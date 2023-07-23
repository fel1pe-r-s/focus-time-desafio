let darkMode = true;
const buttonToggle = document.querySelector("#toggle-mode");

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light");
  const mode = darkMode ? "ligth" : "dark";
  event.currentTarget.querySelector(
    "span"
  ).textContent = `${mode} mode ativado`;
  darkMode = !darkMode;
});