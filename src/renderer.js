
const setButton = document.getElementById('set-button');
const titleInput = document.getElementById('title-input');
const urlInput = document.getElementById('url-input');
const bookmarksList = document.getElementById('bookmarks-list');

setButton.addEventListener('click', () => {
    const title = titleInput.value
    window.electronAPI.setTitle(title)
    const url = urlInput.value
    window.electronAPI.setURL(url)
  }
)

window.electronAPI.onBookmarkCreated((event, bookmark) => {
  const bookmarkElement = document.createElement('li')
  bookmarkElement.textContent = bookmark.title
  bookmarksList.appendChild(bookmarkElement)
}
)

window.electronAPI.onBookmarkRemoved((event, bookmark) => {
  const bookmarkElement = document.createElement('li')
  bookmarkElement.textContent = bookmark.title
  bookmarksList.removeChild(bookmarkElement)
}
)

window.electronAPI.onBookmarkChanged((event, bookmark) => {
  const bookmarkElement = document.createElement('li')
  bookmarkElement.textContent = bookmark.title
  bookmarksList.appendChild(bookmarkElement)
}
)

window.electronAPI.onBookmarkMoved((event, bookmark) => {
  const bookmarkElement = document.createElement('li')
  bookmarkElement.textContent = bookmark.title
  bookmarksList.appendChild(bookmarkElement)
}
)

window.electronAPI.onBookmarkImported((event, bookmark) => {
  const bookmarkElement = document.createElement('li')
  bookmarkElement.textContent = bookmark.title
  bookmarksList.appendChild(bookmarkElement)
}
)

window.electronAPI.onBookmarkExported((event, bookmark) => {
  const bookmarkElement = document.createElement('li')
  bookmarkElement.textContent = bookmark.title
  bookmarksList.appendChild(bookmarkElement)
}
)

window.electronAPI.onBookmarkChildrenReordered((event, bookmark) => {
  const bookmarkElement = document.createElement('li')
  bookmarkElement.textContent = bookmark.title
  bookmarksList.appendChild(bookmarkElement)
}
)

