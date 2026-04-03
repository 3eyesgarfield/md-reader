const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronFS', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  resolveImage: (dir, rel) => ipcRenderer.invoke('fs:resolveImage', dir, rel)
})
