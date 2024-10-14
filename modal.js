const modal = document.querySelector('.backdrop');
const modalButtonOpen = document.querySelector('.modal-btn-open'); // Правильне оголошення змінної
const modalButtonClose = document.querySelector('.modal-btn-close'); // Правильне оголошення змінної

// Функція для перемикання класу "is-hidden"
const toggleModal = () => {
    modal.classList.toggle('visually-hidden');
};

// Відкриваємо модальне вікно при натисканні на кнопку "Order a call"
modalButtonOpen.addEventListener('click', toggleModal);

// Закриваємо модальне вікно при натисканні на кнопку "Close"
modalButtonClose.addEventListener('click', toggleModal);
