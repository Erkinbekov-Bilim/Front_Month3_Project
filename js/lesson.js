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


