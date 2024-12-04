// GMAIL BLOCK

const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /^[a-z]\w+@gmail\.com$/

gmailButton.onclick = () => {
    console.log(gmailInput.value.match(regExp))
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "Valid"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "Invalid"
        gmailResult.style.color = "red"
    }
}

// MOVE BLOCK

const parentBlock = document.querySelector(".parent_block")
const childBlock = document.querySelector(".child_block")

const parentSize = parentBlock.clientWidth - childBlock.offsetWidth

let positionY = 0
let positionX = 0

const moveBlock = () => {
    if (positionX < parentSize && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if(positionX >= parentSize && positionY < parentSize){
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }else if(positionY <= parentSize && positionX !== 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if (positionX === 0 && positionY !== 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock);
    }
}

moveBlock()

