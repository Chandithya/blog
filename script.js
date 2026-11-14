const progress = document.getElementById("progress");
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

function updateProgress(){
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}
window.addEventListener("scroll", updateProgress, {passive:true});
updateProgress();

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.textContent = nav.classList.contains("open") ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuBtn.textContent = "☰";
}));
