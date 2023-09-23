
const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-z\d]+@gmail\.com$/;

gmailCheck.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'True'
        gmailResult.style.color='green'
    }else{
        gmailResult.innerHTML = 'PLS try again not true!'
        gmailResult.style.color='red'
    }
}


const box = document.querySelector('.child_block')

let positionX = 0
let positionY = 0
const move = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        box.style.left = `${positionX}px`
    } else if (positionX >= 448 && positionY < 448) {
        positionY++
        box.style.top = `${positionY}px`
    } else if (positionX > 0 && positionY >= 448) {
        positionX--
        box.style.left = `${positionX}px`
    } else if (positionX <= 0 && positionY > 0) {
        positionY--
        box.style.top = `${positionY}px`
    }
    setTimeout(move, 0)
}

move()
