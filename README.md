# FOUND VIDEO VJ BATTLE ROYALE — Archive

Flat, pixel-style archive of the offline VJ battle (venue UI inspired by Tetris Battle).

## Run locally

```bash
cd vj-battle-site
python3 -m http.server 8080
```

Open http://localhost:8080

## Add diary text

Edit `data/rounds.js`:

- **12 rounds** — each object has `red` and `blue` with `name` and `diary`
- Round 12 uses the **Final Round** label in the HUD (like the venue screen)
- Left green panel = red diary; right green panel = blue diary

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Three-column layout (red panel · HUD · blue panel) |
| `styles.css` | Pixel borders, chroma green screens, Press Start 2P |
| `data/rounds.js` | All 24 VJ diaries |
| `app.js` | Round navigation, URL hash `#round-N` |

Arrow keys or ◀ ▶ change rounds.
