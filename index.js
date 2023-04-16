// Write your code here!
const domChild = document.querySelector('#main')
domChild.remove()

const newHeader = document.createElement('h1')

newHeader.id = 'victory'
newHeader.textContent = 'Cedric Jones is the champion'
document.body.append(newHeader)