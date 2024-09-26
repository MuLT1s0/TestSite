// Получаем элементы
const dropdown = document.getElementById('currencyDropdown1');
const trigger = document.querySelector('.block_input_1_1');
const selectedCurrencyText = document.getElementById('selectedCurrencyText1');
const selectedCurrencyImg = document.getElementById('selectedCurrencyImg1');

// Добавляем событие клика на элемент для открытия списка
trigger.addEventListener('click', function() {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Обрабатываем выбор элемента из выпадающего списка
const currencyItems1 = dropdown.querySelectorAll('li');

currencyItems1.forEach(function(item) {
    item.addEventListener('click', function() {
        const symbol = item.getAttribute('data-symbol'); // Получаем символ валюты
        const imgSrc = item.getAttribute('data-img'); // Получаем ссылку на изображение

        // Меняем текст и изображение
        selectedCurrencyText.textContent = symbol;
        selectedCurrencyImg.src = imgSrc;

        // Скрываем выпадающий список после выбора
        dropdown.style.display = 'none';
    });
});

// Закрытие списка при клике вне его области
document.addEventListener('click', function(event) {
    if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

// Находим элемент с классом block_input_2_1
// Находим необходимые элементы
const dropdown2 = document.getElementById('currencyDropdown2');
const dropdownTrigger = document.querySelector('.block_input_2_2_text');
const selectedCurrencyText2 = document.getElementById('selectedCurrencyText2');
const selectedCurrencyImg2 = document.getElementById('selectedCurrencyImg2');

// Добавляем событие клика на элемент для открытия списка
dropdownTrigger.addEventListener('click', function() {
    dropdown2.style.display = dropdown2.style.display === 'block' ? 'none' : 'block';
});

// Обрабатываем выбор элемента из выпадающего списка
const currencyItems2 = dropdown2.querySelectorAll('li');

currencyItems2.forEach(function(item) {
    item.addEventListener('click', function() {
        const symbol2 = item.getAttribute('data-symbol'); // Получаем символ валюты
        const imgSrc2 = item.getAttribute('data-img'); // Получаем ссылку на изображение

        // Меняем текст и изображение
        selectedCurrencyText2.textContent = symbol2;
        selectedCurrencyImg2.src = imgSrc2;

        // Скрываем выпадающий список после выбора
        dropdown2.style.display = 'none';
    });
});

// Закрытие списка при клике вне его области
document.addEventListener('click', function(event) {
    if (!dropdownTrigger.contains(event.target) && !dropdown2.contains(event.target)) {
        dropdown2.style.display = 'none';
    }
});
// Получаем элемент .rigth_block_text_1
const rigthBlockText1 = document.querySelector('.rigth_block_text_1');

// Добавляем событие клика
rigthBlockText1.addEventListener('click', function() {
    const img = rigthBlockText1.querySelector('img');
    
    // Добавляем класс для вращения
    img.style.transform = 'rotate(360deg)';
    
    // Убираем вращение после завершения анимации (при необходимости)
    setTimeout(function() {
        img.style.transform = 'rotate(0deg)';
    }, 500); // 500 мс — время анимации
});
const editableSpan = document.getElementById('selectedCurrencyText');
const maxLength = 18; // Задайте максимальное количество символов

editableSpan.addEventListener('input', function() {
    // Проверяем длину текста
    if (editableSpan.textContent.length > maxLength) {
        // Если длина превышает максимальную, обрезаем текст
        editableSpan.textContent = editableSpan.textContent.slice(0, maxLength);
        
        // Перемещаем курсор в конец текста
        placeCursorAtEnd(editableSpan);
    }
});

// Функция для перемещения курсора в конец
function placeCursorAtEnd(el) {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false); // Перемещаем в конец
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block"; // Показываем ответ
    } else {
        answerElement.style.display = "none"; // Скрываем ответ
    }
}