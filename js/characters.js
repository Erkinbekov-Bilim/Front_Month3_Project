const API_URL = "https://jsonplaceholder.typicode.com/posts";
const characterContainer = document.getElementById("characterContainer");

async function fetchCharacterData() {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        renderCharacters(data)
    } catch (error) {
        console.error("Произошла ошибка при загрузке данных:", error.message)
        characterContainer.innerHTML = `<p>Не удалось загрузить данные. Пожалуйста, попробуйте позже</p>`
    }
}

function renderCharacters(data) {
    data.forEach((item) => {
        const card = document.createElement("div")
        card.classList.add("character_block_item")

        card.innerHTML = `
            <img src="../images/Lamb.png" alt="Картинка">
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        `

        characterContainer.appendChild(card)
    })
}


fetchCharacterData()