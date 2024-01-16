const buttons = document.getElementsByTagName('button')

for (let i = 0; i< buttons.length; i++){
    buttons[i].addEventListener('click', (event) =>{
        document.body.style.background = event.target.innerText
        event.target.style.backgroundColor = event.target.innerText
    })
}