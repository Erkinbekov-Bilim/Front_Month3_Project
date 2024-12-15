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

// STOP WATCH

const seconds = document.querySelector("#seconds")
const btn_start = document.querySelector("#start")
const btn_stop = document.querySelector("#stop")
const btn_reset = document.querySelector("#reset")

const timer = () => {
    let time = 0
    let interval;

    btn_start.onclick = () => {
        if (!interval){
            interval = setInterval(() => {
                time++
                seconds.innerHTML = time
            }, 1000)
        }
    }
    btn_stop.onclick = () => {
        clearInterval(interval)
    }
    btn_reset.onclick = () => {
        clearInterval(interval)
        time = 0
        seconds.innerHTML = time
    }
}

timer()

// CHARACTERS

const character_list = document.querySelector(".characters-list")

const getCharacters = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "../data/characters.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response)
        data.forEach((character) => {
            const character_item = document.createElement("div")
            character_item.setAttribute("class", "character-item")
            character_item.innerHTML = `
                <p class="character-name">${character.name}</p>
                <div class="character-photo">
                    <img src="${character.photo}" alt="">
                </div>
                <p class="character-desc">${character.desc}</p>
            `
            console.log(character_item)
        character_list.appendChild(character_item)
        })
    }
}

const getCountries = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "../data/any.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response)
        console.log(data)
    }
}

getCountries()
getCharacters()

