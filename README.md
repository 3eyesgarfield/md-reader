# MD Reader

A single-file, zero-build Markdown reader with built-in text-to-speech. Click any paragraph to start reading aloud — with karaoke-style word highlighting, bookmarks, and a warm dark mode.

![HTML5](https://img.shields.io/badge/HTML5-single%20file-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

## Features

- **Click to read** — click any paragraph to start TTS from that position; click elsewhere to jump
- **Karaoke highlight** — characters light up one by one as they are spoken
- **Long document support** — text is split into sentences to avoid browser TTS cutoff
- **Speed & font size** — rate 0.5x–10x, font 12–36px, takes effect immediately
- **Voice selection** — auto-selects Windows Huihui voice; manually switchable
- **Bookmarks** — add / jump / delete, persisted in localStorage
- **Dark mode** — warm-toned dark theme, follows system preference or manual toggle
- **Image support** — resolves relative image paths when opening a folder
- **Drag & drop** — drop files or folders onto the window
- **Keyboard shortcuts** — Space pause/resume, Esc stop, Ctrl+B bookmark, Ctrl+/- font size

## Usage

1. Open `index.html` in **Edge** or **Chrome**
2. Click **"打开文件夹"** to select a folder containing `.md` files (images supported), or **"打开文件"** for a single file
3. Click any paragraph to start reading

> **Tip:** Edge has the best support for Windows system voices.

## Tech Stack

- **[markdown-it](https://github.com/markdown-it/markdown-it)** — Markdown parsing & rendering
- **[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)** — system TTS engine
- **[Pretext](https://github.com/chenglou/pretext)** (@chenglou/pretext) — text measurement & layout
- Pure frontend, zero build step, single HTML file

## License

MIT

---

# MD 朗读器

一个单文件、零构建的 Markdown 朗读器，点击任意段落即可开始朗读，支持逐字高亮、书签和暖色暗色模式。

## 功能

- **点击即读** — 点击任意段落从该位置开始朗读，点击其他位置自动切换
- **逐字跟读高亮** — 开启后朗读时文字逐字亮起（卡拉OK效果）
- **长文连续朗读** — 自动按句拆分，逐段推进，避免浏览器 TTS 截断问题
- **语速 / 字号调节** — 语速 0.5x~10x，字号 12~36px，实时生效
- **语音选择** — 自动选择 Windows Huihui 语音，也可手动切换其他语音
- **书签系统** — 添加 / 跳转 / 删除书签，localStorage 持久化
- **暗色模式** — 黑底暖色调，跟随系统偏好或手动切换
- **图片支持** — 通过「打开文件夹」加载时自动解析 Markdown 中的相对路径图片
- **拖放支持** — 拖放文件或文件夹到窗口直接打开
- **键盘快捷键** — 空格暂停/恢复，Esc 停止，Ctrl+B 书签，Ctrl+/- 字号

## 使用

1. 用 **Edge** 或 **Chrome** 浏览器打开 `index.html`
2. 点击「打开文件夹」选择包含 .md 文件的目录（支持图片），或「打开文件」选择单个 .md
3. 点击文中任意段落开始朗读

> **提示：** 推荐使用 Edge 浏览器，对 Windows 系统语音支持最好。

## 技术栈

- **[markdown-it](https://github.com/markdown-it/markdown-it)** — Markdown 解析渲染
- **[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)** — 调用系统 TTS 引擎
- **[Pretext](https://github.com/chenglou/pretext)** (@chenglou/pretext) — 文本测量与布局计算
- 纯前端，零构建，单 HTML 文件

## 许可

MIT
