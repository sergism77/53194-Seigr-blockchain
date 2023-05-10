const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title)
})

ipcRenderer.on('bookmark-created', (event, bookmark) => {
    window.electronAPI.onBookmarkCreated(event, bookmark)
}
)

ipcRenderer.on('bookmark-removed', (event, bookmark) => {
    window.electronAPI.onBookmarkRemoved(event, bookmark)
}
)

ipcRenderer.on('bookmark-changed', (event, bookmark) => {
    window.electronAPI.onBookmarkChanged(event, bookmark)
}
)

ipcRenderer.on('bookmark-moved', (event, bookmark) => {
    window.electronAPI.onBookmarkMoved(event, bookmark)
}
)

ipcRenderer.on('bookmark-imported', (event, bookmark) => {
    window.electronAPI.onBookmarkImported(event, bookmark)
}   
)

ipcRenderer.on('bookmark-exported', (event, bookmark) => {
    window.electronAPI.onBookmarkExported(event, bookmark)
}
)

ipcRenderer.on('bookmark-children-reordered', (event, bookmark) => {
    window.electronAPI.onBookmarkChildrenReordered(event, bookmark)
}
)

