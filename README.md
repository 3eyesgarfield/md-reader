# MD 朗读器

一个基于浏览器的 Markdown 文档朗读器，支持 Windows TTS 语音（默认 Huihui 中文语音），单文件即开即用。

![HTML5](https://img.shields.io/badge/HTML5-single%20file-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

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

1. 用 Edge 或 Chrome 浏览器打开 `index.html`
2. 点击「打开文件夹」选择包含 .md 文件的目录（支持图片），或「打开文件」选择单个 .md
3. 点击文中任意段落开始朗读

> 推荐使用 Edge 浏览器，对 Windows 系统语音支持最好。

## 技术栈

- **markdown-it** — Markdown 解析渲染
- **Web Speech API** — 调用系统 TTS 引擎
- **Pretext** ([@chenglou/pretext](https://github.com/chenglou/pretext)) — 文本测量与布局计算
- 纯前端，零构建，单 HTML 文件

## License

MIT
