document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("languageSelector");
    const languageList = document.getElementById("languageList");

    // Переключение раскрытия списка
    languageSelector.addEventListener("click", () => {
        const isOpen = languageList.style.maxHeight && languageList.style.maxHeight !== "0px";

        if (isOpen) {
            // Закрыть список
            languageList.style.maxHeight = "0px";
        } else {
            // Открыть список: вычисляем высоту контента
            languageList.style.maxHeight = `${languageList.scrollHeight}px`;
        }
    });

    // Обработка выбора языка
    languageList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            const selectedLanguage = event.target.dataset.lang;
            languageSelector.textContent = selectedLanguage;

            // Закрыть список
            languageList.style.maxHeight = "0px";
        }
    });

    // Закрытие при клике вне выпадающего меню
    document.addEventListener("click", (event) => {
        if (!event.target.closest("._language")) {
            languageList.style.maxHeight = "0px";
        }
    });
});
// Получаем элементы
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton');

// Обработчик нажатия кнопки
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Ищем: ${query}`); // Замените на функцию поиска
    } else {
        alert('Введите запрос для поиска!');
    }
});

// Обработчик нажатия Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});