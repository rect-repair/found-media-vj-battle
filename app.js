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
    redVideo: document.getElementById("red-video"),
    blueVideo: document.getElementById("blue-video"),
    redChannel: document.getElementById("red-channel"),
    blueChannel: document.getElementById("blue-channel"),
    redChPrev: document.getElementById("red-ch-prev"),
    redChNext: document.getElementById("red-ch-next"),
    blueChPrev: document.getElementById("blue-ch-prev"),
    blueChNext: document.getElementById("blue-ch-next"),
    redChNum: document.getElementById("red-ch-num"),
    redChTotal: document.getElementById("red-ch-total"),
    blueChNum: document.getElementById("blue-ch-num"),
    blueChTotal: document.getElementById("blue-ch-total"),
    redChTitle: document.getElementById("red-ch-title"),
    blueChTitle: document.getElementById("blue-ch-title"),
    redWrapper: document.getElementById("red-video-wrapper"),
    blueWrapper: document.getElementById("blue-video-wrapper"),
  };

  // Per-side current clip index, keyed by round index so going back to a
  // round remembers where you left off.
  const clipIndex = { red: {}, blue: {} };

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

  function formatDiary(text) {
    const escaped = (text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    // [label](url) → <a href="url">label</a>
    const withMdLinks = escaped.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      (_, label, url) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
    );
    // Bare https://... → clickable, but skip ones already inside href="..."
    return withMdLinks.replace(
      /(href="[^"]*"|\bhttps?:\/\/[^\s<]+[^\s<.,;!?)])/g,
      (m) => (m.startsWith("href=") ? m : `<a href="${m}" target="_blank" rel="noopener noreferrer">${m}</a>`)
    );
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
    el.redDiary.innerHTML = formatDiary(r.red.diary);
    el.blueDiary.innerHTML = formatDiary(r.blue.diary);

    renderChannel("red", r.red, index);
    renderChannel("blue", r.blue, index);

    el.btnPrev.disabled = index === 0;
    el.btnNext.disabled = index === rounds.length - 1;

    history.replaceState(null, "", `#round-${r.round}`);
  }

  function renderChannel(side, vj, roundIdx) {
    const wrapper = side === "red" ? el.redWrapper : el.blueWrapper;
    const iframe = side === "red" ? el.redVideo : el.blueVideo;
    const numEl = side === "red" ? el.redChNum : el.blueChNum;
    const totalEl = side === "red" ? el.redChTotal : el.blueChTotal;
    const titleEl = side === "red" ? el.redChTitle : el.blueChTitle;
    const prevBtn = side === "red" ? el.redChPrev : el.blueChPrev;
    const nextBtn = side === "red" ? el.redChNext : el.blueChNext;

    const videos = vj.videos || [];

    if (videos.length === 0) {
      wrapper.classList.add("video-wrapper--empty");
      iframe.src = "";
      return;
    }
    wrapper.classList.remove("video-wrapper--empty");

    if (clipIndex[side][roundIdx] === undefined) clipIndex[side][roundIdx] = 0;
    const i = clipIndex[side][roundIdx];
    const clip = videos[i];

    const params = new URLSearchParams({ rel: "0", modestbranding: "1" });
    if (clip.start) params.set("start", String(clip.start));
    iframe.src = `https://www.youtube.com/embed/${clip.id}?${params.toString()}`;

    numEl.textContent = String(i + 1).padStart(2, "0");
    totalEl.textContent = String(videos.length).padStart(2, "0");
    titleEl.textContent = clip.title || "";
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === videos.length - 1;
  }

  function flipClip(side, delta) {
    const r = rounds[current];
    if (!r) return;
    const vj = r[side];
    const videos = (vj && vj.videos) || [];
    if (videos.length === 0) return;
    const cur = clipIndex[side][current] || 0;
    const next = cur + delta;
    if (next < 0 || next >= videos.length) return;
    clipIndex[side][current] = next;
    renderChannel(side, vj, current);
  }

  function go(delta) {
    const next = current + delta;
    if (next >= 0 && next < rounds.length) {
      render(next);
    }
  }

  el.btnPrev.addEventListener("click", () => go(-1));
  el.btnNext.addEventListener("click", () => go(1));

  el.redChPrev.addEventListener("click", () => flipClip("red", -1));
  el.redChNext.addEventListener("click", () => flipClip("red", 1));
  el.blueChPrev.addEventListener("click", () => flipClip("blue", -1));
  el.blueChNext.addEventListener("click", () => flipClip("blue", 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });
})();
