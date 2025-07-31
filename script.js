const { BrowserWindow } = require('@electron/remote'); // если используешь remote

function openClinic() {
  const clinicWindow = window.open(
    "https://example.com",
    "_blank",
    "width=1920,height=1080"
  );

  // Вариант: таймер возврата
  setTimeout(() => {
    if (clinicWindow && !clinicWindow.closed) {
      clinicWindow.close();
    }
  }, 5 * 60 * 1000); // Закрыть через 5 минут
}

function openSite(url) {
  document.getElementById("clinicFrame").src = url;
  document.getElementById("iframeContainer").style.display = "block";
}

function hideSite() {
  document.getElementById("iframeContainer").style.display = "none";
  document.getElementById("clinicFrame").src = "";
}

function showFakeScreen(screenName) {
  const screenPath = `media/${screenName}.webp`;
  const img = document.getElementById("fakeScreen");
  img.src = screenPath;
  document.getElementById("fakeScreenContainer").style.display = "block";
}

function hideClinic() {
  document.getElementById("fakeScreenContainer").style.display = "none";
  document.getElementById("fakeScreen").src = ""; // очистим, если надо
}
// Блокируем ctrl+scroll (масштабирование)
window.addEventListener("wheel", function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

// Блокируем zoom с клавиатуры
window.addEventListener("keydown", function(e) {
  if ((e.ctrlKey || e.metaKey) &&
    (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
    e.preventDefault();
  }
});