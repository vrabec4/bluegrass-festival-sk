const countdownEl = document.querySelector('.countdown');
const targetDate = new Date('2026-09-05T14:00:00+02:00');

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateCountdown() {
  if (!countdownEl) return;

  const diff = targetDate.getTime() - Date.now();
  if (diff <= 0) {
    countdownEl.innerHTML = '<span>Festival práve prebieha</span>';
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownEl.innerHTML = `
    <span>DD: ${pad(days)}</span>
    <span>HH: ${pad(hours)}</span>
    <span>MM: ${pad(minutes)}</span>
    <span>SS: ${pad(seconds)}</span>
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);
