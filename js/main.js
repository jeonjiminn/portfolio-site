/* 다크모드 자동 & 토글 */
const themeToggle = document.getElementById("themeToggle");

// OS 환경 자동 감지
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* Scroll Fade-in */
const fadeItems = document.querySelectorAll(".fade-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

fadeItems.forEach((item) => observer.observe(item));

/* Smooth Scroll */
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(e.target.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
  });
});
