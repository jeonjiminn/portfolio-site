const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// 저장된 테마 적용
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
} else {
  toggleBtn.textContent = "🌙";
}

// 클릭 시 토글
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: window.innerWidth < 768 ? 0.08 : 0.2,
  }
);

// 헤더 스크롤 블러 효과
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===================================
// 타이핑 애니메이션(typewriter)
// ===================================

// 타이핑할 텍스트 배열 (여러 문구를 순차적으로 보여주고 싶다면 배열로)
const messages = [
  "사용자 경험을 기반으로 웹 인터페이스를 설계하고 구현합니다."
];

const typeTarget = document.getElementById('heroTitle');
let msgIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (msgIndex < messages.length) {
    const currentMessage = messages[msgIndex];
    if (charIndex < currentMessage.length) {
      // 한 글자씩 추가
      typeTarget.textContent += currentMessage.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 120); // 타이핑 속도 조정
    } else {
      // 모든 글자를 다 쓰면 잠시 멈춘 후 다음 문구로
      setTimeout(() => {
        typeTarget.textContent = '';
        charIndex = 0;
        msgIndex = (msgIndex + 1) % messages.length;
        typeWriter();
      }, 2000); // 문구 간 대기 시간
    }
  }
}

// 페이지 로드 후 타이핑 시작
typeWriter();

