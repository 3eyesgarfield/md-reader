const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')
const fs = require('fs')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'MD 朗读器',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

ipcMain.handle('dialog:openFile', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'Markdown', extensions: ['md', 'markdown', 'txt'] }]
  })
  if (canceled) return null
  const filePath = filePaths[0]
  const content = fs.readFileSync(filePath, 'utf8')
  return { filePath, content, dir: path.dirname(filePath), name: path.basename(filePath) }
})

ipcMain.handle('fs:resolveImage', async (event, dir, rel) => {
  const abs = path.resolve(dir, rel)
  if (!fs.existsSync(abs)) return null
  const ext = path.extname(abs).slice(1).toLowerCase()
  const mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif', webp: 'image/webp', svg: 'image/svg+xml' }[ext] || 'image/png'
  const data = fs.readFileSync(abs)
  return `data:${mime};base64,${data.toString('base64')}`
})

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
