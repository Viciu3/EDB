function changeContent(section) {
    const mainText = document.getElementById('mainText');
    switch (section) {
        case 'Главная':
            mainText.textContent = 'Вы находитесь на главной странице.';
            break;
        case 'О нас':
            mainText.textContent = 'Мы - команда разработчиков, создающих веб-приложения.';
            break;
        case 'Контакты':
            mainText.textContent = 'Свяжитесь с нами по электронной почте: example@example.com';
            break;
        default:
            mainText.textContent = 'Это пример основного текста. Нажмите на ссылки в меню, чтобы изменить этот текст.';
    }
}

function resetContent() {
    const mainText = document.getElementById('mainText');
    mainText.textContent = 'Это пример основного текста. Нажмите на ссылки в меню, чтобы изменить этот текст.';
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            this.textContent = '☀️'; 
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            this.textContent = '';
        }
    });
});
