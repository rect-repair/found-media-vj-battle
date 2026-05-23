(function () {
  const rounds = BATTLE_ROUNDS;
  let current = 0;

  const el = {
    roundLabel: document.getElementById("round-label"),
    roundIndex: document.getElementById("round-index"),
    redRoundNum: document.getElementById("red-round-num"),
    blueRoundNum: document.getElementById("blue-round-num"),
    redName: document.getElementById("red-vj-name"),
    blueName: document.getElementById("blue-vj-name"),
    redDiary: document.getElementById("red-diary"),
    blueDiary: document.getElementById("blue-diary"),
    meterRed: document.getElementById("meter-red"),
    meterBlue: document.getElementById("meter-blue"),
    btnPrev: document.getElementById("btn-prev"),
    btnNext: document.getElementById("btn-next"),
  };

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function render(index) {
    const r = rounds[index];
    if (!r) return;

    current = index;
    const isFinal = index === rounds.length - 1;

    el.roundLabel.textContent = isFinal ? "Final Round" : r.label;
    el.roundIndex.textContent = pad(r.round);
    el.redRoundNum.textContent = String(r.round);
    el.blueRoundNum.textContent = String(r.round);

    el.redName.textContent = r.red.name;
    el.blueName.textContent = r.blue.name;
    el.redDiary.textContent = r.red.diary;
    el.blueDiary.textContent = r.blue.diary;

    /* Decorative “power meters” — taller as rounds progress */
    const progress = ((index + 1) / rounds.length) * 100;
    el.meterRed.style.height = `${Math.min(100, 40 + progress * 0.5)}%`;
    el.meterBlue.style.height = `${Math.min(100, 25 + progress * 0.75)}%`;

    el.btnPrev.disabled = index === 0;
    el.btnNext.disabled = index === rounds.length - 1;

    history.replaceState(null, "", `#round-${r.round}`);
  }

  function go(delta) {
    const next = current + delta;
    if (next >= 0 && next < rounds.length) render(next);
  }

  el.btnPrev.addEventListener("click", () => go(-1));
  el.btnNext.addEventListener("click", () => go(1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });

  const hash = location.hash.match(/^#round-(\d+)$/);
  const start = hash ? Math.min(rounds.length - 1, Math.max(0, Number(hash[1]) - 1)) : 0;
  render(start);
})();
