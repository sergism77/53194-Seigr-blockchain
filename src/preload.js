const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  onBookmarkCreated: (callback) => ipcRenderer.on('bookmark-created', callback),
  onBookmarkRemoved: (callback) => ipcRenderer.on('bookmark-removed', callback),
  onBookmarkChanged: (callback) => ipcRenderer.on('bookmark-changed', callback),
  onBookmarkMoved: (callback) => ipcRenderer.on('bookmark-moved', callback),
  onBookmarkImported: (callback) => ipcRenderer.on('bookmark-imported', callback),
  onBookmarkExported: (callback) => ipcRenderer.on('bookmark-exported', callback),
  onBookmarkChildrenReordered: (callback) => ipcRenderer.on('bookmark-children-reordered', callback),
});
