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

  function renderDiary(side, vj) {
    const diaryEl = side === "red" ? el.redDiary : el.blueDiary;
    let html = formatDiary(vj.diary);
    if (vj.code) {
      const hint = vj.codeHint
        ? `<p class="diary-code__hint">${escapeHtml(vj.codeHint)}</p>`
        : "";
      const lang = vj.codeLanguage || "javascript";
      html += `\n<details class="diary-code"><summary>&lt;/&gt; source code</summary>${hint}<pre><code class="language-${lang}">${escapeHtml(vj.code)}</code></pre></details>`;
    }
    diaryEl.innerHTML = html;
    highlightDiaryCode(diaryEl);
    diaryEl.querySelectorAll(".diary-code").forEach((d) => {
      d.addEventListener("toggle", () => {
        if (d.open) {
          d.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  function highlightDiaryCode(scope) {
    if (!window.hljs) return;
    (scope || document).querySelectorAll(".diary-code code:not([data-highlighted])").forEach((el) => {
      window.hljs.highlightElement(el);
      rehighlightHtmlInStrings(el);
      wrapLinesWithHangingIndent(el);
    });
  }

  // Wrap each logical line of the highlighted code in a .code-line span so we
  // can apply per-line padding-left + negative text-indent. Wrapped soft lines
  // then hang at the logical line's indent (code-editor style).
  function wrapLinesWithHangingIndent(codeEl) {
    const lines = [];
    let buf = "";
    const openStack = []; // array of opening tag strings, e.g. '<span class="hljs-string">'

    function pushLine() {
      lines.push(buf);
      buf = openStack.join("");
    }

    function htmlEscape(s) {
      return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    function walk(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;
        if (text === "") return;
        const parts = text.split("\n");
        parts.forEach((part, i) => {
          buf += htmlEscape(part);
          if (i < parts.length - 1) {
            // close stack, push, reopen on next line
            for (let k = openStack.length - 1; k >= 0; k--) buf += "</span>";
            pushLine();
          }
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Only re-emit span tags from highlight.js
        const tag = node.tagName.toLowerCase();
        if (tag !== "span") {
          // unexpected, just recurse
          node.childNodes.forEach(walk);
          return;
        }
        const cls = node.getAttribute("class") || "";
        const open = cls ? `<span class="${cls}">` : "<span>";
        buf += open;
        openStack.push(open);
        node.childNodes.forEach(walk);
        buf += "</span>";
        openStack.pop();
      }
    }

    Array.from(codeEl.childNodes).forEach(walk);
    pushLine();

    codeEl.innerHTML = lines
      .map((html) => {
        // Strip tags to find leading whitespace in plain text
        const text = html.replace(/<[^>]+>/g, "");
        const m = text.match(/^[ \t]*/);
        const indent = m ? m[0].length : 0;
        const style = indent > 0
          ? ` style="padding-left:${indent}ch;text-indent:-${indent}ch"`
          : "";
        return `<span class="code-line"${style}>${html || "​"}</span>`;
      })
      .join("");
  }

  function rehighlightHtmlInStrings(codeEl) {
    if (!window.hljs) return;
    codeEl.querySelectorAll(".hljs-string").forEach((s) => {
      const txt = s.textContent;
      if (txt.length < 40) return;
      let lang = null;
      if (/<\/?[a-zA-Z]/.test(txt)) lang = "xml";
      else if (/\{[^{}]*[:][^{}]*;/.test(txt) || /@keyframes\b/.test(txt)) lang = "css";
      if (!lang) return;
      try {
        const result = window.hljs.highlight(txt, { language: lang });
        s.innerHTML = result.value;
        s.classList.add("hljs-string--embedded");
        s.classList.add("hljs-string--embedded-" + lang);
      } catch (e) { /* noop */ }
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function bilibiliUrl(clip) {
    const params = new URLSearchParams({ bvid: clip.id, autoplay: "1", danmaku: "0", high_quality: "1" });
    if (clip.page) params.set("p", String(clip.page));
    if (clip.start) params.set("t", String(clip.start));
    return `https://player.bilibili.com/player.html?${params.toString()}`;
  }

  // YouTube IFrame Player API loader + per-side player state
  const videoStates = {
    red: { player: null, ready: false, source: null, rafId: null },
    blue: { player: null, ready: false, source: null, rafId: null },
  };

  let ytApiReady = false;
  const ytReadyCallbacks = [];

  (function loadYTApi() {
    if (window.YT && window.YT.Player) {
      ytApiReady = true;
      return;
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      ytApiReady = true;
      if (typeof prev === "function") prev();
      while (ytReadyCallbacks.length) ytReadyCallbacks.shift()();
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  })();

  function whenYTReady(fn) {
    if (ytApiReady) fn();
    else ytReadyCallbacks.push(fn);
  }

  function initVideoSide(side) {
    const state = videoStates[side];
    state.shell = document.getElementById(side + "-vid-shell");
    state.ctrl = document.getElementById(side + "-vid-ctrl");
    state.playBtn = document.getElementById(side + "-vid-play");
    state.fsBtn = document.getElementById(side + "-vid-fs");
    state.bar = document.getElementById(side + "-vid-bar");
    state.fill = document.getElementById(side + "-vid-fill");

    state.playBtn.addEventListener("click", () => {
      if (!state.player || !state.ready) return;
      const ps = state.player.getPlayerState();
      if (ps === window.YT.PlayerState.PLAYING) state.player.pauseVideo();
      else state.player.playVideo();
    });

    state.fsBtn.addEventListener("click", () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (state.shell.requestFullscreen) {
        state.shell.requestFullscreen();
      } else if (state.shell.webkitRequestFullscreen) {
        state.shell.webkitRequestFullscreen();
      }
    });

    state.bar.addEventListener("click", (e) => {
      if (!state.player || !state.ready) return;
      const rect = state.bar.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const dur = state.player.getDuration();
      if (dur > 0) state.player.seekTo(pct * dur, true);
    });
  }

  function removeShellMedia(side) {
    const state = videoStates[side];
    const existing = state.shell.querySelector("#" + side + "-video");
    if (existing) existing.remove();
  }

  function clearVideo(side) {
    const state = videoStates[side];
    if (state.rafId) { cancelAnimationFrame(state.rafId); state.rafId = null; }
    if (state.player && state.player.destroy) {
      try { state.player.destroy(); } catch (e) { /* noop */ }
    }
    state.player = null;
    state.ready = false;
    state.source = null;
    removeShellMedia(side);
    const iframe = document.createElement("iframe");
    iframe.id = side + "-video";
    iframe.className = "youtube-embed";
    iframe.setAttribute("title", side + " VJ clip");
    iframe.src = "";
    state.shell.insertBefore(iframe, state.shell.firstChild);
    state.ctrl.hidden = true;
  }

  function loadBilibiliClip(side, clip) {
    const state = videoStates[side];
    if (state.rafId) { cancelAnimationFrame(state.rafId); state.rafId = null; }
    if (state.player && state.player.destroy) {
      try { state.player.destroy(); } catch (e) { /* noop */ }
    }
    state.player = null;
    state.ready = false;
    removeShellMedia(side);
    const iframe = document.createElement("iframe");
    iframe.id = side + "-video";
    iframe.className = "youtube-embed";
    iframe.setAttribute("title", side + " VJ clip");
    iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("frameborder", "0");
    iframe.src = bilibiliUrl(clip);
    state.shell.insertBefore(iframe, state.shell.firstChild);
    state.source = "bilibili";
    state.ctrl.hidden = true;
  }

  function loadYouTubeClip(side, clip) {
    const state = videoStates[side];
    whenYTReady(() => {
      if (state.player && state.ready && state.source === "youtube") {
        state.player.loadVideoById({
          videoId: clip.id,
          startSeconds: Number(clip.start) || 0,
        });
        state.fill.style.width = "0%";
        state.playBtn.textContent = "▶";
        return;
      }
      if (state.rafId) { cancelAnimationFrame(state.rafId); state.rafId = null; }
      if (state.player && state.player.destroy) {
        try { state.player.destroy(); } catch (e) { /* noop */ }
      }
      state.player = null;
      state.ready = false;
      removeShellMedia(side);
      const anchor = document.createElement("div");
      anchor.id = side + "-video";
      anchor.className = "youtube-embed";
      state.shell.insertBefore(anchor, state.shell.firstChild);

      const playerVars = {
        controls: 0,
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3,
        playsinline: 1,
        disablekb: 1,
        fs: 0,
        autoplay: 1,
      };
      if (clip.start) playerVars.start = Number(clip.start);

      state.source = "youtube";
      state.ctrl.hidden = false;
      state.fill.style.width = "0%";
      state.playBtn.textContent = "▶";

      state.player = new window.YT.Player(side + "-video", {
        host: "https://www.youtube-nocookie.com",
        videoId: clip.id,
        playerVars,
        events: {
          onReady: () => {
            state.ready = true;
            const iframe = state.player.getIframe && state.player.getIframe();
            if (iframe) {
              iframe.id = side + "-video";
              iframe.className = "youtube-embed";
              iframe.setAttribute("title", side + " VJ clip");
              iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
              iframe.setAttribute("allowfullscreen", "");
            }
            startProgressLoop(side);
          },
          onStateChange: (e) => {
            updatePlayButton(side);
            if (e.data === window.YT.PlayerState.ENDED) {
              try { state.player.seekTo(0, true); state.player.pauseVideo(); } catch (_) { /* noop */ }
            }
          },
        },
      });
    });
  }

  function startProgressLoop(side) {
    const state = videoStates[side];
    if (state.rafId) cancelAnimationFrame(state.rafId);
    const tick = () => {
      if (!state.player || !state.ready) return;
      try {
        const cur = state.player.getCurrentTime() || 0;
        const dur = state.player.getDuration() || 0;
        state.fill.style.width = dur > 0 ? ((cur / dur) * 100).toFixed(2) + "%" : "0%";
      } catch (_) { /* noop */ }
      state.rafId = requestAnimationFrame(tick);
    };
    state.rafId = requestAnimationFrame(tick);
  }

  function updatePlayButton(side) {
    const state = videoStates[side];
    if (!state.player || !state.player.getPlayerState) return;
    try {
      const ps = state.player.getPlayerState();
      state.playBtn.textContent = (ps === window.YT.PlayerState.PLAYING) ? "❚❚" : "▶";
    } catch (_) { /* noop */ }
  }

  initVideoSide("red");
  initVideoSide("blue");

  render(start);

  function formatDiary(text) {
    function inline(s) {
      const escaped = s
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

    const lines = (text || "").split("\n");
    let html = "";
    let listType = null; // "ul" | "ol" | null
    let needNewline = false;

    const closeList = () => {
      if (listType) {
        html += `</${listType}>`;
        listType = null;
        needNewline = false; // block element provides its own break
      }
    };

    for (const line of lines) {
      const ulMatch = line.match(/^\s*[-*]\s+(.*)$/);
      const olMatch = line.match(/^\s*\d+[.)]\s+(.*)$/);

      if (ulMatch) {
        if (listType !== "ul") {
          closeList();
          html += '<ul class="diary-list diary-list--ul">';
          listType = "ul";
        }
        html += `<li>${inline(ulMatch[1])}</li>`;
      } else if (olMatch) {
        if (listType !== "ol") {
          closeList();
          html += '<ol class="diary-list diary-list--ol">';
          listType = "ol";
        }
        html += `<li>${inline(olMatch[1])}</li>`;
      } else {
        closeList();
        if (line.trim() === "") {
          html += '<span class="diary-gap"></span>';
          needNewline = false; // block spacer provides the gap, no surrounding \n
        } else {
          if (needNewline) html += "\n";
          html += inline(line);
          needNewline = true;
        }
      }
    }
    closeList();

    return html;
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
    renderDiary("red", r.red);
    renderDiary("blue", r.blue);

    renderChannel("red", r.red, index);
    renderChannel("blue", r.blue, index);

    el.btnPrev.disabled = index === 0;
    el.btnNext.disabled = index === rounds.length - 1;

    history.replaceState(null, "", `#round-${r.round}`);
  }

  function renderChannel(side, vj, roundIdx) {
    const wrapper = side === "red" ? el.redWrapper : el.blueWrapper;
    const numEl = side === "red" ? el.redChNum : el.blueChNum;
    const totalEl = side === "red" ? el.redChTotal : el.blueChTotal;
    const titleEl = side === "red" ? el.redChTitle : el.blueChTitle;
    const prevBtn = side === "red" ? el.redChPrev : el.blueChPrev;
    const nextBtn = side === "red" ? el.redChNext : el.blueChNext;

    const videos = vj.videos || [];

    if (videos.length === 0) {
      wrapper.classList.add("video-wrapper--empty");
      clearVideo(side);
      return;
    }
    wrapper.classList.remove("video-wrapper--empty");

    if (clipIndex[side][roundIdx] === undefined) clipIndex[side][roundIdx] = 0;
    const i = clipIndex[side][roundIdx];
    const clip = videos[i];

    if (clip.source === "bilibili") loadBilibiliClip(side, clip);
    else loadYouTubeClip(side, clip);

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

  // highlight.js is loaded with `defer`, so it may not exist on first render.
  // Re-run highlighting once it's available.
  window.addEventListener("load", () => highlightDiaryCode());
})();
