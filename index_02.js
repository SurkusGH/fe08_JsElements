const paragraph = document.createElement('p')
paragraph.textContent = "HelloWorld!"
paragraph.style.backgroundColor = "lightcoral"

document.body.append(paragraph)

const div = document.querySelector('div')

div.prepend(paragraph)