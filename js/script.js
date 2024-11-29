document.addEventListener("DOMContentLoaded", () => {
    const languageSelectors = document.querySelectorAll("._language-select");
    const languageLists = document.querySelectorAll("._language-list");

    languageSelectors.forEach((languageSelector, index) => {
        const languageList = languageLists[index];

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
    });

    // Закрытие при клике вне выпадающего меню
    document.addEventListener("click", (event) => {
        languageLists.forEach(languageList => {
            if (!event.target.closest("._language") && languageList.style.maxHeight !== "0px") {
                languageList.style.maxHeight = "0px";
            }
        });
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
document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("home");
    const slides = document.querySelectorAll(".home__slider-slide");
    const homeBgContainer = document.querySelector(".home__bg"); // Блок с изображениями
    const homeBgImages = homeBgContainer.querySelectorAll("img"); // Все изображения в контейнере

    // Функция для изменения фона
    const updateBackground = (slide) => {
        const background = slide.dataset.background; // Получаем путь из data-background
        if (background) {
            // Проверяем, есть ли текущее изображение с классом visible
            const visibleImg = homeBgContainer.querySelector(".visible");
            let newImg = homeBgContainer.querySelector("img:not(.visible)");

            // Если не существует скрытого изображения, создаем новое
            if (!newImg) {
                newImg = document.createElement("img");
                newImg.src = background;
                homeBgContainer.appendChild(newImg);
            }

            // Если существует видимое изображение, скрываем его
            if (visibleImg) {
                visibleImg.classList.remove("visible");
            }

            // Обновляем путь и показываем новое изображение после его загрузки
            newImg.src = background;
            newImg.onload = () => {
                newImg.classList.add("visible"); // Появляется новое изображение
            };
        }
    };

    // Инициализация Swiper
    const swiper = new Swiper(".swiper", {
        loop: true,
        speed: 600,
        navigation: {
            nextEl: ".home__slider-btn.next",
            prevEl: ".home__slider-btn.prev",
        },
        on: {
            slideChange: function () {
                const activeSlide = slides[this.realIndex];
                updateBackground(activeSlide);
            },
        },
    });

    updateBackground(slides[0]);
});
const menuIcon = document.querySelector('.menu__icon'),
body = document.querySelector('body'),
headerContainerBottom = document.querySelector('.header__container.bottom');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    body.classList.toggle('lock');
    headerContainerBottom.classList.toggle('open');
})
// Ждем загрузки DOM-дерева
document.addEventListener('DOMContentLoaded', () => {
    // Выбираем все элементы вкладок и их контент
    const tabs = document.querySelectorAll('.tabs__item');
    const tabsContent = document.querySelectorAll('.tabs__content-item');

    // Скрываем все вкладки, кроме активной
    function hideAllTabs() {
        tabsContent.forEach(content => {
            content.style.display = 'none';
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
    }

    // Показываем указанную вкладку
    function showTab(index) {
        tabsContent[index].style.display = 'block';
        tabs[index].classList.add('active');
    }

    // Инициализация: скрываем все табы и показываем первый
    hideAllTabs();

    // Добавляем обработчики кликов по вкладкам
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            hideAllTabs();
            showTab(index);
        });
    });
});
