const paragraph = document.createElement('p')
paragraph.textContent = "HelloWorld!"
paragraph.style.backgroundColor = "lightcoral"

document.body.append(paragraph)

const div = document.querySelector('div')

div.prepend(paragraph)

// --- --- ---

const tempPara1 = document.createElement('p')
tempPara1.textContent = "0-99!"
paragraph.style.backgroundColor = "lightcoral"
document.body.prepend(tempPara1)

const inputField = document.querySelector("#number");

inputField.addEventListener('focus', (event) => {
    //event.target.style.background = 'lightblue';
    if(val < 99){
        document.body.prepend(tempPara1)
      }
    if(val > 99){
        document.body.append(tempPara1)
      }
    });

const val = document.querySelector("#number").Value;