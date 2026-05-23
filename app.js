(function () {
  const rounds = BATTLE_ROUNDS;
  let current = 0;

  const el = {
    roundLabel: document.getElementById("round-label"),
    roundTimer: document.getElementById("round-timer"),
    redScore: document.getElementById("red-score"),
    blueScore: document.getElementById("blue-score"),
    redName: document.getElementById("red-vj-name"),
    blueName: document.getElementById("blue-vj-name"),
    redDiary: document.getElementById("red-diary"),
    blueDiary: document.getElementById("blue-diary"),
    meterRed: document.getElementById("meter-red"),
    meterBlue: document.getElementById("meter-blue"),
    btnPrev: document.getElementById("btn-prev"),
    btnNext: document.getElementById("btn-next"),
  };

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function formatTimer(round) {
    return `00:${pad2(round)}`;
  }

  function setDiary(nameEl, diaryEl, entry) {
    const hasName = entry.name && entry.name !== "—" && !entry.name.startsWith("Red VJ") && !entry.name.startsWith("Blue VJ");
    if (hasName) {
      nameEl.textContent = entry.name;
      nameEl.hidden = false;
      diaryEl.textContent = entry.diary;
    } else {
      nameEl.hidden = true;
      diaryEl.textContent = entry.diary;
    }
  }

  function render(index) {
    const r = rounds[index];
    if (!r) return;

    current = index;
    const isFinal = index === rounds.length - 1;

    el.roundLabel.textContent = isFinal ? "Final Round" : r.label;
    el.roundTimer.textContent = formatTimer(r.round);
    el.redScore.textContent = String(r.round);
    el.blueScore.textContent = String(r.round);

    setDiary(el.redName, el.redDiary, r.red);
    setDiary(el.blueName, el.blueDiary, r.blue);

    /* Full meters like reference; slight asymmetry by round */
    const t = (index + 1) / rounds.length;
    el.meterRed.style.height = `${Math.round(55 + t * 45)}%`;
    el.meterBlue.style.height = `${Math.round(40 + t * 55)}%`;

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
