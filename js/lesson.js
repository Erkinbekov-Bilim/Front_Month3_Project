// PHONE BLOCK

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "Valid"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerHTML = "Invalid"
        phoneResult.style.color = "red"
    }
}

// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let currentTab = 0

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })

    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

const autoSlider = () => {
    currentTab++
    if (currentTab > tabContentBlocks.length - 1) {
        currentTab = 0
    }
    console.log(currentTab)
    hideTabContent()
    showTabContent(currentTab)

}

hideTabContent()
showTabContent()
setInterval(() => {
    autoSlider()
}, 3000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                currentTab = index
                showTabContent(index)
            }
        })
    }
}

// CONVERTER

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const converter = (element, targetElements) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '../data/converter.json')
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)
            for (const targetElement of targetElements) {

                console.log(targetElement.id)
                console.log(`Element value: ${element.value}`)
                console.log(`Target element value: ${targetElement.value} - ${targetElement.id}`)

                if (element.id === "som") {
                        targetElement.value = (element.value / data.usd).toFixed(2)
                        if (targetElement.id === "usd") {
                    }else if (targetElement.id === "eur") {
                        targetElement.value = (element.value / data.eur).toFixed(2)
                    }
                }

                if (element.id === "usd") {
                    if (targetElement.id === "som") {
                        targetElement.value = (element.value * data.usd).toFixed(2)
                    }else if (targetElement.id === "eur") {
                        targetElement.value = ((element.value * data.usd) / data.eur).toFixed(2)
                    }
                }


                if (element.id === "eur") {
                    if (targetElement.id === "som") {
                        targetElement.value = (element.value * data.eur).toFixed(2)
                    }else if (targetElement.id === "usd") {
                        targetElement.value = ((element.value * data.eur) / data.usd).toFixed(2)
                    }
                }

                if (element.value === '') targetElement.value = ''
            }
        }
    }
}

converter(somInput, [usdInput, eurInput])
converter(usdInput, [somInput, eurInput])
converter(eurInput, [somInput, usdInput])

// CARD SWITCHER

const cardBlock = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
let id = 1


const fetchDataTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            const {title, completed, id} = data
            cardBlock.innerHTML = `
                <p>${title}</p>
                <p>${completed}</p>
                <p>${id}</p>
            `
        })
        .catch((error) => console.log(error.message))
}

const updateIdForTodo = (btnType) => {
    if (btnType === 'next') {
        id = id === 200 ? 1 : id + 1;
    } else if (btnType === 'prev') {
        id = id === 1 ? 200 : id - 1;
    }
    fetchDataTodo(id)
}

const nextAndPrev = () => {
    btnNext.onclick = () => updateIdForTodo('next')
    btnPrev.onclick = () => updateIdForTodo('prev')
}

fetchDataTodo(id)
nextAndPrev()

// Fetch API

const fetchDataPosts = () => {
    console.log("Fetch запрос на https://jsonplaceholder.typicode.com/posts")
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error.message))
}


fetchDataPosts()