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
      diary: `[梁效铭 Liang Xiaoming](https://www.instagram.com/ming.lxm)
刘华强买瓜 VJ 思路

只要快捷键按的快，VJ 就够流畅：切换标签页 (Command+数字) + 全屏 (F) + 切换进度条 (数字)
原本想把 YouTube 快捷键移植到 B 站上，下载了 TamperMonkey，感觉肯定是可行的，但没成功。

只选了 9 个视频，其实不是最精彩的 9 个，但是是最后自我审查推荐视频之后，留下了 9 个视频。
大赛开始前需要把 9 个视频全部加载完成，这样按下快捷键就随时切换。
Command+数字切换 = 切换到对应标签，直接按数字对应到视频的十等分进度条位置。
原则上 9×10 = 90 个可即时 VJ 的卡点，但并不是每个快捷键就能卡在精彩位置，所以开始前做了笔记：

*按照标签页从左到右顺序汉字数字编号，阿拉伯数字代表进度条卡点的内容提示*
播放顺序：一九二四五六七八（最好直接按顺序，但最后没时间重新调，而且对奥运会版不满意）

感想：第一个上场脑子懵的，都不知道十分钟倒计时这回事，只想着吸引人过来，一上来就一顿输出。先好好播放一两分钟多好，节奏变化能留到后面。

本人几乎没有任何 VJ 技能但是参与了这次 VJ 大战，虽然没有取胜，但是好在也没有落败。网络视频的内容既然已经如此丰富，竟然现在才出现第一次 VJ 大战。相比于运用生成式的 VJ 技巧，用纯粹的个人取向，选择网络现成视频进行 VJ 是否为现场带来了更好的视听体验？

虽然我运用的视频也是有由 AI 生成的，但是一个 03 年电视剧的记忆和引发的梗 (meme) 所带来的混合感受，是即时生成式 VJ 无法带来的。我们是否有必要创造那么多高清的视觉内容，或许是在生成式技术发展的当下，现成视频的价值产生了微妙的升值，引发了这场大战。`,
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
      diary: `Paste the blue-side diary for round 1 here.`,
      videos: [],
    },
    result: "both",
  },
  {
    round: 2,
    label: "Round 2",
    red: { name: "Antee", diary: `…`, videos: [] },
    blue: {
      name: "Lillian",
      diary: `[Lillian Lijuan Liu](https://www.instagram.com/lijuan2046)

思路总结：
放广告。我们总是会跳过广告时间，所以我想要来放一些有趣的广告。发现有趣的广告大部分是上个世纪的电视广告，是我童年时代的回忆，所以也把儿童作为主题之一。最后本来想以比赛当日的早晨的电视广告作为结尾。

视频平台：Bilibili

播放视频内容清单：
- 韩国计划生育宣传视频
- 【广播电视·前苏联】来自前苏联国家的电视新闻片头合集 (2022)
- 80 年代迪斯科
- 卡拉 OK 儿童动画歌曲——幸福拍手歌（童声范唱+伴奏，央视动画早期作品）
- 香港公益广告·特价大促销（粤语）(2002) 中文字
- 80 年代计划生育宣传片（电视片段）
- 西瓜霜润喉片早期广告
- implosion 1999 年 11 月 — 2000 年最佳爆破年度合集
- 【放送文化】历年 4 月 26 日 CCTV 部分广告片段 (2006～2012 年，缺 2007、2010 年)
- 2026 年 4 月 26 日《朝闻天下》天气预报后的 6 点档广告+片尾（未放）

心路历程：
本来以为就是真的现场看着浏览器听着音乐找，意识到这个是个团体赛且群英荟萃之后开始紧张。决定还是提前看看有什么视频。

前一天晚上意识到我不知道如何安装 YouTube 的免广告插件。于是选择了哔哩哔哩。

想要找的视频是观众看电视会离开的垃圾时间视频。广告和新闻片头但是在时间和空间中穿梭。这样纯粹存档的视频一般是被找到的而不是被推送的，所以播放量会少。到底有谁会在浏览器里看最新的电视广告？

一开始想找小时候看过的广告，然后发现了"儿童""广告"的关联居然是计划生育。之后开始无限看广告。早期电视已经是一种极怀旧的媒介了，广告都比现在的许多内容完整、有趣。对前苏联遗迹的好奇延展到了电视，于是找到了前苏联电视台新闻片头。想和当日新闻有关联于是找了历年 4 月 26 日的广告。

放视频顺序是简易视频剪辑思路。韩国计划生育视频中有小孩走入大厦，准备和大厦爆破视频并置。但是音乐太前苏联国家新闻片头了，遂切换。80 年代计划生育视频中最喜欢的部分是电视中的人对观众说话。其他广告的随音乐切换。结尾设想是放送历年 4 月 26 日的广告，最终切换到当日早上的新闻广告。（没放）

我很意外，4 月 26 日早上的新闻广告仍是好客山东欢迎您这个经典的、我小时候都看过的广告。电视广告的艺术可能停滞了，电视儿童也不再存在。当然，还有一些教你如何制作早期 VHS 风格广告影像的视频，这样"过时的"的视觉风格，在高清 4K、8K、或 16K 这样的素材变得易得之后成为另一种时髦。屏幕之间的对话产生的叙事有很多可能性，我曾经在隔离期间深深着迷，但是在能接触实体世界之后全部忘掉。

最希望能够调整的部分最开始设置好 loop，没有意识到自动播放有点失控。不过失控要是有趣也挺好的。算法自己 VJ。`,
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
      diary: `蓬岸

视频主要来自一组关键词/搜索方向：
- Demoscene / 演示场景：Amiga demo / PC demo / ZX Spectrum demo 等
- 生成迷幻视频的几种软件：Electric Sheep, Milkdrop (Winamp 可视化), Windows Media Player 可视化器
- 复古游戏：搜 NES 游戏、DOS 游戏的名字，早期音游比如 Konami DDR

（没用到）液体灯光秀，参考：[@LiquidLighting](https://www.youtube.com/@LiquidLighting)
（没用到）Multi-Image Projection，参考：[@AV_archaeology](https://www.youtube.com/@AV_archaeology)
（没用到）DOS 下的迷幻视频软件，参考：[@eyecandyarchive6500](https://www.youtube.com/@eyecandyarchive6500)

演出使用两台 PC 通过 HDMI 转换复合视频 (composite video) 接入 Video mixer（型号是 Cypress CMX-107），外加一台 DV（型号是 Sony HC-27E）用于视频反馈 (Video feedback)。

关于 Video mixer 的技巧可以参考：[这个教程](https://www.youtube.com/watch?v=cgT_xNV_ju4)
Cypress CMX-107 的说明书可以在 [globalmediapro](https://www.globalmediapro.com/dp/A2I627/Cypress-CMX-107-Video-Mixer/) 找到。

整个视频链路使用 PAL 制式，终视频通过一个便宜的 composite to HDMI upscaler 输出为标准的 1080p HDMI 信号给剧场，以标准 HDMI 信号为边界，隔离表演系统/剧场系统的责任边界，降低复杂度并兼容大多数剧场配置。

没有预定的播放列表，即兴现搜现播。

VJ 大战当天的线索

关键字：demoscene
视觉目标：寻找光束、隧道飞跃、弹球、立体分形等典型的演示场景 (Demoscene) 视觉效果

关键字：spectrum demo
视觉目标：寻找 ZX Spectrum 平台上的 16 色高饱和度调色板、经过抖动 (dithering) 的画面

关键字：mario nes
视觉目标：红白机超级马里奥 (Super Mario Bros.)，观众可能更熟悉的画面

关键字：Electric Sheep
视觉目标：高彩色、流畅的分形图案

关键字：马戏团 FC
视觉目标：红白机马戏团 (Circus Charlie)，观众可能更熟悉的画面

关键字：winamp visualization
视觉目标：高彩色、流畅、有节奏感的分形图案（与 Electric Sheep 功能相似）

关键字：battle city
视觉目标：红白机坦克大战 (Battle City)，观众可能更熟悉的画面`,
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
      diary: `[Murphy Nile](https://www.murphynile.com)

最初想用大量的 old weird tv 视频做连续播放，包括一切比较有年代感的出现在老式电视时代的媒体内容，比如电视访谈，新闻切片，短至几秒长至数小时 slow TV，有准备了一个 120 多个视频的 playlist（不过最终现场只顺利播出来了四条视频），基于快速切换进度条，以及搭配一套自定义的浏览器插件去实现快切，频闪，撕裂，马赛克化，的魔性修改效果。

VJ 视频顺序清单：
- 从最经典的 weird tv 开始 — Weird TV appeared early 1995 on C-band satellite, a collage of original content produced by Chuck Cirino, Todd Stevens and Arthur Maturo, as well as classic video clips from various video archives. No doubt, Weird TV is Weird! (And was creepy to watch late night on satellite TV). Recorded 3/12/1995, Telstar 302, Tr 4 9PM PST; Receiver GI 550i, Wineguard 10' C/Ku dish.
- 网络开始崩溃，自动切换下一视频失败，卡在了这个视频 — Portal soundtrack.
-  Discovery Channel Beyond 2000 Wearable Computers 1992 — Ancient wearable computer technology was supposed to revolutionize computing back in 1992 don't you know…… 插件也因为暴力操作而导致浏览器崩坏。
- 急救后不得不在 list 里随便挑选了一个视频，来到了 battle 最后的 4 分多钟，恰巧挑选到了这个魔性舞蹈视频，插件也崩坏失去了控制，于是不得不使用基础快捷键进行效果开关以及进度条切换去卡节拍。 Ballet Zoom "Cats".`,
      videos: [
        { id: "h3vXqMhTPus", title: "Weird TV (1995)", start: 1451 },
        { id: "_4dQRdBttzU", title: "Portal soundtrack" },
        { id: "qbK-Bo3k9KQ", title: "Beyond 2000 - Wearable Computers (1992)", start: 65 },
        { id: "HpVXIH24KzQ", title: "Ballet Zoom \"Cats\"" },
      ],
    },
    blue: {
      name: "Sqy",
      diary: `艺术 & 伪科学
我放了一些看不太懂的 DNA 和一些数理化相关的讲解视频，夹带了一点阴间 cursed video 的内容（但也担心有的过于极端可能现场会接受不了，就没有放）。放完之后，有人问我是不是学生物的，所以才会放这些视频。我说不是，只是因为它们看起来漂亮。似乎我常常停留在表象，而没想过去探索更深的道理。那是否跨学科就可以简单挪移别人的形式就声称为自己的创作呢？当然只是说我，看到现场各位对于技术的使用已经完全到了一个学科的程度。

Vibe Coding
来之前我以为只是跟着节拍放抽象视频，调节时间轴。直到休息时间瞄到现场一些大神的屏幕，各种节点，软件…… 完了，于是临时抱佛脚求救 Claude 帮我写一个 Chrome 插件。做了一些视频跳帧，检测现场音乐节拍的功能，不过还是出了一些问题：
- 没有提前打开好多个页面，导致切换时加载过长，打断节奏
- 忘记关掉手机上的视频，演出时占用梯子带宽
- 跳帧范围太大，频闪效果出不来

过程中还认识了一位来做试听空间感官体验相关田野调查的朋友，问了我一些关于 AI 在创作中占比的问题，挺有趣的。

黑客 & 观看媒介
这晚太欢乐了，我爱看抽象视频，以及受到一点认知上的冲击，网络在线视频居然可以被这样使用/观看。即使是我们观念里认为是固定的一个网址，也可以被扭曲，重叠，涂抹，解构，重组。像是篡改了某些框架和规则，也像是创造了一种新的浏览媒体方式。现场气氛也很好，我全程几乎都在锐舞，手里还突然多了一罐啤酒（一位女生临走前给的），太酷了。

[视频合集 (YouTube playlist)](https://www.youtube.com/playlist?list=PLG2qG7-05zmAvhh_Oz0adX4GWLSm_Q3Io)

[Chrome 插件: youtube-beat-scrubber](https://github.com/voidinsea/youtube-beat-scrubber)
在 Chrome 输入 chrome://extensions
开启 Develop mode
选择 Load unpacked，上传整个文件夹`,
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
      diary: `原初构想：
视频直接从bilibili首页，知识/体育/科技/游戏里面现找
找到比较好笑，但跟音乐毫无关系的标题点开靠调视频速度来卡节拍,用不同的放大方法解构画面，但用鼠标引导视线，用现有画面中的所有的文字，图像，甚至桌面元素重新构建自己的叙事。
--- 以上是理想状态 ---
实际：显然现场完全听歌听High, 忘记了挑选视频这件事情，沉迷在节奏当中无法自拔（叹气 而且！我因为注意力完全被bilibili的"正在缓冲…"带走，还发现静音键很有意思，好像最后的时间都花在：怎么卡上"正在缓冲…"的图标？？？以至于莫名其妙停了很久，sry，我真的后面跟自己玩了起来，不顾观众死活。
视频选择
在我原本的方案里。。。视频还是以我内心听到的音乐和当场选择的频道有关系。。所以没有找太多准备（除了稍微训练了一下推荐流）但！事实证明这件事情现场做太极限了hhh
准备的视频列表：
现场用到：
- 散度与旋度：麦克斯韦方程组、流体等所用到的语言
- 谁能在无尽尸潮中存活更久？（开场，有红蓝大战关键词）
- 小伙骑行阿里地区，艰难翻过5190那根拉山。。。（没用上）
- 日常精神续作！《小城日常》深度解读（没用上）
- 谁能在无尽尸潮中存活更久？（开场，有红蓝大战关键词）
- 我又相信光了（现找）
- 我发明了永动机（现找，莫名其妙用的）
我真随机找视频。。。所以。。`,
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
      diary: `Theme：Slice 0023
Source：Youtube
为了找到搜索浏览量低于300，最好只有20以下甚至无人播放的视频，以0023为锚点，我搜索了诸如：IMG 0023，MOV 0023，test 0023 等未被命名直接上传，仅用于个人存档使用的作品。它们都是未经处理的私人化视频影像，公开但没有传播目的，因此都是全然野生的原始素材，由此作为我的「0023切片」VJ主题。
搜索结果大多是几年前的作品，可以看到数学课，孩子记录，各种运动记录，个人或者小乐队自己的音乐排练，学校舞台记录，小动物视频。无数人普通而丰富的生活的一瞥。Pure existence in the digital wilderness.

Search List:
- IMG 0023
- DSC 0023
- MOV 0023
- MVI 0023
- Bandicam 0023 （古老录屏软件）
- retro game 0023
- GameTest 0023
我将其中有意思的存到我的 [search 0023 播放列表](https://www.youtube.com/playlist?list=PLSygw1rsTz1vlb3Pf4hoSZSR92sxs-hx9)，并根据视频性质进行了分类。`,
    },
    result: "blue",
  },
  {
    round: 6,
    label: "Round 6",
    red: { name: "Wenwen", diary: `…`, videos: [] },
    blue: {
      name: "Archy",
      diary: `理念大概是「无意识」和「自我消解」。

带着打捞油管上「零播放」数字废料的任务，我找到一个网站：[astronaut.io](http://astronaut.io/#)

Today, you are an Astronaut. You are floating in inner space 100 miles above the surface of Earth. You peer through your window and this is what you see. You are people watching. These are fleeting moments.

These videos come from YouTube. They were uploaded in the last week and have titles like DSC 1234 and IMG 4321. They have almost zero previous views. They are unnamed, unedited, and unseen (by anyone but you).

这个网站播放着被算法抛弃，没有人观看的垃圾，上传时间在一周内，播放量几乎为零，没有被人类重新命名，保留原始默认文件名称，而且会在播放几秒钟之后切走，所以完全没有意义，不知道是谁在什么时候留下无人在意的什么碎片，也不知道下一个画面是什么。

他像一个监控探头，在漂浮的卫星上作为一个观测者，没有主观的信息和控制，只是纯粹的观测，这种上帝视角让我觉得意义在消散，但总要回到第一人称视角作为人去体验，总之这时候，我想表现不同尺度视角在体验存在中的感受，所以想让切片与自己发生关系，或者暗示切片（我们）的局限。

之后在 Arena 里捕捉浏览器信号，再捕捉被捕捉的信号，一顿操作——

核心其实就是不停做 feedback loop，让那些已经被算法抛弃的碎片，再被自己的影子吃掉一次。每一层捕捉，原本的"信息"就少一点，越来越颗粒化、越来越模糊，到最后根本看不清在看什么。

到最后所有东西都进入一种 granular dissolution 的状态，就像那些零播放视频本来也不该留下什么。一场无人在意的 fleeting moment。`,
      videos: [],
    },
    result: "red",
  },
  {

    round: 7,
    label: "Round 7",
    red: {
      name: "tianqi",
      diary: `一开始的思路是听到音乐，想到什么画面立刻搜索。之前练习了两次也感觉这样最顺手一点。

到现场以后感觉场面太激烈了，立刻在手机上记录了一些觉得有意思的画面。

当时的记录：
整理衬衫 / 出门前的准备
头部按摩
日食
雨林中穿梭的无人机
捕猎中的鸟
无人机
排序算法动画示例
原子弹爆炸微观图
抗生素杀菌微观图
儿子和爸爸掰手腕
对瓶吹 纯享 （发现纯享这个关键词很好用）
夜视仪 热成像
早期 3D 动画
生成茶壶
AI 生成图片过程影片
机械臂高速运作
机器人关节活动
CRT 扫描 / 医学扫描仪
流水线作业 扔西瓜
油墨在水中扩散
唐旺操
手影舞
流体动力学模拟
细胞移动

round 7 现场使用的页面：
- 旋转的茶壶 — 第一个计算机模拟的 3D 动画
- 一个男人教别人怎么穿衬衫可以没有折痕，视频洋溢自信感觉
- 200 种排序算法轮播 — 把事务变得有秩序很有宏大感觉
- 邵氏葫芦娃救爷爷 — 很怪的视频
- 天气预报 — 第一个是纯云层图，第二个有重影的天气预报
- 春晚机器人 — 很热闹
- 夜视仪 — 真实战争 vs 游戏战争。想放两个视频做对比，电子游戏战争中的开火和真实世界的墙屋倒塌`,
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
      diary: `本来看到游戏规则是只能浏览器流媒体放 VJ，其实是挺无从下手的，平时做项目各种节点软件和引擎用习惯了，突然被限制在网页里，原本打算就去 B 站上随便找点鬼畜视频，现场就靠快进、快退、切标签页来卡节奏。

结果到了大战当天，看了其他别的选手发现事情不对劲，居然都偷偷做了准备！既然大家都这么硬核，我就临时想到让 AI 帮我写网页代码。

抱着随缘、有什么放什么的心态试了一下，没想到真的可以用。所以提前把所有视频链接都打开，都跑一遍网页代码，完全通过键盘快捷键 + 外挂快捷键来控制视觉。

临时搓出来的外挂逻辑：
【数字 1~9】切换各种效果滤镜
  1 原视频画面   2 故障效果   3 反相   4 模糊   5 瞬时黑屏   6 黑白   7 彩色   8 线框   9 扭曲   0 色块
【X】抖动
【N】对称镜像
【B】切片位移
【Q / W / E / R】对应 0.25 倍（极慢）、1 倍、2 倍、4 倍速`,
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
    red: { name: "EwAn Qian", diary: `…`, videos: [] },
    blue: {
      name: "daymoss (deimos)",
      diary: `放一些自己喜欢的游戏视频，并尝试将它们以一个虚无缥缈的故事线串联起来。

主题：马里奥做 VJ 梦

视频顺序：
- system bootup: [Nintendo 64](https://www.youtube.com/watch?v=f1RTR_D5W3Q), [Dreamcast](https://www.youtube.com/watch?v=3gskHksi2Yc)
- vj "daymoss" intro: [day](https://www.youtube.com/watch?v=R5uhIqcLf1E?t=3s), [moss](https://www.youtube.com/watch?v=bWEsMV_jOKQ)
- retro game 串门，马里奥登场
- 夜店游戏转场
- 马里奥无忧无虑玩耍 ×4
- 人面鱼回眸 mumble rap
- 马里奥玩滑板
- 人面鱼被抓住
- 马里奥悲伤摇（画中画，没放出来）
- 马里奥受伤 (literally?)
- 马里奥 found dead at the bottom of the sea
- outro 挥手告别

总结：醒来后马里奥忘记了 VJ 梦。`,
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
    red: { name: "Liejie", diary: `…`, videos: [] },
    blue: {
      name: "Changbai",
      diary: `[Changbai](https://changbai.li/)

Philosophy
想多展现"寻找互联网上少见的视频"和"浏览器/个人电脑的使用空间"这两个维度。表演完后意识到这种将 VJ 控制过程不加掩饰的展现的方式有点像音乐现场给乐手乐器演奏的焦点镜头。应该给观众带来了相似的体验和趣味吧。

Flow
准备时其实想到了几个不同的思路，包括把重心放在有趣的视频内容，而不是 coding 或速度的控制的。听到节奏后判断这一轮的音乐会比较舞厅强节奏型，且 BPM 不太可能改变，于是选择🍞策略。

用 Looper for YouTube 选择 loop 视频哪一部分，然后用 Video Speed Controller 调速度让它能够搭配上音乐节奏。（其实当时感觉有点难对上，不太成功，但已经开始这个主题的演出了，所以只好硬着头皮继续 hh）

之后从 schnooleheletteletto 频道的视频中抽取更多"何意味"单一动作视频丰富 VJ 内容。

屏幕被视频占满+音乐力度变强后开始调用代码控制浏览器窗口位置，让它自己也有表现力。其实这里的代码控制的不是特别好，大家应该没有太能观察到它在把几个浏览器窗口随机移动。

接近结尾音乐变舒缓，于是将内容换成东京电车 POV + 蜜蜂生物传感器的套娃视频。

Setup
浏览器插件：
- Looper for YouTube
- Video Speed Controller

Scripting
用 macOS 自带的 bash script, bash command 和 osascript (AppleScript) 来控制窗口的开启和移动。用 while loop 和 sleep 提供时间上的控制（说人话就是让命令能每隔几毫秒发动一下，这样就有动画了）。事先准备了 cheatsheet。`,
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
    red: { name: "Seph", diary: `…`, videos: [] },
    blue: { name: "Kedi", diary: `…`, videos: [] },
    result: "red",
  },
  {

    round: 11,
    label: "Round 11",
    red: { name: "kuanfuweimu", diary: `…`, videos: [] },
    blue: { name: "jingwei", diary: `…`, videos: [] },
    result: "red",
  },
  {

    round: 12,
    label: "Final Round",
    red: { name: "chen xin", diary: `…`, videos: [] },
    blue: { name: "joanna", diary: `…`, videos: [] },
    result: "red",
  },
];
