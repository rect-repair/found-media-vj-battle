(function () {
  const rounds = BATTLE_ROUNDS;
  let current = 0;
  let red_current = 0;
  let blue_current = 0;
  let red_score = [];
  let blue_score = [];

  const el = {
    roundLabel: document.getElementById("round-label"),
    // roundIndex: document.getElementById("round-index"),
    redName: document.getElementById("red-vj-name"),
    blueName: document.getElementById("blue-vj-name"),
    redDiary: document.getElementById("red-diary"),
    blueDiary: document.getElementById("blue-diary"),
    redScore: document.getElementById("red-score"),
    blueScore: document.getElementById("blue-score"),
    meterRed: document.getElementById("meter-red"),
    meterBlue: document.getElementById("meter-blue"),
    btnPrev: document.getElementById("btn-prev"),
    btnNext: document.getElementById("btn-next"),
  };

  const hash = location.hash.match(/^#round-(\d+)$/);
  const start = hash ? Math.min(rounds.length - 1, Math.max(0, Number(hash[1]) - 1)) : 0;
  scoreCalc();
  render(start);

  // console.log(window.location.hash);

  function scoreCalc() {
    red_score.push(0);
    blue_score.push(0);
    for (let i = 0; i < rounds.length; i++) {
      if (rounds[i].result === "red") red_current++
      else if (rounds[i].result === "blue") blue_current++
      else {
        red_current++
        blue_current++
      }
      red_score.push(red_current);
      blue_score.push(blue_current);
    }
    console.log(red_score, blue_score)
    // el.redScore.textContent = red_score[0];
    // el.blueScore.textContent = blue_score[0];
  }


  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function render(index) {
    const r = rounds[index];
    if (!r) return;

    current = index;
    const isFinal = index === rounds.length - 1;

    el.roundLabel.textContent = isFinal ? "Round 12" : r.label;
    // el.roundLabel.textContent = pad(r.label);

    // el.roundIndex.textContent = pad(r.round);
    // el.redRoundNum.textContent = String(r.round);
    // el.blueRoundNum.textContent = String(r.round);

    console.log("go!")

    el.redScore.textContent = String(red_score[index]);
    el.blueScore.textContent = String(blue_score[index]);

    // console.log(el.roundIndex.textContent, el.redScore.textContent)

    const red_progress = (red_score[index]) * 30;
    const blue_progress = (blue_score[index]) * 30;
    el.meterRed.style.height = `${Math.min(300, 50 + red_progress)}%`;
    el.meterBlue.style.height = `${Math.min(300, 50 + blue_progress)}%`;

    el.redName.textContent = r.red.name;
    el.blueName.textContent = r.blue.name;
    el.redDiary.textContent = r.red.diary;
    el.blueDiary.textContent = r.blue.diary;

    el.btnPrev.disabled = index === 0;
    el.btnNext.disabled = index === rounds.length - 1;

    history.replaceState(null, "", `#round-${r.round}`);
  }

  function go(delta) {
    const next = current + delta;
    if (next >= 0 && next < rounds.length) {
      render(next);
    }
  }

  el.btnPrev.addEventListener("click", () => go(-1));
  el.btnNext.addEventListener("click", () => go(1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });
})();
