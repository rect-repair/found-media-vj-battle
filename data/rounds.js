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
      diary: `It feels like I've been slowly preparing for an event like this for the past 15 years. Far back in the late 00s, I spent most of my time gathering VHS tapes from thrift stores in order to play back any strange audio on my radio show on KDVS in Davis, CA. This quickly shifted into finding strange and disposable videos online. I discovered the joys of algorithmic rabbit-holes and getting deeply lost in YouTube recommended videos. For a brief moment, the network of related-videos was deterministic, and if you could remember a single video in a linked chain, you could access the entire related network built around that video.

Maybe influenced by [early embedded YouTube DJ sites](http://twoyoutubevideosandamotherfuckingcrossfader.com/) I started to build websites around embedded YouTube videos. Some were meant to be more sculptural embeddings ([1](https://www.youtube.com/watch?v=Jr8vH4E4P-4), [2](https://www.youtube.com/watch?v=y2X7hAgR4jI), [3](https://www.youtube.com/watch?v=kLQ64IkooUs), [4](https://www.youtube.com/watch?v=AdgBRAISQ64)), but I also wanted to build sites that could help for creating loops, sequences, and other effects that I could use in generating performances using streaming data ([1](https://www.youtube.com/watch?v=tdedUbqxxiU), [2](https://www.youtube.com/watch?v=uEyrC0R_ZwM)). I had built out a bunch of sites that could be used to perform with, but had only actually used while putting together [album material](https://bradgrammar.bandcamp.com/track/rayon-life).

So for this event, I wanted to return to some of these old sites to see if I could update an early YouTube looping/sequencing webpage to actually perform with. The original sequencer was built using standard HTML radio and toggle buttons, and eventually the later versions focused on creating loops around particular keyframes within a YouTube video. The updated site combined the original sequencing with the ability to select keyframes at particular points in a YouTube video.

Most of the other additions were for ease in performing during the VJ Battle. A pop-out player could be full-screen while still controlling the sequence from the main page. Keyframes, settings, and sessions could be returned to and shared via URL, and I could also manually manipulate the video playback with keyboard keys.

You can view and try out the [VJ Battle session here](https://johnbrumley.info/yt-seq/#q=eyJ2IjoiZWpndm1wYTNlSjQiLCJiIjoxMjAsImQiOjEsImwiOjQsInMiOlsxNi45MjgsNjQuNjM2LDEzMy43NzMsMTk4LjgxOCxudWxsLG51bGwsbnVsbCxudWxsXSwicCI6W3siaWQiOjE3NzcwMjE4ODkxMzIsInZpZGVvSWQiOiJxVnNqZXZXdUxpdyIsInRpdGxlIjoiSU1HIDc4NzgiLCJicG0iOjEyMCwic3RlcERpdiI6MC41LCJzZXFMZW4iOjgsInN0ZXBzIjpbeyJ0aW1lIjozNy42OSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjozNy42OSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjozNy42OSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxMy4zNTgsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MTMuMzU4LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjM1LjM5MywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjozNS4zOTMsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MjAuNTA0LCJlbmFibGVkIjp0cnVlfV19LHsiaWQiOjE3NzcwMjMyMTAzNzYsInZpZGVvSWQiOiJlamd2bXBhM2VKNCIsInRpdGxlIjoiQWNjb3JkaW9uLCBHdWl0YXIsIFlvZGVsaW5nIC0gV2hlbiBJIFdhcyBIdW5ncnkgTG9yZCBZb3UgRmVkIE1lIiwiYnBtIjoxMjAsInN0ZXBEaXYiOjEsInNlcUxlbiI6NCwic3RlcHMiOlt7InRpbWUiOjE2LjkyOCwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo2NC42MzYsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MTMzLjc3MywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxOTguODE4LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjAsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjAsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjAsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjAsImVuYWJsZWQiOmZhbHNlfV19LHsiaWQiOjE3NzcwMjM4MTEzMjgsInZpZGVvSWQiOiJvZjNWTWJBdWVUNCIsInRpdGxlIjoiUGjDoXQgw6JtIHRp4bq/bmcgQW5oIGdp4buNbmcgTeG7uS0gNy1UcuG6p24gVGhp4buHbiBUw7luZy5EQVQiLCJicG0iOjEyNSwic3RlcERpdiI6MSwic2VxTGVuIjo4LCJzdGVwcyI6W3sidGltZSI6NTQuNTg1LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjYzLjI0NywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyMC4yMTIsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MTYuMjI0LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjEwLjQ1LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjIuMiwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo2LjYsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MzcuMzk4LCJlbmFibGVkIjp0cnVlfV19LHsiaWQiOjE3NzcwMjQyMDA5NTYsInZpZGVvSWQiOiJIZEVXSzFTU21GWSIsInRpdGxlIjoiVHJhbnF1aWwgTW9tZW50c8KuIFNsZWVwIFNvdW5kIFRoZXJhcHkgU3lzdGVtIiwiYnBtIjoxMjYsInN0ZXBEaXYiOjEsInNlcUxlbiI6OCwic3RlcHMiOlt7InRpbWUiOjQ3LjkzNSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo0Ny45MzUsImVuYWJsZWQiOnRydWV9LHsidGltZSI6NDcuOTM1LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjQ3LjkzNSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo0Ny45MzUsImVuYWJsZWQiOnRydWV9LHsidGltZSI6NDcuOTM1LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjQ3LjkzNSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo0Ny45MzUsImVuYWJsZWQiOnRydWV9XX0seyJpZCI6MTc3NzA5MTIyODk1OSwidmlkZW9JZCI6IkJFYVo0YTRIYjJJIiwidGl0bGUiOiJRVUJFIENpbmNpbm5hdGkgLSBTd29yZHF1ZXN0IiwiYnBtIjoxMjAsInN0ZXBEaXYiOjIsInNlcUxlbiI6OCwic3RlcHMiOlt7InRpbWUiOjUzLjY2NSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo0MTIuMzcsImVuYWJsZWQiOnRydWV9LHsidGltZSI6NTMuNjY1LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjU3OS4wMTMsImVuYWJsZWQiOnRydWV9LHsidGltZSI6NDguMDE2LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjM3NS42NTIsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MzkuNTQyLCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjQ0My40MzksImVuYWJsZWQiOnRydWV9XX0seyJpZCI6MTc3NzA5MTg1NjczOSwidmlkZW9JZCI6InNEZ3Y1WXk2THVJIiwidGl0bGUiOiJJTUcgMDExNyIsImJwbSI6MTIwLCJzdGVwRGl2IjoyLCJzZXFMZW4iOjgsInN0ZXBzIjpbeyJ0aW1lIjowLjIyMiwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyLjAyNiwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo0LjA1MywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo2LjU1NCwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo4LjgzNCwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxMS42MiwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxNC40NywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxOC41MjMsImVuYWJsZWQiOnRydWV9XX0seyJpZCI6MTc3NzA5MjE0NDE4OCwidmlkZW9JZCI6Imx3am9YQTVjWFFjIiwidGl0bGUiOiJUaXBhIHRoZSBBbnQgLyBTa3VkcmnFhmEgVGlwYSAoMTk3NikgLSBBbnNpcyBCxJNyemnFhsWhIFtIUSAxMDgwcF0iLCJicG0iOjEyMCwic3RlcERpdiI6NCwic2VxTGVuIjo4LCJzdGVwcyI6W3sidGltZSI6NzQuMzc4LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjEwNi4yNTQsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MTU5LjM4MSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyNDYuODM2LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjI5NC4yNDEsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MzU2LjM1OSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo0MTIuNzU1LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjQ3NC4wNTUsImVuYWJsZWQiOnRydWV9XX0seyJpZCI6MTc3NzA5MjYzNzc2MywidmlkZW9JZCI6Ik9MY3VveGtsVEpvIiwidGl0bGUiOiJUaGUgU3BpcmFsIERlbW8gLSBSZXNpc3RhbmNlIC0gU2VnYSBNZWdhZHJpdmUgRGVtbyIsImJwbSI6MTIwLCJzdGVwRGl2IjoxLCJzZXFMZW4iOjgsInN0ZXBzIjpbeyJ0aW1lIjo2NC43MjEsImVuYWJsZWQiOnRydWV9LHsidGltZSI6Mi43ODQsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjMuMTMyLCJlbmFibGVkIjpmYWxzZX0seyJ0aW1lIjoxMTUuNTI0LCJlbmFibGVkIjpmYWxzZX0seyJ0aW1lIjoxMTIuNzQsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MTIwLjM5NSwiZW5hYmxlZCI6ZmFsc2V9LHsidGltZSI6NjMuNjc3LCJlbmFibGVkIjpmYWxzZX0seyJ0aW1lIjo2My42NzcsImVuYWJsZWQiOmZhbHNlfV19LHsiaWQiOjE3NzcwOTI5MzQyOTksInZpZGVvSWQiOiJBeFg2VnlxZ1JCQSIsInRpdGxlIjoiVGhlIEZseWluZyBMdW5hIENsaXBwZXIg44K244O744OV44Op44Kk44Oz44Kw44O744Or44OK44O744Kv44Oq44OD44OR44O8ICgxOTg3IEphcGFuZXNlIGNvbXB1dGVyIGFuaW1hdGlvbiBMYXNlckRpc2MpIiwiYnBtIjo2MCwic3RlcERpdiI6MSwic2VxTGVuIjo4LCJzdGVwcyI6W3sidGltZSI6MzA1NC4yODcsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjE5ODMuOTgxLCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjk2MC42NjUsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjcxNS4yNzcsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjUxNi44NzksImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjE2NDQuNjE2LCJlbmFibGVkIjpmYWxzZX0seyJ0aW1lIjoyNDEyLjEwMywiZW5hYmxlZCI6ZmFsc2V9LHsidGltZSI6Mjg3Ni43NzMsImVuYWJsZWQiOmZhbHNlfV19LHsiaWQiOjE3NzcwOTM0MTk1NTQsInZpZGVvSWQiOiJqQ3hYdHBfbnlubyIsInRpdGxlIjoiRm9sZXlBdXRvbWF0aWM6IFBoeXNpY2FsbHktYmFzZWQgU291bmQgRWZmZWN0cyBmb3IgSW50ZXJhY3RpdmUgU2ltdWxhdGlvbiBhbmQgQW5pbWF0aW9uIiwiYnBtIjoxMjAsInN0ZXBEaXYiOjEsInNlcUxlbiI6OCwic3RlcHMiOlt7InRpbWUiOjE3LjI2NywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxNy4wMDEsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjQ1LjU1OCwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo3MTUuMjc3LCJlbmFibGVkIjpmYWxzZX0seyJ0aW1lIjo1Mi43MzEsImVuYWJsZWQiOnRydWV9LHsidGltZSI6NTcuNTEyLCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjI0MTIuMTAzLCJlbmFibGVkIjpmYWxzZX0seyJ0aW1lIjoyODc2Ljc3MywiZW5hYmxlZCI6ZmFsc2V9XX0seyJpZCI6MTc3NzA5MzUxODAzMywidmlkZW9JZCI6IjEzVkRGUm03TnFZIiwidGl0bGUiOiJHYWl0IE1hc3RlcjIiLCJicG0iOjEyMCwic3RlcERpdiI6Miwic2VxTGVuIjoyLCJzdGVwcyI6W3sidGltZSI6NS4zNjEsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MTAuNDM5LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjE3LjQ5MiwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyMS4zNDgsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjMwLjc1MiwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjozOS41OTIsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjM2LjAxOSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo1Ny4zNjcsImVuYWJsZWQiOmZhbHNlfV19LHsiaWQiOjE3NzcwOTM4Mzc0OTYsInZpZGVvSWQiOiJBbkJidGt4WkJSSSIsInRpdGxlIjoiUG93ZXJlZCBTaG9lcyIsImJwbSI6MTIwLCJzdGVwRGl2IjoxLCJzZXFMZW4iOjgsInN0ZXBzIjpbeyJ0aW1lIjo0Ljg2NCwiZW5hYmxlZCI6ZmFsc2V9LHsidGltZSI6NC44NjQsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjQzLjA4MywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo0Ljg2NCwiZW5hYmxlZCI6ZmFsc2V9LHsidGltZSI6OTAuOCwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo0Ljg2NCwiZW5hYmxlZCI6ZmFsc2V9LHsidGltZSI6NC44NjQsImVuYWJsZWQiOmZhbHNlfSx7InRpbWUiOjQuODY0LCJlbmFibGVkIjpmYWxzZX1dfSx7ImlkIjoxNzc3MDk0OTUyMTgzLCJ2aWRlb0lkIjoiRkNKdVFtYmtoVnMiLCJ0aXRsZSI6IkRhaWhhdHN1IFBpY28gQ29uY2VwdCIsImJwbSI6MTIzLCJzdGVwRGl2IjoyLCJzZXFMZW4iOjIsInN0ZXBzIjpbeyJ0aW1lIjoyLjc0MywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyLjc0MywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyNS40NywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyNC4yOTUsImVuYWJsZWQiOnRydWV9LHsidGltZSI6ODUuMDMxLCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjEzNC40MDQsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MTk3LjEsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MjIwLjIxOSwiZW5hYmxlZCI6dHJ1ZX1dfSx7ImlkIjoxNzc3MDk1MjY0NzgzLCJ2aWRlb0lkIjoidG0wVm5rZDlCZFEiLCJ0aXRsZSI6Ik1hc3RlcnMgb2YgdGhlIE1hemUgU2Vhc29uIDI6IDMtMyIsImJwbSI6MTIzLCJzdGVwRGl2IjoyLCJzZXFMZW4iOjIsInN0ZXBzIjpbeyJ0aW1lIjo0OS41LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjUzLjQ4MywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxNTAuNzc2LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjE2Ny4yNzYsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MTkxLjE3MiwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyMTcuMzQ1LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjI3NC44MSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyODUuMDUyLCJlbmFibGVkIjp0cnVlfV19LHsiaWQiOjE3NzcwOTU4ODE2MTMsInZpZGVvSWQiOiJTNkNtN3kwZzNYQSIsInRpdGxlIjoiRGF6emVsb2lkcyAtIEFubmUgRGlsbHkgV2hpbSdzIERyZWFtIiwiYnBtIjoxMjMsInN0ZXBEaXYiOjQsInNlcUxlbiI6Miwic3RlcHMiOlt7InRpbWUiOjI0LjAwOSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyNi4yNzEsImVuYWJsZWQiOnRydWV9LHsidGltZSI6NDYuMjc5LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjQ4LjM2NywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo2NC4xOTksImVuYWJsZWQiOnRydWV9LHsidGltZSI6NjQuODk1LCJlbmFibGVkIjpmYWxzZX0seyJ0aW1lIjo4MC41NTMsImVuYWJsZWQiOnRydWV9LHsidGltZSI6NzYuNTUyLCJlbmFibGVkIjp0cnVlfV19LHsiaWQiOjE3NzcwOTY2MjcxNzksInZpZGVvSWQiOiJ1cWN5REEyTDVMMCIsInRpdGxlIjoiZnVyIGRpc3BsYWNlbWVudCB0ZXN0IiwiYnBtIjoxMjMsInN0ZXBEaXYiOjIsInNlcUxlbiI6Miwic3RlcHMiOlt7InRpbWUiOjQyLjcxOSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjo0Mi43MTksImVuYWJsZWQiOnRydWV9LHsidGltZSI6NTUuMTAyLCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjU0LjM1OSwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxNC4yNCwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoyMy43NzQsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MzQuNDIzLCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjQyLjk2NywiZW5hYmxlZCI6dHJ1ZX1dfSx7ImlkIjoxNzc3MDk2ODc1Nzg4LCJ2aWRlb0lkIjoiY2gySm1sdTFONk0iLCJ0aXRsZSI6IlR1cmJvIFRlZW4gVHJhbnNmb3JtYXRpb24gU3VwZXJjdXQiLCJicG0iOjEyMywic3RlcERpdiI6NCwic2VxTGVuIjoyLCJzdGVwcyI6W3sidGltZSI6MTE0LjcwMiwiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxMTQuNzAyLCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjExNi45MDcsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MTE2LjkwNywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxMTYuOTA3LCJlbmFibGVkIjp0cnVlfSx7InRpbWUiOjExNi45MDcsImVuYWJsZWQiOnRydWV9LHsidGltZSI6MTE5LjExMywiZW5hYmxlZCI6dHJ1ZX0seyJ0aW1lIjoxMTYuOTA3LCJlbmFibGVkIjp0cnVlfV19XX0=).

Most of the videos that I've "liked" in the past are no longer available, either through dead/deleted channels or removed from the site for whatever reason. So the video selection was mainly a process of returning to videos that I had liked which were still available, and adding a few more videos inspired by the batch of liked videos that I grabbed from my YouTube account. I'm an avid IMG/DSC collector, so I also included a few zero-view videos to see if they could be sequenced in a nice way. Unsurprisingly, a lot of my liked videos turned out to be uploads of 80s/90s era VHS tapes, TV, and software.

List of videos (not in order of playback during Battle):

- [IMG 7878](https://www.youtube.com/watch?v=qVsjevWuLiw)
- [Accordion, Guitar, Yodeling](https://www.youtube.com/watch?v=ejgvmpa3eJ4) (this was my test video for the original sequencer)
- [Phát âm tiếng Anh giọng Mỹ — 7 — Trần Thiện Tùng.DAT](https://www.youtube.com/watch?v=of3VMbAueT4) (English pronunciation video, used extensively in Stretch Vowels)
- [Tranquil Moments® Sleep Sound Therapy System](https://www.youtube.com/watch?v=HdEWK1SSmFY)
- [QUBE Cincinnati — Swordquest](https://www.youtube.com/watch?v=BEaZ4a4Hb2I)
- [IMG 0117](https://www.youtube.com/watch?v=sDgv5Yy6LuI)
- [Tipa the Ant / Skudriņa Tipa (1976) — Ansis Bērziņš](https://www.youtube.com/watch?v=lwjoXA5cXQc)
- [The Spiral Demo — Resistance — Sega Megadrive Demo](https://www.youtube.com/watch?v=OLcuoxklTJo)
- [The Flying Luna Clipper ザ・フライング・ルナ・クリッパー (1987 Japanese computer animation LaserDisc)](https://www.youtube.com/watch?v=AxX6VyqgRBA) (thanks KL for better quality upload)
- [FoleyAutomatic: Physically-based Sound Effects for Interactive Simulation and Animation](https://www.youtube.com/watch?v=jCxXtp_nyno)
- [Gait Master2](https://www.youtube.com/watch?v=13VDFRm7NqY), [Powered Shoes](https://www.youtube.com/watch?v=AnBbtkxZBRI) (VR Lab in Tsukuba)
- [Daihatsu Pico Concept](https://www.youtube.com/watch?v=FCJuQmbkhVs)
- [Masters of the Maze Season 2: 3-3](https://www.youtube.com/watch?v=tm0Vnkd9BdQ) (one of a trend of green screen/maze game shows in late 80s early 90s, this one is especially awkward)
- [Dazzeloids — Anne Dilly Whim's Dream](https://www.youtube.com/watch?v=S6Cm7y0g3XA) (Rodney Alan Greenblat's Dazzeloids CD-ROM, he went on to do Parappa the Rapper)
- [Fur displacement test](https://www.youtube.com/watch?v=uqcyDA2L5L0) (prolific YouTube outsider artist Wendy Vainity)
- [Turbo Teen Transformation Supercut](https://www.youtube.com/watch?v=ch2Jmlu1N6M)`,
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
      diary: `临行前，将网页上的视频下好后逐个转码为总量超过 100G 的原始视频素材，准备在现场实时 VJ。不巧，现场被告知只能浏览器播放，可惜了，手忙脚乱把素材赶紧在网页一字排开，算是救火执行。

but，后面却发现有参加的兄弟还是用 Arena 在 VJ，无人在意，害。

思路就是现场听了一下 DJ 的风格、速度，在油管把不同节奏律动的跳舞视频和我们老一辈的互联网鬼畜素材拿出来玩玩，没有太多想法，只是 enjoy 这个氛围，并且 rave。我认为这个比赛中技术不是最重要的，若非要问，一个顺畅的播控、流畅的素材播放给予舞池的连贯的体验最重要，但可能受制于临时的网络环境，所以没太深究这个事。并且，我觉得也用不着"为赋新词强说愁"凑一篇技术论文，因为我没有使用任何技术，只有朴素的，对于甄嬛传和鬼畜的热爱。

以上。`,
      videos: [],
    },
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
    red: { name: "Wenwen", diary: `（正在写了！！`, videos: [] },
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
    red: {
      name: "EwAn Qian",
      diary: `[Ewan Qian](https://ewanqian.site)

基本思路
这轮我想做的不是一个很完整、很规整的 VJ set，而是一条能在现场跑起来的素材路径。核心还是用公共现成视频做选择、切换、跟拍和推进，让画面跟着 DJ set 的能量走。

整体上我把这轮分成几个段落：先用一个有反差感的 opening 把现场第一口气调出来，再进入高速游戏和竞技素材，把节奏和能量推高；中间再转到更流行、更轻、更亮的段落，让现场情绪换色；最后用一个非常直接、带记忆点的 ending 收尾。

我这轮最在意的不是效果堆得多复杂，而是素材之间能不能接得住，画面能不能跟拍，现场失控的时候能不能收得回来。对我来说，这更像一次现场操作逻辑的实验。

Opening
- 郭德纲、于谦《艺高人胆小》：用来做开场反差。画面和现场电子音乐之间会形成一种很怪、很好笑的错位感。操作上不会一开始就打满，主要是低透明度、轻闪、慢慢把现场气氛带起来。

Part 1
- 《祖玛》高手操作 / 可能的人类理论记录：这是第一段的主体。它的快感很直接，适合跟着大拍推进，也适合做一些小闪和切黑。高手操作里的空射、倒序组织、快速反应，会把一个童年游戏打成非常流畅的节奏机器。
- DELIVERY MUST COMPLETE：用来做高潮段。高速空战、飞行、drop 段的推进感很强，适合把能量继续往上推。它有一种很明确的高速竞技感，和现场电子音乐的快节奏很容易接上。
- osu! 世界前 50 名玩家视频：这一段更偏节奏密度和人类反应极限，适合碎拍、短闪和局部加亮。它不是传统意义上的漂亮画面，但很适合表现"人在极限操作"的状态。

Part 2
- Perfume《Edge Driving remix》：用来把前面的游戏竞技感转成更冷、更硬边、更情绪化的电子段落。夜车、舞台、电子音乐的质感很适合做中段转色。
- 崔叡娜《Catch Catch》一键换装：这里是故意把现场情绪换成更轻、更可爱、更亮的状态，让前后形成明显转色。前面一直高速、竞技、空战，如果不换气会很累，所以这一段是一个轻快的换频道。
- 【36 作对比】《再生》(Perfume)：这一段更像群像式的大合唱。很多人根据《再生》做了各种抽象剪辑和鬼畜二创，包括马里奥风格和各种互联网版本。这个视频把 36 个版本合在一起，像把分散的网络碎片突然合成一个大合唱，现场配合 glitter 式闪烁会特别热闹。

Ending
- 朗朗与赵本山《赛马》：用来收尾。它很直接，速度感也很强，最后观众容易记住。作为 ending，它不需要太复杂，重点是速度、记忆点和一个清楚的收束。

未使用但保留的素材
- REZ 回顾：经典赛博射击游戏，很早就把数字互联网、音乐、射击和抽象视觉放在一起。方向很对，但这轮里没有《祖玛》和空战那么直接。
- Beat Saber 谱面制作：数千行代码、数十万条数据最后变成身体能打出来的谱面，概念很好。但它更像技术说明，不如 osu! 高手视频那么一眼进入现场状态。
- "你是否见过巅峰时期的承太郎"：早期 JOJO 影像的华丽和锋利感很强，适合另一种更燃、更动漫化的现场段落。
- 《斩不断命运的大剑，跟汽水瓶又有什么区别呢？》：《剑风传奇》同人二创素材。原本有一种很廉价的材料感，但气质到了；后来被 AI 影像化之后，反而变成特别有气势、特别燃的动画。
- 《最全的小小功夫火柴人电影》：让我想到早期 Flash 动画和游戏。火柴人很简单，但打击感非常直接。
- 《奥特曼格斗进化重生》全 CG — 动作重量很棒，把特摄动作的力量提炼得很直接。

补充说明
这轮我用的是 Found VJ Deck、Chrome 和 APC mini mk2。说白了，APC mini 摆在那儿有一部分是为了让我自己安心。键盘当然也能干很多事，但网页环境太烦了。B 站有自己的快捷键，Chrome 有自己的快捷键，输入框还会突然抢焦点。现场我手已经在找拍子了，它突然给我暂停、跳进度、触发网页功能，这种东西很破坏状态。

所以我才把常用动作从键盘里拿出来，放到一个我手能摸到的地方。它不是说一下子让我变成什么专业灯光师或者 VJ，只是让我在那个十分钟里少一点慌。手放在控制器上，我知道这里是切视频，这里是闪，这里可以黑一下，这里可以把东西收回来。这个边界感对我很重要。

真正上场的时候，我用得最多的其实也就那几下：切素材，跟拍子，闪一下，黑一下，音乐推起来的时候往前顶一点，乱了就赶紧收住。前面我也想过很多更自动的东西，比如自动 BPM、自动跟闪、自动推进状态。测试的时候确实挺吓人的，好像网页自己活了。但现场真打起来，我还是更相信手上的几个动作。TAP 敲进去，RESYNC 对一下，听到拍子来了就跟，觉得不对就收。

这套东西现在还很临时。公开视频链接也不是素材库，更多就是一个现场索引。它能不能成立，还是看我当时有没有选对视频，切换有没有落在拍子上，快的时候能不能推上去，慢的时候能不能别硬冲。还有一个很现实的问题：现场一乱，人会不会忘记自己该按哪里。

所以我现在回头看，这个工具最有用的地方不是滤镜多，也不是看起来很像一个控制台。它只是帮我把手稳住一点。画面和音乐能不能接上，最后还是要靠现场判断。这个判断只能练，没法全自动。`,
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
    red: {
      name: "Liejie",
      diary: `关键词：功夫 / 老年人表情包 / 晨练 / 另一种 Y2K

心路历程
本来想做游戏相关的媒介视频，找了好几个绝地求生的 B 站录屏和早期 GTA，发现手游画面很丰富了没有变化拓展空间，于是改方向。

怎么找的资源
没有思路在 B 站上漫游，我方向偏好是寻找本身带有电子包浆的视频。于是在搜索的时候特意去限定 filter 时间范围大概在 2020 前的视频。

然后在 B 站偶然看到一个道士在练功的视频，非常符合我想要有人物动态、有冲击力，而且运镜有手持的抖动很生活化的要求，并且画质相当模糊有种上世纪的美感。

画面思路
于是找了一系列的练功、打拳、功夫教程的视频。顺着这个主题发现老年人晨练的气势更胜一筹很硬核有活力生命力，适合 DJ 氛围更强烈时候素材。从老年人联想老年人常用的表情包，在同一个主题下，配色元素能够唤起观众的熟悉的记忆，是完美的媒介素材，老年人表情包也算一种 Y2K。

对于 DJ 的 Jam 的变化
- 常态 — 功夫视频：打拳、太极、螳螂拳、练功 + 切换帧率效果
- 嗨起来 — 老年人开始晨练 + 动作拖尾调整速率
- 最后加效果 — 老年人表情包开始爆炸旋转出现叠加晨练切换，呈现精气神十足吉祥如意的效果`,
      videos: [],
    },
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
    red: {
      name: "Fernando",
      diary: `[Fernando / sephfar.com](https://sephfar.com)

我从未对这次演出的方向有清晰的构想。整个过程更像一个沙盒实验，受控制视频系统的开发、各种视频素材的搜索以及沿途测试的影响，不断探索哪些效果对现场观众来说更有趣或更合适。

视频素材的搜索
这无疑是整个过程中最困难的部分。我给自己设定了一个任务：尽量寻找播放量不足 5000 次的视频。然而我意识到，作为一个亲历了 YouTube 诞生与成长时代的人，如今想找到"隐秘内容"已经非常困难了。没有任何工具、筛选器或机制能帮你按播放量排序内容，只能查看在某个特定日期之前上传的视频。在我完全不熟悉的 Bilibili 上，结果也大同小异。

我在寻找什么
我希望主要使用观众不熟悉的内容。但我发现，要区分"真正冷门的内容"和"只是由冷门账号上传的热门内容"，实在太难了。还有画质和动态感的问题，在现有搜索算法的限制下，很难找到既有足够动态感、又有不错画质的真正冷门内容。当然，每当搜索某个主播或 YouTuber "0 播放量"视频时，结果总是那些在被发现之后已经拥有数万甚至数十万播放量的视频。

在最初的挫败感之后，我决定转变思路，转而寻找对我来说非常熟悉、但对国际观众而言完全陌生的内容：90 年代的乌拉圭电视节目。这意味着画质不高但也不至于太差，制作还算精良，却对非乌拉圭人而言完全无从辨认。

由此，我开始以《Los Tatitos》（定格动画短片）、《Cacho Bochinche》（一档将真人主持与木偶、动画结合的儿童节目）和《Americando》（一档聚焦乌拉圭乡村文化与风俗的科普节目）为基础，构建我的第一批视频素材。

叙事线索的寻找
我有一个出发点，坦白说，那已经是活动前一晚的事了。于是我开始思考，能在这些内容中构建出怎样一种隐性叙事。到目前为止，我的核心主题是 90 年代的儿童怀旧，于是围绕同一主题，我想到了以叙事上的对比来切入，去寻找 90 年代面向儿童的反毒品公益广告。我找到了一批相当冷门的视频，但它们具有极强的动态感、戏剧张力，以及恰到好处的"尴尬感"，足以为演出带来叙事上的反差和幽默元素。

整体构想是：从以趣味和文化为核心的儿童教育内容，逐渐过渡到以恐惧和禁令为基础的儿童教育内容。

基于氛围的内容
由于这是一场 VJ 对战，我事先不知道音乐会是什么风格，所以我准备了一些以冲击力为核心的视频。
- 如果氛围更偏冷静、环境感和旋律性，我准备了一些以旅行为主题的视频，包括城市场景、自然风景以及人们穿梭于城市中的画面。与此搭配的还有一段"民防公共信息"视频，其中某些片段与旅行视频的氛围颇为相近，但它是动画形式的。
- 如果音乐更轻松活泼，我准备了一些猫咪视频，以及来自某档儿童电视节目的舞蹈片段，我甚至没有去查这个节目的来源。
- 如果音乐强烈而充满活力，我有鸡舞视频和史莱克视频，后者可以加速播放以配合音乐的节奏感。

史莱克理论
在前往 UFO 的出租车上，我一边思考演出，一边开始意识到：无论音乐的氛围如何，我都会在某个时刻引入史莱克。因为当你所看到的一切都是陌生的，即便它是有趣的，一个观众已经熟悉的符号的出现，可以成为调动参与感的强大工具。最终，音乐的氛围与史莱克登场的时机配合得恰到好处。

注意：在演出过程中，部分视频未能正常加载，其中一个视频自动跳转到了下一个推荐视频，这迫使我在现场进行了一些即兴发挥和临场应变。

系统
原计划是同时使用一个浏览器脚本来直接控制视频，以及一个 TouchDesigner 叠加层来实现一些额外效果，所有操作均映射到一个 MIDI 控制器输入。最终我决定只使用浏览器脚本，甚至没有打开 TouchDesigner 项目。浏览器脚本用 TamperMonkey 插件运行 JavaScript 代码；视频切换通过 Ctrl+Tab（切换到下一个标签页）或 Ctrl+Tab+数字键跳转到特定标签页来进行。

视频分组

第一组：儿童电视节目
- Americando | CORTINA INTRODUCTORIA (Teledoce Televisora Color)
- LOS TATITOS VAN A LA ESCUELA — CANAL 4 URUGUAY
- Los Tatitos — Capítulo 5. Vamos a compartir
- Escuela en el fondo del mar (Cacho De La Cruz)
- 洪恩小乌龟学美语 Franklin

第二组：令人尴尬的儿童戒烟/戒毒公益广告
- Anti-Marijuana PSA: "Family Invention" (1993)
- 1970s Canadian Anti Smoking PSA — Light Me Harry
- Anti-Smoking PSA — Too Smart to Start (1990s)
- Dying for a Smoke (1967)
- Anti Smoking PSA — 90s

第三组：根据现场音乐氛围选用的视频
- World's Greatest Train Ride Videos — Trans-America (1995)
- Chicken Dance
- "Can you dance like this" warm-up
- Funniest Cats and Dogs — Funny Animal Videos #35
- 有趣猫咪视频 2025
- Shrek glitches
- Very creepy commercial from the 70's
- Civil Defense Public Information`,
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
      diary: `音乐和迷幻强绑定，于是在 VJ 部分就应该更迷幻。
我其实想做两个视频叠加消失的效果，奈何能力有限，于是干脆从视频入手。我找了和迷幻强相关的 Shoegaze、Dreampop、postpunk 的音乐 MV，通过配合音乐的节奏播放。

视频 MV 列表
- My Bloody Valentine - To Here Knows When
- My Bloody Valentine - Soon
- Ride - Vapour Trail
- Pinkshinyultrablast - Ravestar Supreme
- No Joy - Hollywood Teeth
- Tamaryn - Dawning
- Flyying Colours - It's Tomorrow Now
- Chapterhouse - Pearl
- Diiv - Healthy Moon

TD Web Render VJing
整体思路是用 TD Web Browser 去实时使用浏览器，然后在 TD 里面写 MIDI 控制效果（左上角 MIDI 映射集合方便 link 和写效果）和自己根据习惯写的音频分析集合（左下角）。演出时候类似一个随机视频电台和一个短视频+直播间实时。演出当中麦克风收音存在问题，然后演出中间想到然后改成 LFO 相当于自己走 BPM 去跑自动。

使用了一个长视频随机 YT 视频网站 [astronaut.io](http://astronaut.io/#) 和短视频 [抖音](https://douyin.com)，两个随机视觉加了颜色配置获得更好的颜色范围后做叠加。后面就接了一堆自己常用的平面效果然后想怎么写给 MIDI 怎么写，如比如改 level 亮度、sat 颜色、bloom、noise filter、景深。另外整点装饰性 cheating Ikeda 风格的视觉效果做切换。`,
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
      diary: `赛前一周
原本是不想准备的，打算比赛当天再说。但是迫于"天琦"制造的压力（他们甚至建了一个名为《VJ 紧张备赛，不要在所有人面前丢人》的微信群），不得不早早建一个 YouTube List，以缓解自己焦虑的情绪。

由于是门外汉，我选择先向 Gemini 老师求助。我向它描述了比赛的规则，它不出所料地给了我满屏的"技术选型指南"（就是用什么 VJ 软件对视频素材进行处理之类的），完全是不得要领。然后我让它别总是考虑"技术"（主要是我也学不会），帮我提供一些网络视频中的"尖儿货"，它终于有点开窍了（但是不多），给我提供了一些"故障艺术""复古未来主义"的 YouTuber，我从中选了几条观感还不错的，放进了 List 里面，当做兜底用的视频。

不过这些视频的内容都跟传统 VJ 使用的视觉元素太接近了，看多了就会觉得有些无聊，于是我又让它找些"打破常规"的视频给我，这次它提供了一些还不错的思路，比如：Live Camera（摄像头影像直播）、ASMR、90 年代电视广告、低幼向的 3D 动画等等。我浏览了部分视频，选择了几个 Live Earth Cams 丢进了 List 里面，觉得这种"直播"视频带来的"共时性"的体验，也许会是比较独特的，可惜的是这些视频都太"静"了，现场 Battle 的时候根本用不上。

我又给了 Gemini 一次机会，想看看它还能挖掘出什么，这一次我让它尽可能找足够 "Weird" 的视频，而它提供的选择也已经非常出色了。它给了我：Cool 3D World、Cyriak 和 Surreal Entertainment，这几个频道的视频素材都是非常具有"奇观感"，而且很容易通过控制去匹配音乐的节奏的类型，可以说是 VJBattle 的天选素材了（我 Battle 时候使用的"奇怪猫咪"和"分形学手指"都是出自 Cyriak 这个频道，有一个很经典的 MV 也在这里分享一下：Bonobo — Cirrus）。

这期间，我还联想起了一位此前就关注的像素艺术家 Paul Robertson，于是有找了几个他做的视频放进了 List 里面。此刻，我的 List 已经有了 10 个左右的视频，焦虑的情绪得到了充分的缓解，就没有继续在这件事上投入精力了。

比赛当日白天
前一天晚上我跟 PJ 还有唱白一起去看了《寂静的朋友》这部电影，影片里面有很多幕都让我联想到常规的 VJ 会使用的视觉元素，也让我联想到，使用"写实"风格的自然影像，或许是在 VJBattle 中没那么容易与其他人撞车的，于是第二天前往"油管"前，我又找了一些"怪异的深海鱼类"，加入到 List 里面。

比赛中
由于一些意外状况，我的参赛顺序从第一位调整到了第十一位，这让我有了充分的时间，从其他 VJ 的所使用的素材中汲取灵感（当然也是迫于现场大家都放的太好了的压力）。我又在等待的过程中加入了很多临时想到的主题的视频。

一些现场视频让我想到早期质量堪忧的 AIGC Video，于是我去找了经典的 Will Smith 吃意面的视频；deimos 的各种古早任天堂游戏视频，让我也想给 List 里面加入一些游戏元素（毕竟自己也是做 VideoGame 的），我觉得音游可能会比较合适，能产生在现场玩的错觉，于是就去找了 Trombone Champ（滑稽吹小号音游）。其实我觉得《节奏天国》可能也很合适，但想到阿久可能会用，于是就没放进去。现场还看到了很多国产动画片，我觉得魔方大厦非常合适，就也加到了 List 里面；以及，电脑蓝屏的画面让我想到了早期的 Windows 屏保；还有就是一些故障视频，让我觉得各种游戏 Bug 的合集，放出来效果也不错（实时并非如此，Bug 出现的节奏太不可控了）。最后，我找了一棵树的延时，打算通过回归自然影像主题作为结束。

比赛用的 List：[YouTube playlist](https://youtube.com/playlist?list=PL3ep9ZTa-hksMrWta9Dme-siR-EdN06EK)`,
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
      diary: `首先我觉得最困扰的一点是在构思这个活动的时候我觉得"找视频"这件事应该也是现场完成的，那么每一次找视频就有可能变成一场豪赌，因为有可能从预览图中给到的信息能大概判断它的主题，但可能无法判断视频内部具体的运动程度、剪辑的节奏等等和 VJ 非常相关的属性，因此我决定开发一个插件能够让开启这场豪赌之后，仍然可以用一些 DJ 手段将不合适的视频节奏人为桥接在音乐上的方式，然后 video_vinyl_scratcher 就诞生了。

video_vinyl_scratcher
这是一个可以将已经播放过的视频写入 RAM，用鼠标拖拽唱盘来调变视频的播放头，实现 scratch 体验的浏览器插件，右下角的四个红点用于定义唱盘旋转一圈涵盖多少的播放时长。另外唱盘中心的封面图是直接截取了调出这个插件时，视频的静帧缩略图。写这个插件的过程其实也是一种和视频网站加载策略的对抗过程，由于懒加载机制，很难直接读取到没有被播放过的所有视频帧，自然也就很难丝滑地调变那些帧。（让人难受）

插件 demo 下载
[百度云](https://pan.baidu.com/s/1n7qMDF7d8lZPJXiDx6F4rg?pwd=p3k2)
[Google Drive](https://drive.google.com/file/d/1OboSKjQiTsALiTKkaoC3rwKRmWD1G5QY/view?usp=drive_link)
使用方法详情见文件内 README 使用手册。`,
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
      diary: `[@jyolyyyu](https://www.joannalyu.com)

How this began
（很显然这个 "good internet" 都没有满足，真希望可以用有线网络来保证一个畅通的实时视频播放……）

至于做这个 VJ battle 背后的东西，在反思和准备在 VJ battle 活动之前发生的这个工作坊的时候，已经尝试从客观的角度整理了一个关于就是使用既有媒介进行 VJ / audiovisual performance 的脉络：从一开始真正使用剪刀来剪辑 film，到 TV 普及早期使用 TV signal 进行 remix 演出的 Emergency Broadcast Network，到 niconico / YouTube / Bilibili 的视频网站鬼畜文化等等。

作为选手
作为选手，本来想做的一些大招（比如插件）都做了一半都没时间做出来。至于我本来希望用到的素材，断断续续都加在这个叫 [vj battle](https://www.youtube.com/playlist?list=PLjRoW7iOcBQKmc9VCfqCker4eXMUJ7zTM) 的 YouTube playlist 里。

还有现场看到 deimos 说他只想 V 自己喜欢的东西，立刻抛弃了所有 found media 的素养，开始摆烂单纯找自己最喜欢的二次元 IP 的内容，但因为只有几分钟，也只搜了一点点个位数的视频。然后现场发现 VPN 节点全挂了之后，紧急在 Bilibili 搜索的，还有那晚上的 YouTube 的紧急搜索记录。

工具
只用了快捷键：< > ，还有切换 tab 的键：⌃Tab。`,
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
