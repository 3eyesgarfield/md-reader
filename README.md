# MD Reader / MD 朗读器

A single-file, zero-build Markdown reader with built-in text-to-speech. Click any paragraph to start reading aloud — with karaoke-style word highlighting, bookmarks, and a warm dark mode.

一个单文件、零构建的 Markdown 朗读器，点击任意段落即可开始朗读，支持逐字高亮、书签和暖色暗色模式。

![HTML5](https://img.shields.io/badge/HTML5-single%20file-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## Features / 功能

| Feature | 功能 |
|---------|------|
| **Click to read** — click any paragraph to start TTS from that position; click elsewhere to jump | **点击即读** — 点击任意段落开始朗读，点其他位置自动切换 |
| **Karaoke highlight** — characters light up one by one as they are spoken | **逐字跟读高亮** — 朗读时文字逐字亮起（卡拉OK效果） |
| **Long document support** — text is split into sentences to avoid browser TTS cutoff | **长文连续朗读** — 按句拆分，逐段推进，避免 TTS 截断 |
| **Speed & font size** — rate 0.5x–10x, font 12–36px, takes effect immediately | **语速 / 字号调节** — 语速 0.5x~10x，字号 12~36px，实时生效 |
| **Voice selection** — auto-selects Windows Huihui voice; manually switchable | **语音选择** — 自动选择 Huihui 语音，可手动切换 |
| **Bookmarks** — add / jump / delete, persisted in localStorage | **书签系统** — 添加 / 跳转 / 删除，localStorage 持久化 |
| **Dark mode** — warm-toned dark theme, follows system preference or manual toggle | **暗色模式** — 黑底暖色调，跟随系统或手动切换 |
| **Image support** — resolves relative image paths when opening a folder | **图片支持** — 打开文件夹时自动解析相对路径图片 |
| **Drag & drop** — drop files or folders onto the window | **拖放支持** — 拖放文件或文件夹到窗口直接打开 |
| **Keyboard shortcuts** — Space pause/resume, Esc stop, Ctrl+B bookmark, Ctrl+/- font size | **键盘快捷键** — 空格暂停，Esc停止，Ctrl+B书签，Ctrl+/-字号 |

## Usage / 使用

1. Open `index.html` in **Edge** or **Chrome**.
   用 **Edge** 或 **Chrome** 打开 `index.html`。

2. Click **"打开文件夹"** to select a folder containing `.md` files (images supported), or **"打开文件"** for a single file.
   点击「打开文件夹」选择目录（支持图片），或「打开文件」选择单个 `.md`。

3. Click any paragraph to start reading.
   点击任意段落开始朗读。

> **Tip / 提示:** Edge has the best support for Windows system voices. / Edge 对 Windows 系统语音支持最好。

## Tech Stack / 技术栈

- **[markdown-it](https://github.com/markdown-it/markdown-it)** — Markdown parsing & rendering
- **[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)** — system TTS engine
- **[Pretext](https://github.com/chenglou/pretext)** (@chenglou/pretext) — text measurement & layout
- Pure frontend, zero build step, single HTML file / 纯前端，零构建，单文件

## License

MIT
