// Получаем элементы страницы
const nameInput = document.getElementById('nameInput');
const addNameBtn = document.getElementById('addName');
const nameList = document.getElementById('nameList');

// Создаем массив для хранения имен
let names = [];

// Функция для добавления имени
function addName() {
    const name = nameInput.value;
    names.push(name);
    names.sort();
    displayNames();
    nameInput.value = '';
}

// Функция для отображения имен
function displayNames() {
    nameList.innerHTML = '';
    names.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });
}

// Добавляем обработчик события клика на кнопку
addNameBtn.addEventListener('click', addName);


