/**
 * 12 rounds × 2 VJs (red + blue) = 24 diaries.
 * Edit names and diary text below, or split into rounds.json later.
 *
 * videos: array of { id, title?, start? }
 *   - id: the YouTube video ID (the part after v= or youtu.be/)
 *   - title: optional human-readable note
 *   - start: optional seconds offset to start the clip at
 */
const BATTLE_ROUNDS = [
  {
    round: 1,
    label: "Round 1",
    red: {
      name: "ming",
      videos: [
        { id: "J5aHA2AUgdU", title: "买瓜原版：7 砍瓜瞬间" },
        { id: "od6k1aVO2Zc", title: "买瓜多人版：1 多人慢动作  5 多人组合  6 多人抽搐" },
        { id: "QlBI3m9ueJc", title: "买瓜奥运会：6 切瓜瞬间" },
        { id: "pb5NAagw8O8", title: "买瓜抽象：2 西瓜爆炸" },
        { id: "3gR6oZDgcu8", title: "终极买瓜：0 杂技登场 2 八门遁甲 4 超级特效 7 写轮眼" },
        { id: "rxaQVUWUJlc", title: "买瓜侠客行：7 开始打 8 被打倒" },
        { id: "Pak9ICYnT_g", title: "买瓜水下版：快速喷水 2 9 长镜头 8" },
        { id: "ViwXAGkmWE4", title: "买瓜第一视角: 6" },
      ],
    },
    blue: {
      name: "John Brumley",
      videos: [
        { id: "qVsjevWuLiw", title: "IMG 7878" },
        { id: "ejgvmpa3eJ4", title: "Accordion, Guitar, Yodeling — When I Was Hungry Lord You Fed Me" },
        { id: "of3VMbAueT4", title: "Phát âm tiếng Anh giọng Mỹ — 7 — Trần Thiện Tùng" },
        { id: "HdEWK1SSmFY", title: "Tranquil Moments® Sleep Sound Therapy System" },
        { id: "BEaZ4a4Hb2I", title: "QUBE Cincinnati — Swordquest" },
        { id: "sDgv5Yy6LuI", title: "IMG 0117" },
        { id: "lwjoXA5cXQc", title: "Tipa the Ant / Skudriņa Tipa (1976) — Ansis Bērziņš" },
        { id: "OLcuoxklTJo", title: "The Spiral Demo — Resistance (Sega Megadrive)" },
        { id: "AxX6VyqgRBA", title: "The Flying Luna Clipper (1987 Japanese LaserDisc)" },
        { id: "jCxXtp_nyno", title: "FoleyAutomatic: Physically-based Sound Effects" },
        { id: "13VDFRm7NqY", title: "Gait Master2 (Tsukuba VR Lab)" },
        { id: "AnBbtkxZBRI", title: "Powered Shoes (Tsukuba VR Lab)" },
        { id: "FCJuQmbkhVs", title: "Daihatsu Pico Concept" },
        { id: "tm0Vnkd9BdQ", title: "Masters of the Maze Season 2: 3-3" },
        { id: "S6Cm7y0g3XA", title: "Dazzeloids — Anne Dilly Whim's Dream" },
        { id: "uqcyDA2L5L0", title: "Fur displacement test (Wendy Vainity)" },
        { id: "ch2Jmlu1N6M", title: "Turbo Teen Transformation Supercut" },
      ],
    },
    result: "both",
  },
  {
    round: 2,
    label: "Round 2",
    red: {
      name: "antee",
      videos: [],
    },
    blue: {
      name: "Lillian",
      videos: [],
    },
    result: "blue",
  },
  {
    round: 3,
    label: "Round 3",
    red: { name: "ceciliyazi", diary: `…`, videos: [] },
    blue: {
      name: "Pengan",
      videos: [
        { id: "1dcrV_7JpXQ", title: "Farbrausch - fr-08: .the .product [HD 60fps]" },
        { id: "5JvQTy5oEWM", title: "insane by 3sc (ZX Spectrum demo)" },
        { id: "Dp7fVUfj8oI", title: "Super Mario Bros 1 NES long run no warps many secrets" },
        { id: "JMWKxez6a-w", title: "Electric Sheep in 4K UHD" },
        { id: "ddvnWRMdt-k", title: "FC《马戏团》高难度一命通关【82 电玩大叔】" },
        { id: "4kd6ES-TaoU", title: "Old Winamp Visualization - Geiss v2 (no music)" },
        { id: "DfixqYPonHw", title: "NES Longplay [137] Battle City" },
      ],
    },
    result: "blue",
  },
  {
    round: 4,
    label: "Round 4",
    red: {
      name: "Murphy Nile",
      videos: [
        { id: "h3vXqMhTPus", title: "Weird TV (1995)", start: 1451 },
        { id: "_4dQRdBttzU", title: "Portal soundtrack" },
        { id: "qbK-Bo3k9KQ", title: "Beyond 2000 - Wearable Computers (1992)", start: 65 },
        { id: "HpVXIH24KzQ", title: "Ballet Zoom \"Cats\"" },
      ],
    },
    blue: {
      name: "Sqy",
      videos: [
        { id: "tPAm3H1YVlo", title: "10 Easy Physics Experiments You Can Do at Home!" },
        { id: "hFH0qXXosi4", title: "Microscopic Life Stock Footage" },
        { id: "sjivgLoikcg", title: "Val Val Val" },
        { id: "iOAoPpdaJUw", title: "kuyang dayak" },
        { id: "4Ia1Ax1Dsp4", title: "Diffraction | Fresnel and Fraunhofer Diffraction" },
        { id: "a0G7iyz4McM", title: "Electron Microscopy (TEM and SEM)" },
        { id: "7Hk9jct2ozY", title: "DNA animation by Drew Berry and Etsuko Uno (wehi.tv)" },
        { id: "P5jEKs7AxVc", title: "Apoptosis 4K (2006) — Drew Berry, wehi.tv" },
        { id: "qhVehcHwOB8", title: "THROAT NOTES" },
        { id: "VEJWE6cpqw0", title: "Animation vs. Geometry" },
        { id: "oLSiKHMRNu0", title: "Transmission Electron Microscope (TEM) Construction and Working" },
        { id: "2hCpFQG1-q8", title: "Miss Puff Has Had Enough" },
        { id: "zVtTPPzhqJo", title: "Tumor Boy" },
        { id: "S0x2llxEAjk", title: "I Made a Self-Aware Robot" },
        { id: "xGodwyxuxXs", title: "ＴＡＫＥ ＴＨＥ ＣＵＰ" },
        { id: "2XfUKqAKaUk", title: "Jonathan Pillows \"Plant Funeral\" | adult swim smalls" },
        { id: "DP3yivaOcJA", title: "still lost I guess, here's a tunnel | adult swim" },
        { id: "-5dTZGtGJ6A", title: "Dolphin Poem | Adult Swim" },
        { id: "Q2VMWR8xlls", title: "Fest — by nikita diakur | Adult Swim" },
        { id: "b26iN-j8RaQ", title: "DRY RUN" },
        { id: "9X9iGOML1TU", title: "【三年動畫大賞】這玩意是《葫蘆娃》？我人都看傻了！" },
        { id: "9klzZsVw-cQ", title: "Pro Squid Game Players be like:" },
        { id: "orMNZfOQsA8", title: "Ba'gel Stalker" },
        { id: "RxHTaTmPlwQ", title: "Seeing Cell Division Like Never Before" },
        { id: "wO61D9x6lNY", title: "Outside In" },
        { id: "bYB99RIsy-I", title: "шрек" },
        { id: "ZA5Uljo9ykM", title: "Wb vs wb splatter" },
        { id: "vlUR09yRHZU", title: "The Elephant's Garden" },
        { id: "Xe-83tBcxhs", title: "DNA Break Repair by Homologous Recombination (2024) — Drew Berry, wehi.tv" },
        { id: "OT5AXGS1aL8", title: "Synthesis of ATP (2018) — Drew Berry and Franc Tétaz" },
        { id: "4kanu1fiThs", title: "Night Music (1986) | Stan Brakhage" },
        { id: "5iYDBIzcBRU", title: "Eye Myth (1972) | Stan Brakhage" },
        { id: "xdMMlgt6cEg", title: "Comingled Containers (1996) | Stan Brakhage" },
        { id: "01mwtBK6ANg", title: "Lovesong (2001) | Stan Brakhage" },
      ],
    },
    result: "red",
  },
  {
    round: 5,
    label: "Round 5",
    red: {
      videos: [],
      name: "yuemin",
    },
    blue: {
      name: "apple",
      videos: [
        { id: "gP9lf6djg7A", title: "MOV 0023" },
        { id: "KN75XrnAULQ", title: "Mega Drive Longplay and Cheat (0023) Road Rash (1991)" },
        { id: "Jy3oqHVHJXc", title: "GoldHunt Adventure DOS 1990 - Failure Attempted 0,023" },
        { id: "X4mFcS4-l-0", title: "Let's Play Every GBA Game: 0023 - Momotarou Matsuri (J)" },
        { id: "uTgbbgUm-T0", title: "0023 NOPIZZA 1H 05 KRATKI" },
        { id: "ETLdcj816pM", title: "[GBCP - 0023] Penguin-Kun Wars Vs. - LongPlay" },
        { id: "dc0_b646C2o", title: "NES/Famicom 0023: Toki [USA]" },
        { id: "AMqsGQ7z5Mo", title: "Wonder Boy Arcade - Longplay 0023 HD clip5" },
        { id: "aRCWWf6wF5U", title: "Adventurous Boy - Mao Xian Xiao Zi (TAI) (Megadrive / Gameplay #0023)" },
        { id: "4QBtknqX4Cg", title: "Space Invaders Part 2" },
        { id: "m1Imbvmm6pQ", title: "TI99/4a Omega Race Retro Game Development Project - Completed Game" },
        { id: "AUPxLOhgPUA", title: "FC Speedrun [0023] Duck Hunt (Clay Shooting)" },
        { id: "pTpGjHJvvLU", title: "덕 헌트  오리사냥" },
        { id: "qlC4FU9fdnw", title: "Inflatable costume dance - heads will roll" },
        { id: "N85qwN_MbAM", title: "Raw Mocap data from a projects Alien Dragging" },
        { id: "KTCJ5iP6fZU", title: "MOV 0023" },
        { id: "nHQxmta2qmI", title: "Sapo teatro de sombras" },
        { id: "zbG-y9vwnX8", title: "Blender Motion Capture" },
      ],
    },
    result: "blue",
  },
  {
    round: 6,
    label: "Round 6",
    red: { name: "Wenwen", diary: `（正在写了！！`, videos: [] },
    blue: {
      name: "Archy",
      videos: [],
    },
    result: "red",
  },
  {

    round: 7,
    label: "Round 7",
    red: {
      name: "tianqi",
      videos: [
        { id: "BV1ko4y1v7gD", source: "bilibili", title: "旋转的茶壶 — 第一个计算机模拟的 3D 动画" },
        { id: "BV11g4y1z7e5", source: "bilibili", title: "穿衬衫不起皱（自信男）" },
        { id: "BV1vQ4y1b73m", source: "bilibili", title: "200 种排序算法轮播" },
        { id: "BV1sqXCBaEot", source: "bilibili", title: "邵氏葫芦娃救爷爷" },
        { id: "zZmOPYNc7c0", title: "天气预报（纯云层图）" },
        { id: "ykz_dbpYRPU", title: "天气预报（有重影）" },
        { id: "mUmlv814aJo", title: "春晚机器人", start: 136 },
        { id: "Zncl4iHL_2k", title: "夜视仪 — 真实战争 vs 游戏战争" },
      ],
    },
    blue: {
      name: "sihui",
      code: `(function() {
  let videoContainer = document.querySelector('.bpx-player-video-area') || document.querySelector('video');
  let v = document.querySelector('video');
  if (!v) return;

  let currentFilter = 'none';
  let isMirrored = false;

  // 1. 注入全套 SVG 滤镜
  if (!document.getElementById('vj-svg-filters')) {
    let svg = document.createElement('div');
    svg.id = 'vj-svg-filters';
    svg.innerHTML = \`
    <svg style="display:none;">
    <filter id="vj-glitch">
      <feTurbulence type="fractalNoise" baseFrequency="0.05 0.9" numOctaves="1" result="noise">
        <animate attributeName="seed" values="1;100" dur="0.01s" repeatCount="indefinite" />
      </feTurbulence><feDisplacementMap in="SourceGraphic" in2="noise" scale="60" xChannelSelector="R" yChannelSelector="G" />
    </filter>
    <filter id="vj-edge"><feConvolveMatrix order="3" kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" preserveAlpha="true"/>
    </filter>

    <filter id="vj-acid">
      <feColorMatrix type="hueRotate" values="0">
      <animate attributeName="values" from="0" to="360" dur="2s" repeatCount="indefinite" />
      </feColorMatrix>
    </filter>

    <filter id="vj-big-block">
      <feMorphology operator="dilate" radius="20" />
      <feComponentTransfer>
        <feFuncR type="discrete" tableValues="0 0.33 0.66 1" />
        <feFuncG type="discrete" tableValues="0 0.33 0.66 1" />
        <feFuncB type="discrete" tableValues="0 0.33 0.66 1" />
      </feComponentTransfer>
    </filter>

    <filter id="vj-tunnel">
      <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" seed="5" result="noise"/>
      <feOffset in="SourceGraphic" dx="-50" dy="-50" result="offset1"/><feDisplacementMap in="offset1" in2="noise" scale="80" xChannelSelector="R" yChannelSelector="G" result="tunnel1"/>
      <feOffset in="SourceGraphic" dx="50" dy="50" result="offset2"/><feDisplacementMap in="offset2" in2="noise" scale="80" xChannelSelector="R" yChannelSelector="G" result="tunnel2"/>
      <feMerge><feMergeNode in="tunnel1"/><feMergeNode in="tunnel2"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    </svg>\`;
    document.body.appendChild(svg);
  }

  // 2. 注入 CSS 动画
  if (!document.getElementById('vj-css-final-shake')) {
    let style = document.createElement('style');
    style.id = 'vj-css-final-shake';
    style.innerHTML = \`
    /* X: 全局高频震动 */
    @keyframes vj-fast-shake {
      0% { transform: translate(0,0) scaleX(var(--sx)); }
      25% { transform: translate(-10px, 10px) scaleX(var(--sx)); }
      50% { transform: translate(10px, -10px) scaleX(var(--sx)); }
      75% { transform: translate(-15px, -5px) scaleX(var(--sx)); }
      100% { transform: translate(0,0) scaleX(var(--sx)); }
    }
    .vj-x-shaking { animation: vj-fast-shake 0.04s infinite !important; }

    /* B: 大块切片位移 */
    @keyframes vj-block-slide {
      0% { clip-path: inset(0 0 0 0); transform: translate(0,0) scaleX(var(--sx)); }
      30% { clip-path: inset(10% 0 40% 0); transform: translate(-40px, 10px) scaleX(var(--sx)); }
      60% { clip-path: inset(40% 0 10% 0); transform: translate(40px, -10px) scaleX(var(--sx)); }
      100% { clip-path: inset(0 0 0 0); transform: translate(0,0) scaleX(var(--sx)); }
    }
    .vj-b-shaking { animation: vj-block-slide 0.07s infinite steps(1); }
    \`;
    document.head.appendChild(style);
  }

  const updateStyle = () => {
    videoContainer.style.filter = currentFilter;
    videoContainer.style.setProperty('--sx', isMirrored ? -1 : 1);
    if (!videoContainer.classList.contains('vj-x-shaking') && !videoContainer.classList.contains('vj-b-shaking')) {
        videoContainer.style.transform = \`scaleX(\${isMirrored ? -1 : 1})\`;
    }
  };

  window.addEventListener('keydown', (e) => {
    if (e.target.closest('.bili-comment, .bpx-player-dm-input, input, textarea')) return;
    const key = e.key.toLowerCase();
    const vKeys = ['q','w','e','r','t','1','2','3','4','5','6','7','8','9','0',' ','x','c','v','z','a','b','n','m'];
    if (vKeys.includes(key)) { e.preventDefault(); e.stopImmediatePropagation(); }

    switch(key) {
      case '1': currentFilter = 'none'; break;
      case '2': currentFilter = 'url(#vj-glitch)'; break;
      case '3': currentFilter = 'invert(1) hue-rotate(90deg)'; break;
      case '4': currentFilter = 'blur(15px) contrast(2) brightness(1.2)'; break;
      case '6': currentFilter = 'grayscale(1) contrast(800%)'; break;
      case '7': currentFilter = 'url(#vj-acid) saturate(300%)'; break;
      case '8': currentFilter = 'url(#vj-edge) brightness(5)'; break;
      case '9': currentFilter = 'url(#vj-big-block) contrast(1.5)'; break;
      case 'm': currentFilter = 'url(#vj-tunnel)'; break;

      case 'x': videoContainer.classList.add('vj-x-shaking'); break;
      case 'b': videoContainer.classList.add('vj-b-shaking'); break;
      case 'n': isMirrored = !isMirrored; videoContainer.style.transform = isMirrored ? 'scale(-1, -1)' : 'scale(1, 1)'; break;

      case 'q': v.playbackRate = 0.25; break;
      case 'w': v.playbackRate = 1.0; break;
      case 'e': v.playbackRate = 2.0; break;
      case 'r': v.playbackRate = 4.0; break;
      case 't': v.playbackRate = 16.0; break;
      case '5': videoContainer.style.opacity = '0'; break;
      case ' ': v.paused ? v.play() : v.pause(); break;
    }
    updateStyle();
  }, true);

  window.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    if(key === '5') videoContainer.style.opacity = '1';
    if(key === 'x') { videoContainer.classList.remove('vj-x-shaking'); updateStyle(); }
    if(key === 'b') { videoContainer.classList.remove('vj-b-shaking'); updateStyle(); }
  }, true);

  console.log("🔥 终极完全体：4 号模糊与 7 号彩色循环已归位。尽情演出吧！");
})();`,
      videos: [
        { id: "BV1Vz4y1n7NY", source: "bilibili", title: "全国小学生广播体操（颤音+屏幕律动）" },
        { id: "BV1qE411e7WV", source: "bilibili", title: "学了三年动画，毕业作品被老师轰出了教室！" },
        { id: "BV1Pz411b762", source: "bilibili", title: "二十四式太极拳动作分解" },
        { id: "BV1iv411j7QE", source: "bilibili", title: "青海卫视《西游记》全 25 集" },
        { id: "BV12x41167Me", source: "bilibili", title: "2016 日本魔性广告串烧" },
        { id: "BV1Ae411s7Tv", source: "bilibili", title: "日本 80 年代可口可乐广告" },
        { id: "BV1MGwqe7EQN", source: "bilibili", title: "杨幂早期代言拉芳广告" },
        { id: "BV13a4y177PD", source: "bilibili", title: "15 年前的 QQ 聊天 — 这些流行语你还记得吗？" },
        { id: "BV1X7411f7fr", source: "bilibili", title: "央视/纪录片《野蛮国度》全两季" },
      ],
    },
    result: "blue",
  },
  {

    round: 8,
    label: "Round 8",
    red: {
      name: "EwAn Qian",
      videos: [
        { id: "BV14xoXBvE8M", source: "bilibili", title: "Opening - 郭德纲、于谦《艺高人胆小》" },
        { id: "BV1ErFJe2EXv", source: "bilibili", title: "Part 1 -《祖玛》高手操作 / 可能的人类理论记录" },
        { id: "BV193p4zuEGm", source: "bilibili", title: "Part 1 - 《DELIVERY MUST COMPLETE》" },
        { id: "BV1aE411T7X9", source: "bilibili", title: "Part 1 - osu! 世界前 50 名玩家视频" },
        { id: "BV11x411A7F7", source: "bilibili", title: "Part 2 - Perfume《Edge Driving remix》" },
        { id: "BV11FoLBoEVB", source: "bilibili", title: "Part 2 - 崔叡娜《Catch Catch》一键换装" },
        { id: "BV1FDZYB6EBu", source: "bilibili", title: "Part 2 -【36 作对比】《再生》(Perfume)" },
        { id: "BV1gW411K7Ag", source: "bilibili", title: "Ending - 朗朗与赵本山《赛马》" },
      ],
    },
    blue: {
      name: "daymoss (deimos)",
      videos: [
        { id: "f1RTR_D5W3Q", title: "Nintendo 64 Startup" },
        { id: "3gskHksi2Yc", title: "Dreamcast Intro" },
        { id: "R5uhIqcLf1E", title: "How to pronounce DAY in British English", start: 3 },
        { id: "bWEsMV_jOKQ", title: "What is Moss" },
        { id: "ccznRALdr1g", title: "retro game 串门，马里奥登场" },
        { id: "lTJDK4qrbMA", title: "夜店游戏转场" },
        { id: "B_eHYJdeZRU", title: "马里奥无忧无虑玩耍 ×4" },
        { id: "wb7IbLEPRUs", title: "人面鱼回眸 mumble rap (Seaman)" },
        { id: "qWHXMURV2vo", title: "马里奥玩滑板" },
        { id: "YRpQYNfQVlk", title: "人面鱼被抓住 (Seaman)", start: 8 },
        { id: "IEHzwEN-0zo", title: "马里奥受伤 (literally?)", start: 50 },
        { id: "XVPoz8dEGOU", title: "马里奥 found dead at the bottom of the sea", start: 284 },
        { id: "8ue2GI8iSTw", title: "outro 挥手告别", start: 1080 },
      ],
    },
    result: "red",
  },
  {

    round: 9,
    label: "Round 9",
    red: {
      name: "Liejie",
      videos: [],
    },
    blue: {
      name: "Changbai",
      codeLanguage: "bash",
      code: `# open a new Chrome window at a URL
open -na "Google Chrome" --args --new-window \\
  "https://www.youtube.com/watch?v=PvB0kWs2IPQ&loop=0&start=00:10&end=00:11"

# open multiple windows one after another
# (integer after \`sleep\` controls how many seconds in between)
while true; do
  open -na "Google Chrome" --args --new-window \\
    "https://www.youtube.com/watch?v=PvB0kWs2IPQ&loop=0&start=00:10&end=00:11"
  sleep 8
done

# manipulate the window's position and size
osascript -e 'tell application "Google Chrome" to set bounds of window 1 to {0,0,400,380}'

# animate that
x=0; y=0; w=400; h=380;
while true; do
  ((x+=1))
  xbot=$((x+w))
  ybot=$((y+h))

  osascript -e "on run {x, y, xbot, ybot}" \\
            -e "tell application \\"Google Chrome\\" to set bounds of window 1 to {x as integer, y as integer, xbot as integer, ybot as integer}" \\
            -e "end run" "$x" "$y" "$xbot" "$ybot"

  sleep 0.05
done

# flashily randomly show windows
w=400; h=380;
max_x=1800
max_y=1000

while true; do
  x=$(( RANDOM % max_x ))
  y=$(( RANDOM % max_y ))

  xbot=$((x + w))
  ybot=$((y + h))

  osascript -e "on run {x, y, xb, yb}" \\
            -e "tell application \\"Google Chrome\\" to set bounds of window 1 to {x as integer, y as integer, xb as integer, yb as integer}" \\
            -e "end run" "$x" "$y" "$xbot" "$ybot"

  sleep 0.5
done`,
      videos: [
        { id: "PvB0kWs2IPQ", title: "Toast falling over" },
        { id: "sDj72zqZakE", title: "Waffle falling over" },
        { id: "EL9m_MDmsIU", title: "Kicking an apple 1134 times" },
        { id: "YR9ZjzQZnJ0", title: "Dragging a block of cheese" },
        { id: "bl6Euq9w72I", title: "Putting bag of sandwich cake in boot" },
        { id: "eCE4hYw8AAI", title: "Twilight Ride across Tokyo Bay / 8K 60fps HDR / Ambient Sound" },
        { id: "lG-ZqO734tM", title: "Is it Cruel to Use Bees as Digital Sensors?" },
      ],
    },
    result: "blue",
  },
  {

    round: 10,
    label: "Round 10",
    red: {
      name: "Fernando",
      videos: [
        { id: "WaJPpyxOpbM", title: "G1 — Americando | CORTINA INTRODUCTORIA (Teledoce)" },
        { id: "6S6ZH6EM3YA", title: "G1 — Los Tatitos van a la escuela (Canal 4 Uruguay)" },
        { id: "VgiNu1AnG5E", title: "G1 — Los Tatitos · Capítulo 5. Vamos a compartir" },
        { id: "2SprQ7Uu9XQ", title: "G1 — Cacho De La Cruz · Escuela en el fondo del mar" },
        { id: "MDYLQKqGAT8", title: "G1 — 洪恩小乌龟学美语 Franklin" },
        { id: "xzmChQvz4E0", title: "G2 — Anti-Marijuana PSA: \"Family Invention\" (1993)" },
        { id: "2whizfCVnBc", title: "G2 — 1970s Canadian Anti Smoking PSA — Light Me Harry" },
        { id: "a2j1mH1xO0k", title: "G2 — Anti-Smoking PSA — Too Smart to Start (1990s)" },
        { id: "TR8LIqENQAA", title: "G2 — Dying for a Smoke (1967)" },
        { id: "mi-7HwwN9PQ", title: "G2 — Anti Smoking PSA — 90s" },
        { id: "XnDvWXKZqt8", title: "G3 — World's Greatest Train Ride Videos · Trans-America (1995)" },
        { id: "6UV3kRV46Zs", title: "G3 — The Chicken Dance (Lawrence Welk)" },
        { id: "SlNQpIvtGYE", title: "G3 — Can you dance like this (meme)" },
        { id: "tAcjl9S9exw", title: "G3 — Funniest Cats and Dogs · Funny Animal Videos #35" },
        { id: "3RGH3utrYD4", title: "G3 — Funniest Dogs and Cats of 2025" },
        { id: "aZ14SotzITE", title: "G3 — Shrek Animation Glitches" },
        { id: "4-izxXJgnuQ", title: "G3 — Very creepy commercial from the 70's" },
        { id: "SZTOpU4r7-g", title: "G3 — Civil Defense Public Information" },
      ],
    },
    blue: {
      name: "kedi",
      videos: [
        { id: "xdHS1sbV5xw", title: "My Bloody Valentine - To Here Knows When" },
        { id: "ft56il9bGMk", title: "My Bloody Valentine - Soon" },
        { id: "pVhNi5cU8mo", title: "Ride - Vapour Trail" },
        { id: "cgdcT2RZARc", title: "Pinkshinyultrablast - Ravestar Supreme" },
        { id: "CouaLR--Efo", title: "No Joy - Hollywood Teeth" },
        { id: "1eevJ5R0zzE", title: "Tamaryn - Dawning" },
        { id: "3yFXdlntIwo", title: "Flyying Colours - It's Tomorrow Now" },
        { id: "JEIAaWQfxMY", title: "Chapterhouse - Pearl" },
        { id: "p5Un9GH-Z0Q", title: "Diiv - Healthy Moon" },
      ],
    },
    result: "red",
  },
  {

    round: 11,
    label: "Round 11",
    red: {
      name: "kuanfuweimu", diary: `管付为模 Kuanfu Weimu
TD Web Render VJing 
整体思路是用TD Web Brower去实时 使用浏览器，然后在TD里面写MIDI控 制效果（左上角MIDI映射集合方便link 和写效果）和自己根据习惯写的音频分 析集合（左下角）。 演出时候类似一个随机视频电台和一个 短视频+直播间实时。演出当中麦克风 收音存在问题，然后演出中间想到然后 改成LFO相当于自己走BPM去跑自动。 使用了一个长视频随机yt视频网站 http://astronaut.io/# 和短视频抖音 douyin.com, 两个随机视觉加了颜色配 置获得更好的颜色范围后做叠加。后面 就接了一堆自己常用的平面效果然后想 怎么写给midi怎么写如图比如改level亮 度、sat颜色、bloom、noise filter、景 深。另外整点装饰性cheating Ikeda风 格的视觉效果做切换。       
      `, videos: []
    },
    blue: {
      name: "jingwei",
      videos: [
        { id: "WF34N4gJAKE", title: "Bonobo — Cirrus (by Cyriak)" },
        { id: "QNwCojCJ3-Q", title: "MEOW (Cyriak) — 奇怪猫咪" },
        { id: "vbWe5k4fFWE", title: "Will Smith Eating Spaghetti (early AI)" },
        { id: "kGtqdCgY4WA", title: "Trombone Champ gameplay" },
        { id: "Hxq69qX3RNE", title: "魔方大厦 01 — 玻璃城（上海美影）" },
      ],
    },
    result: "red",
  },
  {

    round: 12,
    label: "Final Round",
    red: {
      name: "chen xin",
      videos: [
        { id: "WQO-aOdJLiw", title: "Baaa" },
        { id: "CBBvXth-O_g", title: "chimpnology" },
        { id: "_yygFCfzDv0", title: "Grandma vs Grandpa Anime Fight!" },
        { id: "gxusrZiYzbw", title: "Victor Vinyals — Character Rig Animation Reel" },
        { id: "NudOevPvw8E", title: "Rollerskate" },
      ],
    },
    blue: {
      name: "Joanna",
      videos: [
        { id: "bdwSZgEwcVY", title: "gif" },
        { id: "Hr4bI1CBwi0", title: "Study for Outdoor Sculpture" },
        { id: "qLRq5exjsVc", title: "Study for Anvil Sculpture" },
        { id: "UmVqfP0Kn_I", title: "Study for Kinetic Sculpture" },
        { id: "sjDZJparL9Y", title: "Emergency Broadcast Network - Just Jam (BB)" },
        { id: "JSY_sOw-vXs", title: "Study for Untitled Stone Waiting Sculpture #2" },
        { id: "CqNDhBtAsYc", title: "Study for Notification Sculpture" },
        { id: "RSHrAhPYRhM", title: "Aspocket_bk" },
        { id: "h1Gl6Ek50PU", title: "TV Ad, Left Half" },
        { id: "54kHlavwl-k", title: "ADDICTIVE TV vs STREET FIGHTER x TEKKEN" },
        { id: "_KmYzTp26Bs", title: "IRON MAN vs ADDICTIVE TV" },
        { id: "kYx6ngdRWfg", title: "Sega logo effects 1" },
        { id: "fUym0YdwPzo", title: "ACS Logo Effects" },
        { id: "cULQQWY7rjw", title: "PBS kids Dash Logo Mejor 687" },
        { id: "m7fzAjTIatg", title: "IGS/UNIS Logos Normal" },
        { id: "CaKK8hpZoXU", title: "Capcom Logo History - Ultimate Edition" },
        { id: "RnOdBKdTbDA", title: "Bullet-Proof Software / Blue Planet Software Logo History" },
        { id: "eyCDagFLW3M", title: "News Intro Compilation Europe 2016 (HD)" },
        { id: "WX-DC2pVBR8", title: "MTRCB Intro animation Effects" },
        { id: "OGaFquo1A10", title: "March 13, 2026" },
        { id: "bMj4fUH1mjE", title: "10 hours of Aphex Twin limo" },
        { id: "twgYRT9Dv2s", title: "TimeToy" },
        { id: "4wfuK_AbZiQ", title: "SLUMLORDZ ~ SANDWICH" },
        { id: "4gMqfwmk1H4", title: "Localizing Aurora Borealis entirely in my Kitchen" },
        { id: "fhgfahfKlH8", title: "Perc — Look What Your Love Has Done To Me" },
        { id: "zv7bkr49xOY", title: "总部和工厂介绍影片｜TOYO INNOVEX" },
        { id: "xmqA39XdbEA", title: "Tasho Ishi — Collapse Roppongihills" },
        { id: "PPmcu8xz1tY", title: "Emergency Broadcast Network — Real War (BB)" },
        { id: "T5Vsjof1OU8", title: "ADDICTIVE TV vs NOBEL SON — the movie remix" },
        { id: "JbjjQhle_F0", title: "NHK News intro 1979" },
        { id: "w91rIKOt_ro", title: "Sigla fine trasmissioni RAI (1985-1990)" },
        { id: "M5gIjQnCkJk", title: "ITV news titles (Thai, 2003–2007)" },
        { id: "Xu_JZgZf-e8", title: "\"Lord give one more chance\" - Chainsaw Man Edit" },
        { id: "ddXM6HX1PgU", title: "Persona 4 Dancing All Night Opening" },
        { id: "WaWK_ksfZic", title: "freak!" },
        { id: "KPeYYXDxyUg", title: "🎵🕹️" },
        { id: "wO61D9x6lNY", title: "Outside In" },
      ],
    },
    result: "red",
  },
];
