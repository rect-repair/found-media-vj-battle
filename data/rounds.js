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
1. 韩国计划生育宣传视频
2. 【广播电视·前苏联】来自前苏联国家的电视新闻片头合集 (2022)
3. 80 年代迪斯科
4. 卡拉 OK 儿童动画歌曲——幸福拍手歌（童声范唱+伴奏，央视动画早期作品）
5. 香港公益广告·特价大促销（粤语）(2002) 中文字
6. 80 年代计划生育宣传片（电视片段）
7. 西瓜霜润喉片早期广告
8. implosion 1999 年 11 月 — 2000 年最佳爆破年度合集
9. 【放送文化】历年 4 月 26 日 CCTV 部分广告片段 (2006～2012 年，缺 2007、2010 年)
10. 2026 年 4 月 26 日《朝闻天下》天气预报后的 6 点档广告+片尾（未放）

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
    blue: { name: "Pengan", diary: `…`, videos: [] },
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

1. 从最经典的 weird tv 开始 — Weird TV appeared early 1995 on C-band satellite, a collage of original content produced by Chuck Cirino, Todd Stevens and Arthur Maturo, as well as classic video clips from various video archives. No doubt, Weird TV is Weird! (And was creepy to watch late night on satellite TV). Recorded 3/12/1995, Telstar 302, Tr 4 9PM PST; Receiver GI 550i, Wineguard 10' C/Ku dish.

2. 网络开始崩溃，自动切换下一视频失败，卡在了这个视频 — Portal soundtrack.

3. Discovery Channel Beyond 2000 Wearable Computers 1992 — Ancient wearable computer technology was supposed to revolutionize computing back in 1992 don't you know…… 插件也因为暴力操作而导致浏览器崩坏。

4. 急救后不得不在 list 里随便挑选了一个视频，来到了 battle 最后的 4 分多钟，恰巧挑选到了这个魔性舞蹈视频，插件也崩坏失去了控制，于是不得不使用基础快捷键进行效果开关以及进度条切换去卡节拍。 Ballet Zoom "Cats".`,
      videos: [
        { id: "h3vXqMhTPus", title: "Weird TV (1995)", start: 1451 },
        { id: "_4dQRdBttzU", title: "Portal soundtrack" },
        { id: "qbK-Bo3k9KQ", title: "Beyond 2000 — Wearable Computers (1992)", start: 65 },
        { id: "HpVXIH24KzQ", title: "Ballet Zoom \"Cats\"" },
      ],
    },
    blue: {
      name: "Sqy",
      diary: `sqy

艺术 & 伪科学
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

[Chrome 插件 — youtube-beat-scrubber](https://github.com/voidinsea/youtube-beat-scrubber)
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
- - - 以上是理想状态 - - -
实际：显然现场完全听歌听High, 忘记了挑选视频这件事情，沉迷在节奏当中无法自拔（叹气 而且！我因为注意力完全被bilibili的"正在缓冲…"带走，还发现静音键很有意思，好像最后的时间都花在：怎么卡上"正在缓冲…"的图标？？？以至于莫名其妙停了很久，sry，我真的后面跟自己玩了起来，不顾观众死活。
视频选择
在我原本的方案里。。。视频还是以我内心听到的音乐和当场选择的频道有关系。。所以没有找太多准备（除了稍微训练了一下推荐流）但！事实证明这件事情现场做太极限了hhh
准备的视频列表：
现场用到：
散度与旋度：麦克斯韦方程组、流体等所用到的语言
谁能在无尽尸潮中存活更久？（开场，有红蓝大战关键词）
小伙骑行阿里地区，艰难翻过5190那根拉山。。。（没用上）
日常精神续作！《小城日常》深度解读（没用上）
谁能在无尽尸潮中存活更久？（开场，有红蓝大战关键词）
我又相信光了（现找）
我发明了永动机（现找，莫名其妙用的）
我真随机找视频。。。所以。。`,
    },
    blue: {
      videos: [],
      name: "apple",
      diary: `Theme：Slice 0023
Source：Youtube
为了找到搜索浏览量低于300，最好只有20以下甚至无人播放的视频，以0023为锚点，我搜索了诸如：IMG 0023，MOV 0023，test 0023 等未被命名直接上传，仅用于个人存档使用的作品。它们都是未经处理的私人化视频影像，公开但没有传播目的，因此都是全然野生的原始素材，由此作为我的「0023切片」VJ主题。
搜索结果大多是几年前的作品，可以看到数学课，孩子记录，各种运动记录，个人或者小乐队自己的音乐排练，学校舞台记录，小动物视频。无数人普通而丰富的生活的一瞥。 Pure existence in the digital wilderness.

Search List:
IMG 0023
DSC 0023
MOV 0023
MVI 0023
Bandicam 0023 （古老录屏软件）
retro game 0023
GameTest 0023
我将其中有意思的存到我的search 0023 播放列表，并根据视频性质进行了分类。`,
    },
    result: "blue",
  },
  { 
   round: 6,
    label: "Round 6",
    red: { name: "Wenwen", diary: `…`, videos: [] },
    blue: { name: "Archy", diary: `…`, videos: [] },
    result: "red",
},
    {
    
    round: 7,
    label: "Round 7",
    red: { name: "tianqi", diary: `…`, videos: [] },
    blue: { name: "sihui", diary: `…`, videos: [] },
    result: "blue",
  },
    {
    
    round: 8,
    label: "Round 8",
    red: { name: "EwAn Qian", diary: `…`, videos: [] },
    blue: { name: "daymoss", diary: `…`, videos: [] },
    result: "red",
    },
    {
    
    round: 9,
    label: "Round 9",
    red: { name: "Liejie", diary: `…`, videos: [] },
    blue: { name: "Chagbai", diary: `…`, videos: [] },
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
